import assert from 'node:assert/strict';
import { afterEach, beforeEach, test } from 'node:test';
import chatHandler from './chat.js';

let originalApiKey;
let originalModel;
let originalFetch;
let clientSequence = 0;

beforeEach(() => {
  originalApiKey = process.env.GEMINI_API_KEY;
  originalModel = process.env.GEMINI_MODEL;
  originalFetch = globalThis.fetch;
  process.env.GEMINI_API_KEY = 'test-only-key';
  process.env.GEMINI_MODEL = 'gemini-test';
});

afterEach(() => {
  if (originalApiKey === undefined) delete process.env.GEMINI_API_KEY;
  else process.env.GEMINI_API_KEY = originalApiKey;
  if (originalModel === undefined) delete process.env.GEMINI_MODEL;
  else process.env.GEMINI_MODEL = originalModel;
  globalThis.fetch = originalFetch;
});

const request = (method, body) => ({
  method,
  body,
  headers: { 'x-forwarded-for': `192.0.2.${++clientSequence}` },
});

const response = () => ({
  statusCode: 200,
  headers: {},
  body: '',
  status(code) {
    this.statusCode = code;
    return this;
  },
  setHeader(name, value) {
    this.headers[name] = value;
  },
  end(body) {
    this.body = body;
  },
  json() {
    return JSON.parse(this.body);
  },
});

const geminiResponse = (status, body) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

test('reports whether the server-side API key is configured', async () => {
  delete process.env.GEMINI_API_KEY;
  const result = response();

  await chatHandler(request('GET'), result);

  assert.equal(result.statusCode, 200);
  assert.deepEqual(result.json(), { configured: false });
});

test('returns a setup message without contacting the provider when the key is missing', async () => {
  delete process.env.GEMINI_API_KEY;
  globalThis.fetch = () => assert.fail('Gemini must not be called without a key');
  const result = response();

  await chatHandler(request('POST', { messages: [{ role: 'user', text: 'Hello' }] }), result);

  assert.equal(result.statusCode, 503);
  assert.equal(result.json().code, 'AI_NOT_CONFIGURED');
});

test('sends profile instructions and the API key only to Gemini', async () => {
  let providerRequest;
  globalThis.fetch = async (url, options) => {
    providerRequest = { url: String(url), options };
    return geminiResponse(200, {
      candidates: [{ content: { parts: [{ text: 'Pruthvi studied computer science.' }] } }],
    });
  };
  const result = response();

  await chatHandler(
    request('POST', { messages: [{ role: 'user', text: 'Tell me about his education.' }] }),
    result,
  );

  assert.equal(result.statusCode, 200);
  assert.deepEqual(result.json(), { answer: 'Pruthvi studied computer science.' });
  assert.match(providerRequest.url, /gemini-test:generateContent$/);
  assert.doesNotMatch(providerRequest.url, /test-only-key/);
  assert.equal(providerRequest.options.headers['x-goog-api-key'], 'test-only-key');

  const providerBody = JSON.parse(providerRequest.options.body);
  assert.match(providerBody.systemInstruction.parts[0].text, /CGPA 7\.2/);
  assert.equal(providerBody.contents[0].parts[0].text, 'Tell me about his education.');
});

test('rejects invalid conversation input before calling Gemini', async () => {
  globalThis.fetch = () => assert.fail('Gemini must not receive an empty conversation');
  const result = response();

  await chatHandler(request('POST', { messages: [] }), result);

  assert.equal(result.statusCode, 400);
  assert.match(result.json().error, /at least one message/i);
});

test('does not expose provider credential errors to the visitor', async () => {
  globalThis.fetch = async () => geminiResponse(403, { error: { message: 'invalid test-only-key' } });
  const result = response();

  await chatHandler(request('POST', { messages: [{ role: 'user', text: 'Hello' }] }), result);

  assert.equal(result.statusCode, 503);
  assert.match(result.json().error, /server credentials/i);
  assert.doesNotMatch(result.body, /test-only-key/);
});

test('reports temporary provider overload without leaking provider details', async () => {
  const requestedModels = [];
  globalThis.fetch = async (url) => {
    requestedModels.push(String(url).match(/models\/([^:]+):/)?.[1]);
    return geminiResponse(503, { error: { message: 'Temporary provider overload.' } });
  };
  const result = response();

  await chatHandler(request('POST', { messages: [{ role: 'user', text: 'Hello' }] }), result);

  assert.equal(result.statusCode, 503);
  assert.match(result.json().error, /temporarily experiencing high demand/i);
  assert.deepEqual(requestedModels, [
    'gemini-test',
    'gemini-flash-lite-latest',
    'gemini-3.5-flash-lite',
    'gemini-3.1-flash-lite',
  ]);
});

test('continues to the next fallback when the first fallback is overloaded', async () => {
  const requestedModels = [];
  globalThis.fetch = async (url) => {
    requestedModels.push(String(url).match(/models\/([^:]+):/)?.[1]);
    if (requestedModels.length < 3) {
      return geminiResponse(503, { error: { message: 'Temporary provider overload.' } });
    }
    return geminiResponse(200, {
      candidates: [{ content: { parts: [{ text: 'Pruthvi is a software developer.' }] } }],
    });
  };
  const result = response();

  await chatHandler(request('POST', { messages: [{ role: 'user', text: 'Who is Pruthvi?' }] }), result);

  assert.equal(result.statusCode, 200);
  assert.deepEqual(result.json(), { answer: 'Pruthvi is a software developer.' });
  assert.deepEqual(requestedModels, [
    'gemini-test',
    'gemini-flash-lite-latest',
    'gemini-3.5-flash-lite',
  ]);
});

test('limits repeated requests from the same client', async () => {
  globalThis.fetch = async () =>
    geminiResponse(200, { candidates: [{ content: { parts: [{ text: 'Answer' }] } }] });
  let result;

  for (let index = 0; index < 21; index += 1) {
    result = response();
    await chatHandler(
      { ...request('POST', { messages: [{ role: 'user', text: 'Hello' }] }), headers: { 'x-forwarded-for': '192.0.2.250' } },
      result,
    );
  }

  assert.equal(result.statusCode, 429);
  assert.ok(result.headers['Retry-After']);
});

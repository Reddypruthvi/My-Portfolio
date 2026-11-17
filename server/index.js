import 'dotenv/config';
import express from 'express';
import chatHandler from '../api/chat.js';

const app = express();
const port = Number(process.env.PORT) || 3001;

app.disable('x-powered-by');
app.use(express.json({ limit: '128kb' }));
app.get('/', (request, response) => {
  response.redirect('http://localhost:5174/');
});
app.all('/api/chat', (request, response, next) => {
  Promise.resolve(chatHandler(request, response)).catch(next);
});

app.use((error, request, response, next) => {
  if (response.headersSent) {
    return next(error);
  }

  if (error?.type === 'entity.too.large') {
    return response.status(413).json({ error: 'The request is too large. Keep messages under 2,000 characters.' });
  }

  if (error instanceof SyntaxError && 'body' in error) {
    return response.status(400).json({ error: 'The request body must be valid JSON.' });
  }

  console.error('Chat API request failed.', error);
  return response.status(500).json({ error: 'The chat service encountered an unexpected error.' });
});

app.listen(port, '127.0.0.1', () => {
  console.log(`Chat API listening on http://127.0.0.1:${port}`);
});

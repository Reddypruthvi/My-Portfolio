import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const viteCli = fileURLToPath(new URL('../node_modules/vite/bin/vite.js', import.meta.url));
const children = [
  spawn(process.execPath, ['server/index.js'], { stdio: 'inherit' }),
  spawn(process.execPath, [viteCli], { stdio: 'inherit' }),
];

let stopping = false;

const stopChildren = (signal, exitCode) => {
  if (stopping) return;
  stopping = true;
  process.exitCode = exitCode;

  for (const child of children) {
    if (child.exitCode === null && child.signalCode === null) child.kill(signal);
  }
};

for (const child of children) {
  child.on('error', (error) => {
    console.error('Unable to start a development server.', error);
    stopChildren('SIGTERM', 1);
  });

  child.on('exit', (code, signal) => {
    if (!stopping) stopChildren('SIGTERM', code ?? (signal ? 1 : 0));
  });
}

process.on('SIGINT', () => stopChildren('SIGTERM', 0));
process.on('SIGTERM', () => stopChildren('SIGTERM', 0));

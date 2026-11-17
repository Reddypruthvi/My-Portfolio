# Pruthvi Reddy K — Developer Portfolio

A responsive React and Vite portfolio showcasing selected projects, technical skills, education, internship experience, certifications, and contact details.

## Requirements

- Node.js 20.19+ (or 22.12+)
- npm

## Run locally

```bash
npm install
npm run dev
```

This starts both the Vite website and the Express chat API. Vite prints the local website URL after startup; the API listens on port `3001` and Vite proxies `/api` requests to it.
The website uses port `5174` and exits with an error if that port is already occupied. Stop any previous development session with `Ctrl+C` before starting another one. Stopping either server also stops the other, including on Windows.
Open the website at `http://localhost:5174/`. Opening the API root at `http://localhost:3001/` redirects to the website.

### Configure the AI assistant

1. Copy `.env.example` to `.env`.
2. Create an API key in [Google AI Studio](https://aistudio.google.com/apikey) and add it as `GEMINI_API_KEY` in `.env`.
3. Optionally set `GEMINI_MODEL` to a model available to your API key. The default is `gemini-3.8-flash`; on temporary overload, the API tries `gemini-flash-lite-latest`, `gemini-3.5-flash-lite`, and `gemini-3.1-flash-lite` in order.
4. Restart `npm run dev`.

The key is read only by the Node.js server. Do not rename it to a `VITE_` variable, add the real value to source control, or put it in browser code. Without a configured key, the chat widget displays setup guidance instead of simulated AI answers.

The chat API is in `api/chat.js`; `server/index.js` runs the same handler through Express locally, and Vercel deploys it as a serverless function.

## Build and preview

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Deploy to Vercel

1. Import the repository in [Vercel](https://vercel.com/new).
2. Select **Vite** as the framework preset.
3. Use `npm run build` as the build command and `dist` as the output directory.
4. Add `GEMINI_API_KEY` in the Vercel project’s **Settings → Environment Variables**. Optionally add `GEMINI_MODEL` if you want to select a different supported Gemini model.
5. Redeploy after setting environment variables. Without the API key, the portfolio still loads and the chat widget explains that AI setup is required.

## Project content

- Update project descriptions and repository links in `src/data/projects.js`.
- Update skill groups in `src/data/skills.js`.
- Update education and internship information in `src/data/experience.js`.
- The existing résumé and portrait are stored in `public/`.
- Project illustrations are local SVG assets in `public/`.

Only verified repository links are used for matching projects. Add a project-specific GitHub URL or live demo when one is available.

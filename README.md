# ilink Gemini

ilink is a privacy-first family connection app built with Google Gemini. It turns small voice or text moments into warm, factual memory drafts, then keeps a human review step between AI organization and family sharing.

## Hackathon demo

- **Family** — choose an approved moment and create a simulated private update for Mom or Dad.
- **Record** — make a real, locally playable microphone recording, explicitly transcribe it with Gemini, or use the reliable text path.
- **Me** — review My Day, edit Gemini drafts, and keep clear private/approved/shared states.
- **Xiaolian** — a Gemini product companion that cannot inspect private records unless the current draft is explicitly provided.
- **ilink Glasses** — an interactive product concept based on intentional one-frame capture, never continuous recording.

## Gemini architecture

The browser never receives the API key. `/api/transcribe`, `/api/summarize`, and `/api/assistant` call the stable `gemini-3.5-flash` model from the Node.js server using the Google GenAI SDK. Every interaction sets `store: false`. Google AI Studio injects `GEMINI_API_KEY` as a server-side secret during preview and Cloud Run deployment.

The recorder uses `getUserMedia` and `MediaRecorder` only after a user click. The original recording stays in the browser for playback. Before explicit transcription, the browser decodes it and produces a 16 kHz mono PCM WAV; the server accepts only that bounded WAV body and never writes audio to disk.

## Local development

```bash
npm install
GEMINI_API_KEY=your_key npm run dev
```

Without a key, the app remains fully navigable and uses clearly labeled deterministic fallback content. The deployed hackathon version is expected to use AI Studio's server-side Gemini secret.

## Production

```bash
npm run build
npm start
```

The server honors the Cloud Run `PORT` environment variable and serves the Vite production build.

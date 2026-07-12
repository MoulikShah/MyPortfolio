# moulik.shah — Portfolio

Personal site of Moulik Shah, Machine Learning Engineer at TikTok (Local
Services · US Transaction Team). Live at
[moulik-shah-myportfolio.vercel.app](https://moulik-shah-myportfolio.vercel.app).

## What's inside

- **Next.js 15 (App Router) + Tailwind CSS**, dark content-first design,
  ~113KB first-load JS.
- **ML Playground — models run in the visitor's browser** via
  [transformers.js](https://github.com/huggingface/transformers.js) (quantized
  ONNX, WASM):
  - **Rank** — a MiniLM-L6-v2 embedding model re-ranks my projects and roles
    against any query, with live latency readouts. A tiny end-to-end
    retrieval/ranking pipeline.
  - **Ask me** — RAG-style chat: questions are embedded locally and answered
    via retrieval over a knowledge base. Nothing leaves the browser.
  - **Sentiment** — DistilBERT SST-2 headline classification (lazy-loaded).

## Develop

```bash
npm install
npm run dev
```

Models download from the Hugging Face CDN on first use and are cached by the
browser. No API keys required.

### Optional: LLM-powered chat answers

Set `ANTHROPIC_API_KEY` in the Vercel project to have the "Ask me" tab rewrite
retrieved answers conversationally via `app/api/chat`. Without it, the chat
falls back to pure client-side retrieval (the default).

## Content

All copy lives in `lib/content.js` (sections) and `lib/knowledge.js` (chat
knowledge base) — edit those to update the site.

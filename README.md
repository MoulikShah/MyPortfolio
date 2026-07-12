# moulik.shah — Portfolio

Personal site of Moulik Shah, Machine Learning Engineer at TikTok (Local
Services · US Transaction Team). Live at
[moulikshah.vercel.app](https://moulikshah.vercel.app).

## What's inside

- **Next.js 15 (App Router) + Tailwind CSS**, dark content-first design,
  ~113KB first-load JS.
- **Rank Lab** — an interactive toy recommender: a recall pool of local
  services, a linear ranker over the visitor's clicks/dwell/hide signals, and
  a UCB exploration bonus, with the feed re-ranking live as you use it.
- **"Ask my AI" chat that runs in the visitor's browser** via
  [transformers.js](https://github.com/huggingface/transformers.js): a
  quantized MiniLM-L6-v2 embedding model (ONNX, WASM) embeds each question
  and answers via retrieval over a knowledge base. Nothing leaves the
  browser. An optional turbo mode (WebGPU) downloads a small instruct LLM
  through [WebLLM](https://github.com/mlc-ai/web-llm) that generates the
  answers on-device, streamed.

## Develop

```bash
npm install
npm run dev
```

The model downloads from the Hugging Face CDN on first use and is cached by
the browser. No API keys required.

### Optional: LLM-powered chat answers

Set `ANTHROPIC_API_KEY` in the Vercel project to have the "Ask me" tab rewrite
retrieved answers conversationally via `app/api/chat`. Without it, the chat
falls back to pure client-side retrieval (the default).

## Content

All copy lives in `lib/content.js` (sections) and `lib/knowledge.js` (chat
knowledge base) — edit those to update the site.

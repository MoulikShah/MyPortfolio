// Optional LLM upgrade for the "Ask me" tab. The chat works fully client-side
// without this; if ANTHROPIC_API_KEY is set in the Vercel project, answers get
// rewritten conversationally by Claude, grounded in the retrieved context.
//
// The client sends knowledge-base entry IDs, not content: context is resolved
// server-side from lib/knowledge.js, so this endpoint can never be steered
// into completing arbitrary attacker-supplied text on the owner's API key.

import { knowledge } from "@/lib/knowledge";

const knowledgeById = new Map(knowledge.map((entry) => [entry.id, entry]));

export async function POST(request) {
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
        return Response.json({ available: false }, { status: 503 });
    }

    let body;
    try {
        body = await request.json();
    } catch {
        return Response.json({ error: "Bad request" }, { status: 400 });
    }

    const { question, ids } = body ?? {};
    if (
        typeof question !== "string" ||
        !question.trim() ||
        question.length > 500 ||
        !Array.isArray(ids) ||
        ids.length === 0 ||
        ids.length > 3 ||
        !ids.every((id) => typeof id === "string" && knowledgeById.has(id))
    ) {
        return Response.json({ error: "Bad request" }, { status: 400 });
    }

    const context = ids.map((id) => knowledgeById.get(id).answer);

    const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
            "x-api-key": apiKey,
            "anthropic-version": "2023-06-01",
            "content-type": "application/json",
        },
        body: JSON.stringify({
            model: "claude-haiku-4-5-20251001",
            max_tokens: 300,
            system:
                "You answer visitor questions on Moulik Shah's portfolio site, speaking about him in the third person. Answer ONLY from the provided context. If the context doesn't cover the question, say so briefly and suggest asking about his work, projects, or education. Be warm, concise (2-4 sentences), and never invent facts.",
            messages: [
                {
                    role: "user",
                    content: `Context:\n${context.join("\n\n")}\n\nVisitor question: ${question.trim()}`,
                },
            ],
        }),
    });

    if (!res.ok) {
        return Response.json({ error: "Upstream error" }, { status: 502 });
    }

    const data = await res.json();
    return Response.json({ text: data.content?.[0]?.text ?? null });
}

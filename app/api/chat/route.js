// Optional LLM upgrade for the "Ask me" tab. The chat works fully client-side
// without this; if ANTHROPIC_API_KEY is set in the Vercel project, answers get
// rewritten conversationally by Claude, grounded in the retrieved context.

export async function POST(request) {
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
        return Response.json({ available: false }, { status: 503 });
    }

    const { question, context } = await request.json();
    if (
        typeof question !== "string" ||
        !question.trim() ||
        question.length > 500 ||
        !Array.isArray(context)
    ) {
        return Response.json({ error: "Bad request" }, { status: 400 });
    }

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
                    content: `Context:\n${context
                        .slice(0, 3)
                        .join("\n\n")}\n\nVisitor question: ${question.trim()}`,
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

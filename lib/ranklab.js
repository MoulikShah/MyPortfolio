// The Rank Lab's candidate pool and scoring model. A deliberately small,
// readable version of the loop a production recommender runs: a recall pool,
// a linear ranker over user-affinity features, and an exploration bonus.

export const categories = ["Food", "Travel", "Beauty", "Leisure", "Wellness"];

export const pool = [
    { id: "ramen", emoji: "🍜", name: "Late-night ramen bar", category: "Food", prior: 0.72 },
    { id: "omakase", emoji: "🍣", name: "12-seat omakase counter", category: "Food", prior: 0.65 },
    { id: "taqueria", emoji: "🌮", name: "Birria taqueria truck", category: "Food", prior: 0.78 },
    { id: "espresso", emoji: "☕", name: "Third-wave espresso lab", category: "Food", prior: 0.58 },
    { id: "cabin", emoji: "🏔️", name: "A-frame cabin, Tahoe", category: "Travel", prior: 0.69 },
    { id: "onsen", emoji: "♨️", name: "Hot-spring ryokan stay", category: "Travel", prior: 0.61 },
    { id: "roadtrip", emoji: "🚐", name: "Highway 1 camper rental", category: "Travel", prior: 0.55 },
    { id: "fade", emoji: "💈", name: "Walk-in fade specialist", category: "Beauty", prior: 0.52 },
    { id: "facial", emoji: "✨", name: "Hydrafacial studio", category: "Beauty", prior: 0.48 },
    { id: "nails", emoji: "💅", name: "Chrome nail art bar", category: "Beauty", prior: 0.5 },
    { id: "karaoke", emoji: "🎤", name: "Private karaoke rooms", category: "Leisure", prior: 0.63 },
    { id: "climbing", emoji: "🧗", name: "Bouldering gym day pass", category: "Leisure", prior: 0.57 },
    { id: "arcade", emoji: "🕹️", name: "Retro arcade + pinball", category: "Leisure", prior: 0.54 },
    { id: "massage", emoji: "💆", name: "Deep-tissue massage", category: "Wellness", prior: 0.6 },
    { id: "sauna", emoji: "🧖", name: "Nordic sauna + cold plunge", category: "Wellness", prior: 0.56 },
];

export function initialUserState() {
    return {
        affinity: Object.fromEntries(categories.map((category) => [category, 0])),
        impressions: Object.fromEntries(pool.map((item) => [item.id, 0])),
        totalImpressions: 0,
        clicks: 0,
    };
}

// Signal strengths: a click teaches the model more than a dwell; hiding an
// item is a strong negative. Affinities move toward [-1, 1] asymptotically.
const LEARNING_RATE = { click: 0.45, dwell: 0.2, hide: -0.5 };

export function applySignal(user, item, kind) {
    const affinity = { ...user.affinity };
    const rate = LEARNING_RATE[kind];
    const current = affinity[item.category];
    affinity[item.category] =
        rate > 0 ? current + rate * (1 - current) : Math.max(-1, current + rate * (1 + current));
    return {
        ...user,
        affinity,
        clicks: kind === "click" ? user.clicks + 1 : user.clicks,
    };
}

export function recordImpressions(user, items) {
    const impressions = { ...user.impressions };
    for (const item of items) impressions[item.id] += 1;
    return {
        ...user,
        impressions,
        totalImpressions: user.totalImpressions + items.length,
    };
}

// score = affinity match + popularity prior + UCB-style exploration bonus.
// `explore` (0..1) shifts weight between exploiting affinity and exploring
// under-shown items, like tuning an epsilon in a production ranker.
export function rank(user, explore) {
    const scored = pool.map((item) => {
        const affinityTerm = user.affinity[item.category];
        const priorTerm = item.prior;
        const ucb = Math.sqrt(
            Math.log(user.totalImpressions + 2) / (user.impressions[item.id] + 1)
        );
        const exploreTerm = Math.min(ucb / 2, 1);
        const score =
            (1 - explore) * (0.65 * affinityTerm + 0.35 * priorTerm) +
            explore * exploreTerm;
        return {
            ...item,
            score,
            parts: { affinity: affinityTerm, prior: priorTerm, explore: exploreTerm },
        };
    });
    return scored.sort((a, b) => b.score - a.score);
}

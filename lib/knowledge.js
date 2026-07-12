// Knowledge base for the "Ask me" chat. Each entry is embedded client-side by
// MiniLM; the best-matching entries ground the answer shown to the visitor.
// `text` is what gets embedded, `answer` is what the visitor reads, and
// `question` is the follow-up chip that points at this entry.

export const knowledge = [
    {
        id: "greeting",
        text: "hi hello hey greetings who are you what is this chat introduce yourself help",
        question: "Who am I talking to?",
        answer:
            "Hey! I'm a little retrieval bot running in your browser, answering questions about Moulik Shah, an ML engineer at TikTok. Ask me about his work, projects, education, or how to get in touch.",
    },
    {
        id: "current-role",
        text: "current job role position what does Moulik do now work at TikTok machine learning engineer recommendation",
        question: "What does Moulik do at TikTok?",
        answer:
            "Moulik is a Machine Learning Engineer at TikTok in San Jose, on the Local Services US Transaction Team (since June 2026). He works across the full recommendation stack (recall, pre-ranking, ranking, re-ranking) plus CVR modeling for US local services like accommodations, travel, food, leisure, and beauty.",
    },
    {
        id: "recsys-work",
        text: "recommendation system ranking recall CVR conversion model A/B testing evaluation TikTok how does his recommendation work",
        question: "How does his recsys work run day to day?",
        answer:
            "At TikTok he owns models end to end: creating training instances, running feature backfills, building scoring algorithms, and shipping to production. His models use signals from user sessions captured at exposure time, plus click-through and dwell-time behavior. He validates everything with offline evaluation and online A/B experiments, measured in orders and GMV.",
    },
    {
        id: "scale-ai",
        text: "Scale AI generative AI internship LLM agents prompting tool calling MCP",
        question: "What did he do at Scale AI?",
        answer:
            "At Scale AI (Fall 2025, San Francisco) Moulik was a Generative AI Engineer Intern. He improved LLM reasoning on math and programming tasks and built agentic workflows with MCP-style tool calling: models that retrieve context, validate code against test harnesses, and self-correct through action-observation loops.",
    },
    {
        id: "vlab-search",
        text: "V-Lab search engine AI powered search agents query understanding rewriting expansion retrieval re-ranking information retrieval",
        question: "Tell me about the V-Lab search system",
        answer:
            "At NYU's V-Lab, Moulik rebuilt the site's search into an AI-powered system. Multiple agents split the work a real search engine does: understanding the query, rewriting and expanding it, retrieving candidates, and re-ranking them, so researchers actually land on the right volatility model pages.",
    },
    {
        id: "vlab",
        text: "NYU V-Lab volatility laboratory research finance FinBERT GARCH trading sentiment quantitative",
        question: "What was his V-Lab research about?",
        answer:
            "Moulik spent 2025 as an ML Research Assistant at NYU's Volatility Laboratory (V-Lab). Besides making V-Lab search AI-powered with a multi-agent pipeline, he built an LLM-powered sentiment trading system with FinBERT (+15% risk-signal accuracy alongside SRISK/GARCH models) and real-time volatility forecasting pipelines using GARCH-LSTM and Elasticsearch.",
    },
    {
        id: "cornspring",
        text: "Cornspring data engineering ETL AWS Azure Terraform CI/CD pipelines internship",
        question: "What about Cornspring?",
        answer:
            "At Cornspring (Summer 2025, NYC) Moulik built cloud ETL pipelines on AWS and Azure ingesting tens of millions of equity-price records daily, engineered market features that lifted model performance by 60%, and set up Terraform IaC + CI/CD that cut deployments from hours to minutes.",
    },
    {
        id: "miko",
        text: "MIKO data scientist robot India reinforcement learning NLP RAG chatbot recommendation retention",
        question: "What did he build at MIKO?",
        answer:
            "At MIKO in Mumbai (2023-2024), the kids' companion-robot company, Moulik built an RL-based game recommendation engine (+25% retention), led multilingual NLP pipelines (+30% accuracy), and improved open-domain QA with DPR and RAG, cutting unanswered queries by 15%.",
    },
    {
        id: "early-career",
        text: "early career internships Sykes Ray quantitative trading Bipolar Factory Myraa Ares Data first jobs before MIKO",
        question: "What did his early internships look like?",
        answer:
            "Before MIKO, Moulik did a run of internships in India: quantitative research at Sykes & Ray Equities (Monte Carlo trading models, +12% portfolio performance), ML at Bipolar Factory (YOLOv4 object detection served on AWS), deep learning at Myraa Technologies, and software engineering at Ares Data (Spring Boot/Node microservices with Redis).",
    },
    {
        id: "education",
        text: "education degree university NYU masters bachelors school study GPA coursework",
        question: "Where did he study?",
        answer:
            "Moulik holds an M.S. in Computer Engineering from NYU (2024–2026), with coursework in ML, NLP, Deep Learning, MLOps, Computer Vision, and Web Search Engines. His B.Tech is in Electronics & Telecommunication from the University of Mumbai (2019–2023).",
    },
    {
        id: "biometric-project",
        text: "biometric verification project MLOps Triton ONNX face recognition deployment inference distributed training",
        question: "What's his strongest MLOps project?",
        answer:
            "His flagship project is a distributed biometric verification pipeline: ArcFace/iResNet-50 trained with DDP and mixed precision, tracked in MLflow, deployed as quantized ONNX on Triton Inference Server with OpenVINO, plus canary rollouts and drift-triggered retraining. Production MLOps end to end.",
    },
    {
        id: "llm-projects",
        text: "LLM projects prompt tuning LoRA T5 fine-tuning soft prompts sentiment trader FinBERT",
        question: "Any interesting LLM projects?",
        answer:
            "Two standout ML projects: (1) cross-domain soft prompt tuning on T5-large (90%+ sentiment accuracy while training under 1% of parameters), and (2) an LLM-powered financial sentiment trader using FinBERT over Point72's CSP streaming library that beat traditional baselines with a 0.84 Sharpe ratio.",
    },
    {
        id: "skills",
        text: "skills technologies tools languages frameworks what can he use tech stack",
        question: "What's his tech stack?",
        answer:
            "Core stack: Python, C++, SQL, and Java; PyTorch, TensorFlow, Hugging Face, and LangChain for ML; Spark, Airflow, Elasticsearch, and Snowflake for data; Docker, Kubernetes, Terraform, AWS/GCP/Azure for infra; MLflow, Triton, and ONNX for MLOps. Plus React/Next.js for the web (he built this site).",
    },
    {
        id: "this-site",
        text: "this website portfolio how built what technology in-browser chatbot how does this chat work private",
        question: "How does this chat actually work?",
        answer:
            "This site is Next.js + Tailwind, and this chat runs entirely in your browser: a quantized MiniLM embedding model (~23MB ONNX, via transformers.js) embeds your question and retrieves the best answer from a small knowledge base. No server, no API keys, and your questions never leave your device.",
    },
    {
        id: "contact",
        text: "contact email reach hire linkedin github get in touch connect",
        question: "How do I reach him?",
        answer:
            "You can reach Moulik at mps10088@nyu.edu, on LinkedIn at linkedin.com/in/moulik-shah, or on GitHub at github.com/MoulikShah. He's based in San Jose, CA.",
    },
    {
        id: "achievements",
        text: "achievements awards competition winner drone finalist math company",
        question: "Any achievements he's proud of?",
        answer:
            "Two he's proud of: leading an autonomous healthcare-delivery drone (Python + OpenCV) to the national finals of the Indian Institute of Project Technology competition, and winning The Math Company's Triathon assessment outright, which came with a direct job offer.",
    },
    {
        id: "background-story",
        text: "background story journey who is Moulik about him personal from Mumbai India sports",
        question: "What's his story?",
        answer:
            "Moulik grew up in Mumbai, studied engineering at the University of Mumbai, worked as a Data Scientist at MIKO, then moved to New York for his M.S. at NYU. After internships at Scale AI and Cornspring and research at NYU's V-Lab, he joined TikTok as an MLE. Earlier in life he represented his school at the national level in throwball.",
    },
    {
        id: "looking-for",
        text: "hiring available open to opportunities job looking for collaborate",
        question: "Is he open to connecting?",
        answer:
            "Moulik is happily building recommender systems at TikTok, but he's always open to connecting, especially about recsys, LLM agents, and ML infrastructure. The fastest way to reach him is mps10088@nyu.edu or LinkedIn.",
    },
];

export const suggestedQuestions = [
    "What does Moulik do at TikTok?",
    "Tell me about the V-Lab search system",
    "What's his strongest MLOps project?",
    "How does this chat actually work?",
];

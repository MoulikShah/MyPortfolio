// Knowledge base for the "Ask me" tab. Each entry is embedded client-side by
// MiniLM; the best-matching entries ground the answer shown to the visitor.
// `text` is what gets embedded; `answer` is what the visitor reads.

export const knowledge = [
    {
        id: "current-role",
        text: "current job role position what does Moulik do now work at TikTok machine learning engineer recommendation",
        answer:
            "Moulik is a Machine Learning Engineer at TikTok in San Jose, on the Local Services US Transaction Team (since June 2026). He works across the full recommendation stack (recall, pre-ranking, ranking, re-ranking) plus CVR modeling for US local services like accommodations, travel, food, leisure, and beauty.",
    },
    {
        id: "recsys-work",
        text: "recommendation system ranking recall CVR conversion model A/B testing evaluation TikTok how does his recommendation work",
        answer:
            "At TikTok he owns models end to end: creating training instances, running feature backfills, building scoring algorithms, and shipping to production. His models use signals from user sessions captured at exposure time, plus click-through and dwell-time behavior. He validates everything with offline evaluation and online A/B experiments, measured in orders and GMV.",
    },
    {
        id: "scale-ai",
        text: "Scale AI generative AI internship LLM agents prompting tool calling MCP",
        answer:
            "At Scale AI (Fall 2025, San Francisco) Moulik was a Generative AI Engineer Intern. He improved LLM reasoning on math and programming tasks and built agentic workflows with MCP-style tool calling: models that retrieve context, validate code against test harnesses, and self-correct through action-observation loops.",
    },
    {
        id: "vlab",
        text: "NYU V-Lab volatility laboratory research finance FinBERT GARCH trading sentiment quantitative",
        answer:
            "Moulik spent 2025 as an ML Research Assistant at NYU's Volatility Laboratory (V-Lab). He built an LLM-powered sentiment trading system with FinBERT (+15% risk-signal accuracy alongside SRISK/GARCH models) and real-time volatility forecasting pipelines using GARCH-LSTM and Elasticsearch.",
    },
    {
        id: "cornspring",
        text: "Cornspring data engineering ETL AWS Azure Terraform CI/CD pipelines internship",
        answer:
            "At Cornspring (Summer 2025, NYC) Moulik built cloud ETL pipelines on AWS and Azure ingesting tens of millions of equity-price records daily, engineered market features that lifted model performance by 60%, and set up Terraform IaC + CI/CD that cut deployments from hours to minutes.",
    },
    {
        id: "miko",
        text: "MIKO data scientist robot India reinforcement learning NLP RAG chatbot recommendation retention",
        answer:
            "At MIKO in Mumbai (2023-2024), the kids' companion-robot company, Moulik built an RL-based game recommendation engine (+25% retention), led multilingual NLP pipelines (+30% accuracy), and improved open-domain QA with DPR and RAG, cutting unanswered queries by 15%.",
    },
    {
        id: "education",
        text: "education degree university NYU masters bachelors school study GPA coursework",
        answer:
            "Moulik holds an M.S. in Computer Engineering from NYU (2024–2026), with coursework in ML, NLP, Deep Learning, MLOps, Computer Vision, and Web Search Engines. His B.Tech is in Electronics & Telecommunication from the University of Mumbai (2019–2023).",
    },
    {
        id: "biometric-project",
        text: "biometric verification project MLOps Triton ONNX face recognition deployment inference distributed training",
        answer:
            "His flagship project is a distributed biometric verification pipeline: ArcFace/iResNet-50 trained with DDP and mixed precision, tracked in MLflow, deployed as quantized ONNX on Triton Inference Server with OpenVINO, plus canary rollouts and drift-triggered retraining. Production MLOps end to end.",
    },
    {
        id: "llm-projects",
        text: "LLM projects prompt tuning LoRA T5 fine-tuning soft prompts sentiment trader FinBERT",
        answer:
            "Two standout ML projects: (1) cross-domain soft prompt tuning on T5-large (90%+ sentiment accuracy while training under 1% of parameters), and (2) an LLM-powered financial sentiment trader using FinBERT over Point72's CSP streaming library that beat traditional baselines with a 0.84 Sharpe ratio.",
    },
    {
        id: "skills",
        text: "skills technologies tools languages frameworks what can he use tech stack",
        answer:
            "Core stack: Python, C++, SQL, and Java; PyTorch, TensorFlow, Hugging Face, and LangChain for ML; Spark, Airflow, Elasticsearch, and Snowflake for data; Docker, Kubernetes, Terraform, AWS/GCP/Azure for infra; MLflow, Triton, and ONNX for MLOps. Plus React/Next.js for the web (he built this site).",
    },
    {
        id: "this-site",
        text: "this website portfolio how built what technology in-browser inference demo playground",
        answer:
            "This site is Next.js + Tailwind, and the ML Playground runs entirely in your browser: a quantized MiniLM embedding model (~23MB ONNX) does the ranking and powers this chat via retrieval over a knowledge base. No server, no API keys, and your questions never leave your device.",
    },
    {
        id: "contact",
        text: "contact email reach hire linkedin github get in touch connect",
        answer:
            "You can reach Moulik at mps10088@nyu.edu, on LinkedIn at linkedin.com/in/moulik-shah, or on GitHub at github.com/MoulikShah. He's based in San Jose, CA.",
    },
    {
        id: "achievements",
        text: "achievements awards competition winner drone finalist math company",
        answer:
            "Two he's proud of: leading an autonomous healthcare-delivery drone (Python + OpenCV) to the national finals of the Indian Institute of Project Technology competition, and winning The Math Company's Triathon assessment outright, which came with a direct job offer.",
    },
    {
        id: "background-story",
        text: "background story journey who is Moulik about him personal from Mumbai India sports",
        answer:
            "Moulik grew up in Mumbai, studied engineering at the University of Mumbai, worked as a Data Scientist at MIKO, then moved to New York for his M.S. at NYU. After internships at Scale AI and Cornspring and research at NYU's V-Lab, he joined TikTok as an MLE. Earlier in life he represented his school at the national level in throwball.",
    },
    {
        id: "looking-for",
        text: "hiring available open to opportunities job looking for collaborate",
        answer:
            "Moulik is happily building recommender systems at TikTok, but he's always open to connecting, especially about recsys, LLM agents, and ML infrastructure. The fastest way to reach him is mps10088@nyu.edu or LinkedIn.",
    },
];

export const suggestedQuestions = [
    "What does Moulik do at TikTok?",
    "What's his strongest MLOps project?",
    "What's his tech stack?",
    "How was this site built?",
];

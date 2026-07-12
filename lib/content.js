export const site = {
    name: "Moulik Shah",
    title: "Moulik Shah — Machine Learning Engineer",
    description:
        "Machine Learning Engineer at TikTok working on large-scale recommendation systems: recall, ranking, and CVR modeling for Local Services. Previously Scale AI and NYU.",
    url: "https://moulik-shah-myportfolio.vercel.app",
    email: "mps10088@nyu.edu",
    location: "San Jose, CA",
    resume: "/document/Moulik_Shah_Resume.pdf",
    socials: {
        github: "https://github.com/MoulikShah",
        linkedin: "https://www.linkedin.com/in/moulik-shah",
        huggingface: "https://huggingface.co/Moulik0712",
    },
};

export const hero = {
    kicker: "Machine Learning Engineer · TikTok",
    heading: "I build recommendation systems that decide what millions of people see next.",
    sub: "Recall, ranking, and conversion modeling for TikTok Local Services. Before that: LLM agents at Scale AI, volatility forecasting at NYU's V-Lab, and an M.S. in Computer Engineering from NYU.",
};

export const experience = [
    {
        company: "TikTok",
        url: "https://www.tiktok.com",
        role: "Machine Learning Engineer",
        team: "Local Services · US Transaction Team",
        location: "San Jose, CA",
        date: "June 2026 — Present",
        current: true,
        points: [
            "Work across the full recommendation stack (recall, pre-ranking, ranking, re-ranking) for US Local Services (accommodations, travel, food, leisure, beauty).",
            "Build and iterate on CVR models, engineering signals from user sessions captured at exposure time along with click-through and dwell-time behavior.",
            "Own the model lifecycle end to end: spinning up training instances, running feature backfills, and shipping scoring algorithms to production.",
            "Run offline evaluations and online A/B experiments, tying model wins directly to orders and GMV growth.",
        ],
        tags: ["Recommendation", "Ranking", "CVR", "A/B Testing"],
    },
    {
        company: "Scale AI",
        url: "https://scale.com",
        role: "Generative AI Engineer Intern",
        team: "Generative AI",
        location: "San Francisco, CA",
        date: "Sep 2025 — Dec 2025",
        points: [
            "Improved LLM reasoning on math and programming tasks through structured prompting, debugging model-generated Python/C++, and iterative feedback loops.",
            "Built agentic workflows with MCP-style tool calling: models that retrieve context, validate code against test harnesses, and self-correct via action-observation loops.",
        ],
        tags: ["LLMs", "Agents", "MCP", "Evals"],
    },
    {
        company: "NYU — Volatility Laboratory (V-Lab)",
        url: "https://vlab.stern.nyu.edu",
        role: "Machine Learning Research Assistant",
        team: "Stern Volatility Lab",
        location: "New York, NY",
        date: "Jan 2025 — Dec 2025",
        points: [
            "Built an LLM-powered sentiment trading system on FinBERT and financial news, improving risk-signal accuracy by 15% alongside SRISK and GARCH market forecasts.",
            "Designed a scalable backtesting framework and real-time volatility pipelines with GARCH-LSTM and Elasticsearch, cutting data retrieval time by 25%.",
        ],
        tags: ["FinBERT", "GARCH-LSTM", "Elasticsearch"],
    },
    {
        company: "Cornspring",
        url: "https://www.cornspring.com",
        role: "Data Engineering Intern",
        team: "Software Engineering & DevOps",
        location: "New York, NY",
        date: "Jun 2025 — Aug 2025",
        points: [
            "Built cloud ETL pipelines on AWS and Azure ingesting tens of millions of equity-price records daily; engineered features (moving averages, RSI, volatility) that lifted model performance by 60%.",
            "Shipped CloudWatch/EventBridge alerting, Terraform infrastructure-as-code, and CI/CD that cut deployment cycles from hours to minutes.",
        ],
        tags: ["AWS", "Terraform", "ETL", "SageMaker"],
    },
    {
        company: "MIKO",
        url: "https://www.miko.ai",
        role: "Data Scientist",
        team: "AI Research & Development",
        location: "Mumbai, India",
        date: "Jul 2023 — Aug 2024",
        points: [
            "Engineered a reinforcement-learning recommendation engine for skill-based games in PyTorch, validated with A/B testing, which drove a 25% lift in user retention.",
            "Led multilingual NLP pipelines with embeddings and NER for speech recognition (+30% accuracy) and improved open-domain QA with DPR + RAG (−15% unanswered queries).",
            "Integrated LLMs with anomaly detection to flag suspicious interactions and protect platform integrity.",
        ],
        tags: ["PyTorch", "RecSys", "RAG", "NLP"],
    },
];

export const earlierRoles = [
    {
        company: "Sykes & Ray Equities",
        role: "Quantitative Research Intern",
        date: "2022",
        note: "Monte Carlo trading models, options strategy automation, +12% portfolio performance.",
    },
    {
        company: "Bipolar Factory",
        role: "Machine Learning Intern",
        date: "2022",
        note: "YOLOv4/SSD object detection at 89% accuracy, served via Flask on AWS.",
    },
    {
        company: "Myraa Technologies",
        role: "Deep Learning Intern",
        date: "2022",
        note: "CNN and Random Forest models for HR analytics and disaster-tweet classification.",
    },
    {
        company: "Ares Data",
        role: "Software Engineering Intern",
        date: "2021 — 2022",
        note: "Spring Boot / Node.js microservices with Redis caching, 25% faster retrieval.",
    },
];

export const projects = [
    {
        name: "Distributed Biometric Verification Pipeline",
        flagship: true,
        description:
            "Production-grade face-verification system: ArcFace/iResNet-50 trained with DDP + AMP, tracked in MLflow, and served as quantized ONNX on Triton Inference Server with OpenVINO for high-throughput, low-latency inference. Canary rollouts and drift-triggered retraining keep it reliable in production.",
        tags: ["PyTorch", "Triton", "ONNX", "MLflow", "Kubernetes", "Terraform"],
        date: "2025",
    },
    {
        name: "Cross-Domain Soft Prompt Tuning",
        description:
            "Cross-domain adaptation for low-parameter LLMs via prefix tuning on T5-large: 90%+ sentiment accuracy across domains while training under 1% of parameters, with LoRA for efficient few-shot fine-tuning.",
        tags: ["LLMs", "LoRA", "Prompt Tuning", "T5"],
        date: "2024",
    },
    {
        name: "LLM-Powered Financial Sentiment Trader",
        description:
            "Real-time NER + sentiment on financial news with DistilBERT/FinBERT over Point72's CSP streaming library. The sentiment strategy beat traditional baselines (Sharpe 0.84) on a 20GB global news dataset.",
        tags: ["FinBERT", "Streaming", "Trading", "NER"],
        date: "2024",
    },
    {
        name: "Smart Interactive Marketing",
        description:
            "CNN fashion-product classifier on DeepFashion (800k images, 88% accuracy) wired into a React app for real-time recommendations, +30% product engagement.",
        tags: ["CNN", "TensorFlow", "React"],
        date: "2023",
    },
    {
        name: "Speech Emotion Recognition",
        description:
            "CNN speech-emotion classifier (82% accuracy) built on MFCC features and Wav2Vec2, served in real time through Gradio and a Flask API.",
        tags: ["Wav2Vec2", "Signal Processing", "Gradio"],
        date: "2023",
    },
    {
        name: "Smart Mart",
        description:
            "Smart shopping basket: YOLOv3 product identification connected to an e-commerce platform, plus a behavior-clustering recommendation system.",
        tags: ["YOLO", "Flask", "RecSys"],
        date: "2022",
    },
];

export const education = [
    {
        school: "New York University",
        url: "https://engineering.nyu.edu",
        degree: "M.S. Computer Engineering",
        date: "2024 — 2026",
        note: "Machine Learning · NLP · Deep Learning · MLOps · Computer Vision · Web Search Engines",
    },
    {
        school: "University of Mumbai",
        url: "https://www.djsce.ac.in/",
        degree: "B.Tech, Electronics & Telecommunication Engineering",
        date: "2019 — 2023",
        note: "Data Structures & Algorithms · Neural Networks · Big Data Analytics · Image Processing",
    },
];

export const achievements = [
    {
        title: "Finalist — Indian Institute of Project Technology",
        note: "Led an autonomous healthcare-delivery drone system (Python + OpenCV) to the national finals.",
    },
    {
        title: "Winner — The Math Company Triathon",
        note: "Won the competitive analytics assessment outright, earning a direct job offer.",
    },
];

export const skills = [
    {
        group: "Languages",
        items: ["Python", "C++", "C", "Java", "SQL", "R", "JavaScript"],
    },
    {
        group: "ML / AI",
        items: [
            "PyTorch",
            "TensorFlow",
            "Scikit-learn",
            "Hugging Face",
            "LangChain",
            "OpenCV",
            "MLflow",
            "Triton",
            "ONNX",
        ],
    },
    {
        group: "Data & Infra",
        items: [
            "Spark",
            "Hadoop",
            "Airflow",
            "Elasticsearch",
            "Snowflake",
            "Redshift",
            "Docker",
            "Kubernetes",
            "Terraform",
            "AWS",
            "GCP",
            "Azure",
        ],
    },
    {
        group: "Web & Backend",
        items: ["React", "Next.js", "Node.js", "Flask", "Django", "Spring Boot"],
    },
];

export const navLinks = [
    { id: "playground", title: "Playground" },
    { id: "experience", title: "Experience" },
    { id: "projects", title: "Projects" },
    { id: "education", title: "Education" },
    { id: "skills", title: "Skills" },
    { id: "contact", title: "Contact" },
];

import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";


const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/MoulikShah",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/moulik-shah",
  },
  // {
  //   id: "x",
  //   icon: <XIcon />,
  //   link: "https://twitter.com/Shivam_1_Sharma",
  // },
  // {
  //   id: "instagram",
  //   icon: <InstagramIcon />,
  //   link: "https://www.instagram.com/_.shivam._.here._",
  // },
];

const heroTexts = [
  "Data Scientist",
  500,
  "Software Engineer",
  500,
  "GenAI Engineer",
  500,
  "AI/ML Engineer",
  500,
  "Analyst",
  500,
  "Product Manager",
  500,
];
const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "extracurricular",
    title: "Extracurricular",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Scientist",
    icon: <FullStackIcon />,
  },
  {
    title: "Software Engineer",
    icon: <FrontendIcon />,
  },
  {
    title: "Analyst",
    icon: <FreelancerIcon />,
  },
  {
    title: "AI/ML Engineer",
    icon: <LeaderShipIcon />,
  },
  {
    title: "Product Manager",
    icon: <ProblemSolvingIcon />,
  },
];

const experiences = [
  {
    title: "Data Scientist",
    company_name: "Miko",
    icon: "/assets/company/miko-logo.jpeg",
    company_url: "https://www.miko.ai/",
    iconBg: "#E6DEDD",
    date: "July 2023 - August 2024",
    points: [
      "Engineered a recommendation engine for skill-based games using reinforcement learning with PyTorch, employing unsupervised clustering techniques to segment users by engagement behavior. Conducted A/B testing to validate model efficacy, achieving a 25% increase in user retention and reinforcing community safety through behavior-based recommendations.",
      "Led research and development of multilingual NLP pipelines, integrating embedding models and Named Entity Recognition (NER) for enhanced speech recognition. Refined pipeline through iterative experimentation with various embeddings, achieving a 30% accuracy boost and supporting inclusive, language-diverse interactions.",
      "Enhanced Open-Domain Question Answering system with Dense Passage Retrieval (DPR) and Retrieval-Augmented Generation (RAG) models, achieving a 15% reduction in unanswered queries through iterative model configuration and validation, supporting real-time NLP applications in multilingual environments.",
      "Integrated LLMs and advanced embedding techniques into chatbot functions, applying risk control and anomaly detection methods to analyze user behavior and uphold platform integrity by flagging suspicious interactions.",
      "Built a high-performing song search engine and personalized recommendation system using the iHeart Music dataset, using feature detection to analyze song attributes and elevate user experience in web-based applications, supporting platform safety by prioritizing user-friendly interactions.",
    ],
  },
  {
    title: "Quantitative Research Intern",
    company_name: "Sykes and Ray Equities",
    icon: "/assets/company/sre-logo.jpeg",
    company_url: "https://www.sre.co.in/",
    iconBg: "#E6DEDD",
    date: "October 2022 - December 2022",
    points: [
      "Collaborated on developing and tested trading models using Monte Carlo simulations and Alpha Hedging, conducting experimental backtesting and leveraging graph theory to analyze patterns—achieving a 12% boost in portfolio performance.",
      "Automated portfolio strategies like Straddle and Iron Condor with Pandas and analyzed NSE datasets through SQL and APIs, achieving 85% model accuracy through advanced feature engineering and risk assessment strategies.",
    ],
  },
  {
    title: "Machine Learning Intern",
    company_name: "Bipolar Factory",
    icon: "/assets/company/bipolar-factory-logo.jpeg",
    company_url: "https://www.bipolarfactory.com/",
    iconBg: "#E6DEDD",
    date: "January 2022 - March 2022",
    points: [
      "Architected end-to-end deep learning projects with CNNs in TensorFlow, optimizing model accuracy through iterative tuning and deploying on AWS for real-time, scalable applications.",
      "Developed YOLOv4 and SSD object detection models (89% accuracy), deploying via Flask APIs and validating for real-world performance, collaborating on frontend integration with React.js and Node.js",
    ],
  },
  {
    title: "Deep Learning Engineer Intern",
    company_name: "Myraa Technologies",
    icon: "/assets/company/myraa-logo.jpeg",
    company_url: "https://www.myraatechnologies.com/",
    iconBg: "#E6DEDD",
    date: "January 2022 - February 2022",
    points: [
      "Fine-tuned Random Forest and CNN models for HR analytics, resulting in a 92% increase in decision-making efficiency through enhanced data-driven insights.",
      "Implemented a Binary Classifier using TensorFlow to detect disaster tweets with 91% accuracy, integrating React.js to create an intuitive UI for data visualization",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "Ares Data Private Limited",
    icon: "/assets/company/ares-data-logo.png",
    company_url: "https://www.aresdataltd.com/",
    iconBg: "#E6DEDD",
    date: "December 2021 - January 2022",
    points: [
      "Designed a scalable microservices architecture with Spring Boot and Node.js, boosting data retrieval speed by 25% via Redis caching and load balancing. Integrated MongoDB to enhance backend performance in real-time, data-intensive applications.",
      "Implemented an automated testing suite with JUnit and Mocha, increasing code coverage by 30% and optimizing the QA. Set up CI/CD pipelines in Jenkins, accelerating deployments and ensuring consistent quality.",
    ],
  },
  {
    title: "Corporate Relations Strategist",
    company_name: "AIESEC",
    icon: "/assets/company/aiesec-logo.png",
    company_url: "https://www.aiesec.org/",
    iconBg: "#E6DEDD",
    date: "February 2020 - January 2021",
    points: [
      "Managed B2B lead generation, sales, and client relations for AIESEC’s Incoming Global Talent program, collaborating with MNCs and SMEs to drive successful internship placements.",
      "Established customer-centric standards and efficient communication channels to enhance client experience, improve team productivity, and ensure alignment with stakeholder needs for seamless project execution",
    ],
  },
];

const extracurriculars = [
  {
    title: "Head of Coding Department",
    company_name: "DJS Phoenix",
    icon: "/assets/company/djs-phoenix-logo.jpeg",
    company_url: "https://www.linkedin.com/company/djs-phoenix/",
    iconBg: "#E6DEDD",
    date: "March 2020 - November 2021",
    points: [
      "• Created an autonomous drone system with the help of Python and a OpenCV for my team’s Immediate Aid Assistance Drone (IAAD) which helped in healthcare services and became the finalist in the Indian Institute of Project Technology Competition.",
      "• Managed a team of 10 developers in designing and implementing an autonomous object tracking system, overseeing coding tasks and ensuring project milestones were met efficiently.",
    ],
  },
  {
    title: "Marketing Associate",
    company_name: "DJS Beats",
    icon: "/assets/company/djs-beats-logo.jpeg",
    company_url: "https://www.linkedin.com/company/djs-beats/",
    iconBg: "#E6DEDD",
    date: "January 2020 - August 2020",
    points: [
      "• Initiated contact with different companies to seek sponsorship for the events organised by our Student Forum.",
      "• Coordinated data tracking, events, interviews, and managed finances, including budget monitoring.",
    ],
  },
];


// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Cross-Domain Adaptation through Soft Prompt Tuning in Low-Parameter Language Models",
    description:
    "•Optimized cross-domain adaptation for low-parameter language models using soft prompt tuning (e.g. prefix tuning) on T5-large, achieving over 90% accuracy in sentiment analysis across multiple domains with less than 1% of model parameters trained.\n\n" +
    "•Improved few-shot learning in resource-constrained models through techniques like LoRA and soft prompting, enhancing sentiment analysis accuracy while reducing the need for extensive model fine-tuning",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pandas",
        color: "green-text-gradient",
      },
      {
        name: "LoRA",
        color: "pink-text-gradient",
      },  
      {
        name: "LLMs",
        color: "orange-text-gradient",
      },
      {
        name: "Prompt Tuning",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/cross-domain-adaptation.webp",
    // source_code_link: "https://github.com/Shivam-Sharma-1/FigPro",
    // deployed_link: "https://fig-pro-github.vercel.app",
  },
  {
    name: "LLM-Powered Financial News Sentiment Trader",
    description:
    "•Created LLMSentiments Trader with DistilBERT and FinBERT for real-time NER and sentiment analysis on financial news, supporting investment decisions for hedge funds. Integrated Point72’s CSP library, improving stream processing efficiency.\n\n" +
    "•Implemented a sentiment-based trading strategy that yielded a 0.21% return with a sharpe ratio of 0.84, outperforming traditional methods by analyzing a 20GB dataset of global news to track sentiment-driven stock movements.",
    
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pandas",
        color: "green-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "pink-text-gradient",
      },
      {
        name: "BERT",
        color: "orange-text-gradient",
      },
      {
        name: "UNIX",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/financial-news-trader.webp",
    // source_code_link:
      // "https://github.com/Shivam-Sharma-1/Facility-Management-System",
    // deployed_link:
      // "https://github.com/Shivam-Sharma-1/Facility-Management-System?tab=readme-ov-file#demo",
  },
  {
    name: "Smart Interactive Marketing",
    description:
      "• Built a CNN model for fashion product classification using the DeepFashion Dataset (800k images), achieving 88% accuracy and integrating it into a React.js application for real-time recommendations, which boosted product engagement by 30%.\n\n" +
      "• Created an Object Detection System leveraging ResNet50 and VGG-16, achieving 62% accuracy and enhancing product recommendations by 20% through effective image analysis and feature extraction.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "green-text-gradient",
      },
      {
        name: "React.js",
        color: "pink-text-gradient",
      },
      {
        name: "CNN",
        color: "orange-text-gradient",
      },
      {
        name: "Node.js",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/smart-interactive-marketing.webp",
    // source_code_link: "https://github.com/GDSC-MVJCE/gdscmvjce-website.git",
    // deployed_link: "https://gdscmvjce.vercel.app/",
  },
  {
    name: "Smart Mart",
    description:
      "• Developed a Smart Shopping Basket using YOLOv3 for accurate product identification 81% accuracy, connecting it with an e-commerce web platform via React.js and Flask to streamline user interaction.\n\n" +
      "• Deployed a real-time recommendation system that clustered user behavior and preferences, enhancing shopping experiences by 30% through personalized product suggestions tailored to user segments.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "green-text-gradient",
      },
      {
        name: "YOLOv4",
        color: "pink-text-gradient",
      },
      {
        name: "Flask",
        color: "orange-text-gradient",
      },
      {
        name: "React.js",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/smart-mart.webp",
    // source_code_link: "https://github.com/Shivam-Sharma-1/Netflix-Clone.git",
    // deployed_link: "https://netflix-clone12345.vercel.app",
  },
  {
    name: "Speech Emotion Recognition System",
    description:
      "• Engineered a CNN-based speech-emotion recognition system with 82% accuracy using TensorFlow, MFCC features, and Wav2Vec2 from HuggingFace, classifying emotions like happiness, sadness, anger, and fear from speech.\n\n" +
      "• Implemented a real-time emotion classification via Gradio app and Flask API, increasing user engagement by 18%, leveraging advanced signal processing techniques like MFCCs and Fourier Transform.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "green-text-gradient",
      },
      {
        name: "Gradio",
        color: "pink-text-gradient",
      },
      {
        name: "Flask",
        color: "yellow-text-gradient",
      },
      {
        name: "Hugging Face",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/projects/speech-emotions-recognition.webp",
    // source_code_link: "https://github.com/Shivam-Sharma-1/Van-Life.git",
    // deployed_link: "https://myvanlife.netlify.app",
  },
  // {
  // 	name: "Spooky-Run",
  // 	description:
  // 		"Spooky Run is a web based 2D arcade style game that allows players to play as a lost dog finding its way back home through a spooky forest. The game is built using vanilla JavaScript and utilizes HTML5 and the 'canvas' element to render graphics and handle user input.",
  // 	tags: [
  // 		{
  // 			name: "html5",
  // 			color: "blue-text-gradient"
  // 		},
  // 		{
  // 			name: "css3",
  // 			color: "green-text-gradient"
  // 		},
  // 		{
  // 			name: "javascript",
  // 			color: "pink-text-gradient"
  // 		}
  // 	],
  // 	image: "/assets/projects/spooky-run.png",
  // 	source_code_link: "https://github.com/Shivam-Sharma-1/Spooky-Run.git",
  // 	deployed_link: "https://shivam-sharma-1.github.io/Spooky-Run"
  // }
];

const technologies = {
  Languages: [
    {
      name: "C",
      icon: "/assets/tech/c.svg",
      link: "https://en.cppreference.com/w/c",
    },
    {
      name: "C++",
      icon: "/assets/tech/cpp.svg",
      link: "https://www.cplusplus.com/",
    },
    {
      name: "C#",
      icon: "/assets/tech/csharp.svg",
      link: "https://docs.microsoft.com/en-us/dotnet/csharp/",
    },
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "Java",
      icon: "/assets/tech/java.svg",
      link: "https://www.java.com/en/",
    },
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
    {
      name: "R",
      icon: "/assets/tech/r.svg",
      link: "https://www.r-project.org/",
    },
    {
      name: "SQL",
      icon: "/assets/tech/sql.png",
      link: "https://www.microsoft.com/en-us/sql-server/sql-server-2022",
    },
    {
      name: "Julia",
      icon: "/assets/tech/julia.png",
      link: "https://julialang.org/",
    },
    {
      name: "Kotlin",
      icon: "/assets/tech/kotlin.svg",
      link: "https://kotlinlang.org/",
    },
    {
      name: "Swift",
      icon: "/assets/tech/swift.svg",
      link: "https://www.swift.org/",
    },
    {
      name: "Go",
      icon: "/assets/tech/go.svg",
      link: "https://go.dev/",
    },
  
  ],
  Frameworks: [
    {
      name: "TensorFlow",
      icon: "/assets/tech/tensorflow.svg",
      link: "https://www.tensorflow.org/",
    },
    {
      name: "PyTorch",
      icon: "/assets/tech/pytorch.svg",
      link: "https://pytorch.org/",
    },
    {
      name: "Keras",
      icon: "/assets/tech/keras.png",
      link: "https://keras.io/",
    },
    {
      name: "OpenCV",
      icon: "/assets/tech/opencv.svg",
      link: "https://opencv.org/",
    },
    {
      name: "YOLOv4",
      icon: "/assets/tech/yolo.png",
      link: "https://github.com/AlexeyAB/darknet",
    },
    {
      name: "Django",
      icon: "/assets/tech/django.svg",
      link: "https://www.djangoproject.com/",
    },
    {
      name: "Flask",
      icon: "/assets/tech/flask.svg",
      link: "https://flask.palletsprojects.com/",
    },
    {
      name: "FastAPI",
      icon: "/assets/tech/fastapi.jpg",
      link: "https://fastapi.tiangolo.com/",
    },
    {
      name: "NumPy",
      icon: "/assets/tech/numpy.svg",
      link: "https://numpy.org/",
    },
    {
      name: "Pandas",
      icon: "/assets/tech/pandas.svg",
      link: "https://pandas.pydata.org/",
    },
    {
      name: "Matplotlib",
      icon: "/assets/tech/matplotlib.png",
      link: "https://matplotlib.org/",
    },
    {
      name: "Seaborn",
      icon: "/assets/tech/seaborn.png",
      link: "https://seaborn.pydata.org/",
    },  
    {
      name: "Scikit-Learn",
      icon: "/assets/tech/scikit-learn.png",
      link: "https://scikit-learn.org/",
    },
    {
      name: "SciPy",
      icon: "/assets/tech/scipy.svg",
      link: "https://scipy.org/",
    },
    {
      name: "Gradio",
      icon: "/assets/tech/gradio.png",
      link: "https://www.gradio.app/",
    },
    {
      name: "Streamlit",
      icon: "/assets/tech/streamlit.svg",
      link: "https://streamlit.io/",
    },
    {
      name: "Roboflow",
      icon: "/assets/tech/roboflow.png",
      link: "https://roboflow.com/",
    },
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.svg",
      link: "https://expressjs.com/",
    },
    {
      name: "Next.js",
      icon: "/assets/tech/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "Angular",
      icon: "/assets/tech/angular.jpg",
      link: "https://angular.io/",
    },
    {
      name: "Three.js",
      icon: "/assets/tech/threejs.svg",
      link: "https://threejs.org/",
    },
    {
      name: "Tailwind CSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Bootstrap",
      icon: "/assets/tech/bootstrap.svg",
      link: "https://getbootstrap.com/",
    },
    {
      name: "Spring Boot",
      icon: "/assets/tech/spring-boot.svg",
      link: "https://spring.io/projects/spring-boot",
    },
    {
      name: "Flutter",
      icon: "/assets/tech/flutter.svg",
      link: "https://flutter.dev/",
    },
    {
      name: "Langchain",
      icon: "/assets/tech/langchain.jpg",
      link: "https://www.langchain.com/",
    },
    {
      name: "Hadoop",
      icon: "/assets/tech/hadoop.svg",
      link: "https://hadoop.apache.org/",
    },
    {
      name: "Redux",
      icon: "/assets/tech/redux.png",
      link: "https://redux.js.org/",
    },
  ],
  Cloud: [
    {
      name: "AWS",
      icon: "/assets/tech/aws.svg",
      link: "https://aws.amazon.com/",
    },
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
    {
      name: "Kubernetes",
      icon: "/assets/tech/kubernetes.svg",
      link: "https://kubernetes.io/",
    },
    {
      name: "Jenkins",
      icon: "/assets/tech/jenkins.svg",
      link: "https://www.jenkins.io/",
    },
    {
      name: "Spark",
      icon: "/assets/tech/spark.svg",
      link: "https://spark.apache.org/",
    },
    {
      name: "Kafka",
      icon: "/assets/tech/kafka.svg",
      link: "https://kafka.apache.org/",
    },
    {
      name: "GCP",
      icon: "/assets/tech/gcp.svg",
      link: "https://cloud.google.com/",
    },
    {
      name: "Azure",
      icon: "/assets/tech/azure.svg",
      link: "https://azure.microsoft.com/",
    },
    {
      name: "Hive",
      icon: "/assets/tech/hive.png",
      link: "https://hive.apache.org/",
    },
    {
      name: "Snowflake",
      icon: "/assets/tech/snowflake.png",
      link: "https://www.snowflake.com/",
    },
    {
      name: "Airflow",
      icon: "/assets/tech/airflow.png",
      link: "https://airflow.apache.org/",
    },
    {
      name: "NVIDIA CUDA",
      icon: "/assets/tech/nvidia-cuda.png",
      link: "https://developer.nvidia.com/cuda-zone",
    }
  ],
  Tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    {
      name: "Figma",
      icon: "/assets/tech/figma.svg",
      link: "https://www.figma.com/",
    },
    {
      name: "Lucid",
      icon: "/assets/tech/lucid.jpg",
      link: "https://www.lucid.com/",
    },
    {
      name: "Tableau",
      icon: "/assets/tech/tableau.svg",
      link: "https://www.tableau.com/",
    },
    {
      name: "Power BI",
      icon: "/assets/tech/powerbi.svg",
      link: "https://www.powerbi.com/",
    },
    {
      name: "Microsoft Office",
      icon: "/assets/tech/microsoft-office.webp",
      link: "https://www.microsoft.com/en-in/microsoft-365",
    },
    {
      name: "Linux",
      icon: "/assets/tech/linux.png",
      link: "https://www.linux.org/",
    },
  ],
  Databases: [
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
    {
      name: "Firebase",
      icon: "/assets/tech/firebase.svg",
      link: "https://firebase.google.com/",
    },
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
    {
      name: "PostgreSQL",
      icon: "/assets/tech/postgres.svg",
      link: "https://www.postgresql.org/",
    },
    {
      name: "SQLite",
      icon: "/assets/tech/sql-lite.svg",
      link: "https://www.sqlite.org/",
    },
    {
      name: "Oracle",
      icon: "/assets/tech/oracle.png",
      link: "https://www.oracle.com/",
    },
  ],
};


export {
  navLinks,
  services,
  technologies,
  experiences,
  // testimonials,
  projects,
  socials,
  heroTexts,
  extracurriculars,
};

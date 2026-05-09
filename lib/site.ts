export type SkillGroup = {
  title: string;
  items: string[];
  level: number;
};

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  duration: string;
  summary: string;
  bullets: string[];
};

export type ProjectItem = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  problemStatement: string;
  architecture: string[];
  techStack: string[];
  keyFeatures: string[];
  challenges: string[];
  impact: string[];
  githubUrl: string;
  liveDemoUrl: string;
};

export type PublicationItem = {
  slug: string;
  title: string;
  journal: string;
  year: string;
  abstract: string;
  points: string[];
  readUrl: string;
};

export type AchievementItem = {
  title: string;
  detail: string;
  description: string;
};

export type LeadershipItem = {
  role: string;
  organization: string;
  location: string;
  duration?: string;
  description: string;
};

export const profile = {
  name: 'Mokshda Sharma',
  role: 'ML Engineer | Data Scientist ',
  location: 'Mohali, India',
  degree: 'B.E. CSE (AI & ML - IBM)',
  cgpa: '8.34',
  bio:
    'AI-ML systems engineer focused on shipping production-ready machine learning, RAG, and data intelligence products with measurable user and business impact.',
  headline:
    'Building intelligent systems with a production ML mindset, data-driven insights, and a bias toward useful AI products.'
};

export const typingPhrases = ['ML Engineer', 'GenAI Developer', 'Building Intelligent Systems'];

export const skillGroups: Record<string, SkillGroup> = {
  languages: {
    title: 'Languages',
    level: 90,
    items: ['Python', 'C++', 'SQL']
  },
  frameworks: {
    title: 'Frameworks',
    level: 90,
    items: ['FastAPI', 'LangChain','Streamlit', 'TensorFlow', 'Keras', 'PyTorch', 'HuggingFace Transformers']
  },
  ai: {
    title: 'AI Specializations',
    level: 94,
    items: ['Machine Learning', 'Deep Learning', 'NLP', 'LLMs', 'RAG', 'Agentic AI', 'CV']
  },
  tools: {
    title: 'Tools',
    level: 88,
    items: ['Docker', 'Docker Compose', 'Supabase', 'Google Earth Engine', 'QGIS', 'SNAP (ESA Toolbox)']
  }
};

export const experience: ExperienceItem[] = [
  {
    role: 'Data Scientist Intern',
    company: 'Tecnvirons Pvt Ltd',
    location: 'Remote / India',
    duration: '2024',
    summary:
      'Built a booking workflow for WhatsApp Business API with production backend patterns and search-friendly data handling.',
    bullets: [
      'Built a WhatsApp Business API booking system that automated appointment intake, confirmations, reschedules, and cancellations.',
      'Integrated Supabase/Postgres for structured persistence, query optimization, and reliable state transitions across booking journeys.',
      'Designed a FastAPI backend with modular endpoints, validation, and maintainable service boundaries for production use.',
      'Added NLP plus LLM-assisted intent handling to route user requests, reduce manual follow-up, and improve conversational coverage.'
    ]
  },
  {
    role: 'Data Scientist Intern',
    company: 'Marktine Technology',
    location: 'Remote / India',
    duration: '2023 - 2024',
    summary:
      'Delivered predictive modeling workflows and Streamlit apps for data-driven pricing use cases in hospitality and mobility.',
    bullets: [
      'Trained hotel booking models and price prediction systems using curated feature pipelines and careful preprocessing for tabular data.',
      'Built car price and Airbnb price modeling solutions that highlighted feature importance, prediction stability, and business-facing outputs.',
      'Automated preprocessing steps for missing values, categorical encoding, scaling, and train-test reproducibility.',
      'Packaged interactive Streamlit ML apps to demo model outputs, sanity-check predictions, and accelerate stakeholder reviews.'
    ]
  },
  {
    role: 'Data Analyst Intern',
    company: 'PrepInsta',
    location: 'Remote / India',
    duration: '12/2023 - 01/2024',
    summary:
      'Built interactive AQI dashboards for exploratory analysis of India air quality trends using analytical and visualization tools.',
    bullets: [
      'Worked with a team to refine AQI datasets, structure feature views, and analyze patterns across regions and time windows.',
      'Created interactive dashboards in Tableau to support deeper insight discovery and stakeholder review.',
      'Used MS Excel, Python, and data analysis workflows to clean, transform, and explore the dataset before visualization.',
      'Focused on presenting the information in a way that made air quality patterns easier to understand at a glance.'
    ]
  }
];

export const projects: ProjectItem[] = [
  {
    slug: 'krishi-vyakriti',
    title: 'Krishi Vyakriti',
    tagline: 'Satellite intelligence for crop diagnostics and multilingual agritech assistance.',
    summary:
      'A crop intelligence platform that turns satellite data into field-level insights for monitoring, disease detection, and yield forecasting.',
    problemStatement:
      'Agriculture teams need a practical way to combine remote sensing, multilingual assistance, and actionable crop analytics in one decision layer.',
    architecture: ['Satellite Data', 'Preprocessing', 'Crop AI Models', 'Multilingual Chatbot', 'Farmer Insights'],
    techStack: ['Google Earth Engine', 'Python', 'FastAPI', 'LLMs', 'NLP', 'Streamlit', 'Docker'],
    keyFeatures: [
      'Satellite data ingestion and vegetation analytics for crop monitoring.',
      'Disease detection workflows with explainable prediction outputs.',
      'Yield forecasting helpers for planning and early intervention.',
      'Multilingual chatbot interface for farmer-friendly AI guidance.',
      'Ethical AI framing around transparency, uncertainty, and decision support.'
    ],
    challenges: [
      'Balancing noisy satellite observations with crop-level signal extraction.',
      'Making AI outputs understandable for non-technical users.',
      'Designing a multilingual interface without losing domain precision.'
    ],
    impact: [
      'Created a field-ready concept that unifies agronomic analytics, conversational assistance, and remote sensing.',
      'Improved interpretability by translating model outputs into actionable crop guidance.',
      'Established a foundation for scalable AI-enabled agricultural decision support.'
    ],
    githubUrl: 'https://github.com/MokshdaSharma',
    liveDemoUrl: '#'
  },
  {
    slug: 'careercraft-ai',
    title: 'CareerCraft AI',
    tagline: 'An ATS-aware resume intelligence system for interview readiness and role alignment.',
    summary:
      'A recruiter-focused tool that analyzes resumes semantically, scores alignment, and generates interview preparation content with explainable outputs.',
    problemStatement:
      'Students need a stronger way to understand how a resume maps to a job description, what to improve, and how to prepare for interviews.',
    architecture: ['Resume Parser', 'Semantic Match Engine', 'LLM Question Generator', 'FastAPI Backend', 'Streamlit UI'],
    techStack: ['FastAPI', 'Streamlit', 'HuggingFace Transformers', 'LLMs', 'Python', 'Docker'],
    keyFeatures: [
      'ATS resume analyzer with semantic similarity scoring.',
      'LLM-driven interview question generation by job context.',
      'Explainable AI scoring that surfaces what drives the match score.',
      'FastAPI backend for modular orchestration and future expansion.',
      'Streamlit frontend for fast recruiter-style demos and feedback loops.'
    ],
    challenges: [
      'Reducing keyword-only matching bias in resume evaluation.',
      'Generating interview questions that are relevant and not generic.',
      'Presenting explanation quality without overwhelming the user.'
    ],
    impact: [
      'Turned resume feedback into an actionable product experience for role alignment.',
      'Added explainability to make AI-assisted scoring more trustworthy.',
      'Designed for rapid iteration on recruiter-facing GenAI workflows.'
    ],
    githubUrl: 'https://github.com/MokshdaSharma',
    liveDemoUrl: '#'
  },
  {
    slug: 'foodiebot',
    title: 'FoodieBot',
    tagline: 'A conversational recommender system for food discovery and preference-aware suggestions.',
    summary:
      'A containerized FastAPI and Streamlit solution that generates food datasets, scores preferences, and recommends items through dialogue.',
    problemStatement:
      'Food recommendation should feel conversational, personalized, and easy to experiment with in a deployable ML stack.',
    architecture: ['Gemini Dataset Generation', 'Interest Scoring', 'FastAPI Services', 'Conversational Recommender', 'Streamlit Frontend'],
    techStack: ['Gemini API', 'FastAPI', 'Docker Compose', 'Python', 'Streamlit', 'Recommendation Logic'],
    keyFeatures: [
      'Gemini API dataset generation for quick experimentation and cold-start support.',
      'Interest scoring algorithm that adapts suggestions to user preferences.',
      'FastAPI backend for clean inference and service separation.',
      'Docker Compose setup for portable local deployment.',
      'Conversational interface for recommendation exploration and refinement.'
    ],
    challenges: [
      'Making recommendations conversational rather than static.',
      'Maintaining coherent data generation across categories.',
      'Separating model logic from application orchestration.'
    ],
    impact: [
      'Showed how GenAI can speed up dataset creation and interactive prototyping.',
      'Created a deployable recommendation workflow with clean backend boundaries.',
      'Strengthened portfolio depth in LLM-assisted product engineering.'
    ],
    githubUrl: 'https://github.com/MokshdaSharma',
    liveDemoUrl: '#'
  },
  {
    slug: 'brain-spine-neural-network',
    title: 'Brain-Spine Neural Network',
    tagline: 'A bio-inspired experiment in dual-network coupling and reflex-like inference.',
    summary:
      'A neural architecture exploration that couples a high-level reasoning network with a fast reactive pathway for adaptive processing.',
    problemStatement:
      'Standard neural pipelines do not always separate reflex-like response from deeper inference, which limits experimentation with biological analogies.',
    architecture: ['Sensory Input', 'Spine Path', 'Brain Path', 'Coupling Layer', 'Hybrid Output'],
    techStack: ['Python', 'PyTorch', 'Neural Network Research', 'Experiment Tracking'],
    keyFeatures: [
      'Bio-inspired dual-network coupling for reflex and reasoning paths.',
      'Experimentation with fast-response and slower deliberative processing.',
      'Modular neural design for ablation-style comparisons.',
      'Useful as a research-oriented showcase for model architecture thinking.'
    ],
    challenges: [
      'Translating biological inspiration into tractable ML structure.',
      'Keeping coupled pathways stable during training.',
      'Evaluating the value of architectural separation.'
    ],
    impact: [
      'Demonstrated research curiosity beyond standard application projects.',
      'Strengthened understanding of architecture design tradeoffs.',
      'Positioned the portfolio as technically ambitious and exploratory.'
    ],
    githubUrl: 'https://github.com/MokshdaSharma',
    liveDemoUrl: '#'
  },
  {
    slug: 'vyakriti-sar',
    title: 'Vyakriti SAR',
    tagline: 'Copernicus SAR change detection for defense and urban intelligence.',
    summary:
      'A geospatial workflow for SAR change detection, visualization, and edge-aware optimization using ESA tooling and GIS output.',
    problemStatement:
      'SAR change detection systems need to be operationally useful, geographically interpretable, and efficient enough for real deployment contexts.',
    architecture: ['Copernicus SAR', 'SNAP Pipeline', 'Change Detection', 'FPGA Optimization', 'QGIS Visualization'],
    techStack: ['SNAP (ESA Toolbox)', 'QGIS', 'Python', 'Copernicus Data', 'FPGA Optimization Concepts'],
    keyFeatures: [
      'SAR preprocessing pipeline using SNAP and Copernicus data assets.',
      'Change detection outputs suitable for defense and urban monitoring use cases.',
      'QGIS visualization for spatial context and operational readability.',
      'Exploration of FPGA-aware optimization for faster processing scenarios.'
    ],
    challenges: [
      'Handling speckle and SAR-specific preprocessing complexity.',
      'Maintaining clear visual interpretation for non-ML stakeholders.',
      'Thinking through acceleration without sacrificing geospatial fidelity.'
    ],
    impact: [
      'Added strong remote sensing depth to the portfolio.',
      'Showed practical awareness of defense and urban intelligence needs.',
      'Combined GIS tooling with ML-oriented geospatial thinking.'
    ],
    githubUrl: 'https://github.com/MokshdaSharma',
    liveDemoUrl: '#'
  },
  {
    slug: 'lawease-ai',
    title: 'LawEase AI',
    tagline: 'AI-powered legal document simplification and speech-assisted analysis.',
    summary:
      'A legal AI platform that summarizes, simplifies, and analyzes complex legal text through NLP and LLM workflows.',
    problemStatement:
      'Legal language is dense and time-consuming to interpret, so users need a faster way to understand documents without losing important meaning.',
    architecture: ['Legal Text Input', 'NLP + Speech', 'LangChain + OpenAI', 'FastAPI Orchestration', 'React UI'],
    techStack: ['NLP', 'LangChain', 'Python', 'React', 'Docker', 'Node.js', 'FastAPI', 'OpenAI', 'HuggingFace'],
    keyFeatures: [
      'AI-powered legal document simplification for non-technical users.',
      'Summarization and explanation workflows for complex clauses.',
      'Speech recognition support to broaden input modalities.',
      'FastAPI backend integrated with LangChain and OpenAI services.',
      'React/Vite frontend with Docker and Docker Compose deployment support.'
    ],
    challenges: [
      'Preserving legal intent while reducing document complexity.',
      'Combining generative AI output with structured document analysis.',
      'Keeping the system modular for future compliance-focused features.'
    ],
    impact: [
      'Made legal information more accessible through AI-assisted simplification.',
      'Demonstrated full-stack LLM product engineering with backend orchestration.',
      'Strengthened the portfolio with a startup-style applied GenAI use case.'
    ],
    githubUrl: 'https://github.com/MokshdaSharma',
    liveDemoUrl: '#'
  },
  {
    slug: 'video-capsule-endoscopy-analysis',
    title: 'Video Capsule Endoscopy Analysis',
    tagline: 'Deep learning analysis of gut health from endoscopy video frames.',
    summary:
      'A medical AI project that classifies healthy versus unhealthy gut conditions and explains possible infection causes and remedies.',
    problemStatement:
      'Video-based endoscopy data is difficult to interpret manually, so the goal is to support faster triage with reliable visual classification.',
    architecture: ['Endoscopy Frames', 'Frame Preprocessing', 'DL Classifier', 'HuggingFace Interface', 'Streamlit Insight Layer'],
    techStack: ['Python', 'Deep Learning', 'Streamlit', 'HuggingFace'],
    keyFeatures: [
      'Analyzes endoscopy video frames for gut health classification.',
      'Differentiates healthy and unhealthy conditions with model-driven outputs.',
      'Provides likely disease/infection context plus possible cause and cure guidance.',
      'Uses a Streamlit experience to make the workflow easy to demo and understand.'
    ],
    challenges: [
      'Handling noisy frames and limited medical visual consistency.',
      'Presenting model findings in a way that is clear but not overclaimed.',
      'Balancing medical interpretability with a compact demo flow.'
    ],
    impact: [
      'Expanded the portfolio into medical computer vision and applied deep learning.',
      'Showed the ability to build domain-specific analysis tools with practical UI delivery.',
      'Added another technically credible AI application outside standard tabular ML.'
    ],
    githubUrl: 'https://github.com/MokshdaSharma',
    liveDemoUrl: '#'
  }
];

export const publication: PublicationItem = {
  slug: 'boom-in-data-science',
  title: 'Boom in Data Science: Drivers, Trends, and Future Prospects',
  journal: 'International Journal of Scientific Research and Development',
  year: '2024',
  abstract:
    'This publication examines the rapid growth of data science adoption, the shift toward scalable analytics, and the expanding role of ML-driven decision systems across sectors. It highlights drivers such as cloud maturity, automation, and applied AI while discussing future prospects in explainable intelligence, domain-specific modeling, and responsible deployment.',
  points: [
    'Frames the rise of data science as a product of tooling maturity and business demand.',
    'Highlights how ML pipelines are evolving toward automation, reproducibility, and interpretability.',
    'Discusses future opportunities in domain-specific AI, hybrid analytics, and responsible decision support.'
  ],
  readUrl: '#'
};

export const featuredPublication: PublicationItem = {
  slug: 'from-pixels-to-language',
  title: 'From Pixels to Language: Benchmarking Visual Reasoning in GPT-4o vs Claude-Sonnet-4.5',
  journal: 'Springer | ICAMC-2026, 4th International Conference on Emerging Applications of Artificial Intelligence, Machine Learning and Cybersecurity, HMR Institute of Technology and Management',
  year: '2026',
  abstract:
    'This paper evaluates the reliability of Vision Language Models under controlled experimental settings, focusing on hallucination, prompt sensitivity, OCR, counting accuracy, and response consistency. The benchmarks compare GPT-4o and Claude-Sonnet-4.5 across visual reasoning tasks to understand how multimodal models behave in practical decision scenarios.',
  points: [
    'Benchmarked visual reasoning reliability through hallucination and prompt sensitivity analysis.',
    'Evaluated OCR accuracy, counting behavior, and response consistency across controlled tasks.',
    'Found GPT-4o to demonstrate stronger visual grounding, lower hallucination rates, and better consistency than Claude-Sonnet-4.5.'
  ],
  readUrl: '/publications/from-pixels-to-language'
};

export const publications: PublicationItem[] = [featuredPublication, publication];

export const achievements: AchievementItem[] = [
  {
    title: 'Best Paper Presentation Award',
    detail: 'From Pixels to Language',
    description: 'Recognized for presenting the visual reasoning benchmarking paper comparing GPT-4o and Claude-Sonnet-4.5.'
  },
  {
    title: '3rd Place',
    detail: 'Biomimicry Build-a-thon',
    description: 'Recognized for a bio-inspired systems approach and strong technical execution.'
  },
  {
    title: 'Finalist',
    detail: 'Smart India Hackathon 2024',
    description: 'Advanced through a national-scale competitive innovation pipeline.'
  },
  {
    title: 'Achiever’s Award',
    detail: '2024-25',
    description: 'Acknowledged for consistent performance, initiative, and applied problem solving.'
  }
];

export const leadership: LeadershipItem[] = [
  {
    role: 'Secretary',
    organization: 'FPF - Future Prep Forum Club, Chandigarh University',
    location: 'Chandigarh University',
    description:
      'Served as Secretary and supported club coordination, communication, and planning for student-focused initiatives.'
  },
  {
    role: 'Vice-Chairperson',
    organization: 'IEEE PBSC, Chandigarh University',
    location: 'Chandigarh University',
    description:
      'Served as Vice-Chairperson and helped lead organizing efforts, collaboration, and execution for IEEE student activities.'
  }
];

export const navigation = [
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Leadership', href: '/#leadership' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Research', href: '/#research' },
  { label: 'Contact', href: '/#contact' }
];

export const contactDetails = {
  email: 'mokshda.official@gmail.com',
  linkedin: 'https://www.linkedin.com/',
  github: 'https://github.com/'
};

export const profilePhotoPath = '/official-profile.jpg';

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getPublicationBySlug(slug: string) {
  return slug === publication.slug ? publication : null;
}
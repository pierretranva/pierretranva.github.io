// ================================================
// Pierre Tran Portfolio — Content Data
// ================================================

export interface Experience {
    company: string;
    role: string;
    location: string;
    period: string;
    bullets: string[];
    current?: boolean;
}

export interface Project {
    title: string;
    description: string;
    tech: string[];
    link?: string;
    github?: string;
}

export interface SkillCategory {
    category: string;
    items: string[];
}

// --- Experience ---
export const experiences: Experience[] = [
    {
        company: 'Capital One',
        role: 'Software Engineer',
        location: 'McLean, VA',
        period: 'August 2025 – Present',
        current: true,
        bullets: [
            'Full-time software engineer on Enterprise Machine Learning Tools team.',
            'Building scalable tools and infrastructure for data scientists and engineers to build and deploy machine learning models.',
        ],
    },
    {
        company: 'Google',
        role: 'Software Engineering Intern',
        location: 'Mountain View, CA',
        period: 'May 2025 – August 2025',
        bullets: [
            'Engineered a novel, risk-aware LLM algorithm achieving over 99% precision on passed content, enabling a significant and safe increase in review automation.',
            'Led an end-to-end project from ambiguous charter to data-backed solution, driving 5+ design iterations to deliver an automated pipeline increasing video review throughput by 2.7x.',
            'Pioneered a multi-turn CoT prompting framework that boosted classification accuracy by over 40% on nuanced, subjective review questions.',
        ],
    },
    {
        company: 'Capital One',
        role: 'Software Engineering Intern',
        location: 'McLean, VA',
        period: 'May 2024 – Aug 2024',
        bullets: [
            'Built a multi-modal NLP model for real-time error detection (ambiguity, grammar, complexity, acronym) in the Enterprise-Wide Requirements Catalog, achieving 86.5% accuracy and reducing manual review time by 50%.',
            'Integrated FastAPI backend with proprietary model and Catalog-UI for a seamless user experience.',
            'Configured Jenkins CI/CD pipeline; deployed to AWS serverless infrastructure with 150% build-time optimization.',
        ],
    },
    {
        company: 'Zeta Associates',
        role: 'Software Engineering Intern',
        location: 'Fairfax, VA',
        period: 'May 2023 – Aug 2023',
        bullets: [
            'Designed and developed a full-stack Digital Signal Processing application for a real-time streaming platform using Next.js, Redpanda (Kafka), Cassandra, and Python.',
            'Developed an RNN-LSTM ML classification API to identify song genre from raw bytes with 75% accuracy.',
            'Researched and deployed a resilient multi-cluster failover architecture using Karmada.',
        ],
    },
    {
        company: 'Obscurity Labs',
        role: 'Software Engineering Intern',
        location: 'Ashburn, VA',
        period: 'Jun 2022 – Aug 2022',
        bullets: [
            'Developed a cybersecurity tool using Python, MongoDB, FastAPI, React, and Agile Development.',
            'Created a CLI application to extract entire Windows OS metadata in under 2 minutes.',
            'Connected CLI, API, and database for a seamless full-stack app with full querying capabilities.',
        ],
    },
];

// --- Projects ---
export const projects: Project[] = [
    {
        title: 'LLM Content Safety Pipeline',
        description:
            'Risk-aware algorithm for automated content review using multi-turn Chain-of-Thought prompting, achieving 95%+ precision while increasing review throughput 2.7x. Uses LLMs to filter out youtube videos for Google Play Store GameHub.',
        tech: ['Python', 'Gemini API', 'Prompt Engineering', 'ML'],
    },
    {
        title: 'NLP Requirements Analyzer',
        description:
            'Multi-modal NLP model detecting ambiguity, grammar issues, and complexity in enterprise requirements catalogs with 86.5% accuracy. Developed novel technique with 4 specific pipeline metrics to improve text quality in enterprise requirements catalogs.',
        tech: ['Python', 'FastAPI', 'NLP', 'AWS', 'Jenkins'],
    },
    {
        title: 'Election Prediction Platform',
        description:
            'Full-stack capstone built with Radford University\'s Dr. Can Dogan to visualize ML research on election prediction. Compares model performance (linear regression, decision trees, neural networks) on U.S. county-level data with interactive Mapbox maps and an Excel-to-database parsing pipeline.',
        tech: ['React', 'Node.js', 'MongoDB', 'Mapbox GL', 'Express', 'Material-UI'],
        github: 'https://github.com/pierretranva/election-prediction',
    },
    {
        title: 'Real-Time DSP Platform',
        description:
            'Full-stack digital signal processing application performing real-time IQ data processing with FFTs on a streaming platform. Built with failover safe architecture using Karmada and deployed on baremetal kubernets clusters.',
        tech: ['Next.js', 'Python', 'Kafka', 'Cassandra', 'Docker', 'Karmada', 'Kubernetes'],
    },
    {
        title: 'Shoe Collection',
        description:
            'A full-stack social commerce platform for sneaker enthusiasts. Users build collections, share posts, buy/sell shoes, and engage through follows, likes, and nested comments. Features 7 interconnected database tables, admin system, and comprehensive search & analytics.',
        tech: ['React', 'FastAPI', 'Python', 'SQLite', 'Pydantic', 'REST API'],
        github: 'https://github.com/pierretranva/shoe-collection',
    },
    {
        title: 'HackViolet 2024 — AI/NLP Project',
        description:
            'Award-winning AI application built in 72 hours at Virginia Tech\'s HackViolet hackathon. Leverages GPT transformer models, spaCy NLP, and a React frontend to deliver advanced conversational AI capabilities with semantic understanding — all running locally without cloud dependencies.',
        tech: ['Python', 'OpenAI', 'spaCy', 'React', 'FastAPI', 'PyTorch'],
        github: 'https://github.com/pierretranva/hackviolet24',
    },
    {
        title: 'Audio Genre Classifier',
        description:
            'RNN-LSTM deep learning model that classifies song genres from raw audio bytes with 75% accuracy.',
        tech: ['Python', 'TensorFlow', 'RNN', 'LSTM', 'FastAPI'],
    },
    {
        title: 'Age of Information Research',
        description:
            'Researched and implemented online Primal-Dual learning algorithms advancing research in Age of Information optimization with Dr. Bo Ji.',
        tech: ['Python', 'Algorithms', 'Research', 'ML'],
    },
    {
        title: 'Cybersecurity OS Scanner',
        description:
            'CLI tool that extracts comprehensive Windows OS metadata in under 2 minutes with full-stack querying interface.',
        tech: ['Python', 'MongoDB', 'FastAPI', 'React'],
    },
];

// --- Skills ---
export const skills: SkillCategory[] = [
    {
        category: 'Languages',
        items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C/C++', 'Go', 'Kotlin', 'SQL', 'Bash', 'HTML/CSS'],
    },
    {
        category: 'Frameworks & Libraries',
        items: ['React', 'Next.js', 'Node.js', 'FastAPI', 'Flask', 'Pandas', 'XGBoost', 'TensorFlow'],
    },
    {
        category: 'Cloud & DevOps',
        items: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Git', 'CI/CD'],
    },
    {
        category: 'Data & AI',
        items: ['MongoDB', 'PostgreSQL', 'Cassandra', 'Gemini API', 'Prompt Engineering', 'ML/AI'],
    },
];

// --- Education ---
export const education = [
    {
        school: 'Virginia Tech',
        degree: 'M.Eng., Computer Science',
        concentration: 'AI/ML',
        period: 'Jan 2025 – May 2026',
        gpa: '4.0',
    },
    {
        school: 'Virginia Tech',
        degree: 'B.S., Computer Science',
        concentration: 'Minor: Mathematics',
        period: 'Aug 2022 – Dec 2024',
        gpa: '4.0',
    },
];

// --- Social Links ---
export const socials = {
    email: 'pierretranva@gmail.com',
    linkedin: 'https://linkedin.com/in/pierretranva',
    github: 'https://github.com/pierretranva',
    phone: '571-789-9356',
};

// --- Achievements ---
export const achievements = [
    '6x Dean\'s List',
    '14 Individual Science Olympiad Medals',
    '3x KDF Diamond Scholarship',
];

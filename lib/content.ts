// All claims and numbers mirror "Ahmed Afridee Resume.pdf" — the single source of
// truth. Copy is lightly edited for the web; never add numbers or achievements
// that are not in the resume.

export const profile = {
  name: 'Ahmed Afridee',
  role: 'Flutter Developer | AI Engineer',
  location: 'Dhaka, Bangladesh',
  email: 'a.afridee47@gmail.com',
  phone: '+8801910027738',
  github: 'https://github.com/Afridee',
  githubLabel: 'github.com/Afridee',
  linkedin: 'https://linkedin.com/in/ahmed-afridee',
  linkedinLabel: 'linkedin.com/in/ahmed-afridee',
  tagline:
    'I build offline-first mobile systems and on-device AI pipelines — 5+ years shipping production Flutter apps, from architecture to the App Store.',
  summary:
    'I\u2019m a Flutter developer and AI engineer with 5+ years of production experience across Android and iOS. Today I build offline-first, high-volume systems that keep 4,500+ field agents working through zero-connectivity zones; before that I spent five years as the sole developer of a live employee management app used across client organisations. More recently my work has moved into applied AI: on-device pipelines built with LangChain, LangGraph, flutter_gemma, and RAG, carried from architecture through App Store deployment. I wrote about that work in Towards AI (2026), on running LLMs on-device in Flutter.',
};

export const aboutStats = [
  { value: '5+', label: 'Years shipping production Flutter apps' },
  { value: '4,500+', label: 'Field agents served by offline-first systems' },
  { value: '99%', label: 'Reduction in sync errors on reconnection events' },
  { value: '50,000+', label: 'Daily writes handled by the offline schema' },
];

export type Experience = {
  company: string;
  location: string;
  role: string;
  type: string;
  period: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: 'Manush Tech',
    location: 'Singapore',
    role: 'Flutter Developer',
    type: 'Full-time',
    period: '04/2025 – Present',
    bullets: [
      'Eliminated order entry failures in zero-connectivity zones for 4,500+ field agents by building an offline-first capture layer with Drift — orders now complete successfully regardless of network state',
      'Reduced sync errors by 99% and eliminated data loss across 50,000+ daily reconnection events by designing a bidirectional sync engine with deterministic conflict-resolution logic, co-owning API contracts with backend engineers',
      'Architected a Drift-backed local schema supporting 15+ entity types and 50,000+ daily writes, enabling complete offline parity with the server-side data model — zero feature degradation without connectivity',
    ],
  },
  {
    company: 'Elements Group',
    location: 'Sydney, NSW · Remote',
    role: 'Flutter Developer',
    type: 'Full-time',
    period: '02/2020 – 04/2025',
    bullets: [
      'Sole developer on a live employee management app, used by 257 employees across client organisations',
      'Eliminated fraudulent attendance entries entirely — achieving 0 incidents post-launch and removing the need for manual supervisor sign-off — by building a GPS-verified clock-in system using Geolocator',
      'Developed a dynamic checklist engine allowing managers to configure and assign day-specific task forms to field employees',
      'Delivered real-time push notifications (FCM) for shift reminders, task alerts, and broadcasts — achieving 98%+ delivery reliability across iOS and Android',
      'Architected the app with GetX for state management and Dio for REST API communication, maintaining the codebase solo for 5 years across 10+ releases',
      'Configured Codemagic CI/CD pipeline for automated builds and TestFlight/App Store distribution, keeping manual deployment overhead at zero',
      'Wrote unit and widget tests covering core business logic including geo-clock-in validation and checklist state management',
    ],
  },
];

export type Project = {
  name: string;
  headline: string;
  bullets: string[];
  stack: string[];
  github: string;
  demo?: string;
  image?: string;
  imageAlt?: string;
};

export const projects: Project[] = [
  {
    name: 'Karo',
    headline: 'Building an AI Agent That Knows Your Company',
    bullets: [
      'Built an AI agent that ingests internal knowledge (API docs, business rules, procedures), enabling team members to query live data in plain English — no SQL, Postman, or engineering tickets needed',
      'Added an eval harness for regression testing retrieval accuracy and agent behavior across prompt/schema changes; fully containerized with Docker Compose',
      'Implemented a hybrid RAG + API-calling architecture using LangGraph/LangChain, with pgvector for semantic retrieval and a dynamic HTTP tool supporting per-request auth injection',
      "Persisted multi-turn conversation history in PostgreSQL via LangGraph's PostgresSaver; built chat UI in Chainlit with text and voice input (server-side transcription via faster-whisper)",
    ],
    stack: [
      'Python',
      'LangGraph',
      'LangChain',
      'OpenAI GPT-4o',
      'pgvector',
      'PostgreSQL',
      'Chainlit',
      'Docker',
    ],
    github: 'https://github.com/Afridee/Karo',
    demo: 'https://youtu.be/1x4H6KBWVS8?list=PLQJcnbfcEQTTFeGbseG-k2VfKO4GEaHo1',
  },
  {
    name: 'Smart Notes',
    headline: 'Fully private, offline AI inference on-device',
    bullets: [
      'Achieved fully private, offline AI inference on-device — zero cloud calls, zero API keys — by integrating Gemma 4 E4B IT (~4.3 GB) and EmbeddingGemma via flutter_gemma for generation and 768-dimensional text embeddings',
      'Implemented hybrid retrieval combining dense cosine search (HNSW via ObjectBox) and BM25 keyword scoring, fused with weighted-sum normalization (0.7 × dense + 0.3 × BM25) and MMR re-ranking for result diversity',
      'Designed a semantic graph view using pairwise cosine similarity across note mean vectors, surfacing topical connections without tags or folders',
      'Managed a fixed 2,048-token context window with dynamic token-aware prompt trimming across system instruction, retrieved chunks, and query',
    ],
    stack: [
      'Flutter',
      'Dart',
      'flutter_gemma',
      'Gemma 4 E4B IT',
      'EmbeddingGemma',
      'ObjectBox',
      'HNSW',
      'BM25',
    ],
    github: 'https://github.com/Afridee/smart_notes',
    image: '/smart-notes-diagram.png',
    imageAlt:
      'Smart Notes architecture: on-device RAG with HNSW hybrid retrieval and Gemma 4 E4B IT',
  },
];

export const publication = {
  title:
    'I Crammed RAG, a Vector Database, and a Gemma LLM into a Mobile App. Here\u2019s What Happened.',
  venue: 'Towards AI',
  date: '05/2026',
  url: 'https://pub.towardsai.net/i-crammed-rag-a-vector-database-and-a-gemma-llm-into-a-mobile-app-heres-what-happened-6e1a270e6d44',
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

// Highlighted with a stronger pill style in the Skills section.
export const coreSkills = [
  'Flutter',
  'Dart',
  'Drift',
  'Python',
  'LangChain',
  'LangGraph',
  'RAG',
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Mobile & Flutter',
    skills: [
      'Flutter',
      'Android',
      'iOS',
      'Dart',
      'flutter_gemma',
      'GetX',
      'Provider',
      'Riverpod',
      'BLoC',
      'Dio',
      'Drift',
      'SQLite',
      'Geolocator',
      'Push Notifications',
      'Unit Testing',
      'Widget Testing',
      'Responsive & Adaptive UI',
      'Firebase',
    ],
  },
  {
    title: 'AI & Backend',
    skills: [
      'Python',
      'LangChain',
      'LangGraph',
      'OpenAI GPT-4o',
      'Gemini API',
      'RAG',
      'pgvector',
      'PostgreSQL',
      'Vector Search',
      'Embeddings',
      'ObjectBox',
      'BM25',
      'on-device ML',
      'Multimodal',
      'Chainlit',
      'FastAPI',
      'Docker',
      'REST APIs',
      'faster-whisper',
      'prompt engineering',
      'agent architecture',
      'hybrid retrieval pipeline',
    ],
  },
  {
    title: 'Tools & Workflow',
    skills: ['Git', 'GitHub', 'Codemagic CI/CD', 'Agile', 'Scrum'],
  },
];

export const education = {
  degree: 'B.Sc. in Computer Science and Engineering',
  school: 'North South University',
  period: '01/2018 – 08/2022',
};

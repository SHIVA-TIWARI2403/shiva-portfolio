export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  category: 'AI & ML' | 'Full-Stack' | 'Systems';
  role: string;
  year: string;
  tags: string[];
  metrics: string;
  liveUrl?: string;
  githubUrl: string;
  featured?: boolean;
}

export interface Milestone {
  year: string;
  title: string;
  organization: string;
  description: string;
  badge?: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
}

export const PERSONAL_INFO = {
  name: "SHIVA TIWARI",
  formalName: "Satendra Pratap Tiwari",
  handle: "SHIVA-TIWARI2403",
  titleDisplay: "FULL-STACK ENGINEER & AI ARCHITECT",
  manifesto: "Every line of code tells a story. From autonomous agents to scalable cloud systems.",
  location: "AYODHYA, INDIA",
  coordinates: "26.7922° N, 82.1998° E",
  email: "tiwarisatendrapratap@gmail.com",
  github: "https://github.com/SHIVA-TIWARI2403",
  linkedin: "https://www.linkedin.com/in/satendra-pratap-t-570617449/",
  status: "AVAILABLE FOR HIGH-IMPACT ROLES",
  stats: [
    { label: "AI MODELS BENCHMARKED", value: "40+", subtext: "Live in ToolMatrix AI" },
    { label: "PRODUCTION APPS", value: "06", subtext: "Deployed on Cloud & DB" },
    { label: "CODE COMMITS", value: "250+", subtext: "Continuous active shipping" },
    { label: "API RELIABILITY", value: "99.9%", subtext: "Zero-downtime architecture" }
  ]
};

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "toolmatrix-ai",
    title: "TOOLMATRIX AI",
    subtitle: "Real-Time AI Tools Discovery & 4-Way Comparison Engine",
    description: "An independent benchmarking and comparison platform indexing 40+ state-of-the-art AI models across Video, LLMs, Image, and Legal AI. Features live pricing, free tier specs, and side-by-side spec comparison.",
    tag: "FLAGSHIP AI",
    category: "AI & ML",
    role: "Lead Architect & Developer",
    year: "2025",
    tags: ["React", "FastAPI", "Google Gemini API", "Tailwind CSS", "Vite"],
    metrics: "40+ Models • 4-Way Comparison • Realtime Search",
    liveUrl: "https://shiva-tiwari2403.github.io/ai-tool-matrix/",
    githubUrl: "https://github.com/SHIVA-TIWARI2403/ai-tool-matrix",
    featured: true
  },
  {
    id: "slidecraft-ai",
    title: "SLIDECRAFT AI",
    subtitle: "Autonomous Gamma-Style Presentation & Native PPTX Suite",
    description: "Generative presentation suite tailored for students and researchers. Creates structured decks with Core Concept definitions, Bento-styled slides, and native downloadable PowerPoint PPTX transition files.",
    tag: "GENERATIVE AI",
    category: "AI & ML",
    role: "Solo Creator",
    year: "2025",
    tags: ["Python", "python-pptx", "Google Gemini", "FastAPI", "React"],
    metrics: "Direct PPTX Export • Bento Slides • Automated Research",
    liveUrl: "https://github.com/SHIVA-TIWARI2403/ai-student-ppt-maker",
    githubUrl: "https://github.com/SHIVA-TIWARI2403/ai-student-ppt-maker",
    featured: true
  },
  {
    id: "milo-social",
    title: "MILO SOCIAL HUB",
    subtitle: "Privacy-First Interest & Hobby-Based Social Platform (18+)",
    description: "Founder & Lead Developer of Milo: an adult social and connection network built around shared passions. Features Google OAuth authentication, Supabase Realtime messaging, and strict PostgreSQL Row Level Security (RLS).",
    tag: "FULL-STACK APP",
    category: "Full-Stack",
    role: "Founder & Full-Stack Engineer",
    year: "2024-2025",
    tags: ["React", "Supabase", "PostgreSQL RLS", "Tailwind", "Netlify"],
    metrics: "Realtime WebSocket Chat • Strict RLS Policies • Modern Dark UI",
    liveUrl: "https://milosathi.netlify.app",
    githubUrl: "https://github.com/SHIVA-TIWARI2403/milo",
    featured: true
  },
  {
    id: "alpha-trading-engine",
    title: "ALPHA TRADING BOT",
    subtitle: "Algorithmic Market Engine with Risk Math & Paper Broker",
    description: "Autonomous trading framework with paper trading broker, real-time indicator math (RSI, MACD, Bollinger Bands), pattern recognition, and mathematical risk management safeguards with trade journal logging.",
    tag: "ALGO TRADING",
    category: "Systems",
    role: "Quantitative Developer",
    year: "2024",
    tags: ["Python 3", "Mathematical Modeling", "Financial Data", "Automation"],
    metrics: "Sub-Second Signals • Risk Guardrails • Audit Journal",
    githubUrl: "https://github.com/SHIVA-TIWARI2403/ai-trading-bot"
  },
  {
    id: "viral-ai-shorts",
    title: "VIRAL AI SHORTS PIPELINE",
    subtitle: "Multi-Agent Video Synthesis & Audio Pipeline",
    description: "Automated end-to-end pipeline that scripts topics, synthesizes voiceovers, matches stock media, burns synchronized captions, and renders social videos ready for publishing.",
    tag: "PIPELINE AUTOMATION",
    category: "Systems",
    role: "Automation Engineer",
    year: "2024",
    tags: ["Python", "FFmpeg", "Edge TTS", "Gemini Omni", "CLI"],
    metrics: "Automated Audio & Subtitles • Batch Video Rendering",
    githubUrl: "https://github.com/SHIVA-TIWARI2403/viral_ai_shorts_pipeline"
  },
  {
    id: "interactive-game",
    title: "TIC TAC TOE HEURISTIC",
    subtitle: "Zero-Dependency Minimax State Machine",
    description: "Ultra-lean, pure vanilla JavaScript interactive board featuring zero bloat, butter-smooth 60fps CSS animations, and optimal minimax heuristic AI opponent.",
    tag: "FRONTEND CRAFT",
    category: "Full-Stack",
    role: "Frontend Engineer",
    year: "2024",
    tags: ["JavaScript", "HTML5", "CSS3", "Minimax AI"],
    metrics: "Zero Dependencies • Instant Load • 60 FPS Animations",
    liveUrl: "https://github.com/SHIVA-TIWARI2403/tic-tac-toe",
    githubUrl: "https://github.com/SHIVA-TIWARI2403/tic-tac-toe"
  }
];

export const MILESTONES: Milestone[] = [
  {
    year: "2025",
    title: "Launched ToolMatrix AI Benchmark Platform",
    organization: "Independent Software",
    description: "Built and published a live 4-way comparative engine tracking 40+ AI frontier models with real-time pricing and free tier specs.",
    badge: "FLAGSHIP PRODUCT"
  },
  {
    year: "2025",
    title: "Created SlideCraft AI Autonomous Suite",
    organization: "Open-Source Innovation",
    description: "Designed an AI presentation generation engine outputting native Microsoft PowerPoint (.pptx) transition decks for students.",
    badge: "INNOVATION"
  },
  {
    year: "2024",
    title: "Founded & Architected Milo Platform",
    organization: "Milo Sathi",
    description: "Built an adult hobby networking platform using Supabase Realtime, PostgreSQL Row Level Security, and Google OAuth.",
    badge: "FOUNDER"
  },
  {
    year: "2024",
    title: "Engineered Algorithmic Trading Safeguards",
    organization: "Quantitative Systems",
    description: "Implemented mathematical drawdown protection and technical indicator calculation pipelines in Python.",
    badge: "ALGORITHMIC"
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: "2024 — PRESENT",
    role: "Founder & Full-Stack Architect",
    company: "Milo & ToolMatrix Projects",
    location: "Ayodhya, India (Remote)",
    description: "Spearheading development of autonomous AI tools, real-time comparison matrices, and secure social web applications with Supabase, React, and Python."
  },
  {
    period: "2023 — 2024",
    role: "AI & Full-Stack Developer",
    company: "Independent Engineering",
    location: "Ayodhya, India",
    description: "Designed resilient microservices, Python automation workflows, algorithmic trading bots, and responsive frontend systems."
  }
];

export const SOFTWARE_STACK = [
  { name: "React 18 / 19", category: "Frontend", level: "95%" },
  { name: "Tailwind CSS", category: "Styling", level: "98%" },
  { name: "TypeScript", category: "Language", level: "90%" },
  { name: "Python 3", category: "Backend & AI", level: "95%" },
  { name: "FastAPI", category: "API Framework", level: "92%" },
  { name: "Google Gemini API", category: "LLM & AI", level: "96%" },
  { name: "PostgreSQL & Supabase", category: "Database", level: "90%" },
  { name: "Vite / Next.js", category: "Bundler", level: "92%" },
  { name: "Git & GitHub CLI", category: "DevOps", level: "95%" }
];

export const TERMINAL_COMMANDS: Record<string, string> = {
  help: "COMMANDS:\n  • about    - Biography & editorial manifesto\n  • projects - Flagship software list\n  • skills   - Technical arsenal\n  • matrix   - Launch ToolMatrix AI live benchmark\n  • contact  - Direct coordinates\n  • clear    - Clear screen\n  • sudo hire-me - Reveal secret perk 🎉",
  about: "Shiva Tiwari (Satendra Pratap Tiwari) is a Full-Stack Web Developer & AI Systems Architect based in Ayodhya, India.\nCreator of ToolMatrix AI, SlideCraft AI, and Founder of Milo.\nPassionate about bleeding-edge interfaces, robust databases, and autonomous AI agents.",
  projects: "1. ToolMatrix AI (Live 4-way comparison engine with 40+ models)\n2. SlideCraft AI (Generative PPTX maker with Gamma-style cards)\n3. Milo Social (Hobby networking app with Supabase Realtime)\n4. Alpha Trading Engine (Algorithmic risk manager)",
  skills: "• Frontend: React, Vite, Tailwind CSS, TypeScript, 21st UI, Canvas\n• Backend & AI: Python, FastAPI, Supabase, PostgreSQL, Gemini API\n• Cloud: Netlify, GitHub Actions, Docker",
  contact: "Email: tiwarisatendrapratap@gmail.com\nLinkedIn: https://www.linkedin.com/in/satendra-pratap-t-570617449/\nGitHub: https://github.com/SHIVA-TIWARI2403",
  matrix: "Launching ToolMatrix AI... visit: https://shiva-tiwari2403.github.io/ai-tool-matrix/",
  "sudo hire-me": "ACCESS GRANTED! 🚀 Shiva is ready to supercharge your engineering team with velocity, craft, and obsessive attention to detail."
};

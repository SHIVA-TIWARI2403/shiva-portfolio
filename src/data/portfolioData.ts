import { Project, SkillCategory, StatItem } from '../types';

export const PERSONAL_INFO = {
  name: "Shiva Tiwari",
  formalName: "Satendra Pratap Tiwari",
  handle: "SHIVA-TIWARI2403",
  role: "Full-Stack Web Developer & AI Systems Architect",
  tagline: "Building high-performance AI engines, intelligent web platforms, and scalable cloud systems.",
  location: "Ayodhya, Uttar Pradesh, India",
  email: "tiwarisatendrapratap@gmail.com",
  github: "https://github.com/SHIVA-TIWARI2403",
  linkedin: "https://www.linkedin.com/in/satendra-pratap-t-570617449/",
  status: "Available for High-Impact Roles & Collaborations",
  stats: [
    { label: "AI Models Indexed", value: "40+", subtext: "Real-time benchmarking in ToolMatrix" },
    { label: "Production Apps", value: "6+", subtext: "Deployed on Supabase & Netlify" },
    { label: "GitHub Commits", value: "250+", subtext: "Continuous active development" },
    { label: "Client & User Delight", value: "100%", subtext: "Intuitive UX & zero-downtime APIs" }
  ] as StatItem[]
};

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "toolmatrix-ai",
    title: "ToolMatrix AI",
    subtitle: "Real-Time AI Tools Discovery & 4-Way Comparison Engine",
    description: "An independent benchmarking and comparison platform indexing 40+ state-of-the-art AI models across Video, LLMs, Image, and Legal AI. Features live pricing, free tier specs, and side-by-side spec comparison.",
    tag: "Flagship AI Platform",
    category: "AI & ML",
    tags: ["React", "FastAPI", "Google Gemini", "Tailwind CSS", "Vite", "Real-Time Data"],
    metrics: "40+ AI Models • 4-Way Comparison • Instant Search",
    liveUrl: "https://shiva-tiwari2403.github.io/ai-tool-matrix/",
    githubUrl: "https://github.com/SHIVA-TIWARI2403/ai-tool-matrix",
    featured: true,
    color: "cyan",
    icon: "Sparkles"
  },
  {
    id: "slidecraft-ai",
    title: "SlideCraft AI",
    subtitle: "Autonomous Presentation & PPTX Maker with Gamma-Style Cards",
    description: "Generative presentation suite tailored for students and researchers. Creates structured decks with Core Concept definitions, Bento-styled slides, and native downloadable PowerPoint PPTX transition files.",
    tag: "Generative AI",
    category: "AI & ML",
    tags: ["Python", "python-pptx", "Google Gemini API", "FastAPI", "React UI"],
    metrics: "Instant PPTX Export • Bento Layouts • Automated Concept Extraction",
    liveUrl: "https://github.com/SHIVA-TIWARI2403/ai-student-ppt-maker",
    githubUrl: "https://github.com/SHIVA-TIWARI2403/ai-student-ppt-maker",
    featured: true,
    color: "purple",
    icon: "Presentation"
  },
  {
    id: "milo-social",
    title: "Milo Social",
    subtitle: "Privacy-First Interest & Hobby-Based Social Platform (18+)",
    description: "Founder & Lead Developer of Milo: an adult social and connection network built around shared passions. Features Google OAuth authentication, Supabase Realtime messaging, and strict PostgreSQL Row Level Security (RLS).",
    tag: "Full-Stack Web App",
    category: "Full-Stack",
    tags: ["React", "Supabase", "PostgreSQL RLS", "Tailwind CSS", "Netlify", "OAuth"],
    metrics: "Realtime Chat • Strict RLS Policies • Modern Dark UI",
    liveUrl: "https://milosathi.netlify.app",
    githubUrl: "https://github.com/SHIVA-TIWARI2403/milo",
    featured: true,
    color: "emerald",
    icon: "Users"
  },
  {
    id: "algo-trading-bot",
    title: "Alpha Trading Engine & Risk Manager",
    subtitle: "Automated Financial Analysis & Algorithmic Strategy Suite",
    description: "Algorithmic bot framework with paper trading broker, real-time indicator math (RSI, MACD, Bollinger Bands), pattern recognition, and mathematical risk management safeguards with trade journal logging.",
    tag: "Autonomous Systems",
    category: "Systems & Tools",
    tags: ["Python", "Algorithmic Trading", "Data Feed APIs", "Risk Math", "Automation"],
    metrics: "Sub-second Execution • Risk Guardrails • Comprehensive Journal",
    githubUrl: "https://github.com/SHIVA-TIWARI2403/ai-trading-bot",
    color: "amber",
    icon: "TrendingUp"
  },
  {
    id: "viral-ai-shorts",
    title: "Viral AI Shorts Automation Pipeline",
    subtitle: "Autonomous Multi-Agent Content Generation Pipeline",
    description: "Automated end-to-end pipeline that writes scripts, generates synthetic voiceovers, fetches stock media, synthesizes subtitles, and compiles viral short-form videos ready for distribution.",
    tag: "Media Automation",
    category: "Systems & Tools",
    tags: ["Python", "FFmpeg", "Gemini Omni", "Edge TTS", "Automation"],
    metrics: "Full Audio-Video Pipeline • Automated Captions",
    githubUrl: "https://github.com/SHIVA-TIWARI2403/viral_ai_shorts_pipeline",
    color: "purple",
    icon: "Video"
  },
  {
    id: "interactive-game",
    title: "Minimalist Interactive Tic-Tac-Toe",
    subtitle: "Clean State Machine & Fluid Animations",
    description: "High-performance, pure vanilla JavaScript interactive game featuring zero dependencies, buttery smooth CSS transitions, and optimal minimax bot heuristics.",
    tag: "Frontend Craft",
    category: "Full-Stack",
    tags: ["JavaScript", "HTML5 Canvas", "CSS Animations", "Game Logic"],
    metrics: "Zero Dependencies • 60 FPS Animations",
    liveUrl: "https://github.com/SHIVA-TIWARI2403/tic-tac-toe",
    githubUrl: "https://github.com/SHIVA-TIWARI2403/tic-tac-toe",
    color: "cyan",
    icon: "Gamepad2"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    description: "Crafting fluid, high-conversion, and accessible user interfaces with 21st century design systems.",
    icon: "Layout",
    color: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30",
    skills: [
      { name: "React 18 / 19", level: "Expert", highlight: true },
      { name: "Tailwind CSS", level: "Expert", highlight: true },
      { name: "TypeScript", level: "Advanced", highlight: true },
      { name: "Vite / Next.js", level: "Advanced", highlight: true },
      { name: "21st.dev UI / shadcn", level: "Expert", highlight: true },
      { name: "HTML5 / Canvas / CSS3", level: "Master", highlight: false },
      { name: "Responsive & A11y", level: "Advanced", highlight: false }
    ]
  },
  {
    title: "AI & Autonomous Agents",
    description: "Harnessing LLMs, multi-agent frameworks, prompt orchestration, and vision/multimodal APIs.",
    icon: "Bot",
    color: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
    skills: [
      { name: "Google Gemini 2.5 / 3.8", level: "Expert", highlight: true },
      { name: "Multi-Agent Systems", level: "Advanced", highlight: true },
      { name: "Prompt Engineering", level: "Master", highlight: true },
      { name: "Vector Search & Embeddings", level: "Intermediate", highlight: false },
      { name: "Autonomous Workflows", level: "Advanced", highlight: true },
      { name: "python-pptx / Media Gen", level: "Advanced", highlight: false }
    ]
  },
  {
    title: "Backend & Cloud Architecture",
    description: "Designing fast REST/Streaming APIs, persistent schemas, and resilient microservices.",
    icon: "Server",
    color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
    skills: [
      { name: "Python 3", level: "Expert", highlight: true },
      { name: "FastAPI", level: "Advanced", highlight: true },
      { name: "PostgreSQL & RLS", level: "Advanced", highlight: true },
      { name: "Supabase Realtime & Auth", level: "Expert", highlight: true },
      { name: "Node.js / Express", level: "Intermediate", highlight: false },
      { name: "Netlify Functions / Edge", level: "Advanced", highlight: true }
    ]
  },
  {
    title: "DevOps & Tooling",
    description: "Version control, automated CI/CD, secure credential hygiene, and high-velocity workflows.",
    icon: "Cpu",
    color: "from-amber-500/20 to-orange-500/20 border-amber-500/30",
    skills: [
      { name: "Git & GitHub CLI (gh)", level: "Master", highlight: true },
      { name: "CI/CD & GitHub Actions", level: "Advanced", highlight: false },
      { name: "Netlify CLI / Deployments", level: "Expert", highlight: true },
      { name: "VS Code / Antigravity AI", level: "Power User", highlight: true },
      { name: "Linux / PowerShell", level: "Advanced", highlight: false }
    ]
  }
];

export const TERMINAL_COMMANDS: Record<string, string> = {
  help: "Available commands:\n  • about    - Brief biography & philosophy\n  • skills   - Core competencies & tech stack\n  • projects - Quick list of flagship software\n  • contact  - Direct communication coordinates\n  • matrix   - Launch ToolMatrix AI live app\n  • clear    - Clear terminal buffer\n  • sudo hire-me - Reveal secret recruiter perk 🎉",
  about: "Shiva Tiwari (Satendra Pratap Tiwari) is a Full-Stack Web Developer & AI Systems Architect based in Ayodhya, India. Creator of ToolMatrix AI, SlideCraft AI, and Milo. Passionate about bleeding-edge interfaces and reliable backends.",
  skills: "• Frontend: React, Vite, Tailwind CSS, TypeScript, 21st UI, Canvas\n• Backend & AI: Python, FastAPI, Supabase, PostgreSQL, Gemini API\n• Cloud: Netlify, GitHub Actions, Docker",
  projects: "1. ToolMatrix AI (Live AI benchmark engine)\n2. SlideCraft AI (Autonomous PPT maker)\n3. Milo Social (Hobby-based community app)\n4. Alpha Trading Engine (Algorithmic risk manager)",
  contact: "Email: tiwarisatendrapratap@gmail.com\nLinkedIn: https://www.linkedin.com/in/satendra-pratap-t-570617449/\nGitHub: https://github.com/SHIVA-TIWARI2403",
  matrix: "Opening ToolMatrix AI... visit: https://shiva-tiwari2403.github.io/ai-tool-matrix/",
  "sudo hire-me": "ACCESS GRANTED! 🚀 Shiva is ready to supercharge your engineering team with AI-driven velocity and obsessive UI attention."
};

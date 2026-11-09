export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  category: 'AI & ML' | 'Full-Stack' | 'Systems & Tools';
  tags: string[];
  metrics?: string;
  liveUrl?: string;
  githubUrl: string;
  featured?: boolean;
  color: 'cyan' | 'purple' | 'emerald' | 'amber';
  icon: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  color: string;
  skills: {
    name: string;
    level: string;
    highlight?: boolean;
  }[];
}

export interface StatItem {
  label: string;
  value: string;
  subtext: string;
}

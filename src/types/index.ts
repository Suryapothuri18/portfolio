export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  id: number;
  degree: string;
  school: string;
  period: string;
  description: string;
}

export interface Skill {
  id: number;
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}
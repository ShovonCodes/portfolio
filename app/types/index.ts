export interface PersonalInfo {
  name: string;
  nickname: string;
  role: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
}

export interface Section {
  id: string;
  title: string;
  path: string;
  icon: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  repo: string;
}

export interface Skills {
  [category: string]: string[];
}

export interface PortfolioData {
  personal: PersonalInfo;
  sections: Section[];
  experience: Experience[];
  projects: Project[];
  skills: Skills;
}

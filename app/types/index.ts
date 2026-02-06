export interface PersonalInfo {
  name: string;
  nickname: string;
  role: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
  hobbies: string[];
}

export interface Section {
  id: string;
  title: string;
  path: string;
  icon: string;
}

export interface Experience {
  company: string;
  companyUrl: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  tech: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  repo: string;
}

export interface Skill {
  name: string;
  icon: string;
  manualIconName?: boolean;
}

export interface Skills {
  [category: string]: Skill[];
}

export interface PortfolioData {
  personal: PersonalInfo;
  sections: Section[];
  experience: Experience[];
  projects: Project[];
  skills: Skills;
}

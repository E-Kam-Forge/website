export type ProjectCategory = 'all' | 'mobile' | 'erp' | 'iot' | 'ai';

export interface Project {
  id: string;
  name: string;
  category: 'mobile' | 'erp' | 'iot' | 'ai';
  affiliation: string;
  tagline: string;
  description: string;
  stack: string[];
  metrics: string[];
  patentOrPublication?: string;
  linkText?: string;
  linkUrl?: string;
  featured?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image?: string;
  avatarInitial: string;
  linkedin: string;
  github: string;
  shortBio: string;
  academic?: string;
  trackRecord?: string;
  verifiedStack?: string[];
  achievements?: string[];
  badge?: string;
}

export interface ServicePillar {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  painPoints: string[];
  stack: string[];
  proofOfWork: string;
  architectureDetails: {
    title: string;
    description: string;
  }[];
}

export interface ResearchItem {
  id: string;
  type: 'Patent' | 'Springer Nature' | 'IEEE Xplore' | 'IEEE EmergIN' | 'Award' | 'External Benchmark';
  title: string;
  identifier?: string;
  authors: string;
  venueOrIssue: string;
  keyFinding: string;
  applicationInEkamForge: string;
}

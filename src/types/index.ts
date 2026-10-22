export interface Project {
  id: string;
  title: string;
  category: string;
  badge: string;
  description: string;
  keyElements?: string[];
  tags: string[];
  isConcept?: boolean;
  isUpcoming?: boolean;
  caseStudy: {
    context: string;
    audience: string;
    strategy: string;
    execution: string;
    toolsUsed: string[];
    measurementApproach: string;
    verifiedOutcomes: string;
    learningsAndNextSteps: string;
  };
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  description: string;
  responsibilities: string[];
  toolsAndPlatforms: string[];
  note?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    tag?: string;
  }[];
}

export interface AchievementItem {
  title: string;
  organization: string;
  periodOrYear: string;
  badge: string;
  description: string;
  type: 'award' | 'event' | 'sport' | 'certification';
}

export interface MarketingPlatform {
  id: string;
  name: string;
  category: string;
  badge: 'Active Platform Exposure' | 'Foundational / Active Learning' | 'Technical Tooling';
  brandColor: string;
  accentBg: string;
  roleInStack: string;
  description: string;
  capabilities: string[];
}

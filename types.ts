
import React from 'react';
export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  role: string;
  description: string[];
  skills?: string[];
}

export interface EducationItem {
  school: string;
  location: string;
  degree: string;
  period: string;
  details?: string;
}

export interface ProjectItem {
  name: string;
  description: string;
  technologies: string[];
  uses: string[];
  github?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  readTime: string;
  content?: React.ReactNode;
}

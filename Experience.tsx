
import React from 'react';
import { ExperienceItem, EducationItem, ProjectItem, SkillCategory, BlogPost } from './types';

export const OVERVIEW = {
  name: 'Daniel Illenberger',
  title: 'Full-Stack Software Engineer',
  education: 'B.S. in Physics from Colorado State University.',
  skills: 'Deep expertise in React, TypeScript, proficient in Rust and Python.',
  passion: 'Building the future of software engineering with AI/ML.',
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    company: 'Freelance Software Engineer',
    location: 'Grand Junction, CO',
    period: 'Apr 2025 – Current',
    title: 'Full-Stack Engineer',
    role: 'Full-Stack Engineer',
    description: [
      'Built sorting and filtering for a blockchain site using React (TypeScript) and Django.',
      'Use Docker containers for local development.'
    ],
    skills: ['React', 'TypeScript', 'Django', 'Docker', 'Blockchain']
  },
  {
    id: 'exp-2',
    company: 'Hyperparam Inc.',
    location: 'Tiburon, CA',
    period: 'Feb 2023 – Apr 2025',
    title: 'Founding Full-Stack Engineer',
    role: 'Founding Full-Stack Engineer',
    description: [
      'Led full-stack development of PostgresML, bringing ML/AI capabilities to developers.',
      'Built features across marketing and product platforms using Rust, Rocket, Turbo, Stimulus, and Bootstrap.',
      'Designed and launched Organizations functionality supporting 1,000+ user teams.',
      'Implemented a comprehensive CMS and a SendGrid-powered email platform.',
      'Built a proof-of-concept LLM context-provider web application with Rust, Leptos, and Tailwind.',
      'Mitigated production risk by leading rollout/rollback strategies for high-risk PostgreSQL migrations.',
      'Improved average page-load performance by 20% by eliminating redundant fetches.'
    ],
    skills: ['Rust', 'Rocket', 'PostgreSQL', 'ML/AI', 'Tailwind', 'Next.js']
  },
  {
    id: 'exp-3',
    company: 'Smart Warehousing',
    location: 'Overland Park, KS',
    period: 'Jul 2022 – Dec 2022',
    title: 'Front-End React Engineer',
    role: 'Front-End React Engineer',
    description: [
      'Developed products streamlining warehousing industry using React and TypeScript.',
      'Created micro frontends with single-spa for modular scalability.',
      'Maintained reusable component library via AWS CodeArtifact with Webpack, Rollup, and Jest.',
      'Strengthened product quality through testing pipelines using Jest, MSW, and Storybook.'
    ],
    skills: ['React', 'TypeScript', 'Node.js', 'Single-SPA', 'Jest', 'AWS']
  },
  {
    id: 'exp-4',
    company: 'Shipmate Box',
    location: 'Grand Junction, CO',
    period: 'Aug 2019 – Jul 2022',
    title: 'Co-Founder & CEO',
    role: 'Co-Founder & CEO',
    description: [
      'Designed and shipped full product stack (web, mobile, hardware) using React Native, Node.js, and AWS.',
      'Designed IoT hardware in KiCad with barcode scanning and motion detection.',
      'Programmed embedded firmware in C and Python-based smart hub software using Flask.',
      'Led investor meetings and managed budgeting, forecasting, and accounting.'
    ],
    skills: ['React Native', 'IoT', 'C', 'Python', 'Flask', 'AWS', 'Hardware Design']
  },
  {
    id: 'exp-5',
    company: 'Naval Nuclear Laboratory',
    location: 'Milton, NY',
    period: 'May 2018 – Sep 2019',
    title: 'Senior Nuclear Engineer',
    role: 'Senior Nuclear Engineer',
    description: [
      'Participated in multi-tier testing for next-generation nuclear plant instrumentation software.',
      'Automated requirements analysis with Python scripts, boosting throughput by 50%.',
      'Directed 200+ personnel through a six-month nuclear safety test.',
      'Supervised a team of ten in safe operation and emergency response of a nuclear power plant.'
    ],
    skills: ['Python', 'Automation', 'Nuclear Engineering', 'Project Management']
  }
];

export const EDUCATION: EducationItem[] = [
  {
    school: 'Colorado State University',
    location: 'Fort Collins, CO',
    degree: 'B.S. in Physics, Minor in Mathematics',
    period: 'Jan 2009 – Dec 2012'
  },
  {
    school: 'Navy Nuclear Power School',
    location: 'Charleston, SC',
    degree: 'Nuclear Plant Operations (Officer Curriculum)',
    period: 'Jan 2014 – Jul 2014',
    details: 'Graduate-level coursework in Thermodynamics, Mechanical & Electrical Systems, Chemistry & Materials.'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    name: 'Text Editor',
    description: 'A lightweight, easy-to-use text editor focusing on user–AI collaboration.',
    technologies: ['Electron', 'TypeScript', 'Tailwind', 'OpenAI API', 'SQL'],
    uses: ['Note-taking', 'Analysis', 'Repetitive formatting', 'Proofreading'],
    github: 'https://github.com/chillenberger/text-editor-dt'
  },
  {
    name: 'Micro Journal',
    description: 'An AI-powered journaling application that helps users document thoughts and experiences.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'OpenAI API', 'SQL'],
    uses: ['Self-reflection', 'Mood tracking', 'AI Insights']
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Rust', 'Python', 'SQL']
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Redux', 'Storybook', 'Figma']
  },
  {
    category: 'Backend & Infrastructure',
    items: ['Node.js', 'Rocket', 'Django', 'PostgreSQL', 'AWS', 'Docker']
  },
  {
    category: 'Specialized',
    items: ['ML/AI Integration', 'LLMs', 'IoT/Embedded', 'Nuclear Operations', 'Physics Research']
  }
];

export const Icons = {
  Github: () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
  ),
  Linkedin: () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
  ),
  External: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
  ),
  Chat: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
  ),
  Menu: ({ className }: { className?: string }) => (
    <svg className={className || "w-6 h-6"} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
  ),
  Close: ({ className }: { className?: string }) => (
    <svg className={className || "w-6 h-6"} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
  )
};

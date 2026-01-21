
import React from 'react';
import { ExperienceItem, EducationItem, ProjectItem, SkillCategory, BlogPost } from './types';

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

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'text-editors-arent-just-for-coders',
    title: 'Text Editors Aren\'t Just for Coders',
    date: 'January 12, 2026',
    summary: 'Wading into the pool of text editors for non-coders.',
    tags: ['Text Editors', 'AI', 'Electron', 'TypeScript', 'Tailwind', 'OpenAI API', 'SQL'],
    readTime: '8 min read',
    content: (
      <div className="space-y-6 text-slate-300 leading-relaxed">
        <h3 className="text-xl font-bold text-white mt-8 mb-4">Beyond Code: Why Documents Need a Real Text Editor</h3>
        <p>
          As a coder, I am passionate about my text editors—Cursor, Antigravity, VS Code, Vim; I have tried many. I spend most of my day in a world of folders and documents containing millions of lines of fine detail. The tools built to navigate this world bring speed and efficiency to my engineering life in a way I long for in other intellectual pursuits.
        </p>
        <p>
          Text editors are not just for code. Documents deserve the same speed, control, and AI‑assisted context developers expect from their tools.
        </p>
        <p>
          Data is living and relational, and the notes we take, the documents we write, and the AI interactions we have are a part of that data. However, most people still open one document at a time, edit, and move on. The more technically savvy among us use an Obsidian‑like system, maybe even downloading a plugin to connect a favorite AI. This still falls short of the power experienced in a coding text editor—with full semantic search, broad context available when needed, AI read/write/delete on allowed files, and agent workflows.
        </p>
        <p>
          On the other side are chat‑bot user interfaces. Unfortunately, most people interact with some of the most capable software in the world through a chat window similar to the way they message a friend. Direct messages are not the right method to interact with a system that can produce thousands of lines of complex knowledge per second, where a single exchange can contain enough information to study for a full day. Many interactions produce knowledge assets worth saving in an organized way. Downloading, editing, and re‑uploading these assets is a pain. The UI needs tools to work with whatever asset is produced, so users can understand and hone it. Additionally, copying and pasting context continuously—or cloning documents to the cloud just to discuss them—is cumbersome and introduces version errors.
        </p>
        <p>
          There are many ways people try to bridge the gap. One can hack a code editor through agents and prompting to push it toward non‑coding work. One can set up an MCP server. Or one can mirror everything into a cloud environment with AI features. These solutions are hacky, complex, or inadequate for most users.
        </p>
        <p>
          The right solution is a collaborative text editor built for drafting, revising, and organizing in plain text.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">Where current products fall short</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Chat‑first tools separate thinking from assets.</strong> Infinite scroll makes decisions hard to revisit, attachments require download–edit–upload loops, and you keep copying and pasting context. When you need broad context, you hit limits or hacks.</li>
          <li><strong>Code editors bend the wrong way for documents.</strong> They are powerful but configured for projects, build steps, and developer workflows. For most writers, that means clutter, plugins, and cognitive load before words.</li>
          <li><strong>Cloud doc suites blur scope and add lock‑in.</strong> You must move files into one system, assistants may scan more than you intend, and it is hard to limit the collaborator to exactly the folders you choose.</li>
          <li><strong>Plugin mazes increase friction.</strong> Desktop chat plus MCP stacks promise everything, then drown you in permissions, setup, and unclear boundaries.</li>
        </ul>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">What a document‑first editor should do</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Center the work on files and folders, not a chat log.</strong> Conversations revolve around assets you own.</li>
          <li><strong>Keep everything in plain‑text markdown,</strong> with clean structure and easy export to styled PDFs when needed.</li>
          <li><strong>Provide context from across your allowed trees,</strong> not only the open note, and make those boundaries explicit.</li>
          <li><strong>Offer search that thinks:</strong> semantic, fast, and incremental.</li>
          <li><strong>Maintain shared awareness:</strong> track client state and actions so your AI partner understands what is happening.</li>
        </ul>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">How DocWeave answers this</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Collaboration in the document:</strong> Draft, revise, and restructure side by side with an intelligent, AI‑powered partner that works inside your files.</li>
          <li><strong>Context across folders:</strong> Pulls relevant notes and references from the trees you allow—no more manual copy‑paste.</li>
          <li><strong>Plain‑text control:</strong> Markdown by default, then export to styled PDFs using templates when you are ready.</li>
          <li><strong>Transparent scope:</strong> You pick the folders, and the collaborator stays within them.</li>
          <li><strong>Search that thinks:</strong> Semantic search across documents, with fast, incremental updates.</li>
        </ul>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">Examples (video‑ready)</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Resume and cover letter pipeline:</strong> Open your job‑search folder, select your resume and target role, then ask for a one‑page cover letter tailored to the company. DocWeave pulls highlights from your resume, aligns them to the job description, drafts a focused letter, and leaves inline notes where it needs specifics. You edit a few lines and export a styled PDF.
          </li>
          <li>
            <strong>Medical discussion template:</strong> Use a structured note to discuss a case, ask questions about meaning, fill in key fields, evaluate options, summarize, and save. Choose specialty‑specific agents to guide the flow while keeping everything in your files.
          </li>
        </ul>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">Why a text editor (not a chat, and not a code IDE)</h3>
        <p>
          A chat is a conversation log, not a workspace. It hides structure, scatters assets, and buries decisions. A code IDE is a power tool, but its abstractions add weight for writers who do not need terminals, compilers, or build systems. A document‑first editor gives you the same focus and speed developers enjoy—without the extra scaffolding.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">What DocWeave is not (by design)</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Not a generic chat box with context duct‑taped on.</li>
          <li>Not a walled‑garden doc suite that requires every file in the cloud.</li>
          <li>Not a complex plugin maze. The core experience is simple, visible, and controllable.</li>
        </ul>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">Availability</h3>
        <p>
          DocWeave is available today on GitHub. You can explore the code, follow progress, and try it locally.
        </p>
        <p>
          Repository: <a href="https://github.com/chillenberger/text-editor-dt" className="text-blue-400 hover:underline">https://github.com/chillenberger/text-editor-dt</a>
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">Call to action</h3>
        <p>
          If you want the focus of an editor, the control of plain text, and an AI partner that respects your files, try DocWeave and help shape what comes next.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">Closing takeaway</h3>
        <p>
          Bring files together, write better together. DocWeave turns scattered notes into coherent documents while keeping you in control.
        </p>
      </div>
    )
  },
  {
    id: 'nuclear-safety-software',
    title: 'From Nuclear Safety to Software Reliability',
    date: 'January 22, 2024',
    summary: 'How my experience directing nuclear safety tests in the Navy shaped my philosophy on building mission-critical software systems.',
    tags: ['Career', 'Engineering', 'Navy'],
    readTime: '6 min read',
    content: (
      <div className="space-y-6 text-slate-300 leading-relaxed">
        <p>
          In a nuclear power plant, "move fast and break things" isn't just bad advice—it's catastrophic. Every action is proceduralized, every anomaly investigated. Transitioning to software engineering, I was surprised by how often speed was prioritized over stability.
        </p>
        <h3 className="text-xl font-bold text-white mt-8 mb-4">The Checklist Manifesto</h3>
        <p>
          One concept I brought with me is the rigorous use of checklists. Not just for deployment, but for code review and incident response.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Verbatim compliance:</strong> Follow the procedure exactly as written.</li>
          <li><strong>Questioning attitude:</strong> Stop if something doesn't look right.</li>
          <li><strong>Forceful backup:</strong> Speak up if a colleague is making a mistake.</li>
        </ul>
        <p>
          Applying these principles to CI/CD pipelines has saved my teams from countless production outages. It turns out, reliability is a feature, not just a byproduct.
        </p>
      </div>
    )
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Rust', 'Python', 'C', 'SQL', 'Fortran']
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Redux', 'Storybook', 'Figma']
  },
  {
    category: 'Backend & Infrastructure',
    items: ['Node.js', 'Rocket', 'Django', 'PostgreSQL', 'AWS', 'Docker', 'Single-SPA']
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

import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { EXPERIENCES, PROJECTS, SKILLS, EDUCATION, Icons } from '../../Experience.js';
import { BLOG_POSTS } from '../../Blogs/index.js';
import { analyzeJobDescription, AnalysisResults } from '../../services/geminiService';
import { ProfileCard } from '../ProfileCard';
import { JobAnalyzer } from '../JobAnalyzer';
import Footer from '../Footer';
import Reveal from '../Reveal';
import SectionHeading from '../SectionHeading';

interface HeroProps {
  onAnalyze: (jobDesc: string) => void;
  analysisResults: AnalysisResults | null;
  isAnalyzing: boolean;
}

const Hero: React.FC<HeroProps> = ({ onAnalyze, analysisResults, isAnalyzing }) => {
  return (
    <section id="about" className="pt-36 pb-32 lg:px-40 px-5 max-w-6xl mx-auto">
      <div className="max-w-[32rem] mx-auto lg:mx-0">
        <ProfileCard />
      </div>
    </section>
  );
};

const JobAnalyzerSection: React.FC<HeroProps> = ({ onAnalyze, analysisResults, isAnalyzing }) => {
  return (
    <section id="customize" className="py-48 px-6">
      <div className="flex justify-center">
        <div className="w-full max-w-[30rem]">
          <Reveal className="scan-reveal-right">
            <JobAnalyzer
              onAnalyze={onAnalyze}
              isAnalyzing={isAnalyzing}
              analysisResults={analysisResults}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const RelevanceTooltip: React.FC<{ hoverOnly?: boolean }> = ({ hoverOnly = false }) => (
  <div className={`absolute -top-3 -right-1 transform z-[100] px-3 py-1 bg-red-900/90 text-yellow-300 text-[9px] font-mono font-bold uppercase tracking-widest border border-yellow-500/50 shadow-[0_0_10px_rgba(255,0,0,0.2)] whitespace-nowrap transition-opacity duration-300 pointer-events-none mb-1 backdrop-blur-md ${hoverOnly ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
    Relevant_to_you
  </div>
);

const Experience: React.FC<{ highlightedIds?: string[] }> = ({ highlightedIds = [] }) => (
  <section id="experience" className="py-48 px-6 max-w-6xl mx-auto border-t border-slate-900/50">
    <SectionHeading id="experience" subtitle="Professional employment history log.">
      Experience_Log
    </SectionHeading>
    <div className="space-y-12">
      {EXPERIENCES.map((exp) => (
        <Reveal key={exp.id}>
          {(isRevealed: boolean) => (
            <div className={`relative pl-10 py-2 border-l border-white/5 group hover:border-neon-blue/30 transition-all duration-500 ${highlightedIds.includes(exp.id) ? 'matched-item-highlight' : ''}`}>
              {highlightedIds.includes(exp.id) && isRevealed && <RelevanceTooltip />}
              <div className="absolute -left-[3px] top-0 w-1.5 h-1.5 bg-cyber-black border border-white/20 group-hover:bg-neon-blue group-hover:border-neon-blue transition-all"></div>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-neon-blue transition-colors uppercase tracking-wider">{exp.role}</h3>
                  <p className="text-slate-400 font-medium">{exp.company}</p>
                </div>
                <div className="mt-2 md:mt-0 text-neon-blue/80 text-xs font-mono border border-neon-blue/20 px-2 py-1 bg-neon-blue/5">
                  {exp.period} • {exp.location}
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {exp.description.map((bullet, idx) => (
                  <li key={idx} className="text-slate-400 text-sm leading-relaxed flex gap-3 font-mono">
                    <span className="text-neon-blue mt-0.5">»</span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.skills?.map(skill => (
                  <span key={skill} className="px-2 py-0.5 bg-slate-900 border border-slate-700 text-[10px] font-mono text-slate-400 uppercase tracking-wide hover:border-neon-blue hover:text-neon-blue transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </Reveal>
      ))}
    </div>
  </section>
);

const Projects: React.FC<{ highlightedNames?: string[] }> = ({ highlightedNames = [] }) => (
  <section id="projects" className="py-48 px-6 max-w-6xl mx-auto border-t border-slate-900/50">
    <SectionHeading id="projects" subtitle="Selected side projects and technical deep-dives.">
      Project_Database
    </SectionHeading>
    <div className="grid md:grid-cols-2 gap-8">
      {PROJECTS.map((project) => (
        <div key={project.name} className={`glass-panel relative p-8 group flex flex-col h-full hover:border-neon-purple/30 transition-all duration-500 ${highlightedNames.includes(project.name) ? 'matched-item-highlight' : ''}`}>
          {highlightedNames.includes(project.name) && <RelevanceTooltip />}
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-xl font-bold uppercase tracking-wider text-white group-hover:text-neon-purple transition-colors">{project.name}</h3>
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-neon-purple transition-colors" aria-label="GitHub">
                <Icons.Github />
              </a>
            )}
          </div>
          <p className="text-slate-400 mb-6 flex-grow font-mono text-sm leading-relaxed">{project.description}</p>
          <div className="space-y-4">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-2 border-b border-slate-800 pb-1 w-max">Technologies</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="px-2 py-1 bg-neon-purple/10 border border-neon-purple/20 text-neon-purple text-xs font-mono uppercase">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-2 border-b border-slate-800 pb-1 w-max">Key Features</p>
              <ul className="grid grid-cols-2 gap-2">
                {project.uses.map(use => (
                  <li key={use} className="text-xs text-slate-400 flex items-center gap-2 font-mono">
                    <span className="w-1 h-1 bg-neon-purple"></span>
                    {use}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Skills: React.FC<{ highlightedSkills?: string[] }> = ({ highlightedSkills = [] }) => (
  <section id="skills" className="py-48 px-6 max-w-6xl mx-auto border-t border-slate-900/50">
    <SectionHeading id="skills" subtitle="My core stack and specialized competencies.">
      Technical_Toolkit
    </SectionHeading>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {SKILLS.map((cat, index) => (
        <Reveal key={cat.category} delay={index * 150}>
          {(isRevealed: boolean) => (
            <div className="space-y-5 bg-cyber-black/40 p-6 border border-white/5 backdrop-blur-sm">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-neon-green border-b border-white/5 pb-3 font-mono">
                {cat.category}
              </h4>
              <div className="flex flex-col gap-2">
                {cat.items.map(item => (
                  <div key={item} className={`relative group flex items-center gap-3 text-slate-300 font-mono text-sm p-1 transition-all duration-500 ${highlightedSkills.includes(item) ? 'text-neon-green font-bold shadow-[0_0_10px_rgba(10,255,10,0.2)]' : ''}`}>
                    {highlightedSkills.includes(item) && isRevealed && <RelevanceTooltip hoverOnly={true} />}
                    <div className={`w-1 h-1 ${highlightedSkills.includes(item) ? 'bg-neon-green shadow-[0_0_5px_#0aff0a]' : 'bg-neon-green'}`}></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Reveal>
      ))}
    </div>
  </section>
);

const Education: React.FC = () => (
  <section id="education" className="py-48 px-6 max-w-6xl mx-auto border-t border-slate-900/50">
    <SectionHeading id="education" subtitle="Academic background and specialized certifications.">
      Education_Records
    </SectionHeading>
    <div className="grid md:grid-cols-2 gap-8">
      {EDUCATION.map((edu) => (
        <div key={edu.school} className="glass-panel p-8 hover:border-neon-blue/30 transition-all">
          <span className="text-neon-blue font-mono text-[10px] uppercase tracking-widest bg-neon-blue/5 px-2 py-0.5 border border-neon-blue/20">{edu.period}</span>
          <h3 className="text-xl font-bold mt-4 text-white uppercase tracking-wide">{edu.degree}</h3>
          <p className="text-slate-400 mb-1 font-mono">{edu.school}</p>
          <p className="text-slate-400 text-xs font-mono mb-4">{edu.location}</p>
          {edu.details && (
            <p className="text-sm text-slate-400 border-t border-slate-800 pt-4 italic">
              {edu.details}
            </p>
          )}
        </div>
      ))}
    </div>
  </section>
);

const BlogSection: React.FC<{ highlightedBlogIds?: string[] }> = ({ highlightedBlogIds = [] }) => {
  const displayedPosts = React.useMemo(() => {
    if (highlightedBlogIds.length > 0) {
      // Filter out finding blogs
      const highlighted = BLOG_POSTS.filter(p => highlightedBlogIds.includes(p.id));
      // Get the rest
      const others = BLOG_POSTS.filter(p => !highlightedBlogIds.includes(p.id));
      // Combine, highlighted first, then others, slice to 2
      return [...highlighted, ...others].slice(0, 2);
    }
    return BLOG_POSTS.slice(0, 2);
  }, [highlightedBlogIds]);

  return (
    <section id="blog" className="py-48 px-6 max-w-6xl mx-auto border-t border-slate-900/50">
      <SectionHeading id="blog" subtitle="Recent writes and technical explorations.">
        Blogs_and_Info
      </SectionHeading>
      <div className="grid md:grid-cols-2 gap-8">
        {displayedPosts.map((post) => (
          <Reveal key={post.id} className="h-full reveal-glitch">
            {(isRevealed: boolean) => (
              <div className={`glass-panel p-8 hover:border-neon-blue/30 transition-all flex flex-col h-full relative group ${highlightedBlogIds.includes(post.id) ? 'matched-item-highlight' : ''}`}>
                {highlightedBlogIds.includes(post.id) && isRevealed && <RelevanceTooltip />}
                <div className="flex justify-between items-start mb-4">
                  <span className="text-neon-blue font-mono text-[10px] uppercase tracking-widest bg-neon-blue/5 px-2 py-0.5 border border-neon-blue/20">{post.date}</span>
                  <span className="text-slate-400 font-mono text-xs">{post.readTime}</span>
                </div>
                <Link to={`/blog/${post.id}`} className="block group-hover:opacity-80 transition-opacity">
                  <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-wide group-hover:text-neon-blue transition-colors">{post.title}</h3>
                </Link>
                <p className="text-slate-400 mb-6 font-mono text-sm leading-relaxed flex-grow">{post.summary}</p>
                <div className="mt-auto pt-4 border-t border-slate-800 flex justify-between items-center">
                  <div className="flex gap-2 flex-wrap">
                    {post.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-[10px] text-slate-400 font-mono uppercase">#{tag}</span>
                    ))}
                  </div>
                  <Link to={`/blog/${post.id}`} className="text-neon-blue text-xs font-mono uppercase tracking-widest hover:text-white transition-colors flex items-center gap-1 group/link">
                    Read_Intel <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            )}
          </Reveal>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link to="/blog" className="inline-block px-8 py-3 bg-neon-blue/10 border border-neon-blue/30 text-neon-blue font-mono text-xs uppercase tracking-[0.2em] hover:bg-neon-blue/20 hover:border-neon-blue transition-all">
          View_All_Transmissions
        </Link>
      </div>
    </section>
  );
};

const Home: React.FC = () => {
  // Handle processing scroll for hash links on initial load
  const location = useLocation();
  const [analysisResults, setAnalysisResults] = React.useState<AnalysisResults | null>(null);
  const [isAnalyzing, setIsAnalyzing] = React.useState(false);

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.slice(1));
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  const handleAnalyze = async (jobDesc: string) => {
    setIsAnalyzing(true);
    try {
      const results = await analyzeJobDescription(jobDesc, { EXPERIENCES, PROJECTS, SKILLS });
      setAnalysisResults(results);
    } catch (error) {
      console.error("Error during analysis:", error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <>
      <Hero
        onAnalyze={handleAnalyze}
        analysisResults={analysisResults}
        isAnalyzing={isAnalyzing}
      />
      <JobAnalyzerSection
        onAnalyze={handleAnalyze}
        analysisResults={analysisResults}
        isAnalyzing={isAnalyzing}
      />
      <BlogSection highlightedBlogIds={analysisResults?.highlightedBlogIds} />
      <Experience highlightedIds={analysisResults?.highlightedExpIds} />
      <Projects highlightedNames={analysisResults?.highlightedProjectNames} />
      <Skills highlightedSkills={analysisResults?.highlightedSkillNames} />
      <Education />
      <Footer />
    </>
  );
};

export default Home;

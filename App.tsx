
import React, { useEffect } from 'react';
import { Routes, Route, Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import { EXPERIENCES, EDUCATION, PROJECTS, SKILLS, BLOG_POSTS, Icons } from './constants';
import AIChat from './components/AIChat';
import { CityscapeBackground } from './components/CityscapeBackground';
import { Typewriter } from './components/Typewriter';
import { ProfileScanner } from './components/ProfileScanner';
import { ProfileCard } from './components/ProfileCard';
import { JobAnalyzer } from './components/JobAnalyzer';
import { analyzeJobDescription, AnalysisResults } from './services/geminiService';



const wrapSnakeCaseString = (text: string) => {
  if (typeof text !== 'string') return text;
  return text.replace(/_/g, '_\u200B');
};

const wrapSnakeCase = (text: string) => {
  if (typeof text !== 'string') return text;
  return text.split('_').map((part, i, arr) => (
    <React.Fragment key={i}>
      {part}{i < arr.length - 1 && <><wbr />_</>}
    </React.Fragment>
  ));
};

const Nav: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [scrollY, setScrollY] = React.useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string, e: React.MouseEvent) => {
    if (!isHome) return; // Allow normal navigation if not on home
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Calculate opacity based on scroll
  // Starts appearing at 10px, fully transition by 100px
  const opacity = Math.min(Math.max((scrollY - 10) / 90, 0), 1);

  return (
    <nav
      className="sticky top-0 z-40 backdrop-blur-sm transition-colors duration-300"
      style={{
        backgroundColor: `rgba(10, 11, 14, ${opacity * 0.95})`,
        borderBottom: `1px solid rgba(255, 255, 255, ${opacity * 0.05})`
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-black text-neon-blue tracking-widest hover:text-shadow-neon transition-all">
          DI_SYSTEM
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-mono text-slate-400">
          <Link to="/#about" onClick={(e) => scrollToSection('about', e)} className="hover:text-neon-blue hover:text-shadow-neon transition-all uppercase tracking-wide">About</Link>
          <Link to="/#experience" onClick={(e) => scrollToSection('experience', e)} className="hover:text-neon-blue hover:text-shadow-neon transition-all uppercase tracking-wide">Experience</Link>
          <Link to="/#projects" onClick={(e) => scrollToSection('projects', e)} className="hover:text-neon-blue hover:text-shadow-neon transition-all uppercase tracking-wide">Projects</Link>
          <Link
            to="/blog"
            className={`
              px-4 py-1 border transition-all uppercase tracking-wide font-bold
              ${location.pathname.startsWith('/blog')
                ? 'bg-neon-blue/10 border-neon-blue text-neon-blue shadow-neon-blue'
                : 'border-slate-700 text-slate-500 hover:border-neon-blue hover:text-neon-blue hover:shadow-[0_0_10px_rgba(0,243,255,0.3)]'
              }
            `}
          >
            Blog
          </Link>
          <Link to="/#skills" onClick={(e) => scrollToSection('skills', e)} className="hover:text-neon-blue hover:text-shadow-neon transition-all uppercase tracking-wide">Skills</Link>
          <Link to="/#education" onClick={(e) => scrollToSection('education', e)} className="hover:text-neon-blue hover:text-shadow-neon transition-all uppercase tracking-wide">Education</Link>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/chillenberger" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors" title="GitHub">
            <Icons.Github />
          </a>
          <a href="https://www.linkedin.com/in/daniel-illenberger-0021094b/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors" title="LinkedIn">
            <Icons.Linkedin />
          </a>
        </div>
      </div>
    </nav>
  );
};

interface HeroProps {
  onAnalyze: (jobDesc: string) => void;
  analysisResults: AnalysisResults | null;
  isAnalyzing: boolean;
}

const Hero: React.FC<HeroProps> = ({ onAnalyze, analysisResults, isAnalyzing }) => {
  return (
    <section id="about" className="pt-36 pb-32 px-6 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center lg:max-w-full max-w-[30rem] mx-auto">
        <ProfileCard />
        <JobAnalyzer
          onAnalyze={onAnalyze}
          isAnalyzing={isAnalyzing}
          analysisResults={analysisResults}
        />
      </div>
    </section>
  );
};

const SectionHeading: React.FC<{ children: React.ReactNode; id: string; subtitle?: string }> = ({ children, id, subtitle }) => (
  <div className="mb-20" id={id}>
    <h2 className="text-2xl font-bold mb-3 uppercase tracking-[0.2em] text-white flex items-center gap-3">
      <span className="w-8 h-[1px] bg-neon-blue/40"></span>
      {typeof children === 'string' ? wrapSnakeCase(children) : children}
    </h2>
    {subtitle && <p className="text-slate-500 font-mono text-xs max-w-2xl pl-11">{subtitle}</p>}
  </div>
);

const Reveal: React.FC<{ children: React.ReactNode; className?: string; delay?: number; }> = ({ children, className = "", delay = 0, color = "blue" }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -25% 0px' // Wait until element is near middle of screen
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${className} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
    >
      <div className={isVisible ? "reveal-flicker reveal-scan" : ""}>
        {children}
      </div>
    </div>
  );
};

const Experience: React.FC<{ highlightedIds?: string[] }> = ({ highlightedIds = [] }) => (
  <section id="experience" className="py-48 px-6 max-w-6xl mx-auto border-t border-slate-900/50">
    <SectionHeading id="experience" subtitle="Professional employment history log.">
      Experience_Log
    </SectionHeading>
    <div className="space-y-12">
      {EXPERIENCES.map((exp) => (
        <Reveal key={exp.id}>
          <div className={`relative pl-10 border-l border-white/5 group hover:border-neon-blue/30 transition-all duration-500 ${highlightedIds.includes(exp.id) ? 'matched-item-highlight' : ''}`}>
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
        <div key={project.name} className={`glass-panel p-8 group flex flex-col h-full hover:border-neon-purple/30 transition-all duration-500 ${highlightedNames.includes(project.name) ? 'matched-item-highlight' : ''}`}>
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-xl font-bold uppercase tracking-wider text-white group-hover:text-neon-purple transition-colors">{project.name}</h3>
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-neon-purple transition-colors">
                <Icons.Github />
              </a>
            )}
          </div>
          <p className="text-slate-400 mb-6 flex-grow font-mono text-sm leading-relaxed">{project.description}</p>
          <div className="space-y-4">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2 border-b border-slate-800 pb-1 w-max">Technologies</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="px-2 py-1 bg-neon-purple/10 border border-neon-purple/20 text-neon-purple text-xs font-mono uppercase">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2 border-b border-slate-800 pb-1 w-max">Key Features</p>
              <ul className="grid grid-cols-2 gap-2">
                {project.uses.map(use => (
                  <li key={use} className="text-xs text-slate-500 flex items-center gap-2 font-mono">
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
          <div className="space-y-5">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-neon-green/60 border-b border-white/5 pb-3 font-mono">
              {cat.category}
            </h4>
            <div className="flex flex-col gap-2">
              {cat.items.map(item => (
                <div key={item} className={`flex items-center gap-3 text-slate-300 font-mono text-sm p-1 transition-all duration-500 ${highlightedSkills.includes(item) ? 'text-neon-green font-bold shadow-[0_0_10px_rgba(10,255,10,0.2)]' : ''}`}>
                  <div className={`w-1 h-1 ${highlightedSkills.includes(item) ? 'bg-neon-green shadow-[0_0_5px_#0aff0a]' : 'bg-neon-green'}`}></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
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
          <p className="text-slate-500 text-xs font-mono mb-4">{edu.location}</p>
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

const Footer: React.FC = () => (
  <footer id="contact" className="py-20 border-t border-white/5 bg-cyber-black/50 backdrop-blur-sm">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 px-6">
      <div className="max-w-md">
        <h3 className="text-2xl font-bold mb-4 uppercase tracking-[0.2em] text-white">{wrapSnakeCase("Initialize_Connection")}</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-6">Open for senior engineering roles & interesting projects that push the boundaries of technology.</p>
        <p className="text-neon-blue font-mono text-xs tracking-wider">DAN.OVERPASS519@PASSINBOX.COM</p>
      </div>
      <div className="flex gap-4">
        <a href="mailto:dan.overpass519@passinbox.com" className="bg-neon-blue/10 hover:bg-neon-blue/20 px-8 py-3 font-bold transition-all text-neon-blue border border-neon-blue/30 uppercase tracking-[0.2em] text-[10px] shadow-[0_0_15px_rgba(0,243,255,0.05)] hover:shadow-neon-blue">
          Send_Message
        </a>
        <a href="https://www.linkedin.com/in/daniel-illenberger-0021094b/" target="_blank" rel="noreferrer" className="bg-white/5 hover:bg-white/10 px-8 py-3 font-bold border border-white/10 hover:border-white/20 transition-all text-white uppercase tracking-[0.2em] text-[10px]">
          LinkedIn
        </a>
      </div>
    </div>
    <div className="mt-12 text-center text-slate-600 text-xs font-mono">
      &copy; {new Date().getFullYear()} Daniel Illenberger. System Architecture: React / Tailwind / Gemini.
    </div>
  </footer>
);

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
      <Experience highlightedIds={analysisResults?.highlightedExpIds} />
      <Projects highlightedNames={analysisResults?.highlightedProjectNames} />
      <Skills highlightedSkills={analysisResults?.highlightedSkillNames} />
      <Education />
      <Footer />
    </>
  );
};

const BlogPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const activePost = id ? BLOG_POSTS.find(p => p.id === id) : BLOG_POSTS[0];

  useEffect(() => {
    if (!id && BLOG_POSTS.length > 0) {
      navigate(`/blog/${BLOG_POSTS[0].id}`, { replace: true });
    }
  }, [id, navigate]);

  return (
    <div className="max-w-7xl mx-auto pt-24 pb-16 px-6 relative flex flex-col lg:flex-row gap-12">
      <div className="lg:w-1/3 lg:sticky lg:top-24 lg:h-[calc(100vh-8rem)] overflow-y-auto pr-4">
        <h2 className="text-2xl font-bold mb-6 text-neon-blue uppercase tracking-widest border-b border-slate-800 pb-2">DATA_LOGS</h2>
        <div className="space-y-4">
          {BLOG_POSTS.map(post => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className={`block p-4 border transition-all group ${activePost?.id === post.id ? 'bg-neon-blue/10 border-neon-blue' : 'bg-transparent border-slate-800 hover:border-neon-blue/50'}`}
            >
              <h3 className={`font-bold uppercase tracking-wide mb-1 transition-colors ${activePost?.id === post.id ? 'text-neon-blue' : 'text-slate-300 group-hover:text-white'}`}>{post.title}</h3>
              <div className="flex justify-between text-xs text-slate-500 font-mono">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="lg:w-2/3 min-h-[500px]">
        {activePost ? (
          <article className="glass-panel p-8 md:p-12 animate-fade-in-up relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <Icons.Github /> {/* Placeholder for a decorative icon */}
            </div>
            <div className="mb-8 border-b border-slate-800 pb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {activePost.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-slate-900 border border-slate-700 text-xs font-mono text-neon-green uppercase">
                    #{tag}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-tighter text-white">{activePost.title}</h1>
              <div className="flex gap-4 text-slate-500 text-sm font-mono border-l-2 border-neon-blue pl-4">
                <span>{activePost.date}</span>
                <span>//</span>
                <span>{activePost.readTime}</span>
              </div>
            </div>
            <div className="prose prose-invert max-w-none prose-p:text-slate-300 prose-p:font-mono prose-headings:text-neon-blue prose-headings:uppercase prose-headings:tracking-wide prose-a:text-neon-purple hover:prose-a:text-neon-blue prose-code:text-acid-yellow prose-strong:text-white">
              {activePost.content || <p>{activePost.summary}</p>}
            </div>
          </article>
        ) : (
          <div className="flex items-center justify-center h-full text-slate-500 font-mono">
            Awaiting input...
          </div>
        )}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-neon-blue/30 relative">
      <CityscapeBackground />
      <div className="relative z-10">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPage />} />
        </Routes>
        <AIChat />
      </div>
    </div>
  );
};

export default App;

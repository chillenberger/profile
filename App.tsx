
import React, { useEffect } from 'react';
import { Routes, Route, Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import { EXPERIENCES, EDUCATION, PROJECTS, SKILLS, BLOG_POSTS, Icons } from './constants';
import AIChat from './components/AIChat';
import { CityscapeBackground } from './components/CityscapeBackground';



const Nav: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const scrollToSection = (id: string, e: React.MouseEvent) => {
    if (!isHome) return; // Allow normal navigation if not on home
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-40 bg-cyber-black/90 backdrop-blur-sm border-b border-neon-blue/20">
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
          <a href="#contact" className="bg-neon-blue/10 hover:bg-neon-blue/20 text-neon-blue border border-neon-blue px-4 py-2 text-sm font-bold uppercase tracking-wider transition-all shadow-[0_0_10px_rgba(0,243,255,0.2)] hover:shadow-neon-blue">
            Init_Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

const Hero: React.FC = () => (
  <section id="about" className="pt-24 pb-16 px-6 max-w-6xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-neon-blue/5 border border-neon-blue/20 text-neon-blue text-xs font-mono uppercase tracking-widest">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full bg-neon-blue opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 bg-neon-blue"></span>
          </span>
          System Status: Online
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter uppercase font-mono animate-flicker">
          Daniel <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple text-shadow-neon">
            Illenberger
          </span>
        </h1>
        <p className="text-lg text-slate-400 max-w-lg leading-relaxed font-mono">
          System Architect / Full-Stack Engineer. <br />
          Directives: <span className="text-neon-blue">Safety</span>, <span className="text-neon-purple">Scalability</span>, <span className="text-neon-green">Performance</span>.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#experience" className="bg-neon-blue/10 hover:bg-neon-blue/20 text-neon-blue px-6 py-3 font-bold transition-all border border-neon-blue shadow-[0_0_15px_rgba(0,243,255,0.2)] hover:shadow-neon-blue uppercase tracking-widest text-sm">
            Access_Logs
          </a>
          <a href="https://github.com/chillenberger" target="_blank" rel="noreferrer" className="bg-transparent hover:bg-slate-800 text-slate-300 px-6 py-3 font-bold transition-all border border-slate-700 hover:border-slate-500 uppercase tracking-widest text-sm flex items-center gap-2">
            <Icons.Github /> Github
          </a>
        </div>
      </div>
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-blue to-neon-purple opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 blur-sm"></div>
        <div className="relative bg-cyber-black border border-slate-800 p-8 space-y-6 overflow-hidden shadow-2xl">
          {/* Terminal Header */}
          <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-4">
            <div className="text-xs font-mono text-slate-500">USER: DANIEL.ILLENBERGER</div>
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-slate-600"></div>
              <div className="w-2 h-2 bg-slate-600"></div>
            </div>
          </div>

          <div className="space-y-4 font-mono text-sm sm:text-base text-neon-blue text-shadow-neon">
            <div className="flex gap-4">
              <span className="text-slate-600">01</span>
              <p><span className="text-neon-purple">const</span> engineer = {'{'}</p>
            </div>
            <div className="flex gap-4">
              <span className="text-slate-600">02</span>
              <p className="ml-4">specialty: <span className="text-acid-yellow">'Full Stack'</span>,</p>
            </div>
            <div className="flex gap-4">
              <span className="text-slate-600">03</span>
              <p className="ml-4">origination: <span className="text-acid-yellow">'Nuclear_Eng'</span>,</p>
            </div>
            <div className="flex gap-4">
              <span className="text-slate-600">04</span>
              <p className="ml-4">current_status: <span className="text-neon-green">'Building'</span>,</p>
            </div>
            <div className="flex gap-4">
              <span className="text-slate-600">05</span>
              <p>{'}'}</p>
            </div>
            <div className="flex gap-4 animate-pulse">
              <span className="text-slate-600">06</span>
              <p className="ml-4">_</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SectionHeading: React.FC<{ children: React.ReactNode; id: string; subtitle?: string }> = ({ children, id, subtitle }) => (
  <div className="mb-12" id={id}>
    <h2 className="text-3xl font-bold mb-4 uppercase tracking-widest text-white flex items-center gap-4">
      <span className="text-neon-blue text-2xl font-mono">0x{id.substring(0, 2).toUpperCase()}</span>
      {children}
    </h2>
    {subtitle && <p className="text-slate-400 font-mono text-sm max-w-2xl border-l-2 border-neon-blue pl-4">{subtitle}</p>}
  </div>
);

const Experience: React.FC = () => (
  <section id="experience" className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-900/50">
    <SectionHeading id="experience" subtitle="Professional employment history log.">
      Experience_Log
    </SectionHeading>
    <div className="space-y-12">
      {EXPERIENCES.map((exp) => (
        <div key={exp.id} className="relative pl-8 border-l border-slate-800 group hover:border-neon-blue transition-colors">
          <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-cyber-black border border-slate-600 group-hover:border-neon-blue group-hover:bg-neon-blue transition-colors"></div>
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
      ))}
    </div>
  </section>
);

const Projects: React.FC = () => (
  <section id="projects" className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-900/50">
    <SectionHeading id="projects" subtitle="Selected side projects and technical deep-dives.">
      Project_Database
    </SectionHeading>
    <div className="grid md:grid-cols-2 gap-8">
      {PROJECTS.map((project) => (
        <div key={project.name} className="bg-cyber-black/80 backdrop-blur-sm border border-slate-800 p-8 hover:bg-slate-900/30 transition-all group flex flex-col h-full shadow-lg hover:shadow-neon-purple hover:border-neon-purple/50">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl font-bold uppercase tracking-wider text-neon-purple text-shadow-purple">{project.name}</h3>
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

const Skills: React.FC = () => (
  <section id="skills" className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-900/50">
    <SectionHeading id="skills" subtitle="My core stack and specialized competencies.">
      Technical_Toolkit
    </SectionHeading>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {SKILLS.map((cat) => (
        <div key={cat.category} className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-widest text-neon-green border-b border-neon-green/30 pb-2">
            {cat.category}
          </h4>
          <div className="flex flex-col gap-2">
            {cat.items.map(item => (
              <div key={item} className="flex items-center gap-3 text-slate-300 font-mono text-sm">
                <div className="w-1 h-1 bg-neon-green"></div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Education: React.FC = () => (
  <section id="education" className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-900/50">
    <SectionHeading id="education" subtitle="Academic background and specialized certifications.">
      Education_Records
    </SectionHeading>
    <div className="grid md:grid-cols-2 gap-8">
      {EDUCATION.map((edu) => (
        <div key={edu.school} className="bg-cyber-black/80 backdrop-blur-sm border border-slate-800 p-8 shadow-lg hover:border-neon-blue/40 transition-colors">
          <span className="text-neon-blue font-mono text-sm border border-neon-blue/20 px-2 py-0.5 bg-neon-blue/5">{edu.period}</span>
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
  <footer id="contact" className="py-12 border-t border-slate-900 px-6 bg-cyber-black/50 backdrop-blur-sm">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-center md:text-left">
        <h3 className="text-xl font-bold mb-2 uppercase tracking-widest text-white">Initialize_Connection</h3>
        <p className="text-slate-400 font-mono text-sm">Open for senior engineering roles & interesting projects.</p>
        <p className="text-neon-blue mt-2 font-mono text-sm">dan.overpass519@passinbox.com</p>
      </div>
      <div className="flex gap-4">
        <a href="mailto:dan.overpass519@passinbox.com" className="bg-neon-blue/10 hover:bg-neon-blue/20 px-6 py-3 font-bold transition-all text-neon-blue border border-neon-blue uppercase tracking-widest text-sm shadow-[0_0_10px_rgba(0,243,255,0.1)] hover:shadow-neon-blue">
          Email_Me
        </a>
        <a href="https://www.linkedin.com/in/daniel-illenberger-0021094b/" target="_blank" rel="noreferrer" className="bg-transparent hover:bg-slate-800 px-6 py-3 font-bold border border-slate-700 hover:border-slate-500 transition-all text-white uppercase tracking-widest text-sm">
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

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.slice(1));
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <Skills />
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
          <article className="bg-cyber-black/40 border border-slate-800 p-8 md:p-12 animate-fade-in-up relative overflow-hidden">
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

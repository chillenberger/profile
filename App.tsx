
import React, { useEffect } from 'react';
import { Routes, Route, Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import { EXPERIENCES, EDUCATION, PROJECTS, SKILLS, BLOG_POSTS, Icons } from './constants';
import AIChat from './components/AIChat';

const Background: React.FC = () => (
  <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-slate-950">
    <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[70%] rounded-full bg-primary/20 blur-[120px] animate-blob"></div>
    <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[80%] rounded-full bg-blue-600/15 blur-[120px] animate-blob animation-delay-4000"></div>
    <div className="absolute top-[30%] right-[-20%] w-[60%] h-[60%] rounded-full bg-indigo-500/15 blur-[120px] animate-blob animation-delay-8000"></div>

    <div className="absolute top-[10%] left-[10%] w-[150px] h-[150px] bg-primary/10 rounded-full blur-[60px] animate-float-slow"></div>
    <div className="absolute bottom-[20%] right-[15%] w-[200px] h-[200px] bg-blue-500/10 rounded-full blur-[80px] animate-float-slow animation-delay-2000"></div>
    <div className="absolute top-[50%] left-[40%] w-[100px] h-[100px] bg-white/5 rounded-full blur-[40px] animate-float-slow animation-delay-4000"></div>

    <div className="absolute top-[20%] left-[30%] w-1.5 h-1.5 bg-primary/60 rounded-full animate-wander"></div>
    <div className="absolute top-[60%] right-[40%] w-2 h-2 bg-blue-400/50 rounded-full animate-wander-delayed animation-delay-2000"></div>
    <div className="absolute bottom-[10%] left-[50%] w-1.5 h-1.5 bg-white/40 rounded-full animate-wander-slow animation-delay-4000"></div>

    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_90%_90%_at_50%_0%,#000_80%,transparent_100%)]"></div>

    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.6)_100%)]"></div>
  </div>
);

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
    <nav className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-black text-primary">
          DI
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <Link to="/#about" onClick={(e) => scrollToSection('about', e)} className="hover:text-white transition-colors">About</Link>
          <Link to="/#experience" onClick={(e) => scrollToSection('experience', e)} className="hover:text-white transition-colors">Experience</Link>
          <Link to="/#projects" onClick={(e) => scrollToSection('projects', e)} className="hover:text-white transition-colors">Projects</Link>
          <Link
            to="/blog"
            className={`
              px-3 py-1 rounded-md transition-all border 
              ${location.pathname.startsWith('/blog')
                ? 'bg-primary border-primary text-white shadow-[0_0_10px_rgba(226,114,91,0.3)]'
                : 'bg-slate-900/50 border-slate-700 text-slate-300 hover:bg-primary/10 hover:border-primary/50 hover:text-white hover:shadow-[0_0_10px_rgba(226,114,91,0.1)]'
              }
            `}
          >
            Blog
          </Link>
          <Link to="/#skills" onClick={(e) => scrollToSection('skills', e)} className="hover:text-white transition-colors">Skills</Link>
          <Link to="/#education" onClick={(e) => scrollToSection('education', e)} className="hover:text-white transition-colors">Education</Link>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/chillenberger" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors" title="GitHub">
            <Icons.Github />
          </a>
          <a href="https://www.linkedin.com/in/daniel-illenberger-0021094b/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors" title="LinkedIn">
            <Icons.Linkedin />
          </a>
          <a href="#contact" className="bg-primary hover:opacity-90 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all">
            Contact
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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Currently: Full-Stack Engineer
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
          Daniel <br />
          <span className="text-primary">
            Illenberger
          </span>
        </h1>
        <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
          A Full-Stack Software Engineer with a background in <span className="text-white font-semibold italic">Physics</span> and <span className="text-white font-semibold italic">Nuclear Engineering</span>. I build high-performance systems where safety, scalability, and modern design converge.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#experience" className="bg-slate-100 hover:bg-white text-slate-900 px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-primary/10">
            View Experience
          </a>
          <a href="https://github.com/chillenberger" target="_blank" rel="noreferrer" className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl font-bold transition-all border border-slate-700">
            Github
          </a>
        </div>
      </div>
      <div className="relative group animate-tilt">
        <div className="absolute -inset-1 bg-primary rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6 overflow-hidden shadow-2xl">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
          </div>
          <div className="space-y-4 font-mono text-sm sm:text-base">
            <div className="flex gap-4">
              <span className="text-slate-500">01</span>
              <p><span className="text-primary">const</span> engineer = {'{'}</p>
            </div>
            <div className="flex gap-4">
              <span className="text-slate-500">02</span>
              <p className="ml-4">specialty: <span className="text-primary">'Full Stack'</span>,</p>
            </div>
            <div className="flex gap-4">
              <span className="text-slate-500">03</span>
              <p className="ml-4">founding: <span className="text-primary">'Hyperparam Inc'</span>,</p>
            </div>
            <div className="flex gap-4">
              <span className="text-slate-500">04</span>
              <p className="ml-4">background: <span className="text-amber-400">['Physics', 'Nuclear Ops']</span>,</p>
            </div>
            <div className="flex gap-4">
              <span className="text-slate-500">05</span>
              <p className="ml-4">passions: [<span className="text-primary">'Rust'</span>, <span className="text-primary">'AI'</span>, <span className="text-primary">'UX'</span>]</p>
            </div>
            <div className="flex gap-4">
              <span className="text-slate-500">06</span>
              <p>{'}'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SectionHeading: React.FC<{ children: React.ReactNode; id: string; subtitle?: string }> = ({ children, id, subtitle }) => (
  <div className="mb-12" id={id}>
    <h2 className="text-3xl font-bold mb-4">{children}</h2>
    {subtitle && <p className="text-slate-400">{subtitle}</p>}
    <div className="h-1 w-20 bg-primary rounded-full mt-4"></div>
  </div>
);

const Experience: React.FC = () => (
  <section id="experience" className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-900/50">
    <SectionHeading id="experience" subtitle="My professional journey across tech and engineering sectors.">
      Work Experience
    </SectionHeading>
    <div className="space-y-12">
      {EXPERIENCES.map((exp) => (
        <div key={exp.id} className="relative pl-8 border-l-2 border-slate-800 group hover:border-primary/50 transition-colors">
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-950 border-2 border-slate-800 group-hover:border-primary transition-colors"></div>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{exp.role}</h3>
              <p className="text-slate-300 font-medium">{exp.company}</p>
            </div>
            <div className="mt-2 md:mt-0 text-slate-500 text-sm font-mono">
              {exp.period} • {exp.location}
            </div>
          </div>
          <ul className="space-y-3 mb-6">
            {exp.description.map((bullet, idx) => (
              <li key={idx} className="text-slate-400 text-sm leading-relaxed flex gap-3">
                <span className="text-primary mt-1">•</span>
                {bullet}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {exp.skills?.map(skill => (
              <span key={skill} className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono text-slate-300">
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
      Projects
    </SectionHeading>
    <div className="grid md:grid-cols-2 gap-8">
      {PROJECTS.map((project) => (
        <div key={project.name} className="bg-slate-950/80 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 hover:bg-slate-900/50 transition-all group flex flex-col h-full shadow-lg">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl font-bold">{project.name}</h3>
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
                <Icons.Github />
              </a>
            )}
          </div>
          <p className="text-slate-400 mb-6 flex-grow">{project.description}</p>
          <div className="space-y-4">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-2">Technologies</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-2">Key Features</p>
              <ul className="grid grid-cols-2 gap-2">
                {project.uses.map(use => (
                  <li key={use} className="text-xs text-slate-500 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-slate-600"></span>
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
      Technical Toolkit
    </SectionHeading>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {SKILLS.map((cat) => (
        <div key={cat.category} className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 border-b border-slate-800 pb-2">
            {cat.category}
          </h4>
          <div className="flex flex-col gap-2">
            {cat.items.map(item => (
              <div key={item} className="flex items-center gap-3 text-slate-300">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
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
      Education
    </SectionHeading>
    <div className="grid md:grid-cols-2 gap-8">
      {EDUCATION.map((edu) => (
        <div key={edu.school} className="bg-slate-950/80 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl shadow-lg">
          <span className="text-primary font-mono text-sm">{edu.period}</span>
          <h3 className="text-xl font-bold mt-2">{edu.degree}</h3>
          <p className="text-slate-300 mb-1">{edu.school}</p>
          <p className="text-slate-500 text-sm mb-4">{edu.location}</p>
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
  <footer id="contact" className="py-12 border-t border-slate-900 px-6 bg-slate-950/50 backdrop-blur-sm">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-center md:text-left">
        <h3 className="text-xl font-bold mb-2">Let's connect</h3>
        <p className="text-slate-400">Open for senior engineering roles & interesting projects.</p>
        <p className="text-primary mt-2 font-mono text-sm">dan.overpass519@passinbox.com</p>
      </div>
      <div className="flex gap-4">
        <a href="mailto:dan.overpass519@passinbox.com" className="bg-primary hover:opacity-90 px-6 py-3 rounded-xl font-bold transition-all text-white">
          Email Me
        </a>
        <a href="https://www.linkedin.com/in/daniel-illenberger-0021094b/" target="_blank" rel="noreferrer" className="bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-xl font-bold border border-slate-700 transition-all text-white">
          LinkedIn
        </a>
      </div>
    </div>
    <div className="mt-12 text-center text-slate-600 text-sm">
      &copy; {new Date().getFullYear()} Daniel Illenberger. Built with React, Tailwind & Gemini API.
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
      <div className="lg:w-1/3 lg:sticky lg:top-24 lg:h-[calc(100vh-8rem)] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6">Articles</h2>
        <div className="space-y-4">
          {BLOG_POSTS.map(post => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className={`block p-4 rounded-xl border transition-all ${activePost?.id === post.id ? 'bg-primary/10 border-primary' : 'bg-slate-900/50 border-slate-800 hover:border-slate-600'}`}
            >
              <h3 className="font-bold text-slate-200 mb-1">{post.title}</h3>
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
          <article className="bg-slate-900/40 border border-slate-800 p-8 md:p-12 rounded-3xl animate-fade-in-up">
            <div className="mb-8 border-b border-slate-800 pb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {activePost.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-slate-800 rounded text-xs font-mono text-slate-400">
                    #{tag}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{activePost.title}</h1>
              <div className="flex gap-4 text-slate-500 text-sm font-mono">
                <span>{activePost.date}</span>
                <span>•</span>
                <span>{activePost.readTime}</span>
              </div>
            </div>
            <div className="prose prose-invert max-w-none prose-p:text-slate-300 prose-headings:text-white prose-a:text-primary hover:prose-a:underline">
              {activePost.content || <p>{activePost.summary}</p>}
            </div>
          </article>
        ) : (
          <div className="flex items-center justify-center h-full text-slate-500">
            Select a post to read
          </div>
        )}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-primary/30 relative">
      <Background />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPage />} />
      </Routes>
      <AIChat />
    </div>
  );
};

export default App;

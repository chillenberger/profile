import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icons } from '../Experience';

const Nav: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [scrollY, setScrollY] = React.useState(0);
  const [activeSection, setActiveSection] = React.useState<string>('');

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isHome) {
      setActiveSection('');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px' // Trigger when element is in the middle of the viewport
      }
    );

    const sections = ['about', 'customize', 'experience', 'projects', 'skills', 'education'];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [isHome, location]);

  const scrollToSection = (id: string, e: React.MouseEvent) => {
    setIsMenuOpen(false); // Close mobile menu on click
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

  const renderNavLink = (to: string, label: string, id: string, isMobile = false) => {
    const isActive = isHome && activeSection === id;

    return (
      <Link
        to={to}
        onClick={(e) => scrollToSection(id, e)}
        className={`
          hover:text-neon-blue hover:text-shadow-neon transition-all uppercase tracking-wide flex items-center gap-2
          ${isMobile ? 'text-lg py-3 border-b border-white/5 w-full' : ''}
        `}
      >
        <div className={`w-1.5 h-1.5 bg-neon-green/90 rounded-full transition-opacity duration-300 ${isActive ? 'opacity-100 animate-pulse' : 'opacity-0'}`}></div>
        {label}
      </Link>
    );
  };

  return (
    <nav
      className="sticky top-0 z-40 backdrop-blur-sm transition-colors duration-300"
      style={{
        backgroundColor: isMenuOpen ? 'rgba(0, 0, 0, 0.95)' : `rgba(10, 11, 14, ${opacity * 0.95})`,
        borderBottom: isMenuOpen ? '1px solid rgba(255, 255, 255, 0.1)' : `1px solid rgba(255, 255, 255, ${opacity * 0.05})`
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-black text-neon-blue tracking-widest hover:text-shadow-neon transition-all z-50" onClick={() => setIsMenuOpen(false)}>
          DI_SYSTEM
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-mono text-slate-400">
          {renderNavLink('/#about', 'About', 'about')}
          {renderNavLink('/#customize', 'Customize', 'customize')}
          {renderNavLink('/#experience', 'Experience', 'experience')}
          {renderNavLink('/#projects', 'Projects', 'projects')}
          {renderNavLink('/#skills', 'Skills', 'skills')}
          {renderNavLink('/#education', 'Education', 'education')}
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
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-slate-400 hover:text-neon-blue z-50 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <Icons.Close className="w-8 h-8" />
          ) : (
            <Icons.Menu className="w-8 h-8" />
          )}
        </button>

        {/* Mobile Navigation Overlay */}
        <div
          className={`
            absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl z-40 lg:hidden
            flex flex-col items-start px-6 py-4 gap-2 transition-all duration-300 origin-top
            ${isMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}
          `}
        >
          {renderNavLink('/#about', 'About', 'about', true)}
          {renderNavLink('/#customize', 'Customize', 'customize', true)}
          {renderNavLink('/#experience', 'Experience', 'experience', true)}
          {renderNavLink('/#projects', 'Projects', 'projects', true)}
          {renderNavLink('/#skills', 'Skills', 'skills', true)}
          {renderNavLink('/#education', 'Education', 'education', true)}
          <Link
            to="/blog"
            onClick={() => setIsMenuOpen(false)}
            className={`
              text-lg py-3 border-b border-white/5 w-full uppercase tracking-wide font-bold flex items-center gap-2
              ${location.pathname.startsWith('/blog')
                ? 'text-neon-blue'
                : 'text-slate-500 hover:text-neon-blue'
              }
            `}
          >
            <div className="w-1.5 h-1.5 opacity-0"></div>
            Blog
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-4">
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

export default Nav;

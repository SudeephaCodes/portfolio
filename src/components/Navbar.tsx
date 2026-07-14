import React, { useEffect, useState } from 'react';
import { useActiveSection } from '../hooks/useActiveSection';
import { Sun, Moon, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const sections = ['about', 'experience', 'skills', 'projects', 'achievements', 'resume'];
  const activeSection = useActiveSection(sections, 120);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Sync theme status on load
  useEffect(() => {
    const savedTheme = (localStorage.getItem('portfolio-theme') as 'dark' | 'light') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('portfolio-theme', nextTheme);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-inner">
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, 'hero')}
          className="nav-logo"
          style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}
        >
          <svg className="logo-loop" viewBox="0 0 100 100" width="38" height="38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M25 50 C10 25, 40 5, 50 50 C60 95, 90 75, 75 50 C60 25, 40 5, 25 50 C10 75, 40 95, 50 50 C60 5, 90 25, 75 50"
              stroke="url(#logoGrad)"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="240"
              strokeDashoffset="0"
            >
              <animate attributeName="stroke-dashoffset" values="0;480" dur="4s" repeatCount="indefinite" />
            </path>
            <defs>
              <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--accent-1)" />
                <stop offset="50%" stopColor="var(--accent-2)" />
                <stop offset="100%" stopColor="var(--accent-5)" />
              </linearGradient>
            </defs>
          </svg>
          <span style={{
            fontWeight: 800,
            background: 'var(--gradient-warm)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontSize: '1.4rem',
            letterSpacing: '-0.5px'
          }}>
            Sudeepha_R
          </span>
        </a>
        
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`} id="navLinks">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={activeSection === section ? 'active' : ''}
                onClick={(e) => handleLinkClick(e, section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
          <li>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'light' ? (
                <Moon style={{ width: '20px', height: '20px' }} />
              ) : (
                <Sun style={{ width: '20px', height: '20px' }} />
              )}
            </button>
          </li>
        </ul>

        <button
          className="nav-hamburger"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X style={{ width: '28px', height: '28px' }} />
          ) : (
            <Menu style={{ width: '28px', height: '28px' }} />
          )}
        </button>
      </div>
    </nav>
  );
};

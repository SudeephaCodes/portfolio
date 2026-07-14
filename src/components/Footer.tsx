import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer" id="contact">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
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
              <p>Jr.Software Developer crafting secure, scalable web applications. Always learning, always building.</p>
              <div className="footer-social">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href={`mailto:${personalInfo.email}`} className="social-link" aria-label="Email">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#about" onClick={(e) => handleScrollTo(e, 'about')}>About</a></li>
                <li><a href="#experience" onClick={(e) => handleScrollTo(e, 'experience')}>Experience</a></li>
                <li><a href="#skills" onClick={(e) => handleScrollTo(e, 'skills')}>Skills</a></li>
                <li><a href="#projects" onClick={(e) => handleScrollTo(e, 'projects')}>Projects</a></li>
                <li><a href="#achievements" onClick={(e) => handleScrollTo(e, 'achievements')}>Achievements</a></li>
                <li><a href="#resume" onClick={(e) => handleScrollTo(e, 'resume')}>Resume</a></li>
              </ul>
            </div>

            {/* Expertise */}
            <div>
              <h4 className="footer-heading">Expertise</h4>
              <ul className="footer-links">
                <li><a href="#skills" onClick={(e) => handleScrollTo(e, 'skills')}>Full-Stack Development</a></li>
                <li><a href="#skills" onClick={(e) => handleScrollTo(e, 'skills')}>React & React Native</a></li>
                <li><a href="#skills" onClick={(e) => handleScrollTo(e, 'skills')}>ASP.NET / Node.js</a></li>
                <li><a href="#skills" onClick={(e) => handleScrollTo(e, 'skills')}>REST API Design</a></li>
                <li><a href="#skills" onClick={(e) => handleScrollTo(e, 'skills')}>Cybersecurity</a></li>
                <li><a href="#skills" onClick={(e) => handleScrollTo(e, 'skills')}>UI/UX Design</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="footer-heading">Get In Touch</h4>
              <div className="footer-contact-item" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={18} />
                <span>{personalInfo.location}</span>
              </div>
              <div className="footer-social" style={{ marginTop: '16px', justifyContent: 'flex-start' }}>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                  <Github size={18} />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
                <a href={`mailto:${personalInfo.email}`} className="social-link" aria-label="Email">
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p className="footer-copyright">© 2026 <span className="highlight">{personalInfo.name}</span>. All rights reserved.</p>
            <div className="footer-tech">
              Built with <span>&lt;/&gt;</span> React, Vite & TypeScript
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

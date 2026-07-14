import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Download, ChevronDown, Award } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }
    }
  };

  // SVG Line Drawing Variants
  const lineDrawVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 0.4,
      transition: { duration: 1.8, ease: 'easeInOut', delay: 0.8 }
    }
  };

  return (
    <section className="hero" id="hero" style={{ position: 'relative' }}>
      {/* Cybersecurity Decorative Reticle Overlay */}
      <div 
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          right: '5%',
          bottom: '10%',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
          {/* Top-Left Corner */}
          <motion.path
            d="M 0 40 L 0 0 L 40 0"
            fill="none"
            stroke="var(--accent-5)"
            strokeWidth="2"
            variants={lineDrawVariants}
            initial="hidden"
            animate="visible"
          />
          {/* Top-Right Corner */}
          <motion.path
            d="M calc(100% - 40) 0 L 100% 0 L 100% 40"
            fill="none"
            stroke="var(--accent-5)"
            strokeWidth="2"
            variants={lineDrawVariants}
            initial="hidden"
            animate="visible"
          />
          {/* Bottom-Left Corner */}
          <motion.path
            d="M 0 calc(100% - 40) L 0 100% L 40 100%"
            fill="none"
            stroke="var(--accent-5)"
            strokeWidth="2"
            variants={lineDrawVariants}
            initial="hidden"
            animate="visible"
          />
          {/* Bottom-Right Corner */}
          <motion.path
            d="M calc(100% - 40) 100% L 100% 100% L 100% calc(100% - 40)"
            fill="none"
            stroke="var(--accent-5)"
            strokeWidth="2"
            variants={lineDrawVariants}
            initial="hidden"
            animate="visible"
          />
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="hero-badge" variants={itemVariants}>
            <Award size={16} />
            Ready To Make An Impact
          </motion.span>
          
          <motion.h1 className="hero-name" variants={itemVariants}>
            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>
          
          <motion.p className="hero-title" variants={itemVariants}>
            {personalInfo.role}
          </motion.p>
          
          <motion.p className="hero-description" variants={itemVariants}>
            {personalInfo.description}
          </motion.p>
          
          <motion.div className="hero-buttons" variants={itemVariants}>
            <motion.a
              href="#projects"
              onClick={(e) => handleScrollTo(e, 'projects')}
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BookOpen size={18} />
              View Projects
            </motion.a>
            <motion.a
              href="#resume"
              onClick={(e) => handleScrollTo(e, 'resume')}
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText size={18} />
              View Resume
            </motion.a>
            <motion.a
              href={personalInfo.resumePdf}
              download="Sudeepha_R_Resume.pdf"
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} />
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="hero-scroll">
        <ChevronDown size={24} />
      </div>
    </section>
  );
};

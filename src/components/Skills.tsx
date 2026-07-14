import React from 'react';
import { motion } from 'framer-motion';
import {
  Monitor,
  Server,
  Database as DbIcon,
  PenTool,
  Cpu,
  ShieldAlert,
  Code,
  Shield,
  Palette,
  Terminal,
  Layers,
  Database
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

// Map icon strings to Lucide components
const CategoryIcon: React.FC<{ name: string }> = ({ name }) => {
  const iconSize = 24;
  switch (name) {
    case 'Monitor':
      return <Monitor size={iconSize} />;
    case 'Server':
      return <Server size={iconSize} />;
    case 'Database':
      return <DbIcon size={iconSize} />;
    case 'PenTool':
      return <PenTool size={iconSize} />;
    case 'Cpu':
      return <Cpu size={iconSize} />;
    case 'ShieldAlert':
      return <ShieldAlert size={iconSize} />;
    default:
      return <Code size={iconSize} />;
  }
};

// Map tag names to representative icons
const TagIcon: React.FC<{ tag: string }> = ({ tag }) => {
  const size = 14;
  const lower = tag.toLowerCase();

  if (lower.includes('html') || lower.includes('css') || lower.includes('javascript') || lower.includes('js') || lower.includes('php') || lower.includes('java') || lower.includes('c#')) {
    return <Code size={size} />;
  }
  if (lower.includes('react') || lower.includes('native') || lower.includes('express') || lower.includes('asp.net')) {
    return <Layers size={size} />;
  }
  if (lower.includes('sql') || lower.includes('database') || lower.includes('mysql') || lower.includes('server') || lower.includes('api')) {
    return <Database size={size} />;
  }
  if (lower.includes('figma') || lower.includes('stitch') || lower.includes('ui/ux') || lower.includes('design')) {
    return <Palette size={size} />;
  }
  if (lower.includes('security') || lower.includes('owasp') || lower.includes('splunk') || lower.includes('protection') || lower.includes('chain')) {
    return <Shield size={size} />;
  }
  if (lower.includes('context') || lower.includes('validation') || lower.includes('orm') || lower.includes('ai')) {
    return <Cpu size={size} />;
  }
  return <Terminal size={size} />;
};

export const Skills: React.FC = () => {
  const cardHoverVariants = {
    hovered: {}
  };

  const iconBounceVariants = {
    hovered: {
      scale: 1.25,
      rotate: 15,
      transition: { type: 'spring', stiffness: 300, damping: 10 }
    }
  };

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-label">// Tech Stack</span>
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-line"></div>
        </div>

        <div className="skills-grid">
          {skillsData.map((category, idx) => (
            <motion.div
              key={idx}
              className="gradient-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover="hovered"
              variants={cardHoverVariants}
            >
              <h3 className="skill-category-title">
                <motion.span 
                  className={`skill-icon ${category.name.toLowerCase().replace(/[^a-z0-9]/g, '')}`}
                  variants={iconBounceVariants}
                  style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <CategoryIcon name={category.icon} />
                </motion.span>
                {category.name}
              </h3>
              <div className="skill-tags">
                {category.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="skill-tag">
                    <TagIcon tag={tag} />
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

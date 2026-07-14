import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { projectsData, ProjectItem } from '../data/portfolioData';

const ProjectCard: React.FC<{ item: ProjectItem; index: number }> = ({ item, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState('perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Set glow variables on the gradient-card container
    const gradCard = card.querySelector('.gradient-card') as HTMLDivElement;
    if (gradCard) {
      gradCard.style.setProperty('--mouse-x', `${x}px`);
      gradCard.style.setProperty('--mouse-y', `${y}px`);
    }

    // 3D Tilt calculation
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    setTransformStyle(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    setTransformStyle('perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)');
  };

  return (
    <motion.div
      ref={cardRef}
      className="project-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div 
        className="project-card-inner" 
        style={{ transform: transformStyle, transition: 'transform 0.1s ease-out' }}
      >
        <div className="gradient-card" style={{ position: 'relative' }}>
          {/* Futuristic Radial Cursor Glow Overlay */}
          <div 
            style={{
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              background: 'radial-gradient(350px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(6, 182, 212, 0.08), transparent 80%)',
              pointerEvents: 'none',
              zIndex: 0,
              borderRadius: 'inherit'
            }}
          />

          <span className="project-number" style={{ position: 'relative', zIndex: 1 }}>{item.number}</span>
          <span className="project-year" style={{ position: 'relative', zIndex: 1 }}>{item.year}</span>
          <h3 className="project-name" style={{ position: 'relative', zIndex: 1 }}>{item.name}</h3>
          <p className="project-tech" style={{ position: 'relative', zIndex: 1 }}>{item.tech}</p>
          <ul className="project-desc" style={{ position: 'relative', zIndex: 1 }}>
            {item.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export const Projects: React.FC = () => {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-label">// What I've Built</span>
          <h2 className="section-title">Projects</h2>
          <div className="section-line"></div>
        </div>

        <div className="projects-grid">
          {projectsData.map((item, index) => (
            <ProjectCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

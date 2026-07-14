import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { aboutData } from '../data/portfolioData';

const StatCard: React.FC<{ label: string; target: number }> = ({ label, target }) => {
  const [count, setCount] = useState(0);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentEl = elementRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, [hasTriggered]);

  useEffect(() => {
    if (!hasTriggered) return;

    let start = 0;
    const end = target;
    const increment = Math.max(1, Math.ceil(end / 30));

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 40);

    return () => clearInterval(timer);
  }, [hasTriggered, target]);

  const suffix = target >= 3 ? '+' : '';

  return (
    <div ref={elementRef} className="stat-card gradient-card">
      <span className="stat-number">
        {count}
        {suffix}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
};

export const About: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        }
      },
      { threshold: 0.15 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [controls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  return (
    <section ref={ref} className="section" id="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          animate={controls}
          variants={cardVariants}
        >
          <span className="section-label">// Who Am I</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-text"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } }
            }}
          >
            {aboutData.content.map((para, index) => {
              // Parse paragraph to add highlight spans
              // We'll replace key terms with highlighted spans dynamically.
              // A simple regex approach will split by highlight indicators or we can render HTML dangerously,
              // but writing a split parsing function is safer and typesafe.
              const parts = para.split(/(Sudeepha R|Jr.Software Developer|React, Node.js, and SQL|UI\/UX design|AI-assisted development|OWASP Top 10, data protection, supply chain security, and network security)/g);
              return (
                <p key={index}>
                  {parts.map((part, pIdx) => {
                    const isHighlight = [
                      "Sudeepha R",
                      "Jr.Software Developer",
                      "React, Node.js, and SQL",
                      "UI/UX design",
                      "AI-assisted development",
                      "OWASP Top 10, data protection, supply chain security, and network security"
                    ].includes(part);
                    return isHighlight ? (
                      <span key={pIdx} className="highlight">{part}</span>
                    ) : (
                      part
                    );
                  })}
                </p>
              );
            })}
          </motion.div>

          <motion.div
            className="about-stats"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.4 } }
            }}
          >
            {aboutData.stats.map((stat, idx) => (
              <StatCard key={idx} label={stat.label} target={stat.target} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

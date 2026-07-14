import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code2 } from 'lucide-react';
import { trainingsData } from '../data/portfolioData';

export const Training: React.FC = () => {
  const radius = 18;
  const circumference = 2 * Math.PI * radius;

  return (
    <section className="section" id="training">
      <div className="container">
        <div className="section-header">
          <span className="section-label">// Continuous Learning</span>
          <h2 className="section-title">Training & Courses</h2>
          <div className="section-line"></div>
        </div>

        <div className="training-console">
          {trainingsData.map((course, index) => {
            const strokeOffset = circumference - (course.progress / 100) * circumference;

            return (
              <motion.div
                key={index}
                className="training-console-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="training-meta">
                  <div className={`training-icon ${course.type === 'ai' ? 'ai-icon' : 'code-icon'}`}>
                    {course.type === 'ai' ? <Cpu size={20} /> : <Code2 size={20} />}
                  </div>
                  <div className="training-info">
                    <h3 className="training-name">{course.name}</h3>
                    <p className="training-provider">{course.provider}</p>
                  </div>
                </div>
                <div className="training-status">
                  <div className="progress-ring-container">
                    <svg className="progress-ring" width="44" height="44">
                      <circle className="progress-ring-circle-bg" cx="22" cy="22" r={radius} />
                      <circle
                        className="progress-ring-circle"
                        cx="22"
                        cy="22"
                        r={radius}
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeOffset}
                        stroke="url(#progressGrad)"
                        style={{
                          transition: 'stroke-dashoffset 1s ease-in-out',
                        }}
                      />
                      <defs>
                        <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="var(--accent-1)" />
                          <stop offset="100%" stopColor="var(--accent-2)" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <span className="progress-text">{course.progress}%</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

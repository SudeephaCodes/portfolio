import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-header">
          <span className="section-label">// Academic Background</span>
          <h2 className="section-title">Education</h2>
          <div className="section-line"></div>
        </div>

        <motion.div
          className="education-panel reveal-scale"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="education-info-block">
            <div className="education-icon">
              <GraduationCap size={24} />
            </div>
            <div className="education-details">
              <h3 className="education-degree">{educationData.degree}</h3>
              <p className="education-institution">{educationData.institution}</p>
              <p className="education-institution" style={{ opacity: 0.8, fontSize: '0.95rem' }}>{educationData.major}</p>
              <span className="education-year">{educationData.duration}</span>
            </div>
          </div>
          <div className="education-highlights-block">
            <div className="education-gpa">Cumulative Grade: <span>{educationData.grade}</span></div>
            <p className="education-courses">Key Coursework: {educationData.coursework}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

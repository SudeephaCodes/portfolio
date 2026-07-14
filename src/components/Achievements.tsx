import React from 'react';
import { motion } from 'framer-motion';
import { Award, IndianRupee } from 'lucide-react';
import { achievementData } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section className="section" id="achievements">
      <div className="container">
        <div className="section-header">
          <span className="section-label">// Recognition</span>
          <h2 className="section-title">Key Achievements</h2>
          <div className="section-line"></div>
        </div>

        <motion.div
          className="achievement-showcase reveal-scale"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="achievement-header-area">
            <div className="achievement-badge">
              <Award size={20} />
            </div>
            <div className="achievement-header-text">
              <h3 className="achievement-title">{achievementData.title}</h3>
              <span className="achievement-date">{achievementData.date}</span>
            </div>
          </div>
          <div className="achievement-columns">
            <div className="achievement-col-left">
              <p className="achievement-text">
                Project <span className="highlight">"Vision-Based Suspicious Detection and Alert System"</span> was selected
                by the <span className="highlight">Foundation for Advancement of Education and Research (FAER)</span>. It was
                showcased at <span className="highlight">REVA University, Bengaluru</span>, earning a Certificate of
                Excellence.
              </p>
            </div>
            <div className="achievement-impact-card">
              <div className="achievement-funding">
                <IndianRupee size={16} style={{ marginRight: '4px' }} />
                {achievementData.funding}
              </div>
              <span className="achievement-impact-text">
                {achievementData.impact}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

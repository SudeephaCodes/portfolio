import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const timeline = timelineRef.current;
      const progressBar = progressBarRef.current;
      if (!timeline || !progressBar) return;

      const rect = timeline.getBoundingClientRect();
      const timelineTop = rect.top;
      const timelineHeight = rect.height;
      const windowHeight = window.innerHeight;

      if (timelineTop < windowHeight && timelineTop + timelineHeight > 0) {
        const scrolled = (windowHeight - timelineTop) / (timelineHeight + windowHeight - 200);
        const progressPercent = Math.min(Math.max(scrolled * 100, 0), 100);
        progressBar.style.height = `${progressPercent}%`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger immediately
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-label">// Career Path</span>
          <h2 className="section-title">Experience</h2>
          <div className="section-line"></div>
        </div>

        <div ref={timelineRef} className="v-timeline" id="vTimeline">
          <div ref={progressBarRef} className="v-timeline-progress" id="vTimelineProgress"></div>

          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              className="v-timeline-item reveal in-view"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="v-timeline-dot"></div>
              <div className="gradient-card">
                <span className="timeline-date">{item.date}</span>
                <h3 className="timeline-role">{item.role}</h3>
                <p className="timeline-company">{item.company}</p>
                <ul className="timeline-details">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx}>{detail}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

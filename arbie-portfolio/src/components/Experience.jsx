import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  const trackRecord = [
    { 
      period: "AY 2025 — 2026", 
      role: "Dean's Lister", 
      company: "University of the Immaculate Conception", 
      type: "Academic Honor" 
    },
    { 
      period: "2025 — Present", 
      role: "Part-Time Web Developer", 
      company: "Independent Client Projects", 
      type: "Contract" 
    },
    { 
      period: "2024 — Present", 
      role: "Interactive Designer", 
      company: "Digital Identity & Visual Design", 
      type: "Contract" 
    }
  ];

  return (
    <section id="experience">
      <motion.div 
        className="section-label"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        02. Experience & Track Record
      </motion.div>
      
      <div className="card-list">
        {trackRecord.map((item, i) => (
          <motion.div 
            key={i}
            className="interactive-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <div className="card-meta">{item.period}</div>
            <div>
              <h3 className="card-title">{item.role}</h3>
              <div className="card-sub">{item.company}</div>
            </div>
            <div className="card-badge">{item.type}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

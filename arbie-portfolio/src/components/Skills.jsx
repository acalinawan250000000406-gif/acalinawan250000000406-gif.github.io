import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Graphic Design",
    "Figma",
    "UI/UX Design",
    "Responsive Web Design",
    "Git & GitHub"
  ];

  return (
    <section id="skills">
      <motion.div 
        className="section-label"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        04. Technical Proficiencies
      </motion.div>

      <div className="skills-premium-grid">
        {skills.map((skill, i) => (
          <motion.div 
            key={i} 
            className="skill-premium-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <span className="skill-index">{(i + 1).toString().padStart(2, '0')}</span>
            <h4 className="skill-name">{skill}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

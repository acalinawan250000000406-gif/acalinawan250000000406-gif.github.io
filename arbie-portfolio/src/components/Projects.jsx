import React from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    { 
      name: "Fashion Blog", 
      tech: "HTML5 • Semantic Web", 
      category: "HTML Activity 1.1",
      link: "https://acalinawan250000000406-gif.github.io/HTML/Activity%201.1/index.html"
    },
    { 
      name: "Wine Festival Schedule", 
      tech: "HTML5 • Structured Layout", 
      category: "HTML Activity 1.2",
      link: "https://acalinawan250000000406-gif.github.io/Wine%20Festival%20Schedule/"
    },
    { 
      name: "Davies Burger", 
      tech: "CSS3 • Layout & Styling", 
      category: "CSS Activity 2.1",
      link: "https://acalinawan250000000406-gif.github.io/Davies%20Burger/"
    }
  ];

  return (
    <section id="projects">
      <motion.div 
        className="section-label"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        03. Selected Projects
      </motion.div>

      <div className="card-list">
        {projects.map((proj, i) => (
          <motion.div 
            key={i}
            className="interactive-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <div className="card-meta">{proj.category}</div>
            <div>
              <h3 className="card-title">{proj.name}</h3>
              <div className="card-sub">{proj.tech}</div>
            </div>
            <a 
              href={proj.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="card-badge"
              style={{ textDecoration: 'none' }}
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
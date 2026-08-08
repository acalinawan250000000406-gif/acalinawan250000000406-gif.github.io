// src/components/Welcome.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function Welcome() {
  return (
    <section id="welcome" className="welcome-section">
      <div className="ambient-glow-container">
        <div className="ambient-glow orb-1"></div>
        <div className="ambient-glow orb-2"></div>
      </div>

      <motion.div 
        className="welcome-content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="welcome-text">
          Crafting refined digital experiences through clean code and intentional aesthetics.
        </h2>
      </motion.div>

      <motion.div 
        className="scroll-indicator-wrapper"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
      >
        <span className="scroll-discover-text">Discover</span>
        <a href="#hero" className="scroll-circle-btn" aria-label="Scroll to Hero">
          <svg viewBox="0 0 24 24">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}

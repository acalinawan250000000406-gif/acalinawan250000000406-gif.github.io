// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <motion.div 
        className="hero-grid"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="hero-text-content">
          <div className="hero-role-badge">
            <span className="badge-dot"></span>
            BS Information Technology
          </div>

          <h1 className="hero-fullname">
            Arbie Bryan
            <span>Calinawan</span>
          </h1>

          <p>
            Bridging web development with graphic design. Dedicated to building clean, technical architectures paired with elevated visual aesthetics.
          </p>

          <div className="hero-stats-row">
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Crafting</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">12+</span>
              <span className="stat-label">Projects Built</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">Davao</span>
              <span className="stat-label">Based, PH</span>
            </div>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="glow-btn hero-primary-btn">
              <span>Selected Works</span>
              <span className="btn-arrow">↓</span>
            </a>
          </div>
        </div>

        <div className="smooth-img-card">
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80" 
            alt="Workspace setup" 
          />
        </div>
      </motion.div>
    </section>
  );
}

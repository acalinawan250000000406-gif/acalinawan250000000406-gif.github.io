import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about">
      <motion.div 
        className="section-label"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        01. About Me
      </motion.div>
      <div className="hero-grid">
        <motion.div 
          className="smooth-img-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80" 
            alt="Interactive Web Design & Development" 
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 400, color: 'var(--text-dark)' }}>
            Blending Technical Precision With Visual Arts
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '1.05rem', marginBottom: '1.2rem' }}>
            I am a 2nd-year Bachelor of Science in Information Technology student at the University of the Immaculate Conception. My core focus lies in web development seamlessly integrated with graphic design.
          </p>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '1.05rem' }}>
            Every line of code and visual asset is crafted with careful attention to typography, spatial rhythm, and smooth layout harmony—ensuring every digital project is both functional and visually engaging.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

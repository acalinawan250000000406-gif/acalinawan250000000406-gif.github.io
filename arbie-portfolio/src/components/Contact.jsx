import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact">
      <motion.div 
        className="section-label"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        05. Get In Touch
      </motion.div>

      <div className="contact-grid">
        <motion.div 
          className="contact-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2>Let's build something exceptional together.</h2>
          <p>
            Have a project in mind, an inquiry, or simply want to connect? Send me a message and I will respond within 24 hours.
          </p>
        </motion.div>

        <motion.form 
          className="contact-form"
          onSubmit={(e) => e.preventDefault()}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </motion.form>
      </div>
    </section>
  );
}

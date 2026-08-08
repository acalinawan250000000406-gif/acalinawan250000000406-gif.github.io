import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroScreen({ onEnter }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleEnter = () => {
    setIsOpening(true);
    // Wait for the arch to scale up before fading the whole overlay out
    setTimeout(() => {
      onEnter();
    }, 1200);
  };

  return (
    <motion.div 
      className="intro-overlay-solare"
      onClick={handleEnter}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <motion.div 
        className="solare-arch"
        initial={{ opacity: 0, y: 15 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          scale: isOpening ? 150 : 1 // Massively expands when clicked
        }}
        transition={{ 
          duration: isOpening ? 1.2 : 1, 
          delay: isOpening ? 0 : 0.2, 
          ease: isOpening ? [0.76, 0, 0.24, 1] : "easeOut" 
        }}
      />
      
      <AnimatePresence>
        {!isOpening && (
          <>
            <motion.h1 
              className="solare-intro-text"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            >
              Bryan's Portfolio
            </motion.h1>

            <motion.span
              className="enter-hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, delay: 1 }}
            >
              Tap anywhere to enter
            </motion.span>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToProperties = () => {
    const el = document.getElementById('properties');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 h-[90vh] flex flex-col items-start justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-tight"
        >
          Corporate Properties
          <span className="text-white/60"> — Where Business Meets Prestige.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-2xl text-white/70 leading-relaxed"
        >
          Ultra-premium plots, commercial spaces and development sites across Gorakhpur. Curated for institutions, enterprises and visionary brands.
        </motion.p>

        <motion.button
          onClick={scrollToProperties}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/5 px-7 py-3 text-xs md:text-sm uppercase tracking-[0.2em] backdrop-blur hover:bg-white hover:text-black transition-colors"
        >
          Explore Properties
          <span className="h-1 w-1 rounded-full bg-current" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;

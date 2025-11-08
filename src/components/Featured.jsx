import React from 'react';
import { motion } from 'framer-motion';

const Featured = () => {
  const features = [
    'Wide Road Access',
    'Prime Location',
    'Utility Ready',
  ];

  return (
    <section className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="aspect-[16/10] w-full rounded-xl overflow-hidden border border-white/10"
          >
            <img
              src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2069&auto=format&fit=crop"
              alt="Medical College Road Plot"
              className="h-full w-full object-cover scale-105 hover:scale-100 transition-transform duration-700"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-sm tracking-widest uppercase text-white/50">Featured Property</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">Medical College Road, Gorakhpur</h2>
            <p className="mt-3 text-white/70">Plotting · 10,000 sq. ft</p>
            <p className="mt-6 text-white/70 leading-relaxed">
              Exclusive 10,000 sq. ft plot on Medical College Road — ideal for corporate offices, institutions, or luxury development.
            </p>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {features.map((f) => (
                <li key={f} className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80">
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm hover:bg-white hover:text-black transition-colors"
              >
                Schedule a Visit
              </a>
              <a
                href="#"
                className="inline-flex items-center rounded-full border border-white/20 px-5 py-3 text-sm hover:bg-white hover:text-black transition-colors"
              >
                Download Brochure
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Featured;

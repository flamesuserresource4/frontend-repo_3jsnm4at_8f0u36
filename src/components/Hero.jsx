import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-neutral-950 text-white">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay to improve text readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/50 to-neutral-950/90" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-wide backdrop-blur"
        >
          Creative Portfolio
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-balance font-geist text-4xl leading-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Sleek. Modern. Intentional.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-4 max-w-2xl text-pretty text-base text-neutral-300 sm:text-lg"
        >
          I craft structured, minimalist experiences for the web — blending technology, photography and design into thoughtful digital products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-neutral-950"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-neutral-950"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

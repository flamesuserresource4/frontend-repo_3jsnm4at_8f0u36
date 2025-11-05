import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-neutral-950 py-24 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="aspect-square overflow-hidden rounded-2xl border border-white/10 bg-neutral-900"
        >
          <img
            src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1600&auto=format&fit=crop"
            alt="Portrait"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-geist text-3xl sm:text-4xl">About Me</h2>
          <p className="mt-4 text-neutral-300">
            I’m a multidisciplinary designer and developer obsessed with clarity and composition. With a background in
            visual storytelling and modern web tooling, I create experiences that feel effortless and well-crafted.
          </p>
          <p className="mt-4 text-neutral-300">
            My work lives at the intersection of aesthetics and function — from sleek interfaces to performant systems.
            Outside of the editor, you’ll likely find me behind a camera experimenting with light.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {['Design Systems', 'Creative Direction', 'Frontend Engineering', 'Brand & Identity'].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-neutral-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

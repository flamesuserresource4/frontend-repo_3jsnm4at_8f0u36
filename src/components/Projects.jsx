import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Lenscraft Studio',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
    href: '#',
  },
  {
    title: 'Minimal Commerce',
    image:
      'https://images.unsplash.com/photo-1557825835-70d97c4aa567?q=80&w=1600&auto=format&fit=crop',
    href: '#',
  },
  {
    title: 'Studio Portfolio',
    image:
      'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=1600&auto=format&fit=crop',
    href: '#',
  },
  {
    title: 'SaaS Dashboard',
    image:
      'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop',
    href: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full bg-neutral-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="font-geist text-3xl sm:text-4xl">Selected Work</h2>
            <p className="mt-2 max-w-2xl text-neutral-300">
              A curated selection of projects that showcase a structured eye for detail and technical depth.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-200 transition hover:bg-white/10 md:inline-flex"
          >
            Let’s Collaborate <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.href}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full transform object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-between p-4">
                <h3 className="font-medium">{p.title}</h3>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white transition group-hover:-translate-y-0.5 group-hover:bg-indigo-400">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Services row */}
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {['Web Design', 'Brand Systems', 'Photography'].map((s) => (
            <div
              key={s}
              className="rounded-xl border border-white/10 bg-white/5 p-4 text-neutral-200 backdrop-blur transition hover:translate-y-[-2px] hover:bg-white/10"
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

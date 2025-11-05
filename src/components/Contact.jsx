import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="w-full bg-neutral-950 py-24 text-white">
      <div className="mx-auto max-w-3xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center font-geist text-3xl sm:text-4xl"
        >
          Let’s build something thoughtful
        </motion.h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-neutral-300">
          Open for freelance, collaborations and full-time opportunities. Drop a line or say hello on socials.
        </p>

        <div className="mx-auto mt-8 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
          <a
            href="mailto:hello@example.com"
            className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-neutral-200 transition hover:bg-white/10"
          >
            <Mail className="h-4 w-4" /> Email
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-neutral-200 transition hover:bg-white/10"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-neutral-200 transition hover:bg-white/10"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-neutral-200 transition hover:bg-white/10"
          >
            <Twitter className="h-4 w-4" /> Twitter
          </a>
        </div>

        <form
          action="mailto:hello@example.com"
          method="post"
          encType="text/plain"
          className="mx-auto mt-10 grid max-w-xl grid-cols-1 gap-4"
        >
          <div>
            <label htmlFor="name" className="mb-2 block text-sm text-neutral-300">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-neutral-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm text-neutral-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full resize-none rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-lg bg-indigo-500 px-5 py-3 font-medium text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5 hover:bg-indigo-400"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

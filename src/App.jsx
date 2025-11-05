import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-neutral-950 text-white antialiased">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-neutral-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="font-geist text-lg font-semibold tracking-tight">Bentolio</a>
          <nav className="hidden gap-6 text-sm text-neutral-300 sm:flex">
            <a className="transition hover:text-white" href="#about">About</a>
            <a className="transition hover:text-white" href="#projects">Work</a>
            <a className="transition hover:text-white" href="#contact">Contact</a>
          </nav>
          <a
            href="#contact"
            className="hidden rounded-full bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5 hover:bg-indigo-400 sm:inline-block"
          >
            Hire Me
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-neutral-950 py-10 text-neutral-400">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-sm">© {new Date().getFullYear()} Bentolio — All rights reserved.</p>
          <div className="text-sm">Designed with intention.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;

import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Interests from './components/Interests';
import Education from './components/Education';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Blog from './components/Blog';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

import ScrollReveal from './components/ScrollReveal';
import MatrixRain from './components/MatrixRain';
import { ThemeProvider } from './context/ThemeContext';

import {
  personalInfo,
  skills,
  interests,
  education,
  projects,
  certifications,
  blogPosts,
} from './data/data';

function AppInner() {
  const [showMatrix, setShowMatrix] = useState(false);
  const keys = useRef([]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't trigger if user is typing in an input field
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      keys.current.push(e.key.toLowerCase());
      if (keys.current.length > 6) {
        keys.current.shift();
      }
      if (keys.current.join('') === 'hacker') {
        setShowMatrix(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative">
      {/* Global background – uses CSS variable for light/dark */}
      <div
        className="fixed inset-0 -z-10 transition-colors duration-300"
        style={{ background: 'var(--bg-primary)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5" />
      </div>

      {showMatrix && <MatrixRain onComplete={() => setShowMatrix(false)} />}

      <Navbar name={personalInfo.name} />

      <main>
        {/* Top sections don't need scroll reveal since they are above the fold */}
        <Hero info={personalInfo} />
        
        <ScrollReveal>
          <About info={personalInfo} />
        </ScrollReveal>
        
        <ScrollReveal>
          <Skills skills={skills} />
        </ScrollReveal>
        
        <ScrollReveal>
          <Interests interests={interests} />
        </ScrollReveal>
        
        <ScrollReveal>
          <Education education={education} />
        </ScrollReveal>
        
        <ScrollReveal>
          <Projects projects={projects} />
        </ScrollReveal>
        
        <ScrollReveal>
          <Certifications certifications={certifications} />
        </ScrollReveal>
        
        <ScrollReveal>
          <Blog posts={blogPosts} />
        </ScrollReveal>
        
        <ScrollReveal>
          <Resume resumeUrl={personalInfo.resumeUrl} />
        </ScrollReveal>
        
        <ScrollReveal>
          <Contact info={personalInfo} />
        </ScrollReveal>
      </main>

      <Footer info={personalInfo} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  );
}

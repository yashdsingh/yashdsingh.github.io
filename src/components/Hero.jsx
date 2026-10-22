import { ArrowDown, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import { motion } from 'framer-motion';
import VisitorCounter from './VisitorCounter';

export default function Hero({ info }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background orbs */}
      <div className="orb w-96 h-96 bg-cyan-500 top-20 -left-48" />
      <div className="orb w-80 h-80 bg-blue-600 bottom-20 -right-40" />
      <div className="orb w-64 h-64 bg-indigo-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-8 w-32 h-32 rounded-full glass-card flex items-center justify-center text-6xl animate-float border border-cyan-500/30 shadow-lg shadow-cyan-500/20"
        >
          {info?.avatar ? (
            <img
              src={info.avatar}
              alt={info.name}
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            '👤'
          )}
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-cyan-700 dark:text-cyan-400 font-semibold text-lg mb-3 tracking-widest uppercase"
        >
          Hey there, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl font-extrabold gradient-text mb-4 leading-tight"
        >
          {info?.name ?? 'Your Name'}
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-body-secondary font-light mb-4"
        >
          {info?.title ?? 'Developer & Creator'}
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-muted text-base md:text-lg mb-10 max-w-xl mx-auto"
        >
          {info?.tagline ?? 'Building things that matter.'}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a href="#resume" className="gradient-btn text-center">
            📄 View Resume
          </a>
          <a href="#contact" className="outline-btn text-center">
            ✉️ Get in Touch
          </a>
          <a href="#projects" className="outline-btn text-center">
            🚀 See My Work
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-4 mb-16"
        >
          {[
            { icon: GithubIcon, href: info?.github, label: 'GitHub' },
            { icon: LinkedinIcon, href: info?.linkedin, label: 'LinkedIn' },
            { icon: TwitterIcon, href: info?.twitter, label: 'Twitter' },
            { icon: Mail, href: `mailto:${info?.email}`, label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href ?? '#'}
              target={href?.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              aria-label={label}
              className="w-12 h-12 glass-card-hover flex items-center justify-center rounded-xl text-muted hover:text-cyan-500 transition-colors"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>

        {/* Visitor Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85 }}
          className="flex justify-center mb-8"
        >
          <VisitorCounter />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="flex flex-col items-center gap-2 text-faint text-sm"
        >
          <span>Scroll to explore</span>
          <ArrowDown size={18} className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}

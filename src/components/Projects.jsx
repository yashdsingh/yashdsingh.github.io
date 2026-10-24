import { motion } from 'framer-motion';
import { ExternalLink, Star, Lock } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function Projects({ projects }) {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Things I've built</p>
        </div>

        {/* Featured Projects */}
        {featured.length > 0 && (
          <>
            <div className="flex items-center gap-2 mb-6">
              <Star size={16} className="text-cyan-400" />
              <span className="text-cyan-400 font-medium text-sm uppercase tracking-wider">
                Featured
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {featured.map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i} featured />
              ))}
            </div>
          </>
        )}

        {/* Other Projects */}
        {rest.length > 0 && (
          <>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-muted font-medium text-sm uppercase tracking-wider">
                Other Projects
              </span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {rest.map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i} />
              ))}
            </div>
          </>
        )}
      </motion.div>
    </section>
  );
}

function ProjectCard({ project, index, featured }) {
  const isOngoing = project.status?.trim().toLowerCase() === 'ongoing';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`glass-card-hover p-6 flex flex-col group ${featured ? 'border-cyan-500/20' : ''}`}
    >
      {/* Title & Links */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex flex-wrap items-center gap-2.5 min-w-0">
          <h3 className="text-lg font-bold text-body group-hover:text-cyan-500 transition-colors">
            {project.title}
          </h3>
          {project.status && (
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border tracking-wide transition-colors ${
                isOngoing
                  ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                  : 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isOngoing ? 'bg-amber-400' : 'bg-emerald-400'
                }`}
              />
              {project.status}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 ml-2 flex-shrink-0 pt-0.5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-cyan-500 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-cyan-500 transition-colors"
              aria-label="Live Demo"
            >
              <ExternalLink size={18} />
            </a>
          )}
          {!project.github && !project.live && (
            <span
              className="text-muted/50 p-0.5"
              title="Private Repository"
              aria-label="Private Repository"
            >
              <Lock size={15} />
            </span>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-muted text-sm leading-relaxed mb-5 flex-1">
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-300 px-2.5 py-1 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>

      {/* View on GitHub Button or Private Badge */}
      <div className="mt-5 pt-3">
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg border border-cyan-500/40 text-cyan-600 dark:text-cyan-400 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-cyan-500/20 hover:-translate-y-0.5"
          >
            <GithubIcon size={14} />
            <span>View on GitHub</span>
          </a>
        ) : (
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-500/10 text-muted border border-slate-500/20 select-none cursor-default"
            title="Source code is private"
          >
            <Lock size={13} className="text-muted" />
            <span>Private Repository</span>
          </span>
        )}
      </div>
    </motion.div>
  );
}

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Star } from 'lucide-react';

export default function Education({ education }) {
  return (
    <section id="education" className="py-24 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">My academic background</p>
        </div>

        <div className="relative pl-12">
          {/* Vertical timeline line */}
          <div className="timeline-line" />

          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative mb-10 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute -left-12 top-5 w-9 h-9 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 z-10">
                <GraduationCap size={16} className="text-white" />
              </div>

              <div className="glass-card-hover p-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h3 className="text-lg font-bold text-body">{edu.degree}</h3>
                  <div className="flex items-center gap-1.5 text-cyan-400 text-sm font-medium whitespace-nowrap">
                    <Calendar size={14} />
                    {edu.period}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
                  <p className="text-body-secondary font-medium">{edu.institution}</p>
                  {edu.gpa && (
                    <span className="sm:ml-auto flex items-center gap-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-300 text-xs px-3 py-1 rounded-full w-fit">
                      <Star size={12} />
                      GPA: {edu.gpa}
                    </span>
                  )}
                </div>

                <p className="text-muted text-sm mb-4 leading-relaxed">
                  {edu.description}
                </p>

                {/* Highlights */}
                {edu.highlights?.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-xs glass-card border-white/10 text-body-secondary px-3 py-1 rounded-full"
                      >
                        🏆 {h}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

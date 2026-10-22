import { motion } from 'framer-motion';
import { ExternalLink, Award, Calendar, Hash } from 'lucide-react';

export default function Certifications({ certifications }) {
  return (
    <section id="certifications" className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">Credentials & achievements</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card-hover p-6 bg-gradient-to-br ${cert.color ?? 'from-cyan-500/10 to-blue-500/10'} border ${cert.border ?? 'border-cyan-500/20'} group`}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {cert.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-body mb-1 leading-snug">
                    {cert.name}
                  </h3>

                  <p className="text-muted text-sm mb-3 flex items-center gap-1.5">
                    <Award size={13} className="text-cyan-400 flex-shrink-0" />
                    {cert.issuer}
                  </p>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-faint">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {cert.date}
                    </span>
                    {cert.credentialId && (
                      <span className="flex items-center gap-1">
                        <Hash size={12} /> {cert.credentialId}
                      </span>
                    )}
                  </div>
                </div>

                {/* Verify link */}
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-faint hover:text-cyan-500 transition-colors flex-shrink-0 mt-1"
                    aria-label="Verify credential"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

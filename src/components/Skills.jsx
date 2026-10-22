import { useState } from 'react';
import { motion } from 'framer-motion';

const categoryColors = {
  'Frontend': 'from-cyan-500/15 to-blue-500/15 border-cyan-500/30',
  'Backend': 'from-green-500/15 to-emerald-500/15 border-green-500/30',
  'Cloud & DevOps': 'from-orange-500/15 to-amber-500/15 border-orange-500/30',
  'AI / ML': 'from-purple-500/15 to-pink-500/15 border-purple-500/30',
};

const categoryBadgeColors = {
  'Frontend': 'bg-cyan-500/15 text-cyan-800 dark:text-cyan-300 border-cyan-500/40',
  'Backend': 'bg-green-500/15 text-emerald-800 dark:text-green-300 border-green-500/40',
  'Cloud & DevOps': 'bg-orange-500/15 text-orange-800 dark:text-orange-300 border-orange-500/40',
  'AI / ML': 'bg-purple-500/15 text-purple-800 dark:text-purple-300 border-purple-500/40',
};

export default function Skills({ skills }) {
  const categories = [...new Set(skills.map((s) => s.category))];
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? skills : skills.filter((s) => s.category === active);

  return (
    <section id="skills" className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <h2 className="section-title">Skills & Tech Stack</h2>
          <p className="section-subtitle">Technologies I work with</p>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2.5">
            {['All', ...categories].map((cat) => {
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-500 dark:to-blue-500 text-white shadow-md shadow-cyan-600/30 dark:shadow-cyan-500/25 border border-transparent scale-105'
                      : 'skill-filter-btn'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`glass-card-hover p-4 bg-white/80 dark:bg-white/[0.04] bg-gradient-to-br ${
                categoryColors[skill.category] ?? 'from-slate-500/10 to-slate-600/10 border-slate-500/20'
              } border shadow-sm hover:shadow-md transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{skill.icon}</span>
                <div>
                  <p className="font-semibold text-body text-sm">{skill.name}</p>
                  <span
                    className={`text-xs border rounded-full px-2 py-0.5 font-medium ${
                      categoryBadgeColors[skill.category] ?? 'bg-slate-500/15 text-slate-700 dark:text-slate-300 border-slate-400/30'
                    }`}
                  >
                    {skill.category}
                  </span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-200/80 dark:bg-white/10 rounded-full h-1.5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.05 }}
                  className="h-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                />
              </div>
              <p className="text-right text-xs text-slate-600 dark:text-muted font-medium mt-1">{skill.level}%</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

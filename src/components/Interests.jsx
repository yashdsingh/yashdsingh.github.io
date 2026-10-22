import { motion } from 'framer-motion';

export default function Interests({ interests }) {
  return (
    <section id="interests" className="py-24 px-4 max-w-6xl mx-auto">
      {/* Separator orb */}
      <div className="orb w-72 h-72 bg-blue-500 -right-20 top-0 opacity-10" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h2 className="section-title">Fields of Interest</h2>
          <p className="section-subtitle">Areas I'm passionate about</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card-hover p-6 group"
            >
              <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 border border-cyan-500/20">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-body mb-2 group-hover:text-cyan-500 transition-colors">
                {item.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

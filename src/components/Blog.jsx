import { motion } from 'framer-motion';
import { Clock, Tag, ArrowUpRight } from 'lucide-react';

export default function Blog({ posts }) {
  return (
    <section id="blog" className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h2 className="section-title">Blog</h2>
          <p className="section-subtitle">Thoughts, tutorials & insights</p>
        </div>

        <div className={`grid gap-6 ${posts.length === 1 ? 'max-w-xl mx-auto' : 'sm:grid-cols-2 lg:grid-cols-3'}`}>
          {posts.map((post, i) => (
            <motion.a
              key={post.title}
              href={post.link ?? '#'}
              target={post.link && post.link !== '#' ? '_blank' : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card-hover p-6 flex flex-col group cursor-pointer block"
            >
              {/* Read time & date */}
              <div className="flex items-center justify-between text-faint text-xs mb-4">
                <span>{post.date}</span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-body mb-3 group-hover:text-cyan-500 transition-colors leading-snug flex items-start gap-2">
                <span className="flex-1">{post.title}</span>
                <ArrowUpRight
                  size={16}
                  className="flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400"
                />
              </h3>

              {/* Excerpt */}
              <p className="text-muted text-sm leading-relaxed mb-5 flex-1">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-blue-500/10 border border-blue-500/20 text-blue-700 dark:text-blue-300 px-2.5 py-1 rounded-full flex items-center gap-1"
                  >
                    <Tag size={10} />
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

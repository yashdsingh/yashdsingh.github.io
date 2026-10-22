import { Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';

export default function Footer({ info }) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="text-xl font-bold gradient-text">
              {info?.name?.split(' ')[0] ?? 'Portfolio'}
              <span className="text-cyan-400">.</span>
            </p>
            <p className="text-muted text-sm mt-1">
              {info?.title ?? 'Developer & Creator'}
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted">
            {['about', 'skills', 'projects', 'certifications', 'blog', 'contact'].map((s) => (
              <a
                key={s}
                href={`#${s}`}
                className="hover:text-cyan-500 transition-colors capitalize"
              >
                {s}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-3">
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
                className="w-9 h-9 glass-card flex items-center justify-center rounded-lg text-faint hover:text-cyan-500 hover:border-cyan-500/30 transition-all text-sm"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 section-divider text-center text-faint text-sm flex items-center justify-center gap-1">
          <span>© {year} {info?.name ?? 'Your Name'}. Built with</span>
          <Heart size={14} className="text-red-400 fill-red-400 mx-0.5" />
          <span>using React & Tailwind CSS.</span>
        </div>
      </div>
    </footer>
  );
}

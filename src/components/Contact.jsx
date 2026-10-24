import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';

export default function Contact({ info }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      const recipient = info?.email || 'yashdsingh9@outlook.com';
      const res = await fetch(`https://formsubmit.co/ajax/${recipient}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `New Portfolio Message from ${form.name}`,
          _template: 'table',
        }),
      });

      const data = await res.json();

      if (res.ok && (data.success === 'true' || data.success === true)) {
        setStatus('sent');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(
          data.message || 'Something went wrong. Please try again or email directly.'
        );
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setStatus('error');
      setErrorMessage('Network error. Please try again or reach out directly via email.');
    }
  };

  const socials = [
    { icon: GithubIcon, label: 'GitHub', href: info?.github },
    { icon: LinkedinIcon, label: 'LinkedIn', href: info?.linkedin },
    { icon: TwitterIcon, label: 'Twitter', href: info?.twitter },
    { icon: Mail, label: 'Email', href: `mailto:${info?.email}` },
  ];

  return (
    <section id="contact" className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">Have a project in mind? Let's talk!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left – Info */}
          <div className="space-y-6">
            <div className="glass-card p-6 space-y-4">
              <h3 className="text-xl font-semibold text-body">Let's Connect</h3>
              <p className="text-body-secondary leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing. Feel free to reach out!
              </p>

              {info?.location && (
                <div className="flex items-center gap-2 text-body-secondary text-sm">
                  <MapPin size={16} className="text-cyan-500" />
                  {info.location}
                </div>
              )}
              {info?.email && (
                <div className="flex items-center gap-2 text-body-secondary text-sm">
                  <Mail size={16} className="text-cyan-500" />
                  <a href={`mailto:${info.email}`} className="hover:text-cyan-500 transition-colors">
                    {info.email}
                  </a>
                </div>
              )}
            </div>

            {/* Socials */}
            <div className="glass-card p-6">
              <p className="text-sm font-medium text-muted mb-4 uppercase tracking-wider">Find me on</p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href ?? '#'}
                    target={href?.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-12 h-12 glass-card-hover flex items-center justify-center rounded-xl text-muted hover:text-cyan-500 transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right – Form */}
          <div className="glass-card p-6">
            {status === 'sent' ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <CheckCircle size={48} className="text-cyan-500 mb-4" />
                <h3 className="text-xl font-semibold text-body mb-2">Message Sent!</h3>
                <p className="text-muted mb-6">Thanks for reaching out. I'll get back to you soon.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="outline-btn text-sm"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Doe"
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="john@example.com"
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="form-label">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    className="form-input resize-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                    <AlertCircle size={18} className="flex-shrink-0 mt-0.5 text-red-400" />
                    <span>{errorMessage || 'Failed to send message. Please try again or email directly.'}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="gradient-btn w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-xs text-faint text-center">
                  🔒 Messages are sent directly to Yash's inbox.
                </p>
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

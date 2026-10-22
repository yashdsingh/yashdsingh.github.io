import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, Eye, EyeOff, FileText } from 'lucide-react';

export default function Resume({ resumeUrl = '/Yash_Resumefinal.pdf' }) {
  const [showPDF, setShowPDF] = useState(true);
  const resumePath = resumeUrl || '/Yash_Resumefinal.pdf';
  const fileName = resumePath.split('/').pop() || 'Resume.pdf';

  return (
    <section id="resume" className="py-24 px-4 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h2 className="section-title">Resume</h2>
          <p className="section-subtitle">My professional background at a glance</p>
        </div>

        <div className="glass-card p-8">
          {/* Header bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 section-divider">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <FileText size={22} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-body">Yash D Singh – Resume</p>
                <p className="text-muted text-sm">PDF Document</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setShowPDF(!showPDF)}
                className="outline-btn flex items-center gap-2 text-sm"
              >
                {showPDF ? <EyeOff size={16} /> : <Eye size={16} />}
                {showPDF ? 'Hide Preview' : 'Preview'}
              </button>
              <a
                href={resumePath}
                target="_blank"
                rel="noreferrer"
                className="outline-btn flex items-center gap-2 text-sm"
              >
                <ExternalLink size={16} />
                Open in Tab
              </a>
              <a
                href={resumePath}
                download={fileName}
                className="gradient-btn flex items-center gap-2 text-sm"
              >
                <Download size={16} />
                Download PDF
              </a>
            </div>
          </div>

          {/* PDF Viewer */}
          {showPDF ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <iframe
                src={`${resumePath}#toolbar=1`}
                title="Yash D Singh - Resume"
                className="w-full rounded-xl"
                style={{ height: '80vh', border: '1px solid var(--border-color)' }}
              />
              <p className="text-xs text-faint text-center mt-3">
                Can't see the preview?{' '}
                <a
                  href={resumePath}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  Open in a new tab
                </a>{' '}
                or{' '}
                <a
                  href={resumePath}
                  download={fileName}
                  className="text-cyan-400 hover:underline"
                >
                  download the PDF
                </a>.
              </p>
            </motion.div>
          ) : (
            <div className="text-center py-16 text-muted">
              <FileText size={48} className="mx-auto mb-4 opacity-30 text-cyan-400" />
              <p className="text-lg font-medium text-body mb-2">
                Resume preview is hidden
              </p>
              <p className="text-sm text-muted mb-5">
                Click "Preview" to view the resume inline, or use the buttons above to open or download.
              </p>
              <button
                onClick={() => setShowPDF(true)}
                className="outline-btn text-sm inline-flex items-center gap-2"
              >
                <Eye size={16} />
                Show Preview
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}

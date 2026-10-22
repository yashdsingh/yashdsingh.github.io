import { useEffect, useRef, useState } from 'react';

const TYPING_PHRASES = [
  'Cybersecurity',
  'Web Development',
  'Python Projects',
  'AI & ML Exploration',
  'Network Scanning',
];

function TypingText() {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const phrase = TYPING_PHRASES[phraseIdx];
    if (!deleting) {
      if (displayed.length < phrase.length) {
        timeoutRef.current = setTimeout(() => setDisplayed(phrase.slice(0, displayed.length + 1)), 65);
      } else {
        timeoutRef.current = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 38);
      } else {
        setDeleting(false);
        setPhraseIdx((i) => (i + 1) % TYPING_PHRASES.length);
      }
    }
    return () => clearTimeout(timeoutRef.current);
  }, [displayed, deleting, phraseIdx]);

  return (
    <span className="text-cyan-400 font-semibold">
      {displayed}
      <span style={{ opacity: 1, animation: 'blink 1s step-end infinite' }}>|</span>
    </span>
  );
}

/* ─────────────────────────────────────────────
   Beautiful redesigned SVG character
───────────────────────────────────────────── */
function AnimatedCharacter({ isHovered, setIsHovered }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const bodyTransform = `rotate(${mousePos.x * 2}deg)`;
  const headTransform = `translate(${mousePos.x * 12}px, ${mousePos.y * 10}px) rotate(${mousePos.x * 6}deg)`;
  const pupilsTransform = `translate(${mousePos.x * 6}px, ${mousePos.y * 6}px)`;

  return (
    <div
      className="relative flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ cursor: 'pointer' }}
    >
      {/* Speech bubble */}
      <div
        style={{
          opacity: 1,
          transform: isHovered ? 'translateY(-3px) scale(1.04)' : 'translateY(0) scale(1)',
          transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          marginBottom: 14,
          background: 'var(--speech-bubble-bg)',
          border: '1.5px solid var(--speech-bubble-border)',
          borderRadius: 14,
          padding: '7px 16px',
          color: 'var(--speech-bubble-text)',
          fontSize: 13,
          fontWeight: 700,
          whiteSpace: 'nowrap',
          boxShadow: 'var(--speech-bubble-shadow)',
          position: 'relative',
          pointerEvents: 'none',
        }}
      >
        <span className="flex items-center gap-1.5">
          <span className="text-base leading-none">👋</span>
          <span>Hey there! I&apos;m <span className="text-cyan-700 dark:text-cyan-300 font-extrabold">Yash</span>!</span>
        </span>

        {/* Speech bubble pointer / tail */}
        <div
          style={{
            position: 'absolute',
            bottom: -6,
            left: '50%',
            transform: 'translateX(-50%) rotate(45deg)',
            width: 10,
            height: 10,
            background: 'var(--speech-bubble-bg)',
            borderRight: '1.5px solid var(--speech-bubble-border)',
            borderBottom: '1.5px solid var(--speech-bubble-border)',
          }}
        />
      </div>

      <svg
        viewBox="0 0 400 550"
        width="260"
        height="380"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: isHovered
            ? 'drop-shadow(0 25px 50px rgba(34,211,238,0.5))'
            : 'drop-shadow(0 15px 35px rgba(0,0,0,0.6))',
          transform: isHovered ? 'scale(1.05) translateY(-6px)' : 'scale(1) translateY(0)',
          transition: 'all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
        }}
      >
        <defs>
          {/* 3D Skin Gradients */}
          <radialGradient id="skinGrad" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#fff2e6" />
            <stop offset="40%" stopColor="#f7d4b5" />
            <stop offset="80%" stopColor="#e3b288" />
            <stop offset="100%" stopColor="#c79265" />
          </radialGradient>
          <radialGradient id="skinDark" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#d59d72" />
            <stop offset="100%" stopColor="#b67b50" />
          </radialGradient>
          
          {/* Hair Gradients */}
          <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#302015" />
            <stop offset="50%" stopColor="#1a110a" />
            <stop offset="100%" stopColor="#080503" />
          </linearGradient>
          <linearGradient id="hairHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.15)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>

          {/* 3D Clothing Gradients */}
          <linearGradient id="shirtGrad" x1="10%" y1="0%" x2="90%" y2="100%">
            <stop offset="0%" stopColor="#3a3a3a" />
            <stop offset="40%" stopColor="#1a1a1a" />
            <stop offset="100%" stopColor="#050505" />
          </linearGradient>
          <linearGradient id="pantsGrad" x1="0%" y1="0%" x2="40%" y2="100%">
            <stop offset="0%" stopColor="#f3e6d8" />
            <stop offset="50%" stopColor="#d5ba9f" />
            <stop offset="100%" stopColor="#9e856c" />
          </linearGradient>

          {/* Intense Cyan Rim Light */}
          <linearGradient id="cyanRim" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </linearGradient>

          {/* Filters for Depth */}
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#000" floodOpacity="0.4" />
          </filter>
          <filter id="innerGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="-4" dy="-4" stdDeviation="6" floodColor="#22d3ee" floodOpacity="0.3" />
          </filter>
          <filter id="blurRim">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        {/* ── GROUND AMBIENT SHADOW ── */}
        <ellipse cx="200" cy="525" rx="90" ry="14" fill="rgba(0,0,0,0.3)" filter="blur(8px)" />
        <ellipse cx="200" cy="525" rx="50" ry="7" fill="rgba(0,0,0,0.5)" filter="blur(3px)" />

        {/* ── BODY (TILTS WITH MOUSE) ── */}
        <g style={{ transformOrigin: '200px 500px', transform: bodyTransform, transition: 'transform 0.1s linear' }}>
        
        {/* ── LEFT ARM ── */}
        <g>
          <path 
            d="M 130 180 Q 90 210 95 260 Q 100 290 100 320 L 120 320 Q 115 280 125 240 Z" 
            fill="url(#shirtGrad)" 
            filter="url(#softShadow)"
          />
          {/* Left Cuff */}
          <path d="M 98 310 L 122 315" stroke="#111" strokeWidth="8" strokeLinecap="round" />
          {/* Left Hand */}
          <circle cx="112" cy="330" r="13" fill="url(#skinGrad)" filter="url(#softShadow)" />
        </g>

        {/* ── LEGS & PANTS ── */}
        {/* Right Leg */}
        <path 
          d="M 200 320 L 195 500 Q 192 515 210 515 L 245 515 Q 265 515 260 500 L 260 320 Z" 
          fill="url(#pantsGrad)" 
        />
        {/* Right Shoe */}
        <path 
          d="M 195 505 Q 190 525 210 525 L 270 525 Q 280 525 280 515 Q 280 505 260 505 Z" 
          fill="#111" filter="url(#softShadow)"
        />
        {/* Shoe Highlights */}
        <path d="M 205 512 Q 235 508 260 512" stroke="rgba(255,255,255,0.15)" strokeWidth="3" fill="none" />

        {/* Left Leg */}
        <path 
          d="M 135 320 L 120 500 Q 117 515 135 515 L 170 515 Q 190 515 190 500 L 195 320 Z" 
          fill="url(#pantsGrad)" 
          filter="url(#softShadow)"
        />
        {/* Left Shoe */}
        <path 
          d="M 120 505 Q 115 525 135 525 L 195 525 Q 205 525 205 515 Q 205 505 185 505 Z" 
          fill="#111" filter="url(#softShadow)"
        />
        {/* Pant Creases (Sharp 3D look) */}
        <path d="M 155 330 L 140 505" stroke="rgba(255,255,255,0.4)" strokeWidth="3" fill="none" />
        <path d="M 152 330 L 137 505" stroke="rgba(0,0,0,0.15)" strokeWidth="3" fill="none" />
        <path d="M 230 330 L 230 505" stroke="rgba(255,255,255,0.4)" strokeWidth="3" fill="none" />
        <path d="M 227 330 L 227 505" stroke="rgba(0,0,0,0.15)" strokeWidth="3" fill="none" />

        {/* ── BROAD TORSO (Formal Black Shirt) ── */}
        <path 
          d="M 130 180 Q 100 200 110 260 L 130 335 L 265 335 L 285 260 Q 295 200 265 180 Z" 
          fill="url(#shirtGrad)" 
          filter="url(#softShadow)"
        />
        {/* Torso Rim Light (Cyan) */}
        <path 
          d="M 130 180 Q 100 200 110 260 L 130 335" 
          stroke="url(#cyanRim)" strokeWidth="6" fill="none" filter="url(#blurRim)"
        />
        
        {/* Belt */}
        <path d="M 130 325 L 265 325" stroke="#111" strokeWidth="10" />
        <rect x="187" y="318" width="24" height="14" rx="3" fill="#e8c351" filter="url(#softShadow)" />
        <rect x="192" y="321" width="8" height="8" rx="1" fill="#111" />

        {/* Shirt Placket & Buttons */}
        <path d="M 198 190 L 198 325" stroke="rgba(255,255,255,0.08)" strokeWidth="4" />
        <path d="M 194 190 L 194 325" stroke="rgba(0,0,0,0.3)" strokeWidth="4" />
        <circle cx="196" cy="220" r="3" fill="#222" />
        <circle cx="196" cy="255" r="3" fill="#222" />
        <circle cx="196" cy="290" r="3" fill="#222" />

        {/* ── RIGHT ARM (Waving on hover) ── */}
        <g style={{ transformOrigin: '265px 190px', transform: isHovered ? 'rotate(-35deg)' : 'rotate(0deg)', transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
          <path 
            d="M 265 180 Q 305 210 300 260 Q 295 290 295 320 L 275 320 Q 280 280 270 240 Z" 
            fill="url(#shirtGrad)" 
            filter="url(#softShadow)"
          />
          {/* Arm Highlight */}
          <path d="M 275 195 Q 300 220 290 270" stroke="rgba(255,255,255,0.05)" strokeWidth="4" fill="none" />
          {/* Cuff */}
          <path d="M 273 310 L 297 315" stroke="#111" strokeWidth="8" strokeLinecap="round" />
          {/* Hand */}
          <circle cx="288" cy="330" r="13" fill="url(#skinGrad)" filter="url(#softShadow)" />
        </g>

        {/* ── NECK & SHARP COLLAR ── */}
        <path d="M 175 140 L 175 190 L 220 190 L 220 140 Z" fill="url(#skinDark)" />
        <path d="M 175 165 Q 197 185 220 165 L 220 190 Q 197 200 175 190 Z" fill="rgba(0,0,0,0.25)" />
        {/* Collar */}
        <path d="M 175 175 L 145 210 L 197 195 Z" fill="#151515" />
        <path d="M 220 175 L 250 210 L 197 195 Z" fill="#151515" />
        <path d="M 175 175 L 145 210 L 197 195 Z" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />

        {/* ── HEAD (TRACKS MOUSE) ── */}
        <g style={{ transformOrigin: '197px 195px', transform: headTransform, transition: 'transform 0.1s linear' }}>

        {/* ── HEAD (Sharp Jawline & Handsome Proportions) ── */}
        {/* Back Hair (Pompadour Volume) */}
        <ellipse cx="197" cy="110" rx="60" ry="75" fill="url(#hairGrad)" filter="url(#softShadow)" />

        {/* Ears */}
        <ellipse cx="138" cy="125" rx="12" ry="20" fill="url(#skinGrad)" filter="url(#softShadow)" />
        <ellipse cx="257" cy="125" rx="12" ry="20" fill="url(#skinGrad)" filter="url(#softShadow)" />
        {/* Ear Rim Light */}
        <path d="M 128 115 Q 124 125 130 140" stroke="url(#cyanRim)" strokeWidth="3" fill="none" filter="url(#blurRim)" />

        {/* Face (Angular & Chiseled) */}
        <path 
          d="M 145 110 C 145 50 250 50 250 110 C 250 160 235 190 197 195 C 160 190 145 160 145 110 Z" 
          fill="url(#skinGrad)" 
          filter="url(#softShadow)"
        />

        {/* ── VOLUMINOUS HAIR (Modern Slick Back) ── */}
        <path 
          d="M 135 100 C 140 30 195 15 225 20 C 265 25 265 75 265 105 C 240 60 195 55 165 65 C 145 72 140 85 135 100 Z" 
          fill="url(#hairGrad)" 
        />
        <path 
          d="M 140 105 C 155 85 180 80 200 85 C 175 92 155 105 140 105 Z" 
          fill="rgba(0,0,0,0.6)" 
        />
        {/* Hair Specular Highlights (Glossy finish) */}
        <path d="M 160 45 Q 195 35 225 45" stroke="rgba(255,255,255,0.12)" strokeWidth="8" strokeLinecap="round" fill="none" filter="url(#blurRim)" />
        <path d="M 160 65 Q 185 55 210 65" stroke="url(#cyanRim)" strokeWidth="4" strokeLinecap="round" fill="none" filter="url(#blurRim)" />

        {/* ── EYEBROWS (Strong & Handsome) ── */}
        <path d="M 158 100 Q 170 96 182 102" stroke="#1f140d" strokeWidth="5" strokeLinecap="round" fill="none" filter="url(#softShadow)" />
        <path d="M 213 102 Q 225 96 237 100" stroke="#1f140d" strokeWidth="5" strokeLinecap="round" fill="none" filter="url(#softShadow)" />

        {/* ── EYES (Deep & Confident) ── */}
        <ellipse cx="172" cy="118" rx="10" ry="7" fill="#fff" filter="url(#softShadow)" />
        <ellipse cx="223" cy="118" rx="10" ry="7" fill="#fff" filter="url(#softShadow)" />
        
        {/* PUPILS (Extra Parallax for tracking cursor) */}
        <g style={{ transform: pupilsTransform, transition: 'transform 0.1s linear' }}>
          {/* Iris */}
          <circle cx="172" cy="118" r="5.5" fill="#382110" />
          <circle cx="223" cy="118" r="5.5" fill="#382110" />
          {/* Pupil */}
          <circle cx="172" cy="118" r="3" fill="#000" />
          <circle cx="223" cy="118" r="3" fill="#000" />
          {/* Sparkle */}
          <circle cx="174" cy="116" r="2" fill="#fff" />
          <circle cx="225" cy="116" r="2" fill="#fff" />
          <circle cx="169" cy="120" r="1" fill="rgba(255,255,255,0.7)" />
          <circle cx="220" cy="120" r="1" fill="rgba(255,255,255,0.7)" />
        </g>

        {/* ── THIN METALLIC ROUND SPECS ── */}
        <circle cx="172" cy="118" r="19" fill="rgba(34, 211, 238, 0.06)" stroke="#e2e8f0" strokeWidth="2.5" filter="url(#softShadow)" />
        <circle cx="223" cy="118" r="19" fill="rgba(34, 211, 238, 0.06)" stroke="#e2e8f0" strokeWidth="2.5" filter="url(#softShadow)" />
        {/* Specs Inner Glow/Reflection */}
        <circle cx="172" cy="118" r="18" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        <circle cx="223" cy="118" r="18" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        
        {/* Bridge & Temples */}
        <path d="M 191 116 Q 197 112 204 116" stroke="#cbd5e1" strokeWidth="2.5" fill="none" />
        <path d="M 153 115 L 140 112" stroke="#cbd5e1" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M 242 115 L 255 112" stroke="#cbd5e1" strokeWidth="3" fill="none" strokeLinecap="round" />
        {/* High-End Lens Glare */}
        <path d="M 158 105 L 180 128" stroke="url(#cyanRim)" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.6" filter="url(#blurRim)" />
        <path d="M 209 105 L 231 128" stroke="rgba(255,255,255,0.5)" strokeWidth="5" fill="none" strokeLinecap="round" />

        {/* ── NOSE (Sharper & Defined) ── */}
        <path d="M 197 122 L 194 140 L 200 142" stroke="rgba(163, 114, 73, 0.6)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 200 142 Q 205 142 205 138" stroke="rgba(163, 114, 73, 0.4)" strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* ── MOUTH (Handsome Confident Smile) ── */}
        <path 
          d={isHovered ? "M 175 155 Q 197 172 220 155" : "M 180 158 Q 197 166 215 158"} 
          stroke="#683921" 
          strokeWidth="3.5" 
          fill="none" 
          strokeLinecap="round" 
          style={{ transition: 'd 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)' }}
        />
        {/* Smile Creases / Dimples */}
        {isHovered ? (
          <>
            <path d="M 170 148 Q 172 154 175 155" stroke="rgba(163, 114, 73, 0.5)" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M 225 148 Q 223 154 220 155" stroke="rgba(163, 114, 73, 0.5)" strokeWidth="2" fill="none" strokeLinecap="round" />
            {/* White teeth peek */}
            <path d="M 185 161 Q 197 166 210 161" stroke="#fff" strokeWidth="2.5" fill="none" />
          </>
        ) : (
          <>
            <circle cx="176" cy="154" r="2.5" fill="rgba(163, 114, 73, 0.3)" />
            <circle cx="219" cy="154" r="2.5" fill="rgba(163, 114, 73, 0.3)" />
          </>
        )}
        </g>
        </g>
      </svg>

      {/* Hover hint label */}
      <p style={{
        color: isHovered ? 'var(--color-cyan-accent)' : 'var(--text-muted)',
        fontSize: 11,
        marginTop: 6,
        transition: 'color 0.3s',
        userSelect: 'none',
        letterSpacing: '0.04em',
        fontWeight: 500,
      }}>
        {isHovered ? '😄 Nice to meet you!' : '✦ Hover me!'}
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main About component
───────────────────────────────────────────── */
export default function About({ info }) {
  const [charHovered, setCharHovered] = useState(false);

  return (
    <section id="about" className="py-24 px-4 max-w-6xl mx-auto">
      <div>
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">A little bit about who I am</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* ── LEFT: Photo + Character ── */}
          <div className="flex flex-col items-center gap-10">

            {/* Real photo */}
            <div className="relative">
              <div
                className="overflow-hidden animate-float"
                style={{
                  width: 224,
                  height: 224,
                  borderRadius: 28,
                  border: '1.5px solid rgba(34,211,238,0.25)',
                  boxShadow: '0 0 0 6px rgba(34,211,238,0.06), 0 20px 60px rgba(0,0,0,0.5)',
                  background: 'rgba(15,25,40,0.6)',
                }}
              >
                {info?.avatar ? (
                  <img
                    src={info.avatar}
                    alt={info.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                  />
                ) : (
                  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 72 }}>
                    👤
                  </div>
                )}
              </div>

              {/* Status badge */}
              <div
                className="glass-card shadow-lg"
                style={{
                  position: 'absolute',
                  bottom: -16,
                  right: -16,
                  border: '1.5px solid rgba(8, 145, 178, 0.4)',
                  borderRadius: 12,
                  padding: '6px 14px',
                }}
              >
                <span className="text-xs font-semibold text-cyan-800 dark:text-cyan-300 flex items-center gap-1">
                  ✨ Open to Opportunities
                </span>
              </div>
            </div>

            {/* Animated character */}
            <AnimatedCharacter isHovered={charHovered} setIsHovered={setCharHovered} />
          </div>

          {/* ── RIGHT: Bio ── */}
          <div className="space-y-6">
            <div className="glass-card p-6 space-y-4">
              <div>
                <h3 className="text-xl font-bold text-body mb-1">{info?.name ?? 'Your Name'}</h3>
                <p className="text-sm text-muted mb-3">
                  Currently exploring: <TypingText />
                </p>
              </div>
              <p className="text-body-secondary leading-relaxed whitespace-pre-line text-sm">
                {info?.bio ?? 'Your bio goes here.'}
              </p>
              <div className="space-y-2 pt-2">
                {info?.location && (
                  <div className="flex items-center gap-2 text-body-secondary text-sm">
                    <span className="text-cyan-400">📍</span>
                    {info.location}
                  </div>
                )}
                {info?.email && (
                  <div className="flex items-center gap-2 text-body-secondary text-sm">
                    <span className="text-cyan-400">✉️</span>
                    <a href={`mailto:${info.email}`} className="hover:text-cyan-500 transition-colors">
                      {info.email}
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: 'Projects', value: '5+' },
                { label: 'Certifications', value: '1+' },
                { label: 'Blog Posts', value: '1+' },
              ].map((stat) => (
                <div key={stat.label} className="glass-card-hover p-4 text-center">
                  <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-muted text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Social buttons */}
            <div className="flex gap-3 flex-wrap">
              <a href={info?.github ?? '#'} target="_blank" rel="noreferrer" className="outline-btn flex items-center gap-2 text-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </a>
              <a href={info?.linkedin ?? '#'} target="_blank" rel="noreferrer" className="outline-btn flex items-center gap-2 text-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}

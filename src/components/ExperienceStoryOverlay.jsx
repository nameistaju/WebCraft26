import React, { useState, useEffect } from 'react';

// ============================================================================
// CONFIGURATION & SEEDED DATA
// ============================================================================
export const DEBUG = false;

export const STATS = [
  { label: 'reach', value: 250, prefix: '+', suffix: '%', decimals: 0 },
  { label: 'leads / month', value: 120, prefix: '+', suffix: '', decimals: 0 },
  { label: 'ROI', value: 3.4, prefix: '', suffix: 'x', decimals: 1 },
];

export const SEEDED_ICONS = [
  { id: 1, type: 'heart', x: 18, startY: 72, endY: 22, rot: -12, color: '#0576fc', size: 24, mobile: true },
  { id: 2, type: 'comment', x: 80, startY: 76, endY: 24, rot: 8, color: '#ffffff', size: 22, mobile: true },
  { id: 3, type: 'share', x: 26, startY: 66, endY: 16, rot: 15, color: '#ffffff', size: 20, mobile: true },
  { id: 4, type: 'bell', x: 85, startY: 70, endY: 28, rot: -8, color: '#0576fc', size: 22, mobile: true },
  { id: 5, type: 'chat', x: 14, startY: 82, endY: 34, rot: 10, color: '#ffffff', size: 26, mobile: true },
  { id: 6, type: 'thumbsUp', x: 74, startY: 80, endY: 30, rot: -14, color: '#0576fc', size: 24, mobile: true },
  { id: 7, type: 'play', x: 22, startY: 88, endY: 40, rot: 6, color: '#0576fc', size: 20, mobile: false },
  { id: 8, type: 'heart', x: 78, startY: 86, endY: 36, rot: -6, color: '#ffffff', size: 22, mobile: false },
  { id: 9, type: 'share', x: 32, startY: 78, endY: 26, rot: -10, color: '#0576fc', size: 22, mobile: false },
  { id: 10, type: 'comment', x: 68, startY: 74, endY: 20, rot: 12, color: '#ffffff', size: 24, mobile: false },
];

export const CONSTELLATION_NODES = [
  { id: 'insta', label: 'Instagram', cx: 80, cy: 120 },
  { id: 'gads', label: 'Google Ads', cx: 180, cy: 50 },
  { id: 'seo', label: 'SEO', cx: 290, cy: 80 },
  { id: 'wapp', label: 'WhatsApp', cx: 220, cy: 170 },
  { id: 'email', label: 'Email', cx: 370, cy: 140 },
];

export const WINDOWS = [
  { id: 1, range: [0.00, 0.10], name: 'Sunrise' },
  { id: 2, range: [0.10, 0.24], name: 'Mountains' },
  { id: 3, range: [0.24, 0.38], name: 'Clouds / Forest' },
  { id: 4, range: [0.38, 0.50], name: 'Eagle' },
  { id: 5, range: [0.50, 0.66], name: 'Growth Counters' },
  { id: 6, range: [0.66, 0.78], name: 'Engagement Icons' },
  { id: 7, range: [0.78, 0.88], name: 'Shooting Star' },
  { id: 8, range: [0.88, 1.00], name: 'Constellation & CTA' },
];

// Helper: Inline SVG Icon Renderer
function IconRenderer({ type, size = 24, color = 'currentColor' }) {
  switch (type) {
    case 'heart':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      );
    case 'comment':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
          <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z" />
        </svg>
      );
    case 'share':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
          <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z" />
        </svg>
      );
    case 'bell':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
          <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
        </svg>
      );
    case 'chat':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
          <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
        </svg>
      );
    case 'thumbsUp':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
          <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />
        </svg>
      );
    case 'play':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
          <path d="M8 5v14l11-7z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function ExperienceStoryOverlay({ progress = 0, onOpenContact }) {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(motionQuery.matches);
    const onMotionChange = (e) => setReducedMotion(e.matches);
    motionQuery.addEventListener('change', onMotionChange);

    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      motionQuery.removeEventListener('change', onMotionChange);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Compute Active Scene Index
  const activeSceneIndex = WINDOWS.findIndex(
    (w) => progress >= w.range[0] && progress < w.range[1]
  );

  // Compute Card Style: scrubbed opacity & transform, strictly one message active
  const getCardStyle = (wIn, wOut) => {
    if (progress < wIn || progress > wOut) {
      return { opacity: 0, transform: 'translate3d(0, 24px, 0)', pointerEvents: 'none', display: 'none' };
    }

    if (reducedMotion) {
      return { opacity: 1, transform: 'none', pointerEvents: 'auto', display: 'flex' };
    }

    const windowLen = wOut - wIn;
    const fadeSpan = Math.min(0.02, windowLen * 0.18);

    let opacity = 1;
    let y = 0;

    if (progress < wIn + fadeSpan) {
      const factor = (progress - wIn) / fadeSpan;
      opacity = factor;
      y = 24 * (1 - factor);
    } else if (progress > wOut - fadeSpan) {
      const factor = (wOut - progress) / fadeSpan;
      opacity = factor;
      y = -20 * (1 - factor);
    }

    return {
      opacity,
      transform: `translate3d(0, ${y.toFixed(1)}px, 0)`,
      pointerEvents: opacity > 0.6 ? 'auto' : 'none',
      display: 'flex',
    };
  };

  // Compute Scrubbed Stat Counter Value
  const getStatValue = (stat) => {
    if (reducedMotion || progress >= 0.66) {
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: stat.decimals,
        maximumFractionDigits: stat.decimals,
      }).format(stat.value);
    }
    if (progress <= 0.50) {
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: stat.decimals,
        maximumFractionDigits: stat.decimals,
      }).format(0);
    }
    const ratio = Math.min(1, Math.max(0, (progress - 0.50) / 0.16));
    const current = stat.value * ratio;
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: stat.decimals,
      maximumFractionDigits: stat.decimals,
    }).format(current);
  };

  // Compute Floating Icon Styles (Scene 6)
  const getIconStyle = (icon) => {
    if (reducedMotion || progress < 0.66 || progress > 0.78) return { display: 'none' };
    const ratio = (progress - 0.66) / 0.12;
    const currentY = icon.startY + (icon.endY - icon.startY) * ratio;
    const opacity = Math.sin(Math.min(1, Math.max(0, ratio)) * Math.PI);
    return {
      position: 'absolute',
      left: `${icon.x}%`,
      top: `${currentY}%`,
      transform: `translate3d(-50%, -50%, 0) rotate(${icon.rot}deg)`,
      opacity,
      filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.5))',
      pointerEvents: 'none',
      transition: 'opacity 0.1s linear',
    };
  };

  // Constellation SVG Line Drawing Math (Scene 8)
  const PATH_LENGTH = 504;
  const drawRatio = Math.min(1, Math.max(0, (progress - 0.88) / 0.08));
  const strokeDashoffset = reducedMotion ? 0 : PATH_LENGTH * (1 - drawRatio);
  const nodesPulsing = progress >= 0.96;

  const handleContactClick = () => {
    if (typeof onOpenContact === 'function') {
      onOpenContact();
    } else {
      window.location.hash = 'contact';
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Real-time Calibration HUD (Active only when DEBUG = true) */}
      {DEBUG && (
        <div className="fixed top-24 left-6 z-50 bg-black/85 backdrop-blur-md text-white font-mono text-xs px-3.5 py-2.5 rounded-lg border border-white/20 shadow-2xl pointer-events-none">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0576fc] animate-pulse" />
            <span className="font-bold tracking-wider text-[#0576fc]">SCENE PROGRESS</span>
          </div>
          <div className="text-xl font-bold mt-1 tabular-nums">
            {progress.toFixed(3)}
          </div>
          <div className="text-[11px] text-white/70 mt-0.5">
            Scene {activeSceneIndex !== -1 ? activeSceneIndex + 1 : '—'}:{' '}
            {activeSceneIndex !== -1 ? WINDOWS[activeSceneIndex].name : 'Between scenes'}
          </div>
        </div>
      )}

      {/* Main Overlay Layer */}
      <div className="story-overlay-container" aria-live="polite">
        {/* ==================================================================
            1. [0.00 - 0.10] SUNRISE (Under "Scroll Down")
            ================================================================== */}
        <div
          style={getCardStyle(0.00, 0.10)}
          className={`story-message-card bottom-16 sm:bottom-20 ${activeSceneIndex === 0 ? 'active' : ''}`}
        >
          <p className="story-subtext text-white/90 font-medium">
            Every brand starts in the dark.
          </p>
        </div>

        {/* ==================================================================
            2. [0.10 - 0.24] MOUNTAINS
            ================================================================== */}
        <div
          style={getCardStyle(0.10, 0.24)}
          className={`story-message-card ${activeSceneIndex === 1 ? 'active' : ''}`}
        >
          <h2 className="story-headline">We map the climb.</h2>
          <p className="story-subtext">Strategy, audience, goals.</p>
        </div>

        {/* ==================================================================
            3. [0.24 - 0.38] CLOUDS / FOREST
            ================================================================== */}
        <div
          style={getCardStyle(0.24, 0.38)}
          className={`story-message-card ${activeSceneIndex === 2 ? 'active' : ''}`}
        >
          <h2 className="story-headline">Everyone is shouting.</h2>
          <p className="story-subtext">We help you stand out.</p>
        </div>

        {/* ==================================================================
            4. [0.38 - 0.50] EAGLE CROSSING THE SUN
            ================================================================== */}
        <div
          style={getCardStyle(0.38, 0.50)}
          className={`story-message-card ${activeSceneIndex === 3 ? 'active' : ''}`}
        >
          <h2 className="story-headline">A sharp brand cuts through the noise.</h2>
        </div>

        {/* ==================================================================
            5. [0.50 - 0.66] SUN GROWING (GROWTH COUNTERS)
            ================================================================== */}
        <div
          style={getCardStyle(0.50, 0.66)}
          className={`story-message-card max-w-2xl ${activeSceneIndex === 4 ? 'active' : ''}`}
        >
          <h2 className="story-headline">Scaling what works.</h2>

          {/* 3 Stats in a Row (Stack on Mobile) */}
          <div className="story-stats-grid">
            {STATS.map((stat, idx) => (
              <div key={idx} className="story-stat-card">
                <div className="story-stat-value">
                  {stat.prefix}
                  {getStatValue(stat)}
                  {stat.suffix}
                </div>
                <div className="story-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-white/60 font-sans mt-3 tracking-wide">
            Sample numbers. Replace with real client results.
          </p>
        </div>

        {/* ==================================================================
            6. [0.66 - 0.78] BATS / BIRDS (ENGAGEMENT ICONS)
            ================================================================== */}
        <div
          style={getCardStyle(0.66, 0.78)}
          className={`story-message-card ${activeSceneIndex === 5 ? 'active' : ''}`}
        >
          <h2 className="story-headline">Attention turns into conversation.</h2>
        </div>

        {/* Floating Social Icons (Scene 6 Overlay) */}
        {progress >= 0.66 && progress <= 0.78 && !reducedMotion && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            {SEEDED_ICONS.filter((icon) => (isMobile ? icon.mobile : true)).map((icon) => (
              <div key={icon.id} style={getIconStyle(icon)} className="story-floating-icon">
                <IconRenderer type={icon.type} size={icon.size} color={icon.color} />
              </div>
            ))}
          </div>
        )}

        {/* ==================================================================
            7. [0.78 - 0.88] SHOOTING STAR
            ================================================================== */}
        <div
          style={getCardStyle(0.78, 0.88)}
          className={`story-message-card ${activeSceneIndex === 6 ? 'active' : ''}`}
        >
          <h2 className="story-headline">One idea can light up the sky.</h2>
        </div>

        {/* Luminous Shooting Star Streak (Scene 7) */}
        {progress >= 0.78 && progress <= 0.88 && !reducedMotion && (
          <div
            className="story-shooting-star"
            style={{
              opacity: Math.sin(((progress - 0.78) / 0.10) * Math.PI),
              transform: `translate3d(${-(progress - 0.78) * 1400}px, ${(progress - 0.78) * 700}px, 0) rotate(-35deg)`,
            }}
            aria-hidden="true"
          />
        )}

        {/* ==================================================================
            8. [0.88 - 1.00] NIGHT, STARS (CONSTELLATION + FINAL CTA)
            ================================================================== */}
        <div
          style={getCardStyle(0.88, 1.00)}
          className={`story-message-card max-w-xl ${activeSceneIndex === 7 ? 'active' : ''}`}
        >
          {/* Animated 5-Node Constellation */}
          <div className="story-constellation-wrap" aria-hidden="true">
            <svg
              viewBox="0 0 450 220"
              className="w-full h-full overflow-visible"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Connecting Sequentially Drawn Path */}
              <path
                d="M 80 120 L 180 50 L 290 80 L 220 170 L 370 140"
                stroke="#0576fc"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray={PATH_LENGTH}
                strokeDashoffset={strokeDashoffset}
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(5, 118, 252, 0.8))',
                  transition: reducedMotion ? 'none' : 'stroke-dashoffset 0.1s linear',
                }}
              />

              {/* Secondary delicate web lines */}
              <path
                d="M 180 50 L 220 170 M 80 120 L 220 170"
                stroke="rgba(255, 255, 255, 0.25)"
                strokeWidth="1"
                strokeDasharray="4 4"
                style={{ opacity: drawRatio > 0.8 ? 1 : 0, transition: 'opacity 0.3s ease' }}
              />

              {/* 5 Star Nodes */}
              {CONSTELLATION_NODES.map((node, i) => {
                const nodeVisible = reducedMotion || drawRatio >= (i / CONSTELLATION_NODES.length);
                return (
                  <g
                    key={node.id}
                    transform={`translate(${node.cx}, ${node.cy})`}
                    style={{
                      opacity: nodeVisible ? 1 : 0,
                      transform: nodesPulsing ? 'scale(1.1)' : 'scale(1)',
                      transformOrigin: `${node.cx}px ${node.cy}px`,
                      transition: 'transform 0.4s ease, opacity 0.3s ease',
                    }}
                  >
                    {/* Glowing outer halo */}
                    <circle cx="0" cy="0" r="10" fill="#0576fc" opacity="0.4" />
                    {/* Core bright star point */}
                    <circle cx="0" cy="0" r="4.5" fill="#ffffff" />

                    {/* Node Text Label */}
                    <text
                      x="0"
                      y={node.cy > 100 ? 22 : -14}
                      textAnchor="middle"
                      fill="#ffffff"
                      fontSize="11.5"
                      fontFamily="var(--font-secondary, 'Neuemontreal', sans-serif)"
                      fontWeight="600"
                      letterSpacing="0.04em"
                      style={{
                        textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 0 10px rgba(5,118,252,0.6)',
                      }}
                    >
                      {node.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Heading */}
          <h2 className="story-headline text-2xl sm:text-3xl md:text-4xl">
            Ready to start your climb?
          </h2>

          {/* Call-to-Action Group */}
          <div className="mt-5 flex flex-col items-center">
            {/* Primary Interactive CTA (44px min tap target & focusable) */}
            <button
              onClick={handleContactClick}
              className="story-cta-btn group"
              aria-label="Let's talk - Get in touch with WebCraft"
            >
              <span>Let's talk</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                aria-hidden="true"
              >
                <path
                  d="M1.5 8.5L8.5 1.5M3.5 1.5L8.5 1.5L8.5 6.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Secondary Link: Scroll back up */}
            <button
              onClick={handleScrollToTop}
              className="text-xs sm:text-sm text-white/70 hover:text-white underline underline-offset-4 cursor-pointer mt-3.5 transition-colors pointer-events-auto focus:outline-none focus:ring-2 focus:ring-white/40 rounded py-1 px-2"
            >
              Scroll back up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

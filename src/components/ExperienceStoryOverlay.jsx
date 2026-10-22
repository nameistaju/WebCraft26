import React, { useState, useEffect, useRef } from 'react';
import lottie from 'lottie-web';

// ============================================================================
// CONFIGURATION & SEEDED DATA
// ============================================================================
export const DEBUG = false;

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

export const CHIPS = [
  { id: 'social', label: 'Social', icon: 'social' },
  { id: 'search', label: 'Search', icon: 'search' },
  { id: 'ads', label: 'Ads', icon: 'ads' },
  { id: 'email', label: 'Email', icon: 'email' },
  { id: 'whatsapp', label: 'WhatsApp', icon: 'whatsapp' },
];

export const WINDOWS = [
  { id: 1, range: [0.00, 0.10], name: 'Sunrise' },
  { id: 2, range: [0.10, 0.24], name: 'Mountains' },
  { id: 3, range: [0.24, 0.38], name: 'Clouds / Forest' },
  { id: 4, range: [0.38, 0.50], name: 'Eagle' },
  { id: 5, range: [0.50, 0.66], name: 'Growth Animation' },
  { id: 6, range: [0.66, 0.78], name: 'Engagement Icons' },
  { id: 7, range: [0.78, 0.88], name: 'Shooting Star' },
  { id: 8, range: [0.88, 1.00], name: 'Final Scene & CTA' },
];

const clamp = (val, min, max) => Math.min(max, Math.max(min, val));

// Generic Channel Chip Icons (No brand logos)
function ChipIcon({ type }) {
  switch (type) {
    case 'social':
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
          <polyline points="16 6 12 2 8 6"/>
          <line x1="12" y1="2" x2="12" y2="15"/>
        </svg>
      );
    case 'search':
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="11" cy="11" r="7"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
      );
    case 'ads':
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"/>
          <circle cx="12" cy="12" r="6"/>
          <circle cx="12" cy="12" r="2"/>
        </svg>
      );
    case 'email':
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      );
    case 'whatsapp':
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
      );
    default:
      return null;
  }
}

// Scene 6 Floating Icons
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
  const [hasPulsed, setHasPulsed] = useState(false);

  // Lottie Refs
  const growthContainerRef = useRef(null);
  const growthAnimRef = useRef(null);
  const growthLoadedRef = useRef(false);

  const dmContainerRef = useRef(null);
  const dmAnimRef = useRef(null);
  const dmLoadedRef = useRef(false);

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

  // Initialize Growth Lottie (Scene 5)
  useEffect(() => {
    if (!growthContainerRef.current) return;
    try {
      const anim = lottie.loadAnimation({
        container: growthContainerRef.current,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: '/lottie/growth.json',
      });
      growthAnimRef.current = anim;
      anim.addEventListener('DOMLoaded', () => {
        growthLoadedRef.current = true;
        if (reducedMotion) {
          anim.goToAndStop(anim.totalFrames - 1, true);
        } else {
          const scrubT = clamp((progress - 0.50) / (0.62 - 0.50), 0, 1);
          anim.goToAndStop(scrubT * (anim.totalFrames - 1), true);
        }
      });
      anim.addEventListener('data_failed', () => {});
      anim.addEventListener('error', () => {});
    } catch {
      // fail silently, layout won't shift
    }

    return () => {
      try {
        if (growthAnimRef.current) {
          growthAnimRef.current.destroy();
          growthAnimRef.current = null;
          growthLoadedRef.current = false;
        }
      } catch {}
    };
  }, []);

  // Initialize Digital Marketing Lottie (Scene 8)
  useEffect(() => {
    if (!dmContainerRef.current) return;
    try {
      const anim = lottie.loadAnimation({
        container: dmContainerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: '/lottie/digital-marketing.json',
      });
      dmAnimRef.current = anim;
      anim.addEventListener('DOMLoaded', () => {
        dmLoadedRef.current = true;
        if (reducedMotion) {
          anim.goToAndStop(0, true);
        } else if (progress >= 0.88 && progress <= 1.00) {
          anim.play();
        }
      });
      anim.addEventListener('data_failed', () => {});
      anim.addEventListener('error', () => {});
    } catch {
      // fail silently, layout won't shift
    }

    return () => {
      try {
        if (dmAnimRef.current) {
          dmAnimRef.current.destroy();
          dmAnimRef.current = null;
          dmLoadedRef.current = false;
        }
      } catch {}
    };
  }, []);

  // Scrub Growth Lottie with scroll
  useEffect(() => {
    if (!growthAnimRef.current || !growthLoadedRef.current) return;
    if (reducedMotion) {
      growthAnimRef.current.goToAndStop(growthAnimRef.current.totalFrames - 1, true);
      return;
    }
    const scrubT = clamp((progress - 0.50) / (0.62 - 0.50), 0, 1);
    const frame = scrubT * (growthAnimRef.current.totalFrames - 1);
    growthAnimRef.current.goToAndStop(frame, true);
  }, [progress, reducedMotion]);

  // Manage Digital Marketing playback
  useEffect(() => {
    if (!dmAnimRef.current || !dmLoadedRef.current) return;
    if (reducedMotion) {
      dmAnimRef.current.goToAndStop(0, true);
      return;
    }
    const isSceneActive = progress >= 0.88 && progress <= 1.00;
    if (isSceneActive) {
      dmAnimRef.current.play();
    } else {
      dmAnimRef.current.pause();
    }
  }, [progress, reducedMotion]);

  // Trigger one-time soft pulse on chips after all chips appear (progress >= 0.97)
  useEffect(() => {
    if (progress >= 0.97 && !hasPulsed) {
      setHasPulsed(true);
    } else if (progress < 0.88 && hasPulsed) {
      setHasPulsed(false);
    }
  }, [progress, hasPulsed]);

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

  // Compute Chip Staggered Style (Scene 8: [0.90 - 0.97])
  const getChipStyle = (index) => {
    if (reducedMotion) {
      return { opacity: 1, transform: 'none' };
    }
    const step = 0.07 / CHIPS.length; // ~0.014 per chip
    const chipStart = 0.90 + index * step;
    const chipEnd = chipStart + step;

    let opacity = 0;
    let y = 12;

    if (progress >= chipEnd) {
      opacity = 1;
      y = 0;
    } else if (progress > chipStart) {
      const t = (progress - chipStart) / step;
      opacity = t;
      y = 12 * (1 - t);
    }

    return {
      opacity,
      transform: `translate3d(0, ${y.toFixed(1)}px, 0)`,
      transition: 'opacity 0.1s ease-out, transform 0.1s ease-out',
    };
  };

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

      {/* Main Overlay Layer (Z-index 45 sits above illustration birds/bats) */}
      <div className="story-overlay-container" aria-live="polite">
        {/* ==================================================================
            1. [0.00 - 0.10] SUNRISE (Standard Centered Headline)
            ================================================================== */}
        <div
          style={getCardStyle(0.00, 0.10)}
          className={`story-message-card ${activeSceneIndex === 0 ? 'active' : ''}`}
        >
          <h2 className="story-headline">
            Every brand starts in the dark.
          </h2>
        </div>

        {/* Small Scroll Hint (Bobs at progress 0, fades out above 0.03) */}
        <div
          className="story-scroll-hint"
          style={{
            opacity: progress <= 0.03 ? (1 - progress / 0.03) * 0.6 : 0,
            pointerEvents: 'none',
          }}
          aria-hidden="true"
        >
          <span className="text-[12px] uppercase tracking-[0.2em] font-sans font-medium text-white/80">Scroll</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="story-scroll-hint-icon text-white/80"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
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
            5. [0.50 - 0.66] SUN GROWING (GROWTH LOTTIE ANIMATION)
            ================================================================== */}
        <div
          style={getCardStyle(0.50, 0.66)}
          className={`story-message-card max-w-2xl ${activeSceneIndex === 4 ? 'active' : ''}`}
        >
          <h2 className="story-headline">Scaling what works.</h2>

          {/* Dark Glass Card with Scrubbed Growth Animation */}
          <div className="story-growth-card">
            <div ref={growthContainerRef} className="w-full h-full flex items-center justify-center" />
          </div>
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
            8. [0.88 - 1.00] NIGHT, STARS (MEGAPHONE LOTTIE + CHANNEL CHIPS + CTA)
            One centered flex column with gap 1rem
            ================================================================== */}
        <div
          style={getCardStyle(0.88, 1.00)}
          className={`story-message-card story-final-scene ${activeSceneIndex === 7 ? 'active' : ''}`}
        >
          {/* 1) Digital Marketing Lottie with soft blue radial glow */}
          <div className="story-dm-lottie-wrap">
            <div ref={dmContainerRef} className="w-full h-full relative z-10" />
          </div>

          {/* 2) Headline */}
          <h2 className="story-headline text-2xl sm:text-3xl md:text-4xl text-center">
            Ready to start your climb?
          </h2>

          {/* 3) Primary Button: Let's talk */}
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

          {/* 4) Row of 5 Channel Chips (Social, Search, Ads, Email, WhatsApp) */}
          <div className="story-chips-row">
            {CHIPS.map((chip, idx) => (
              <div
                key={chip.id}
                style={{
                  ...getChipStyle(idx),
                  animationDelay: `${idx * 120}ms`,
                }}
                className={`story-chip ${hasPulsed && !reducedMotion ? 'story-chip-pulse' : ''}`}
              >
                <ChipIcon type={chip.icon} />
                <span>{chip.label}</span>
              </div>
            ))}
          </div>

          {/* 5) Small Secondary Link: Scroll back up */}
          <button
            onClick={handleScrollToTop}
            className="text-xs sm:text-sm text-white/70 hover:text-white underline underline-offset-4 cursor-pointer transition-colors pointer-events-auto focus:outline-none focus:ring-2 focus:ring-white/40 rounded py-1 px-2"
          >
            Scroll back up
          </button>
        </div>
      </div>
    </>
  );
}

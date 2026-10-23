import React, { useState, useEffect, useRef } from 'react';
import lottie from 'lottie-web';

// 8 Webcraft Special Prizes - using ONLY the 1:1 transparent PNG assets on the wheel slices
export const PRIZES = [
  {
    id: 'surprise_gift',
    title: 'Surprise Gift',
    desc: 'An exclusive mystery agency bonus tailored for your high-impact brand growth.',
    img: '/assets/spinWheel/Glossy Purple Gift Box with Golden Bow.png',
    sliceColor: '#ffffff',
  },
  {
    id: 'seo_audit',
    title: 'Website SEO Audit',
    desc: 'In-depth site crawl uncovering high-intent ranking keywords and speed optimizations.',
    img: '/assets/spinWheel/Glossy Blue Analytics Dashboard.png',
    sliceColor: '#eef4ff',
  },
  {
    id: 'monthly_management',
    title: 'Monthly Management',
    desc: 'Special rate on ongoing design, growth, and development retainers.',
    img: '/assets/spinWheel/Glossy Purple Progress Blocks with Orange Sphere.png',
    sliceColor: '#ffffff',
  },
  {
    id: 'ad_creative',
    title: 'Free Ad Creative Concept',
    desc: 'High-converting visual ad mockups and conversion hooks designed for your brand.',
    img: '/assets/spinWheel/Floating Neon Green Laptop.png',
    sliceColor: '#f3f6ff',
  },
  {
    id: 'social_audit',
    title: 'Social Media Audit',
    desc: 'Full diagnostic breakdown of your social engagement, content hooks, and audience reach.',
    img: '/assets/spinWheel/Glossy Orange and Red Megaphone.png',
    sliceColor: '#ffffff',
  },
  {
    id: 'free_consultation',
    title: 'Free Consultation',
    desc: 'A dedicated 1-on-1 strategy deep-dive with Webcraft founders and lead designers.',
    img: '/assets/spinWheel/Mint Green Envelope with Blue Wax Seal.png',
    sliceColor: '#eef4ff',
  },
  {
    id: 'brand_strategy',
    title: 'Brand Strategy',
    desc: 'Complete positioning architecture to stand out from competitors in your niche.',
    img: '/assets/spinWheel/Glossy Coral and Purple UI Card Stack.png',
    sliceColor: '#ffffff',
  },
  {
    id: 'paid_ads_setup',
    title: 'Paid Ads Setup',
    desc: 'Turnkey paid ad account setup, pixel conversion tracking, and initial campaign architecture.',
    img: '/assets/spinWheel/Futuristic Teal Crystal Arrow.png',
    sliceColor: '#f3f6ff',
  },
];

const N = PRIZES.length; // 8
const S = 360 / N; // 45 degrees per wedge
const CX = 300;
const CY = 300;
const R = 262;
const B = 16; // 16 circumference light bulbs

function pt(r, deg) {
  const t = (deg * Math.PI) / 180;
  return [CX + r * Math.sin(t), CY - r * Math.cos(t)];
}

export default function SpinWheelModal({ isOpen, onClose, onOpenContact }) {
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [bulbState, setBulbState] = useState('idle'); // 'idle' | 'chase' | 'win'
  const [revealStage, setRevealStage] = useState('idle'); // 'idle' | 'gift_reveal' | 'claim_card'
  const [wonPrize, setWonPrize] = useState(null);
  const [hasSpun, setHasSpun] = useState(false);

  const wheelRef = useRef(null);
  const lottieContainerRef = useRef(null);
  const lottieAnimRef = useRef(null);

  // Audio References
  const clickSoundRef = useRef(null);
  const spinSoundRef = useRef(null);
  const jackpotSoundRef = useRef(null);
  const revealSoundRef = useRef(null);
  const spinTimerRef = useRef(null);

  // Initialize Audio
  useEffect(() => {
    try {
      clickSoundRef.current = new Audio('/assets/spinWheel/Button clicks.mp3');
      spinSoundRef.current = new Audio('/assets/spinWheel/Continuous spinning.mp3');
      spinSoundRef.current.loop = true;
      jackpotSoundRef.current = new Audio('/assets/spinWheel/Jackpot.mp3');
      revealSoundRef.current = new Audio('/assets/spinWheel/Prize reveal.mp3');
    } catch (e) {
      console.warn('Audio initialization notice:', e);
    }

    return () => {
      stopAllAudio();
    };
  }, []);

  const stopAllAudio = () => {
    if (spinTimerRef.current) {
      clearTimeout(spinTimerRef.current);
      spinTimerRef.current = null;
    }
    [spinSoundRef, clickSoundRef, jackpotSoundRef, revealSoundRef].forEach((ref) => {
      if (ref && ref.current) {
        try {
          ref.current.pause();
          ref.current.currentTime = 0;
        } catch {}
      }
    });
  };

  const playSound = (audio) => {
    if (!audio) return;
    try {
      audio.currentTime = 0;
      audio.volume = 1;
      const p = audio.play();
      if (p && p.catch) p.catch(() => {});
    } catch {}
  };

  // Close modal with ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen && !spinning) {
        handleModalClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, spinning]);

  // Handle Lottie instantiation during 'gift_reveal'
  useEffect(() => {
    if (revealStage === 'gift_reveal' && lottieContainerRef.current) {
      if (lottieAnimRef.current) {
        lottieAnimRef.current.destroy();
      }
      try {
        lottieAnimRef.current = lottie.loadAnimation({
          container: lottieContainerRef.current,
          renderer: 'svg',
          loop: false,
          autoplay: true,
          path: '/assets/spinWheel/Gift Reward Animation.json',
        });
      } catch (err) {
        console.warn('Lottie load notice:', err);
      }
    }

    return () => {
      if (lottieAnimRef.current) {
        lottieAnimRef.current.destroy();
        lottieAnimRef.current = null;
      }
    };
  }, [revealStage]);

  const handleModalClose = () => {
    stopAllAudio();
    onClose();
  };

  const spin = () => {
    if (spinning || revealStage !== 'idle') return;
    setSpinning(true);
    setRevealStage('idle');
    playSound(clickSoundRef.current);

    // Pick random winning prize
    const winIdx = Math.floor(Math.random() * N);
    const jitter = (Math.random() - 0.5) * (S * 0.45);
    const cur = ((rotation % 360) + 360) % 360;
    const delta = (((360 - winIdx * S - cur) % 360) + 360) % 360;
    const newRot = rotation + 360 * 6 + delta + jitter;

    setRotation(newRot);
    setBulbState('chase');

    // Start continuous spinning audio
    playSound(spinSoundRef.current);

    // Stop continuous spinning audio once it finishes 2 seconds
    if (spinTimerRef.current) clearTimeout(spinTimerRef.current);
    spinTimerRef.current = setTimeout(() => {
      if (spinSoundRef.current) {
        spinSoundRef.current.pause();
        spinSoundRef.current.currentTime = 0;
      }
    }, 2000);

    // Wheel animation duration is 6s
    setTimeout(() => {
      // 1. Ensure spin sound is completely stopped
      if (spinTimerRef.current) clearTimeout(spinTimerRef.current);
      if (spinSoundRef.current) {
        spinSoundRef.current.pause();
        spinSoundRef.current.currentTime = 0;
      }

      // 2. Play celebration fanfare sounds
      playSound(revealSoundRef.current);
      playSound(jackpotSoundRef.current);

      setBulbState('win');
      setWonPrize(PRIZES[winIdx]);
      setSpinning(false);
      setHasSpun(true);

      // 3. Step 1 of Reveal: Show large Lottie Gift Reward Animation first
      setRevealStage('gift_reveal');

      // 4. Step 2 of Reveal: After 2.3 seconds of gift opening, display Claim Reward Box
      setTimeout(() => {
        setRevealStage('claim_card');
        setBulbState('idle');
      }, 2300);
    }, 6000);
  };

  const handleClaim = () => {
    playSound(clickSoundRef.current);
    handleModalClose();
    if (onOpenContact) {
      onOpenContact();
    }
  };

  const handleSpinAgain = () => {
    playSound(clickSoundRef.current);
    setRevealStage('idle');
    setBulbState('idle');
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[999999] flex items-center justify-center p-3 sm:p-6 overflow-y-auto select-none"
      style={{
        background:
          'repeating-conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0.08) 0 6deg, transparent 6deg 12deg), radial-gradient(circle at 50% 45%, #0576fc 0%, #035cc7 70%, #023880 100%)',
      }}
      role="dialog"
      aria-modal="true"
    >
      <style>{`
        @keyframes bulb-idle {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; filter: drop-shadow(0 0 8px rgba(255, 215, 0, 0.9)); }
        }
        @keyframes bulb-chase {
          0%, 45% { fill: #fff6d6; filter: drop-shadow(0 0 6px rgba(255, 215, 0, 0.95)) drop-shadow(0 0 14px rgba(255, 215, 0, 0.9)); opacity: 1; }
          50%, 100% { fill: #93c5fd; filter: none; opacity: 0.45; }
        }
        @keyframes bulb-flash {
          0%, 100% { fill: #fff6d6; filter: drop-shadow(0 0 16px rgba(255, 215, 0, 1)); opacity: 1; }
          50% { fill: #60a5fa; filter: none; opacity: 0.4; }
        }
        .bulb-idle { animation: bulb-idle 2.4s ease-in-out infinite; }
        .bulb-chase { animation: bulb-chase 0.45s linear infinite; }
        .bulb-win { animation: bulb-flash 0.3s steps(1) infinite; }
      `}</style>

      {/* Floating Whimsical Notes on Large Screens (Exact match from reference HTML) */}
      <div className="hidden lg:block absolute left-8 xl:left-14 top-28 font-serif italic text-2xl xl:text-3xl text-white/90 transform -rotate-12 pointer-events-none drop-shadow-md">
        Good Ideas<br />Win Here!
      </div>
      <div className="hidden lg:block absolute right-8 xl:right-14 top-32 font-serif italic text-2xl xl:text-3xl text-white/90 transform rotate-8 pointer-events-none drop-shadow-md">
        Spin<br />for Growth!
      </div>
      <div className="hidden lg:block absolute left-8 xl:left-14 bottom-16 font-serif italic text-2xl xl:text-3xl text-white/90 transform -rotate-8 pointer-events-none drop-shadow-md">
        Marketing growth<br />starts with a spin!
      </div>
      <div className="hidden lg:block absolute right-8 xl:right-14 bottom-16 font-serif italic text-2xl xl:text-3xl text-white/90 transform rotate-12 pointer-events-none drop-shadow-md">
        Same Luck.<br />Bigger Brands.
      </div>

      {/* Close button at top-right */}
      <button
        onClick={() => {
          playSound(clickSoundRef.current);
          handleModalClose();
        }}
        disabled={spinning}
        aria-label="Close spin wheel"
        className="fixed top-5 right-5 sm:top-7 sm:right-7 z-50 w-11 h-11 rounded-full bg-black/25 hover:bg-black/45 active:scale-95 text-white text-2xl font-bold flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm border border-white/20 disabled:opacity-30 disabled:cursor-not-allowed"
      >
        &times;
      </button>

      {/* Center Stage Container */}
      <div className="relative w-full max-w-[540px] flex flex-col items-center text-center my-auto py-4">
        {/* Eyebrow & Headline */}
        <p className="text-white/80 font-bold text-xs sm:text-sm tracking-[0.35em] uppercase mb-1 drop-shadow-sm">
          Webcraft Special
        </p>
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-none mb-2 drop-shadow-md">
          Spin &amp; <span className="text-[#ffe066]">Win</span>
        </h2>
        <p className="text-white/85 text-xs sm:text-sm max-w-sm mb-4 leading-relaxed drop-shadow-sm">
          Take a spin and unlock an exclusive agency prize. Transparent 3D perks ready to claim!
        </p>

        {/* Wheel SVG Stage */}
        <div className="relative w-full max-w-[430px] aspect-square select-none my-1">
          <svg
            viewBox="0 0 600 600"
            className="w-full h-full overflow-visible drop-shadow-2xl"
            role="img"
            aria-label="Spin and Win Wheel"
          >
            <defs>
              <radialGradient id="hubg">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#0576fc" />
              </radialGradient>
              <filter id="wheelShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="10" stdDeviation="16" floodColor="#001845" floodOpacity="0.5" />
              </filter>
            </defs>

            {/* Blue Outer Wheel Rim */}
            <circle cx="300" cy="300" r="292" fill="#034fb3" filter="url(#wheelShadow)" />
            <circle cx="300" cy="300" r="292" fill="none" stroke="#60a5fa" strokeWidth="3.5" />

            {/* Glowing Halo */}
            <circle
              cx="300"
              cy="300"
              r="275"
              fill="none"
              stroke="rgba(255, 224, 102, 0.45)"
              strokeWidth="24"
              className={`transition-opacity duration-300 ${spinning ? 'opacity-100' : 'opacity-0'}`}
            />

            {/* ROTATING WHEEL: 8 Wedges with ONLY the 1:1 transparent PNGs */}
            <g
              ref={wheelRef}
              id="wheel"
              style={{
                transformOrigin: '300px 300px',
                transform: `rotate(${rotation}deg)`,
                transition: spinning ? 'transform 6s cubic-bezier(0.12, 0.72, 0.08, 1)' : 'none',
              }}
            >
              {PRIZES.map((prize, i) => {
                const a = i * S;
                const p1 = pt(R, a - S / 2);
                const p2 = pt(R, a + S / 2);
                const pathD = `M${CX} ${CY} L${p1[0]} ${p1[1]} A${R} ${R} 0 0 1 ${p2[0]} ${p2[1]} Z`;

                return (
                  <g key={prize.id}>
                    {/* Wedge Background */}
                    <path
                      d={pathD}
                      fill={prize.sliceColor}
                      stroke="rgba(0, 0, 0, 0.08)"
                      strokeWidth="1.5"
                    />

                    {/* 1:1 Transparent PNG - positioned cleanly with zero text/emojis */}
                    <g transform={`rotate(${a} ${CX} ${CY})`}>
                      <image
                        href={prize.img}
                        x={CX - 46}
                        y={CY - 225}
                        width="92"
                        height="92"
                        preserveAspectRatio="xMidYMid meet"
                        className="select-none pointer-events-none"
                      />
                    </g>
                  </g>
                );
              })}
            </g>

            {/* Inner Ring Divider */}
            <circle cx="300" cy="300" r="263" fill="none" stroke="rgba(0, 0, 0, 0.14)" strokeWidth="3" />

            {/* Circumference Light Bulbs */}
            <g id="bulbs">
              {Array.from({ length: B }).map((_, i) => {
                const q = pt(277, (i * 360) / B);
                const isEven = i % 2 === 0;

                return (
                  <circle
                    key={i}
                    cx={q[0]}
                    cy={q[1]}
                    r="8.5"
                    fill={bulbState === 'win' ? '#fff6d6' : isEven ? '#fff6d6' : '#ffe180'}
                    stroke="#034fb3"
                    strokeWidth="1.5"
                    className={`bulb-${bulbState}`}
                    style={{
                      animationDelay:
                        bulbState === 'chase'
                          ? `${-(i % B) * (0.45 / B)}s`
                          : `${isEven ? -1.2 : 0}s`,
                    }}
                  />
                );
              })}
            </g>

            {/* Top Pointer Arrow - Single Unified Teardrop Pin */}
            <g id="pointer">
              <path
                d="M 300 84 L 278.55 52.7 A 26 26 0 1 1 321.45 52.7 Z"
                fill="#034fb3"
                stroke="#ffffff"
                strokeWidth="3"
                strokeLinejoin="round"
                strokeLinecap="round"
                filter="url(#wheelShadow)"
              />
              <circle cx="300" cy="38" r="7.5" fill="#ffffff" />
            </g>

            {/* Center SPIN Hub */}
            <g
              id="hub"
              role="button"
              tabIndex={0}
              aria-label="Spin the wheel"
              onClick={spin}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  spin();
                }
              }}
              className={`cursor-pointer transition-transform duration-200 ${
                spinning ? 'pointer-events-none opacity-85' : 'hover:scale-105 active:scale-95'
              }`}
            >
              <circle cx="300" cy="300" r="66" fill="#cfe0ff" opacity="0.8" />
              <circle cx="300" cy="300" r="54" fill="url(#hubg)" stroke="#ffffff" strokeWidth="2.5" />
              <text
                x="300"
                y="312"
                fontSize="32"
                fontWeight="900"
                fill="#ffffff"
                textAnchor="middle"
                className="font-display tracking-wider select-none pointer-events-none"
              >
                SPIN
              </text>
              <path
                d="M286 328 h28 m-8 -7 l7 7 -7 7"
                stroke="#ffffff"
                strokeWidth="3.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </div>

        {/* Primary CTA Button */}
        <button
          onClick={spin}
          disabled={spinning}
          className="cursor-pointer mt-5 w-full max-w-sm py-4 rounded-full bg-white text-[#0576fc] hover:bg-[#ffe066] hover:text-black font-black text-base sm:text-lg tracking-wide shadow-2xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed uppercase"
        >
          {spinning ? 'Good Luck! Spinning…' : 'Spin the Wheel →'}
        </button>

        <p className="text-white/70 text-xs sm:text-sm mt-3">
          {hasSpun ? 'Reward unlocked! Claim below or spin again.' : 'You can spin once. Rewards are non-transferable.'}
        </p>
      </div>

      {/* STAGE 1 REVEAL: Large Lottie Gift Reward Animation in center */}
      {revealStage === 'gift_reveal' && (
        <div className="fixed inset-0 z-[9999999] flex flex-col items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
          <div className="relative flex flex-col items-center">
            {/* Pulsing Glow behind Lottie */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#0576fc]/40 blur-3xl animate-pulse pointer-events-none" />

            {/* Lottie Animation Container - Big & Webcraft Blue Themed */}
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              <div ref={lottieContainerRef} className="w-full h-full" />
            </div>

            <div className="mt-4 px-6 py-2.5 rounded-full bg-[#0576fc] border border-white/30 text-white font-display font-black text-sm sm:text-base tracking-widest uppercase shadow-xl animate-bounce">
              🎉 Unwrapping Your Reward…
            </div>
          </div>
        </div>
      )}

      {/* STAGE 2 REVEAL: Claim My Reward Card */}
      {revealStage === 'claim_card' && wonPrize && (
        <div
          className="fixed inset-0 z-[9999999] flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-md bg-white border border-black/10 rounded-[32px] p-6 sm:p-8 text-center shadow-2xl animate-scale-up flex flex-col items-center">
            {/* Top Close Button for result */}
            <button
              onClick={() => {
                playSound(clickSoundRef.current);
                handleModalClose();
              }}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-black/5 hover:bg-black/10 active:scale-95 transition-all flex items-center justify-center text-lg font-bold text-neutral-600 cursor-pointer"
            >
              &times;
            </button>

            {/* 3D Prize Icon Image (1:1 Transparent PNG) */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 my-2 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-[#0576fc]/10 blur-xl" />
              <img
                src={wonPrize.img}
                alt={wonPrize.title}
                className="relative w-full h-full object-contain drop-shadow-xl animate-pulse"
              />
            </div>

            {/* Webcraft Special Tag */}
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#0576fc]/10 text-[#0576fc] font-bold text-xs tracking-wider uppercase mb-2">
              Reward Unlocked
            </span>

            {/* Prize Title */}
            <h3 className="font-display text-2xl sm:text-3xl font-black text-neutral-900 mb-2 leading-tight">
              {wonPrize.title}
            </h3>

            {/* Prize Description */}
            <p className="text-neutral-650 text-xs sm:text-sm leading-relaxed mb-6 max-w-xs text-neutral-600">
              {wonPrize.desc}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 w-full">
              <button
                onClick={handleClaim}
                className="cursor-pointer w-full py-4 rounded-full bg-gradient-to-r from-[#0576fc] to-[#0460d0] hover:from-[#0460d0] hover:to-[#034fb3] text-white font-bold text-base shadow-xl shadow-[#0576fc]/30 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                Claim My Reward →
              </button>

              <button
                onClick={handleSpinAgain}
                className="cursor-pointer w-full py-2.5 rounded-full bg-transparent hover:bg-black/5 text-neutral-600 font-semibold text-sm transition-colors"
              >
                Spin Again
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

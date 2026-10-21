import React, { useState, useEffect } from 'react';

export default function WebcraftIntro({ onComplete }) {
  const [skipped, setSkipped] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    // Total animation duration is 9.45s in webcraft-intro.html
    const timer = setTimeout(() => {
      setFinished(true);
      if (onComplete) onComplete();
    }, 9500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const handleSkip = () => {
    setSkipped(true);
    setFinished(true);
    if (onComplete) onComplete();
  };

  if (finished) return null;

  return (
    <>
      <style>{`
        @property --r {
          syntax: '<length>';
          inherits: false;
          initial-value: 0px;
        }

        .webcraft-loader-root {
          --intro-bg: #F8EEE8;
          --intro-ink: #0576fc;
          --intro-ws: 1.6;
          --intro-sx: 802px;
          --intro-ease: cubic-bezier(.65, 0, .25, 1);
        }

        @media (max-width: 600px) {
          .webcraft-loader-root {
            --intro-ws: 2.5;
          }
        }

        .webcraft-loader {
          position: fixed;
          inset: 0;
          z-index: 99999;
          background: var(--intro-bg);
          display: grid;
          place-items: center;
          padding: 0 5vw;
          cursor: pointer;
          -webkit-mask: radial-gradient(circle at 50% 50%, transparent calc(var(--r, 0px) - 50px), #000 var(--r, 0px));
          mask: radial-gradient(circle at 50% 50%, transparent calc(var(--r, 0px) - 50px), #000 var(--r, 0px));
          animation: webcraft-open 1.25s cubic-bezier(.6, 0, .2, 1) 8.15s forwards, webcraft-gone .01s linear 9.45s forwards;
          transition: opacity 0.4s ease;
        }

        .webcraft-loader.skip {
          display: none !important;
        }

        .webcraft-stage {
          width: min(100%, 980px);
        }

        .webcraft-stage svg {
          display: block;
          width: 100%;
          height: auto;
          overflow: visible;
        }

        .webcraft-s {
          fill: none;
          stroke: var(--intro-ink);
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-width: 3;
          stroke-dasharray: 1 2;
          stroke-dashoffset: 1.02;
          opacity: 0;
        }

        .webcraft-wg {
          transform-box: fill-box;
          transform-origin: center;
          transform: translateX(var(--intro-sx)) scale(var(--intro-ws));
          animation: webcraft-wmove .95s var(--intro-ease) 2.25s forwards,
                     webcraft-wback .8s var(--intro-ease) 7.25s forwards,
                     webcraft-wopen 1.1s cubic-bezier(.6, 0, .2, 1) 8.15s forwards;
        }

        .webcraft-w {
          animation: webcraft-draw 1.1s var(--intro-ease) .3s both,
                     webcraft-weight .7s var(--intro-ease) 1.4s forwards;
        }

        .webcraft-l {
          animation:
            webcraft-draw .9s var(--intro-ease) calc(2.9s + var(--i) * .14s) both,
            webcraft-weight .7s var(--intro-ease) 4.7s forwards,
            webcraft-thin .5s var(--intro-ease) 6.4s forwards,
            webcraft-undraw .6s var(--intro-ease) calc(6.7s + (6 - var(--i)) * .07s) forwards;
        }

        @keyframes webcraft-draw {
          0% { stroke-dashoffset: 1.02; opacity: 0; }
          2% { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 1; }
        }

        @keyframes webcraft-weight {
          from { stroke-width: 3; }
          to { stroke-width: 42; }
        }

        @keyframes webcraft-thin {
          from { stroke-width: 42; }
          to { stroke-width: 3; }
        }

        @keyframes webcraft-undraw {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -1.02; }
        }

        @keyframes webcraft-wmove {
          from { transform: translateX(var(--intro-sx)) scale(var(--intro-ws)); }
          to { transform: none; }
        }

        @keyframes webcraft-wback {
          from { transform: none; }
          to { transform: translateX(var(--intro-sx)) scale(var(--intro-ws)); }
        }

        @keyframes webcraft-wopen {
          from { transform: translateX(var(--intro-sx)) scale(var(--intro-ws)); opacity: 1; }
          to { transform: translateX(var(--intro-sx)) scale(calc(var(--intro-ws) * 5)); opacity: 0; }
        }

        @keyframes webcraft-open {
          from { --r: 0px; }
          to { --r: 160vmax; }
        }

        @keyframes webcraft-gone {
          to { visibility: hidden; pointer-events: none; opacity: 0; }
        }

        .webcraft-skip-hint {
          position: absolute;
          bottom: 2rem;
          font-family: inherit;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(5, 118, 252, 0.5);
          user-select: none;
          pointer-events: none;
          transition: opacity 0.3s;
        }
      `}</style>

      <div
        className={`webcraft-loader-root webcraft-loader ${skipped ? 'skip' : ''}`}
        onClick={handleSkip}
        role="button"
        tabIndex={0}
        aria-label="Skip intro animation"
        title="Tap to skip"
      >
        <div className="webcraft-stage">
          <svg viewBox="0 0 2060 320">
            <g transform="translate(-70 -215)">
              {/* W initial & movement */}
              <g className="webcraft-wg">
                <path
                  className="webcraft-s webcraft-w"
                  pathLength="1"
                  d="M119 269 V392 C119 450 160 485 207 485 C240 485 272 470 298 452 C330 415 366 385 366 335 C366 295 335 269 298 269 C261 269 230 295 230 335 C230 385 266 415 298 452 C324 470 356 485 389 485 C436 485 477 450 477 392 V269"
                />
              </g>

              {/* E */}
              <path
                className="webcraft-s webcraft-l"
                style={{ '--i': 0 }}
                pathLength="1"
                d="M705 269 H580 C558 269 545 283 545 306 V444 C545 467 558 481 580 481 H705 M545 375 H690"
              />

              {/* B */}
              <path
                className="webcraft-s webcraft-l"
                style={{ '--i': 1 }}
                pathLength="1"
                d="M770 269 V481 M770 269 H858 C897 269 917 285 917 313 C917 341 897 372 858 372 H770 M858 372 C902 372 920 395 920 426 C920 458 900 481 858 481 H770"
              />

              {/* C */}
              <path
                className="webcraft-s webcraft-l"
                style={{ '--i': 2 }}
                pathLength="1"
                d="M1176 307 A105 105 0 1 0 1176 441"
              />

              {/* R */}
              <path
                className="webcraft-s webcraft-l"
                style={{ '--i': 3 }}
                pathLength="1"
                d="M1247 481 V269 H1342 C1376 269 1397 288 1397 322 C1397 356 1378 392 1342 392 H1312 M1312 392 L1394 481"
              />

              {/* A */}
              <path
                className="webcraft-s webcraft-l"
                style={{ '--i': 4 }}
                pathLength="1"
                d="M1456 479 L1533 298 C1543 276 1552 269 1561 269 C1570 269 1579 276 1589 298 L1668 479"
              />

              {/* F */}
              <path
                className="webcraft-s webcraft-l"
                style={{ '--i': 5 }}
                pathLength="1"
                d="M1727 479 V300 C1727 280 1740 269 1760 269 H1858 M1727 372 H1850"
              />

              {/* T */}
              <path
                className="webcraft-s webcraft-l"
                style={{ '--i': 6 }}
                pathLength="1"
                d="M1921 269 H2077 M1998 269 V479"
              />
            </g>
          </svg>
        </div>

        <div className="webcraft-skip-hint">
          Click anywhere to skip
        </div>
      </div>
    </>
  );
}

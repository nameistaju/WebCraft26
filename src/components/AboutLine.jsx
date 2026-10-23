import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  window.__ST = ScrollTrigger;
}

// EXACT SVG PATH SUPPLIED FROM TWO26
const EXACT_SVG_D =
  'M589.197 44.4517C524.298 155.096 689.594 233.307 679.453 361.721C656.581 651.382 33.3461 531.904 44.5948 842.669C55.5512 1145.34 943.6 1009.73 972.889 1509.79C986.085 1735.06 753.837 1976.23 551.647 2063.54M551.647 2063.54C448.357 2108.15 352.912 2112.6 302.041 2054.27C220.384 1960.64 282.049 1802.08 420.282 1817.87C544.745 1832.09 567.241 1958.32 557.712 2024.71C555.91 2037.26 553.865 2050.22 551.647 2063.54ZM551.647 2063.54C520.546 2250.42 455.716 2509.87 557.712 2754.23';

export default function AboutLine({ containerRef }) {
  const pathRef = useRef(null);
  const layerRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const triggerEl = containerRef?.current || layerRef.current?.parentElement;
    if (!path || !triggerEl) return;

    let totalLength = 4795.6;
    try {
      totalLength = path.getTotalLength() || 4795.6;
    } catch {
      totalLength = 4795.6;
    }

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      path.style.strokeDasharray = 'none';
      path.style.strokeDashoffset = '0';
      path.style.visibility = 'visible';
      return;
    }

    // Initial state: Anchor dot visible at start point (589.2, 44.5) on Diana's hair
    path.style.strokeDasharray = `10 ${totalLength + 100}`;
    path.style.strokeDashoffset = '0';
    path.style.visibility = 'visible';
    path.style.strokeWidth = '88.8889';

    // Single unified GSAP context with ScrollTrigger
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerEl,
          start: 'top 75%',
          end: 'bottom bottom',
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });

      // Two26 Signature Synchronized Keyframes:
      // 0.00 -> 0.12 (scroll 0 -> 350): Diana's hair & neck contour curve (0% -> 8% path length)
      // 0.12 -> 0.35 (scroll 350 -> 1000): Sweeps to Drinks tray (8% -> 28% path length)
      // 0.35 -> 0.52 (scroll 1000 -> 1450): Sweeps across from Drinks to Chairs apex (28% -> 55% path length)
      // 0.52 -> 0.68 (scroll 1450 -> 1900): Teardrop loop draws under chairs & wraps text (55% -> 88% path length)
      // 0.68 -> 0.76 (scroll 1900 -> 2150): Plunges down from loop towards Manifesto (88% -> 100% path length)
      // 0.76 -> 0.82 (scroll 2150 -> 2350): Hold before flood begins
      // 0.82 -> 0.98 (scroll 2350 -> 2870): Two26 Signature Flood:
      //               - 0.82 -> 0.88: strokeWidth expands to 320px, hole shrinks into almond slit
      //               - 0.88 -> 0.98: strokeWidth expands to 2500px, hole pinches shut and screen floods blue
      tl.to(
        path,
        {
          strokeDasharray: `${totalLength * 0.08} ${totalLength + 100}`,
          duration: 0.12,
          ease: 'power1.out',
        },
        0
      )
        .to(
          path,
          {
            strokeDasharray: `${totalLength * 0.28} ${totalLength + 100}`,
            duration: 0.23,
            ease: 'none',
          },
          0.12
        )
        .to(
          path,
          {
            strokeDasharray: `${totalLength * 0.55} ${totalLength + 100}`,
            duration: 0.17,
            ease: 'none',
          },
          0.35
        )
        .to(
          path,
          {
            strokeDasharray: `${totalLength * 0.88} ${totalLength + 100}`,
            duration: 0.16,
            ease: 'power1.inOut',
          },
          0.52
        )
        .to(
          path,
          {
            strokeDasharray: `${totalLength} ${totalLength + 100}`,
            duration: 0.08,
            ease: 'none',
          },
          0.68
        )
        .to(
          path,
          {
            strokeWidth: 320,
            duration: 0.06,
            ease: 'none',
          },
          0.82
        )
        .to(
          path,
          {
            strokeWidth: 2500,
            duration: 0.10,
            ease: 'power2.in',
          },
          0.88
        )
        .to(
          {},
          { duration: 0.02 },
          0.98
        );
    });

    const onResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', onResize);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);

    return () => {
      window.removeEventListener('resize', onResize);
      clearTimeout(timer);
      ctx.revert();
    };
  }, [containerRef]);

  return (
    <div
      ref={layerRef}
      className="about-line-layer pointer-events-none absolute inset-x-0 top-0 w-full max-w-7xl mx-auto px-4 sm:px-8 z-10 select-none overflow-visible"
      aria-hidden="true"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1018 2799"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto block"
        preserveAspectRatio="xMidYMin meet"
        overflow="visible"
        style={{ overflow: 'visible' }}
      >
        {/* Main Animated Path */}
        <path
          ref={pathRef}
          d={EXACT_SVG_D}
          stroke="#087BFF"
          strokeWidth="88.8889"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ visibility: 'hidden' }}
        />
      </svg>
    </div>
  );
}

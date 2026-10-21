import React, { useEffect, useRef } from 'react';

export default function CurvedMarquee() {
  const textPathRef = useRef(null);
  const offsetRef = useRef(0);

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      // Move text continuously along the curve
      offsetRef.current -= 0.6;
      if (offsetRef.current <= -1200) {
        offsetRef.current = 0;
      }
      if (textPathRef.current) {
        textPathRef.current.setAttribute('startOffset', `${offsetRef.current}px`);
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const marqueeText = "LET’S MAKE IT MAKE SENSE  •  GOOD LOOKS INCLUDED  •  LET’S MAKE IT MAKE SENSE  •  GOOD LOOKS INCLUDED  •  LET’S MAKE IT MAKE SENSE  •  GOOD LOOKS INCLUDED  •  LET’S MAKE IT MAKE SENSE  •  GOOD LOOKS INCLUDED  •  ";

  return (
    <div className="w-full relative overflow-visible pointer-events-none select-none -mt-8 md:-mt-16 lg:-mt-24 z-20">
      <svg
        viewBox="0 0 1440 370"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-auto block overflow-visible"
      >
        <defs>
          <path
            id="hero-marquee-curve"
            d="M-43.0867 292.81C179.631 174.299 464.078 116.458 712.699 90.6403C934.59 67.5984 1166.5 74.6231 1436.89 105.117 L 5000 507"
            fill="none"
          />
        </defs>

        {/* Blue Curved Ribbon Background */}
        <path
          d="M-43.0867 292.81C179.631 174.299 464.078 116.458 712.699 90.6403C934.59 67.5984 1166.5 74.6231 1436.89 105.117"
          stroke="#0576fc"
          strokeWidth="154"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Marquee Text on Path */}
        <text
          fill="#FFFFFF"
          dominantBaseline="central"
          alignmentBaseline="central"
          fontSize="72"
          fontWeight="800"
          style={{
            fontFamily: 'Mdnichrometest, Impact, sans-serif',
            letterSpacing: '0.04em',
            dominantBaseline: 'central',
            alignmentBaseline: 'central'
          }}
        >
          <textPath
            ref={textPathRef}
            href="#hero-marquee-curve"
            startOffset="0px"
            dominantBaseline="central"
            alignmentBaseline="central"
          >
            {marqueeText}
          </textPath>
        </text>
      </svg>
    </div>
  );
}

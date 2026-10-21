import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { assetMap } from '../assets/assetMap';
import WebcraftLogo from './WebcraftLogo';

gsap.registerPlugin(ScrollTrigger);

export default function EditorialAbout() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const pill1Ref = useRef(null);
  const pill2Ref = useRef(null);
  const pill3Ref = useRef(null);

  const fullText = "We believe creative work needs focus. That’s why we keep our team tight and our involvement high, so every project gets our full attention. We build brands from scratch or make them better.";

  useEffect(() => {
    if (!sectionRef.current || !textRef.current) return;

    const chars = textRef.current.querySelectorAll('.about-char');
    const pills = [pill1Ref.current, pill2Ref.current, pill3Ref.current].filter(Boolean);

    // Initial state: chars start with dark charcoal/orange tint
    gsap.set(chars, {
      color: '#111111',
      opacity: 0.25,
    });

    gsap.set(pills, {
      opacity: 0,
      scale: 0.6,
      y: 20,
    });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          end: 'bottom 40%',
          scrub: 0.8,
        },
      });

      // Scrub characters to solid black
      tl.to(chars, {
        opacity: 1,
        color: '#000000',
        stagger: {
          each: 0.02,
          from: 'start',
        },
        duration: 1,
      });

      // Pop in pills at milestones
      if (pill1Ref.current) {
        tl.to(
          pill1Ref.current,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.4,
            ease: 'back.out(2)',
          },
          0.3,
        );
      }

      if (pill2Ref.current) {
        tl.to(
          pill2Ref.current,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.4,
            ease: 'back.out(2)',
          },
          0.6,
        );
      }

      if (pill3Ref.current) {
        tl.to(
          pill3Ref.current,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.4,
            ease: 'back.out(2)',
          },
          0.85,
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full bg-[#F8EEE8] py-24 md:py-36 px-4 sm:px-8 overflow-hidden flex flex-col items-center justify-center min-h-[70vh]"
    >
      {/* Top Header Badge & Logo */}
      <div className="flex flex-col items-center justify-center mb-10 md:mb-14 text-center text-[#0576fc]">
        <WebcraftLogo
          variant="full"
          className="h-4 sm:h-5 w-auto mb-2"
          color="#0576fc"
        />
        <span className="font-sans text-[11px] md:text-xs uppercase tracking-[0.25em] font-semibold text-black/70">
          A BIT ABOUT US
        </span>
      </div>

      {/* Main Single Editorial Statement with 3 Floating Orange Pills */}
      <div className="relative max-w-5xl mx-auto text-center px-4">
        <p
          ref={textRef}
          className="font-sans text-[6vw] sm:text-[4.5vw] md:text-[48px] lg:text-[58px] font-bold text-black leading-[1.15] tracking-[-0.03em] select-none normal-case"
        >
          {fullText.split('').map((char, i) => (
            <span
              key={i}
              className="about-char inline-block transition-colors duration-100"
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </p>

        {/* Floating Blue Pill 1: Professional overthinkers (Top Right) */}
        <div
          ref={pill1Ref}
          className="absolute top-[18%] right-[8%] sm:right-[15%] md:right-[20%] z-20 pointer-events-none transform -rotate-[4deg] transition-transform duration-300 hover:rotate-0"
        >
          <div className="bg-[#0576fc] text-white px-4 py-1.5 sm:px-5 sm:py-2 rounded-full shadow-md">
            <span className="font-sans text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap">
              Professional overthinkers
            </span>
          </div>
        </div>

        {/* Floating Blue Pill 2: Nerding out on design (Middle Left) */}
        <div
          ref={pill2Ref}
          className="absolute top-[52%] left-[4%] sm:left-[10%] md:left-[14%] z-20 pointer-events-none transform rotate-[5deg] transition-transform duration-300 hover:rotate-0"
        >
          <div className="bg-[#0576fc] text-white px-4 py-1.5 sm:px-5 sm:py-2 rounded-full shadow-md">
            <span className="font-sans text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap">
              Nerding out on design
            </span>
          </div>
        </div>

        {/* Floating Blue Pill 3: Allergic to generic (Bottom Center/Right over 'brands') */}
        <div
          ref={pill3Ref}
          className="absolute bottom-[16%] right-[22%] sm:right-[28%] md:right-[34%] z-20 pointer-events-none transform -rotate-[4.5deg] transition-transform duration-300 hover:rotate-0"
        >
          <div className="bg-[#0576fc] text-white px-4 py-1.5 sm:px-5 sm:py-2 rounded-full shadow-md">
            <span className="font-sans text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap">
              Allergic to generic
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

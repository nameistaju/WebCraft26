import React from 'react';

export default function AboutManifesto() {
  return (
    <section className="about-manifesto relative z-[5] w-full bg-[#087BFF] py-16 sm:py-24 md:py-32 px-4 sm:px-8 select-none overflow-hidden">
      {/* Crisp Graph Grid Texture across the blue flood background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: '36px 36px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-start">
        {/* Eyebrow: Who We Are: - Crisp Yellow for high contrast on blue */}
        <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#ffe066] tracking-tight mb-6 sm:mb-10 drop-shadow-sm">
          Who We Are:
        </h2>

        {/* Main Typography Statement - High-Contrast Pure White & Vibrant Yellow on Blue */}
        <div className="w-full font-display font-black text-[10vw] sm:text-[8vw] md:text-[80px] lg:text-[96px] leading-[1.05] tracking-tight">
          {/* Line 1: WE BUILD (Pure White) */}
          <div className="block text-white drop-shadow-sm">
            WE BUILD
          </div>

          {/* Line 2: [BRANDS] THAT FEEL */}
          <div className="relative flex items-center flex-wrap gap-x-3 sm:gap-x-5 gap-y-2 mt-1 sm:mt-2">
            {/* Highlighted 'BRANDS' box: Solid Bright Yellow with Dark Text & Yellow Flags for 100% legibility */}
            <span className="relative inline-block px-3 sm:px-5 py-0.5 bg-[#ffe066] text-[#0a192f] italic font-black rounded-sm shadow-md">
              {/* Top-left yellow triangle flag */}
              <span
                className="absolute -top-3.5 -left-1.5 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#ffe066]"
                aria-hidden="true"
              />
              {/* Bottom-right yellow triangle flag */}
              <span
                className="absolute -bottom-3.5 -right-1.5 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[8px] border-b-[#ffe066]"
                aria-hidden="true"
              />
              BRANDS
            </span>

            <span className="text-white drop-shadow-sm">THAT FEEL</span>
          </div>

          {/* Sticker 1: STRATEGY FIRST (Tilted Yellow Pill with Dark Text) */}
          <div className="relative my-2 sm:my-3">
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-1 sm:py-1.5 rounded-full bg-[#ffe066] text-[#111111] font-sans font-black text-xs sm:text-sm tracking-wider uppercase shadow-xl border border-black/15 transform -rotate-4 hover:rotate-0 transition-transform duration-200">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
                <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="12" cy="12" r="2" fill="currentColor" />
              </svg>
              STRATEGY FIRST
            </div>
          </div>

          {/* Line 3: INTENTIONAL. (White) + Sticker 2: DESIGN WITH MEANING */}
          <div className="relative flex items-center flex-wrap gap-x-3 sm:gap-x-5 gap-y-2 mt-1 sm:mt-2">
            <span className="text-white drop-shadow-sm">INTENTIONAL.</span>

            {/* Sticker 2: DESIGN WITH MEANING (Tilted Yellow Pill) */}
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#ffe066] text-[#111111] font-sans font-black text-xs sm:text-sm tracking-wider uppercase shadow-xl border border-black/15 transform -rotate-2 hover:rotate-0 transition-transform duration-200 align-middle">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
                <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="12" cy="12" r="2" fill="currentColor" />
              </svg>
              DESIGN WITH MEANING
            </div>
          </div>

          {/* Line 4: FROM IDENTITY (White + Radiant Yellow Serif with Underline) */}
          <div className="relative flex items-center flex-wrap gap-x-4 sm:gap-x-6 gap-y-2 mt-2 sm:mt-3">
            <span className="text-white drop-shadow-sm">FROM</span>

            <span className="relative inline-block font-serif italic text-[#ffe066] drop-shadow-sm">
              IDENTITY
              {/* Yellow decorative underline bar */}
              <span
                className="absolute left-0 right-0 -bottom-1.5 sm:-bottom-2 h-[4px] sm:h-[6px] bg-[#ffe066] rounded-full shadow-md"
                aria-hidden="true"
              />
            </span>
          </div>

          {/* Line 5: TO EXECUTION. (White) + Sticker 3: BUILT TO SCALE */}
          <div className="relative flex items-center flex-wrap gap-x-3 sm:gap-x-5 gap-y-2 mt-2 sm:mt-3">
            <span className="text-white drop-shadow-sm">TO EXECUTION.</span>

            {/* Sticker 3: BUILT TO SCALE (Tilted Yellow Pill) */}
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#ffe066] text-[#111111] font-sans font-black text-xs sm:text-sm tracking-wider uppercase shadow-xl border border-black/15 transform -rotate-6 hover:rotate-0 transition-transform duration-200 align-middle">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
                <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="12" cy="12" r="2" fill="currentColor" />
              </svg>
              BUILT TO SCALE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

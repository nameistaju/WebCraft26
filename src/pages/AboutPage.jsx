import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import AboutLine from '../components/AboutLine';
import AboutManifesto from '../components/AboutManifesto';
import AboutQuiz from '../components/AboutQuiz';
import Footer from '../components/Footer';

export default function AboutPage({ onOpenContact }) {
  const pageRootRef = useRef(null);
  const storyContainerRef = useRef(null);
  const heroHeadingRef1 = useRef(null);
  const heroHeadingRef2 = useRef(null);
  const pillRef1 = useRef(null);
  const pillRef2 = useRef(null);
  const facesRef = useRef(null);
  const crewRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      delay: 0.1,
      defaults: { ease: 'power2.out' },
    }).timeScale(0.85);

    // 1. Heading line 1 & 2 reveal
    tl.fromTo(
      [heroHeadingRef1.current, heroHeadingRef2.current],
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.14, ease: 'back.out(1.4)' },
      0
    );

    // 2. Pills pop in
    tl.fromTo(
      [pillRef1.current, pillRef2.current],
      { scale: 0.4, opacity: 0, y: 15 },
      { scale: 1, opacity: 1, y: 0, duration: 0.55, stagger: 0.1, ease: 'back.out(2.5)' },
      0.3
    );

    // 3. Faces illustration pop in
    if (facesRef.current) {
      tl.fromTo(
        facesRef.current,
        { scale: 0.8, opacity: 0, rotation: -3 },
        { scale: 1, opacity: 1, rotation: 0, duration: 0.8, ease: 'back.out(2)' },
        0.45
      );
    }

    return () => {
      tl.kill();
    };
  }, []);

  const values = [
    {
      title: 'THE BRIEF IS NOT SET IN STONE',
      desc: 'A brief is a starting point, not a cage. The best work usually comes from questioning assumptions and finding angles no one thought to look for.',
    },
    {
      title: 'GOOD IDEAS NEED SPACE',
      desc: 'Rushing into execution is the fastest way to make something forgettable. We give concepts time to breathe, test them thoroughly, and only build what works.',
    },
    {
      title: 'PRETTY IS NOT A STRATEGY',
      desc: 'Great design has to do more than look good on a screen. It needs to solve a real problem, connect with actual people, and stand out in the real world.',
    },
    {
      title: 'IF IT CAN BE SIMPLE, SIMPLIFY',
      desc: 'Clutter is the enemy of great brands. If an element doesn’t add meaning or clarity, it doesn’t belong.',
    },
  ];

  const categories = [
    'Alcoholic Beverages',
    'Art & Culture',
    'Beverages',
    'Biotech',
    'Books',
    'Campers & RVs',
    'Coffee',
    'Consumer Packaged Goods',
    'Education',
    'Fashion',
    'Finance & Fintech',
    'Food',
    'Hospitality',
    'Interior Design',
    'Media & Entertainment',
    'Music',
    'Non-profit',
    'Real Estate',
    'Software & Tech',
    'Sport & Fitness',
    'Wellness & Healthcare',
  ];

  return (
    <div
      ref={pageRootRef}
      className="relative w-full bg-[#F8EEE8] text-black pt-24 md:pt-32"
      style={{ overflowX: 'clip', isolation: 'isolate' }}
    >
      {/* 1. HERO HEADLINE SECTION (Headline & pills only - completely outside story line wrapper) */}
      <section className="relative z-10 w-full pt-6 md:pt-12 pb-8 md:pb-12 overflow-visible">
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-8">
          <div className="relative max-w-5xl mx-auto text-center md:text-left">
            {/* Line 1 */}
            <div className="relative inline-block mb-1 sm:mb-2">
              <h1
                ref={heroHeadingRef1}
                className="font-display text-[12vw] sm:text-[9vw] md:text-[85px] lg:text-[110px] font-bold text-[#087BFF] uppercase leading-[0.9] tracking-tight select-none inline-block"
              >
                SMALL STUDIO,
              </h1>
              {/* Pill 1 */}
              <div
                ref={pillRef1}
                className="inline-block ml-3 md:ml-6 align-middle transform -rotate-6 relative z-30"
              >
                <span className="hero-pill shadow-sm text-xs sm:text-sm font-semibold bg-[#2d3b48] text-[#f4f4f2] px-4 py-1.5 rounded-full inline-block">
                  Design Studio
                </span>
              </div>
            </div>

            <br />

            {/* Line 2 */}
            <div className="relative inline-block">
              {/* Pill 2 */}
              <div
                ref={pillRef2}
                className="inline-block mr-3 md:mr-6 align-middle transform rotate-3 relative z-30"
              >
                <span className="hero-pill shadow-sm text-xs sm:text-sm font-semibold bg-[#087BFF] text-white px-4 py-1.5 rounded-full inline-block">
                  Independent
                </span>
              </div>
              <h1
                ref={heroHeadingRef2}
                className="font-display text-[12vw] sm:text-[9vw] md:text-[85px] lg:text-[110px] font-bold text-[#087BFF] uppercase leading-[0.9] tracking-tight select-none inline-block"
              >
                BIG BRAND ENERGY
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DEDICATED STORY WRAPPER (Starts at characters/founders illustration!) */}
      <div
        ref={storyContainerRef}
        className="story-wrapper relative w-full"
        style={{ isolation: 'isolate' }}
      >
        {/* Dedicated SVG background layer (z-0) */}
        <AboutLine containerRef={storyContainerRef} />

        {/* Story Part 1: Founders Faces Illustration & Intro paragraph */}
        <section className="relative z-10 w-full pt-2 md:pt-4 pb-20 md:pb-32 px-4 sm:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-12">
            <div ref={facesRef} className="relative z-20 w-[82%] sm:w-[62%] md:w-[50%] max-w-[560px] md:ml-[18%] pointer-events-none">
              <img
                src="/assets/about/about-hero.svg"
                alt="Two founders illustration"
                className="w-full h-auto object-contain select-none pointer-events-none"
              />
            </div>

            <div className="relative z-10 max-w-sm font-sans text-right hidden md:block pt-8 pr-4">
              <p className="text-black/75 text-sm sm:text-base leading-relaxed">
                A selection of brands, identities, websites and other things we’ve helped bring to life.
                Different challenges, various approaches, same focus on getting everything right.
              </p>
            </div>
          </div>
        </section>

        {/* Story Part 2: Section 1 - How we started / Two '90s kids (Drinks clink) */}
        <section className="relative z-10 w-full pt-20 md:pt-28 pb-28 md:pb-36 px-4 sm:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Drinks/Tray Illustration Left (z-20) */}
            <div className="md:col-span-5 flex justify-center md:justify-start relative z-20 pointer-events-none">
              <div className="w-[75%] sm:w-[60%] md:w-[32vw] max-w-md">
                <img
                  src="/assets/about/drinks-clink.svg"
                  alt="Hands clinking drinks"
                  className="w-full h-auto object-contain select-none pointer-events-none"
                />
              </div>
            </div>

            {/* Text Right (z-10) */}
            <div className="md:col-span-7 flex flex-col font-sans md:pl-8 relative z-10">
              <span className="text-xs uppercase tracking-widest text-[#087BFF] font-semibold mb-2">
                SINCE 2020
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-5xl text-[#087BFF] uppercase font-bold leading-tight mb-4">
                Two '90s kids, one shared itch to make better brands.
              </h2>
              <p className="text-black/80 text-base sm:text-lg leading-relaxed font-normal">
                A decade in the game and we still get a kick out of turning ideas into brands that turn heads. We don’t have layers of hierarchy or account managers — you work directly with us, the people who actually design and build your brand.
              </p>
            </div>
          </div>
        </section>

        {/* Story Part 3: Section 2 - Now we're here / Less size, more scope (Chairs) */}
        <section
          className="relative z-10 w-full pt-48 md:pt-[440px] px-4 sm:px-8 max-w-7xl mx-auto"
          style={{ paddingBottom: '1116px' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            {/* Text Left (z-0, so expanding blue line at z-10 submerges text during flood) */}
            <div className="md:col-span-6 flex flex-col font-sans md:pr-8 md:pt-28 order-2 md:order-1 relative z-0">
              <span className="text-xs uppercase tracking-widest text-[#087BFF] font-semibold mb-2">
                HOW WE ROLL
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-5xl text-[#087BFF] uppercase font-bold leading-tight mb-4">
                Less size, more scope
              </h2>
              <p className="text-black/80 text-lg sm:text-xl md:text-[21px] leading-relaxed font-normal">
                We’re not a traditional agency and we don’t want to be. Being small means we can stay agile, give each project our full attention, and move fast without compromising on quality. When a project needs extra firepower, we pull in trusted specialists from our network. We like projects with real challenges and people who care about getting it right.
              </p>
            </div>

            {/* Chairs Illustration Right (z-20, stays ON TOP of the blue stroke during flood) */}
            <div className="md:col-span-6 flex justify-center md:justify-end order-1 md:order-2 relative z-20 pointer-events-none">
              <div className="w-[90%] sm:w-[80%] md:w-[42vw] max-w-xl">
                <img
                  src="/assets/about/chairs.svg"
                  alt="Two chairs illustration"
                  className="w-full h-auto object-contain select-none pointer-events-none"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* SECTION 3: CREW / OUR MANIFESTO SECTION (Solid Webcraft Blue #087BFF, z-30) */}
      <div ref={crewRef} className="relative z-30 w-full bg-[#087BFF]">
        <AboutManifesto />
      </div>

      {/* 3. DIGITAL MARKETING QUIZ TIME SECTION */}
      <AboutQuiz onOpenContact={onOpenContact} />

      {/* 4. Values & Principles Section */}
      <section className="relative z-10 w-full bg-[#F8EEE8] py-16 md:py-24 px-4 sm:px-8 border-t border-black/10">
        <div className="max-w-6xl mx-auto flex flex-col divide-y divide-black/10">
          {values.map((val, i) => (
            <div
              key={i}
              className="py-10 md:py-14 grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
            >
              <div className="md:col-span-6">
                <span className="text-xs uppercase tracking-widest text-black/50 font-semibold block mb-1">
                  0{i + 1} / PRINCIPLE
                </span>
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#0576fc] font-bold uppercase leading-tight tracking-tight">
                  {val.title}
                </h3>
              </div>
              <div className="md:col-span-6 font-sans">
                <p className="text-black/80 text-base sm:text-lg leading-relaxed font-normal pt-2">
                  {val.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Range / Category Tags */}
      <section className="relative z-10 w-full bg-[#F8EEE8] py-16 md:py-24 px-4 sm:px-8 border-t border-black/10">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <span className="text-xs uppercase tracking-widest text-black/50 font-semibold mb-2">
            EXPERIENCE
          </span>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-black mb-10 md:mb-16">
            WE'VE GOT RANGE
          </h2>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-5xl">
            {categories.map((cat, i) => (
              <span
                key={i}
                className="px-5 py-2.5 rounded-full border border-[#0576fc]/30 text-sm sm:text-base font-medium text-black/80 bg-white/60 hover:border-[#0576fc] hover:text-[#0576fc] hover:bg-white transition-all cursor-default"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Footer Component */}
      <Footer onOpenContact={onOpenContact} />
    </div>
  );
}

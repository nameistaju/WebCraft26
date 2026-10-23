import React, { useState, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { assetMap } from '../assets/assetMap';
import Footer from '../components/Footer';

gsap.registerPlugin(DrawSVGPlugin);

export default function WorkPage({ onOpenContact }) {
  const [hoveredCard, setHoveredCard] = useState(null);
  const websiteProjects = assetMap.projects || [];

  // Signature Two26-Style Brand & Case Study Showcase Projects
  const showcaseProjects = [
    {
      id: 'mvp',
      title: 'MVP Agency',
      category: 'Sports & Talent',
      tag: 'SPORTS AGENCY',
      colorDot: '#153fe3',
      brandColor: '#153fe3',
      image: '/assets/imgi_19_6ab270be80849a0a23faa284_6ab270907f6e9d96146209a1_MVP_Thumbnail1.jpg',
      hoverImage: '/assets/projects/mvp/imgi_18_6ab270be80849a0a23faa29e_6ab27093a089e1fd370a7310_MVP_Thumbnail2_hover.jpg',
      link: '#project/mvp',
    },
    {
      id: 'yumm-yum',
      title: 'Yumm Yum',
      category: 'Food & Beverage',
      tag: 'FOOD & BEVERAGE',
      colorDot: '#4D2C5E',
      brandColor: '#e5c9df',
      image: '/assets/imgi_22_6ab2723d53bb370f04afa37d_6ab272335c44422412d81fb1_YumYum_1.jpg',
      hoverImage: '/assets/imgi_21_6ab2723d53bb370f04afa372_6ab2723985afb9378f444d8b_YumYum_2_hover.jpg',
      link: '#project/yumm-yum',
    },
    {
      id: 'merci',
      title: 'Merci Patisserie',
      category: 'Pastry & Confectionery',
      tag: 'ARTISAN PATISSERIE',
      colorDot: '#92400E',
      brandColor: '#92400E',
      image: '/assets/projects/merci/coverphoto1.jpg',
      hoverImage: '/assets/projects/merci/coverphoto2.jpg',
      link: '#project/merci',
    },
  ];

  const heroRef = useRef(null);
  const line1TextRef = useRef(null);
  const line2TextRef = useRef(null);
  const pill1Ref = useRef(null);
  const pill2Ref = useRef(null);
  const pathRef = useRef(null);

  useLayoutEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      if (prefersReduced) {
        gsap.set(['.heading-text', '.work-hero-pill'], {
          opacity: 1,
          yPercent: 0,
          scale: 1,
        });
        if (pathRef.current) {
          if (gsap.plugins && gsap.plugins.drawSVG) {
            gsap.set(pathRef.current, { drawSVG: '0% 100%', strokeWidth: 30 });
          } else {
            gsap.set(pathRef.current, { strokeDashoffset: 0, strokeWidth: 30 });
          }
        }
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // 1. Heading line reveal (slide up from inside overflow:hidden mask)
      tl.fromTo(
        [line1TextRef.current, line2TextRef.current],
        { yPercent: 105 },
        { yPercent: 0, duration: 1.0, stagger: 0.14, ease: 'power3.out' },
        0.15
      );

      // 2. Pill pop-in (preserving translate(-50%, -50%) and rotations via xPercent/yPercent)
      if (pill1Ref.current) {
        tl.fromTo(
          pill1Ref.current,
          { scale: 0, opacity: 0, xPercent: -50, yPercent: -50, rotation: 4 },
          { scale: 1, opacity: 1, xPercent: -50, yPercent: -50, rotation: 4, duration: 0.65, ease: 'back.out(2)' },
          0.55
        );
      }
      if (pill2Ref.current) {
        tl.fromTo(
          pill2Ref.current,
          { scale: 0, opacity: 0, xPercent: -50, yPercent: -50, rotation: -12 },
          { scale: 1, opacity: 1, xPercent: -50, yPercent: -50, rotation: -12, duration: 0.65, ease: 'back.out(2)' },
          0.7
        );
      }

      // 3. Right path draw-in animation (from top end downward: 100% 100% -> 0% 100%)
      if (pathRef.current) {
        if (gsap.plugins && gsap.plugins.drawSVG) {
          tl.fromTo(
            pathRef.current,
            { drawSVG: '100% 100%', strokeWidth: 0 },
            { drawSVG: '0% 100%', strokeWidth: 30, duration: 1.4, ease: 'power2.out' },
            0.55
          );
        } else {
          const length = 1099.79;
          tl.fromTo(
            pathRef.current,
            { strokeDashoffset: -length, strokeDasharray: length, strokeWidth: 0 },
            { strokeDashoffset: 0, strokeWidth: 30, duration: 1.4, ease: 'power2.out' },
            0.55
          );
        }
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full bg-[#F8EEE8] text-black overflow-x-hidden pt-0">
      {/* 1. Hero Section (Matching Two26 section-work-hero) */}
      <section ref={heroRef} className="section-work-hero">
        {/* Right Loop Path (work.svg: viewBox 0 0 230 575) */}
        <div className="work-hero-path-box">
          <svg
            viewBox="0 0 230 575"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full block"
            aria-hidden="true"
          >
            <path
              ref={pathRef}
              d="M171.769 562.464C171.769 562.464 -1.40879 424.611 16.2688 279.464C25.7685 201.464 68.7349 148.19 136.269 152.464C206.346 156.9 248.62 311.964 179.269 311.964C138.269 311.964 85.2685 223.964 101.269 138.964C114.373 69.3474 171.769 10.4645 171.769 10.4645"
              stroke="#0576fc"
              strokeWidth="30"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Heading Block */}
        <div className="work-hero-heading-block">
          <h1 className="hero-heading" style={{ display: 'block' }}>
            {/* Line 1: Right-aligned, right edge at 93.5vw */}
            <span className="heading-line heading-line--1 work-hero-line-1">
              <span className="heading-mask" style={{ display: 'block', overflow: 'hidden' }}>
                <span ref={line1TextRef} className="heading-text work-hero-text">
                  A FEW PROJECTS
                </span>
              </span>
              <span ref={pill1Ref} className="pill pill--1 work-hero-pill" aria-hidden="true">
                Just a few
              </span>
            </span>

            {/* Line 2: Left-aligned, left edge at 1.6vw */}
            <span className="heading-line heading-line--2 work-hero-line-2">
              <span className="heading-mask" style={{ display: 'block', overflow: 'hidden' }}>
                <span ref={line2TextRef} className="heading-text work-hero-text">
                  TO BRAG ABOUT
                </span>
              </span>
              <span ref={pill2Ref} className="pill pill--2 work-hero-pill" aria-hidden="true">
                Kind of proud
              </span>
            </span>
          </h1>
        </div>

        {/* Desktop Absolute Items & Mobile Flex Container */}
        <div className="work-hero-mobile-bottom">
          {/* Box Character Illustration */}
          <div className="work-hero-illustration">
            <img
              src="/assets/cat-work.svg"
              alt="WebCraft creative cat box character"
              className="w-full h-auto block select-none pointer-events-none drop-shadow-sm"
            />
          </div>

          {/* Description Paragraph */}
          <div className="work-hero-paragraph">
            <p className="work-hero-desc">
              A selection of brands, identities, websites and other things we’ve helped bring to life.
              Different challenges, various approaches, same focus on getting everything right.
            </p>
          </div>
        </div>
      </section>


      {/* ====================================================================
          2. BRAND & CASE STUDY PORTFOLIO (TWO26 3-COLUMN GRID DIRECTLY BELOW HERO)
          ==================================================================== */}
      <section className="relative w-full px-4 sm:px-6 md:px-[1.45vw] max-w-[1920px] mx-auto pt-6 md:pt-12 pb-20 md:pb-28 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 lg:gap-[1.35vw]">
          {showcaseProjects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              className="group flex flex-col cursor-pointer no-underline text-inherit"
            >
              {/* Card Container (Portrait 4:5 Box Matching Two26) */}
              <div className="relative aspect-[4/5] w-full rounded-2xl md:rounded-[22px] overflow-hidden bg-[#ecdcd2] shadow-sm border border-black/5 transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1">
                {/* Primary Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Secondary Hover Image (Revealed right after scribble completes filling the card) */}
                {project.hoverImage && (
                  <img
                    src={project.hoverImage}
                    alt={`${project.title} alternate view`}
                    loading="lazy"
                    className="card-hover-reveal-img"
                  />
                )}

                {/* Animated SVG Scribble Loop: Floods & Fills the Entire Card from Bottom */}
                <svg
                  viewBox="0 0 728 1020"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  className="absolute inset-0 w-full h-full pointer-events-none z-20"
                  aria-hidden="true"
                >
                  <path
                    d="M703.002 794.357C703.002 794.357 586.502 1041.53 501.002 983.857C415.502 926.187 803.502 649.566 665.002 551.357C526.502 453.148 337.002 1084.36 151.002 983.857C-74.3269 862.107 889.446 190.221 646.002 40.3572C466.502 -70.1428 173.257 679.857 62.5019 617.857C-86.2292 534.598 351.002 132.857 236.002 40.3572C151.002 -28.0122 25.002 153.857 25.002 153.857"
                    stroke={project.brandColor || project.colorDot || '#0576fc'}
                    strokeWidth="14"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="card-scribble-path"
                  />
                </svg>

                {/* Centered Hover Reveal Label */}
                <div className="card-hover-reveal-view absolute inset-0 z-25 flex flex-col items-center justify-center p-6 text-center pointer-events-none">
                  <span className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight drop-shadow-lg">
                    {project.title}
                  </span>
                  <span className="mt-2 text-xs font-mono uppercase tracking-wider text-black bg-white px-3.5 py-1 rounded-full font-bold shadow-sm">
                    {project.tag}
                  </span>
                </div>
              </div>

              {/* Details Footer */}
              <div className="pt-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span
                    className="w-2.5 h-2.5 rounded-full inline-block flex-shrink-0"
                    style={{ backgroundColor: project.colorDot }}
                  />
                  <div className="min-w-0">
                    <h3 className="font-display text-xl sm:text-2xl text-black uppercase tracking-tight group-hover:text-[#0576fc] transition-colors leading-tight truncate">
                      {project.title}
                    </h3>
                    <p className="text-black/60 font-sans text-xs sm:text-sm mt-0.5 truncate">
                      {project.category}
                    </p>
                  </div>
                </div>

                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-black/20 flex items-center justify-center text-black group-hover:border-[#0576fc] group-hover:bg-[#0576fc] group-hover:text-white transition-all duration-300 flex-shrink-0 ml-2">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  >
                    <path
                      d="M1.17273 17.9405L18.6533 2.29983M5.84177 1.17288L18.6533 2.29983L18.3543 15.1573"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ====================================================================
          3. CLIENT WEBSITES (HORIZONTAL 16:10 BOXES - FULL VIEW, NO CUTOFFS)
          ==================================================================== */}
      <section className="relative w-full px-4 sm:px-6 md:px-[1.45vw] max-w-[1920px] mx-auto pt-16 md:pt-24 pb-20 md:pb-28 z-10 border-t border-black/10">
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-black/10 pb-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-black/60">
              Web Development & Platforms
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-black uppercase tracking-tight mt-0.5">
              Client Websites
            </h2>
          </div>
          <span className="text-xs font-mono text-black/50">
            Showing {websiteProjects.length} live platforms
          </span>
        </div>

        {/* 2-Column Grid for Horizontal Website Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-[1.35vw]">
          {websiteProjects.map((project, idx) => (
            <a
              key={project.id || idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative flex flex-col cursor-pointer no-underline text-inherit"
            >
              {/* Horizontal 16:10 Website Mockup Frame */}
              <div className="relative aspect-[16/10] w-full rounded-xl md:rounded-2xl overflow-hidden bg-[#eeded4] shadow-sm border border-black/10 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-1">
                {/* Browser Window Header Bar */}
                <div className="absolute top-0 left-0 right-0 h-7 bg-white/75 backdrop-blur-md z-30 flex items-center px-3.5 gap-1.5 border-b border-black/5 transition-colors group-hover:bg-white/90">
                  <span className="w-2 h-2 rounded-full bg-[#FF5F56]/80" />
                  <span className="w-2 h-2 rounded-full bg-[#FFBD2E]/80" />
                  <span className="w-2 h-2 rounded-full bg-[#27C93F]/80" />
                  <span className="ml-2 text-[11px] font-mono text-black/50 truncate max-w-[200px] sm:max-w-xs">
                    {project.link ? project.link.replace(/^https?:\/\//, '').replace(/\/$/, '') : project.title}
                  </span>
                </div>

                {/* Screenshot (Full Horizontal Width, No Cutoffs) */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top pt-7 transition-transform duration-700 ease-out group-hover:scale-103"
                  loading="lazy"
                />

                {/* Animated SVG Scribble Loop: Floods & Fills the Entire Card from Bottom */}
                <svg
                  viewBox="0 0 728 1020"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  className="absolute inset-0 w-full h-full pointer-events-none z-20"
                  aria-hidden="true"
                >
                  <path
                    d="M703.002 794.357C703.002 794.357 586.502 1041.53 501.002 983.857C415.502 926.187 803.502 649.566 665.002 551.357C526.502 453.148 337.002 1084.36 151.002 983.857C-74.3269 862.107 889.446 190.221 646.002 40.3572C466.502 -70.1428 173.257 679.857 62.5019 617.857C-86.2292 534.598 351.002 132.857 236.002 40.3572C151.002 -28.0122 25.002 153.857 25.002 153.857"
                    stroke="#0576fc"
                    strokeWidth="14"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="card-scribble-path"
                  />
                </svg>

                {/* Centered Hover Reveal Details (Appears right after scribble fills card) */}
                <div className="card-hover-reveal-view absolute inset-0 z-25 flex flex-col items-center justify-center p-6 text-center pointer-events-none">
                  <span className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight drop-shadow-lg">
                    {project.title}
                  </span>
                  <span className="mt-3 text-xs font-mono uppercase tracking-wider text-black bg-white px-4 py-1.5 rounded-full font-bold shadow-lg">
                    Visit Live Website ↗
                  </span>
                </div>

                {/* Tag Badge */}
                <div className="absolute bottom-3 left-3.5 z-30 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-white text-[11px] font-mono tracking-wider uppercase">
                  {project.tag}
                </div>
              </div>

              {/* Card Meta / Info */}
              <div className="mt-4 sm:mt-5 flex items-start justify-between gap-3">
                <div className="flex items-start gap-2.5 min-w-0">
                  <span
                    className="w-3.5 h-3.5 rounded-full flex-shrink-0 mt-1 shadow-xs"
                    style={{ backgroundColor: project.colorDot || '#0576fc' }}
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <h3 className="font-display font-black text-xl sm:text-2xl tracking-tight text-black uppercase group-hover:text-[#0576fc] transition-colors leading-tight truncate">
                      {project.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs font-mono font-medium uppercase tracking-wider text-neutral-500 mt-0.5 truncate">
                      {project.category || project.tag}
                    </p>
                  </div>
                </div>

                {/* Circular Arrow Action Button */}
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0576fc] text-white flex items-center justify-center flex-shrink-0 group-hover:rotate-45 group-hover:scale-105 transition-all duration-300 shadow-sm mt-0.5">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.5 8.5L8.5 1.5M3.5 1.5L8.5 1.5L8.5 6.5"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 4. Two26 Signature Projects End Callout */}
      <section className="relative w-full px-4 sm:px-8 max-w-7xl mx-auto py-24 md:py-36 text-center z-10">
        <div className="relative max-w-4xl mx-auto flex flex-col items-center">
          {/* Milestone Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <span className="px-4 py-1.5 rounded-full bg-white text-black border border-black/10 text-xs sm:text-sm font-medium tracking-wide shadow-xs -rotate-2">
              Packaging
            </span>
            <span className="px-4 py-1.5 rounded-full bg-black text-white text-xs sm:text-sm font-medium tracking-wide shadow-xs rotate-3">
              Identity
            </span>
            <span className="px-4 py-1.5 rounded-full bg-white text-black border border-black/10 text-xs sm:text-sm font-medium tracking-wide shadow-xs -rotate-3">
              Digital
            </span>
            <span className="px-4 py-1.5 rounded-full bg-[#0576fc] text-white text-xs sm:text-sm font-medium tracking-wide shadow-xs rotate-2">
              Strategy
            </span>
          </div>

          <h2 className="font-display text-[9vw] sm:text-[7vw] md:text-[60px] lg:text-[76px] font-bold text-black uppercase leading-[0.92] tracking-tight mb-10 max-w-3xl">
            READY TO BUILD SOMETHING SUSPICIOUSLY GOOD?
          </h2>

          {/* Let's Talk CTA Button */}
          <button
            onClick={onOpenContact}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#0576fc] text-white font-sans font-semibold text-base sm:text-lg shadow-xl hover:bg-black transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <span>Let's Talk</span>
            <div className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M1.5 8.5L8.5 1.5M3.5 1.5L8.5 1.5L8.5 6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>
        </div>
      </section>

      {/* 5. Footer */}
      <Footer onOpenContact={onOpenContact} />
    </div>
  );
}

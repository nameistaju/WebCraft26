import React, { useEffect, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { caseStudies } from '../data/caseStudies';
import { assetMap } from '../assets/assetMap';
import Footer from '../components/Footer';

export default function CaseStudyPage({ slug = 'mvp', onBack, onOpenContact, onNavigateProject }) {
  // Safe project lookup with fallback
  const project =
    caseStudies[slug] ||
    caseStudies[slug === 'yum-yum' ? 'yumm-yum' : slug] ||
    caseStudies.mvp;

  const containerRef = useRef(null);
  const heroTitleRef = useRef(null);
  const curvedContainerRef = useRef(null);
  const curvedTextRef = useRef(null);

  // Entrance & Scroll Animations with GSAP
  useLayoutEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      if (prefersReduced) {
        gsap.set(['.cs-reveal-up', '.cs-spring-pill', heroTitleRef.current], {
          opacity: 1,
          y: 0,
          yPercent: 0,
          scale: 1,
        });
        if (curvedTextRef.current) {
          curvedTextRef.current.setAttribute('startOffset', '5%');
        }
        return;
      }

      // Hero Title Mask Reveal
      if (heroTitleRef.current) {
        gsap.fromTo(
          heroTitleRef.current,
          { yPercent: 110 },
          { yPercent: 0, duration: 1.1, ease: 'power3.out', delay: 0.15 }
        );
      }

      // Images trigger when approx 15% visible (top 85%), y: 40 -> 0, opacity: 0 -> 1, duration 0.9s, power3.out
      const revealElements = containerRef.current?.querySelectorAll('.cs-reveal-up');
      if (revealElements && revealElements.length > 0) {
        revealElements.forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            }
          );
        });
      }

      // Stagger two-column rows by 0.12s
      const pairRows = containerRef.current?.querySelectorAll('.cs-pair-row');
      if (pairRows && pairRows.length > 0) {
        pairRows.forEach((row) => {
          const children = row.querySelectorAll('.cs-pair-col');
          if (children.length > 1) {
            gsap.fromTo(
              children,
              { opacity: 0, y: 40 },
              {
                opacity: 1,
                y: 0,
                duration: 0.9,
                ease: 'power3.out',
                stagger: 0.12,
                scrollTrigger: {
                  trigger: row,
                  start: 'top 85%',
                  toggleActions: 'play none none none',
                },
              }
            );
          }
        });
      }

      // Banner captions & tag pills scale 0.4 -> 1, y: 20 -> 0, back.out(2.5), stagger 0.08s
      const springPills = containerRef.current?.querySelectorAll('.cs-spring-pill');
      if (springPills && springPills.length > 0) {
        gsap.fromTo(
          springPills,
          { scale: 0.4, y: 20, opacity: 0 },
          {
            scale: 1,
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'back.out(2.5)',
            stagger: 0.08,
            scrollTrigger: {
              trigger: springPills[0],
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Curved text scrub along SVG path
      if (curvedTextRef.current && curvedContainerRef.current) {
        gsap.fromTo(
          curvedTextRef.current,
          { attr: { startOffset: '-15%' } },
          {
            attr: { startOffset: '25%' },
            ease: 'none',
            scrollTrigger: {
              trigger: curvedContainerRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [slug]);

  // More works preview (exclude current project and its aliases)
  const isCurrentSlug = (id) => {
    if (project.slug === 'mvp' && (id === 'mvp' || id === 'mvp-agency')) return true;
    if (project.slug === 'yumm-yum' && (id === 'yumm-yum' || id === 'yum-yum')) return true;
    if (project.slug === 'merci' && id === 'merci') return true;
    return id === project.slug;
  };
  const moreWorks = [
    ...(assetMap.packagingProjects || []),
    ...(assetMap.projects || []),
  ].filter((p) => !isCurrentSlug(p.id)).slice(0, 3);

  // Helper to render individual item inside a two-column row
  const renderItem = (item, defaultRatio = '3/4') => {
    if (!item) return null;
    if (item.vimeoUrl) {
      return (
        <iframe
          src={item.vimeoUrl}
          title={item.title || 'Video player'}
          className="w-full h-full object-cover pointer-events-none"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          loading="lazy"
        />
      );
    }
    if (item.src) {
      return (
        <img
          src={item.src}
          alt={item.alt || ''}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
        />
      );
    }
    return null;
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-[#F8EEE8] text-black overflow-x-hidden selection:bg-[#0576fc] selection:text-white"
    >
      {/* ====================================================================
          1. FLOATING FIXED NAVBAR (Matching Two26 Reference)
          - Fixed at top-0 across the full viewport
          - Floats directly over the full-bleed hero image at the top
          - Remains visible as the user scrolls down the page
          ==================================================================== */}
      <header className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 md:px-10 py-4 sm:py-6 flex items-center justify-between pointer-events-none transition-all duration-300">
        <button
          onClick={onBack}
          type="button"
          aria-label="Back to our work"
          className="pointer-events-auto px-5 py-2.5 rounded-full font-sans text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer bg-white/95 text-black hover:bg-black hover:text-white shadow-lg border border-black/10 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#0576fc]"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span>Back to our work</span>
        </button>

        <button
          onClick={onOpenContact}
          type="button"
          aria-label="Let's Talk"
          className="pointer-events-auto group relative inline-flex items-center gap-2.5 pl-5 pr-1.5 py-1.5 rounded-full bg-black text-white hover:bg-neutral-800 transition-all font-sans text-xs sm:text-sm font-semibold shadow-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0576fc]"
        >
          <span>Let's Talk</span>
          <span className="w-6 h-6 rounded-full bg-[#0576fc] text-white flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-300">
            <svg
              width="9"
              height="9"
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
          </span>
        </button>
      </header>

      {/* ====================================================================
          2. FULL-WIDTH HERO SECTION (Exact Match to Two26 Reference - Image 2)
          - 100% full screen width (zero container, zero horizontal padding, rounded-none)
          - Full screen height (92vh/100vh)
          - Giant project title at bottom-left directly on image
          ==================================================================== */}
      <section className="relative w-full h-[92vh] md:h-screen min-h-[580px] overflow-hidden bg-black flex items-end">
        <img
          src={project.heroImage || project.hero?.src}
          alt={project.heroAlt || project.hero?.alt || project.title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />

        {/* Ambient bottom gradient for title readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

        {/* Project Title Positioned at Bottom-Left (matching Two26 Image 2) */}
        <div className="relative z-20 px-5 sm:px-8 md:px-12 pb-6 sm:pb-10 md:pb-14 overflow-hidden w-full">
          <h1
            ref={heroTitleRef}
            className="font-display uppercase text-[#F8EEE8] font-black text-6xl sm:text-8xl md:text-[130px] lg:text-[160px] leading-[0.82] tracking-tight drop-shadow-lg select-none"
            aria-label={`${project.title} Case Study`}
          >
            {project.title}
          </h1>
        </div>
      </section>

      {/* ====================================================================
          3. PROJECT INFORMATION: Metadata, Context, Solution, Tags
          - Matching Two26 Spacing and 12-column Grid
          ==================================================================== */}
      <section className="relative cs-container py-10 md:py-14 border-b border-black/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Metadata Column (4 columns) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div>
              <span className="block text-xs font-mono uppercase tracking-widest text-black/50 mb-1">
                Category
              </span>
              <span className="font-sans text-base sm:text-lg font-medium text-black">
                {project.category}
              </span>
            </div>

            <div>
              <span className="block text-xs font-mono uppercase tracking-widest text-black/50 mb-1">
                Publication
              </span>
              <span className="font-sans text-base sm:text-lg font-medium text-black">
                {project.year}
              </span>
            </div>
          </div>

          {/* Right Content Column (8 columns) */}
          <div className="lg:col-span-8 flex flex-col gap-8 md:gap-10">
            {/* The Context */}
            <div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-[#0576fc] mb-3">
                {project.context.title}
              </h2>
              {project.context.paragraphs.map((para, i) => (
                <p
                  key={i}
                  className="font-sans text-base sm:text-lg leading-relaxed text-black/85 mb-4 last:mb-0"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* The Solution */}
            <div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-[#0576fc] mb-3">
                {project.solution.title}
              </h2>
              {project.solution.paragraphs.map((para, i) => (
                <p
                  key={i}
                  className="font-sans text-base sm:text-lg leading-relaxed text-black/85 mb-4 last:mb-0"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Tag Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="cs-spring-pill inline-block border border-[#0576fc] text-[#0576fc] rounded-full text-xs sm:text-sm font-sans font-medium px-4 py-1.5 tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. BANNER (When present)
          ==================================================================== */}
      {project.banner && (
        <section className="relative cs-container mb-[var(--cs-image-gap)]">
          <div
            style={{ aspectRatio: project.banner.aspectRatio || '1.84/1' }}
            className="cs-reveal-up relative w-full cs-card overflow-hidden bg-[#ecdcd2] shadow-sm"
          >
            <img
              src={project.banner.src}
              alt={project.banner.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
            />
            {/* Overlay Captions at Bottom Corners */}
            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-8 flex items-end justify-between pointer-events-none bg-gradient-to-t from-black/60 via-black/20 to-transparent">
              <span className="cs-spring-pill font-mono text-xs sm:text-sm text-[#F8EEE8] tracking-wider uppercase drop-shadow-md">
                {project.banner.captionLeft}
              </span>
              <span className="cs-spring-pill font-mono text-xs sm:text-sm text-[#F8EEE8] tracking-wider uppercase drop-shadow-md">
                {project.banner.captionRight}
              </span>
            </div>
          </div>
        </section>
      )}

      {/* ====================================================================
          5. FULL-WIDTH HORIZONTAL VIDEOS (Merci Video 1 & Video 2)
          ==================================================================== */}
      {project.logoVideo1 && (
        <section className="relative cs-container mb-[var(--cs-image-gap)]">
          <div
            style={{ aspectRatio: project.logoVideo1.aspectRatio || '426/156' }}
            className="cs-reveal-up w-full relative cs-card overflow-hidden bg-transparent shadow-sm"
          >
            <iframe
              src={project.logoVideo1.vimeoUrl}
              title={project.logoVideo1.title}
              className="w-full h-full object-cover pointer-events-none"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </section>
      )}

      {project.logoVideo2 && (
        <section className="relative cs-container mb-[var(--cs-image-gap)]">
          <div
            style={{ aspectRatio: project.logoVideo2.aspectRatio || '426/238' }}
            className="cs-reveal-up w-full relative cs-card overflow-hidden bg-transparent shadow-sm"
          >
            <iframe
              src={project.logoVideo2.vimeoUrl}
              title={project.logoVideo2.title}
              className="w-full h-full object-cover pointer-events-none"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </section>
      )}

      {/* ====================================================================
          6. CURVED-TEXT SECTION WITH REAL BACKGROUND IMAGE
          ==================================================================== */}
      {project.curvedText && (
        <section
          ref={curvedContainerRef}
          className="relative cs-container my-8 md:my-12"
        >
          <div
            style={{ aspectRatio: project.curvedText.aspectRatio || '1.8/1' }}
            className="cs-reveal-up relative w-full cs-card overflow-hidden bg-[#ecdcd2] shadow-sm flex items-center justify-center"
          >
            {project.curvedText.src && (
              <img
                src={project.curvedText.src}
                alt={project.curvedText.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            )}

            {/* SVG S-Curve Animated TextPath */}
            <svg
              viewBox="0 0 1600 600"
              preserveAspectRatio="xMidYMid meet"
              className="absolute inset-0 w-full h-full pointer-events-none select-none z-10 overflow-visible"
              aria-hidden="true"
            >
              <path
                id={`curve-path-${project.slug}`}
                d="M -200 480 C 250 480, 480 180, 850 200 C 1220 220, 1380 440, 1850 360"
                fill="none"
                stroke="transparent"
              />
              <text className="font-display font-black uppercase fill-[#F8EEE8] text-[clamp(48px,9vw,130px)] tracking-wide drop-shadow-[0_4px_16px_rgba(0,0,0,0.4)]">
                <textPath
                  ref={curvedTextRef}
                  href={`#curve-path-${project.slug}`}
                  startOffset="0%"
                >
                  {project.curvedText.text || 'Your tagline here • Your promise •'}
                </textPath>
              </text>
            </svg>
          </div>
        </section>
      )}

      {/* ====================================================================
          7. IMAGE & MEDIA CONTENT BLOCKS (Exact Sequence & Spacing)
          ==================================================================== */}
      <section className="relative cs-container pt-4 md:pt-6 pb-12 md:pb-16 cs-media-flow">
        {project.blocks.map((block) => {
          // Strip Block (preserves square corners on strip logos)
          if (block.type === 'strip') {
            return (
              <div
                key={block.id}
                style={{ aspectRatio: block.aspectRatio || '4/1' }}
                className="cs-reveal-up relative w-full overflow-hidden bg-[#F8EEE8] flex items-center justify-center"
              >
                <img
                  src={block.src}
                  alt={block.alt}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>
            );
          }

          // Two-Column Image Row Block (type: "two" or "pair")
          if (block.type === 'two' || block.type === 'pair') {
            const defaultRatio = block.ratio === 'square' ? '1/1' : '3/4';
            const leftRatio = block.left?.aspectRatio || defaultRatio;
            const rightRatio = block.right?.aspectRatio || defaultRatio;

            return (
              <div
                key={block.id}
                className="cs-pair-row cs-pair-grid w-full"
              >
                {/* Left Column */}
                <div
                  style={{ aspectRatio: leftRatio }}
                  className="cs-pair-col relative w-full cs-card overflow-hidden bg-[#ecdcd2] shadow-sm flex items-center justify-center"
                >
                  {renderItem(block.left, leftRatio)}
                </div>

                {/* Right Column */}
                <div
                  style={{ aspectRatio: rightRatio }}
                  className="cs-pair-col relative w-full cs-card overflow-hidden bg-[#ecdcd2] shadow-sm flex items-center justify-center"
                >
                  {renderItem(block.right, rightRatio)}
                </div>
              </div>
            );
          }

          // Video Block
          if (block.type === 'video') {
            return (
              <div
                key={block.id}
                style={{ aspectRatio: block.aspectRatio || '16/9' }}
                className="cs-reveal-up w-full relative cs-card overflow-hidden bg-transparent shadow-sm"
              >
                <iframe
                  src={block.vimeoUrl}
                  title={block.title}
                  className="w-full h-full object-cover pointer-events-none"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>
            );
          }

          // Default Wide Image Block
          return (
            <div
              key={block.id}
              style={{ aspectRatio: block.aspectRatio || '16/9' }}
              className="cs-reveal-up relative w-full cs-card overflow-hidden bg-[#ecdcd2] shadow-sm"
            >
              <img
                src={block.src}
                alt={block.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
              />
            </div>
          );
        })}
      </section>

      {/* ====================================================================
          8. MORE WORKS SECTION (Matching Two26 Reference Screenshot 4)
          - Centred label: FEATURED PROJECTS
          - Large centred heading: MORE WORKS (stacked 2 lines)
          - 3 portrait cards (aspect-[4/5] with cs-card)
          ==================================================================== */}
      <section className="relative cs-container py-16 md:py-24 border-t border-black/10">
        <div className="mb-12 md:mb-16 text-center flex flex-col items-center">
          <span className="text-xs font-mono uppercase tracking-widest text-black/60 mb-2">
            FEATURED PROJECTS
          </span>
          <h2 className="font-display text-6xl sm:text-7xl md:text-8xl text-black uppercase tracking-tight leading-[0.88] text-center">
            MORE
            <br />
            WORKS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--cs-image-gap)]">
          {moreWorks.map((work) => (
            <div
              key={work.id}
              onClick={() => {
                if (work.id === 'mvp-agency' || work.id === 'mvp') {
                  onNavigateProject('mvp');
                } else if (work.id === 'yum-yum' || work.id === 'yumm-yum') {
                  onNavigateProject('yumm-yum');
                } else if (work.id === 'merci') {
                  onNavigateProject('merci');
                } else if (work.link && work.link.startsWith('#project/')) {
                  const targetSlug = work.link.replace('#project/', '');
                  onNavigateProject(targetSlug);
                } else if (work.link && work.link.startsWith('http')) {
                  window.open(work.link, '_blank');
                } else {
                  onBack();
                }
              }}
              className="group block relative cursor-pointer no-underline text-inherit"
            >
              <div className="relative aspect-[4/5] w-full cs-card overflow-hidden bg-[#ecdcd2] shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-1">
                <img
                  src={work.image}
                  alt={work.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-black text-[11px] font-semibold tracking-wide shadow-xs">
                  {work.tag}
                </div>
              </div>
              <div className="pt-3.5 flex items-center justify-between">
                <h3 className="font-display text-xl text-black uppercase tracking-tight group-hover:text-[#0576fc] transition-colors">
                  {work.title}
                </h3>
                <span className="text-xs font-mono text-black/50 uppercase tracking-wider">
                  {work.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====================================================================
          9. FOOTER
          ==================================================================== */}
      <Footer onOpenContact={onOpenContact} />
    </div>
  );
}

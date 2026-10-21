import React, { useState } from 'react';
import { assetMap } from '../assets/assetMap';
import Footer from '../components/Footer';

export default function WorkPage({ onOpenContact }) {
  const [hoveredCard, setHoveredCard] = useState(null);
  const websiteProjects = assetMap.projects || [];
  const packagingProjects = assetMap.packagingProjects || [];

  return (
    <div className="relative w-full bg-[#F8EEE8] text-black overflow-x-hidden pt-24 md:pt-32">
      {/* Decorative Right Loop Curve */}
      <div className="absolute right-0 top-16 md:top-24 w-52 md:w-80 pointer-events-none select-none z-0 translate-x-12 md:translate-x-16 opacity-90">
        <img
          src="/assets/loop-right-blue.svg"
          alt=""
          className="w-full h-auto"
        />
      </div>

      {/* 1. Hero Section (Matching Two26 section-work-hero) */}
      <section className="section-work-hero relative w-full px-4 sm:px-8 max-w-7xl mx-auto pb-16 md:pb-24 z-10">
        <div className="relative max-w-5xl">
          {/* Pill 1: Just a few */}
          <div className="absolute -top-3 sm:-top-5 right-[8%] sm:right-[18%] md:right-[24%] transform rotate-6 z-20 pointer-events-none">
            <span className="bg-black text-white px-4 py-1 rounded-full text-xs sm:text-sm font-medium tracking-wide shadow-md inline-block">
              Just a few
            </span>
          </div>

          {/* Heading Line 1: Left Aligned */}
          <h1 className="font-display text-[13.5vw] sm:text-[11vw] md:text-[92px] lg:text-[118px] font-bold text-[#0576fc] uppercase leading-[0.85] tracking-tight select-none text-left">
            A FEW PROJECTS
          </h1>

          {/* Pill 2: Kind of proud */}
          <div className="absolute top-[48%] sm:top-[52%] left-0 sm:left-4 transform -rotate-6 z-20 pointer-events-none">
            <span className="bg-black text-white px-4 py-1 rounded-full text-xs sm:text-sm font-medium tracking-wide shadow-md inline-block">
              Kind of proud
            </span>
          </div>

          {/* Heading Line 2: Right Aligned */}
          <h1 className="font-display text-[13.5vw] sm:text-[11vw] md:text-[92px] lg:text-[118px] font-bold text-[#0576fc] uppercase leading-[0.85] tracking-tight select-none text-right">
            TO BRAG ABOUT
          </h1>

          {/* Decorative Two26 Work Hero Loop Path */}
          <div className="hidden lg:block absolute right-[-4%] top-[-8%] w-44 xl:w-52 pointer-events-none select-none z-0 opacity-80">
            <svg
              width="230"
              height="575"
              viewBox="0 0 230 575"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
            >
              <path
                d="M171.769 562.464C171.769 562.464 -1.40879 424.611 16.2688 279.464C25.7685 201.464 68.7349 148.19 136.269 152.464C206.346 156.9 248.62 311.964 179.269 311.964C138.269 311.964 85.2685 223.964 101.269 138.964C114.373 69.3474 171.769 10.4645 171.769 10.4645"
                stroke="#0576fc"
                strokeWidth="28"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Work Hero Bottom: Two26 Sleeping Cat Illustration + Editorial Description */}
        <div className="mt-10 md:mt-16 flex flex-col md:flex-row items-center md:items-end justify-between gap-8 md:gap-12">
          {/* Left: Two26 Official Cat Work Illustration */}
          <div className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-[420px] flex-shrink-0">
            <img
              src="/assets/cat-work.svg"
              alt="WebCraft creative cat at work"
              className="w-full h-auto select-none pointer-events-none drop-shadow-sm"
            />
          </div>

          {/* Right: Editorial Description */}
          <div className="max-w-md md:pb-4 text-center md:text-left">
            <p className="font-sans text-base sm:text-lg md:text-[1.15rem] leading-relaxed text-[#0576fc] font-medium">
              A selection of brands, identities, websites and other things we’ve helped bring to life.
              Different challenges, various approaches, same focus on getting everything right.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================
          2. CLIENT WEBSITES (HORIZONTAL 16:10 BOXES - FULL VIEW, NO CUTOFFS)
          ==================================================================== */}
      <section className="relative w-full px-4 sm:px-8 max-w-7xl mx-auto pb-20 md:pb-28 z-10">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {websiteProjects.map((project, idx) => (
            <a
              key={project.id || idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative flex flex-col cursor-pointer no-underline text-inherit"
            >
              {/* Horizontal 16:10 Website Mockup Frame */}
              <div className="relative aspect-[16/10] w-full rounded-2xl md:rounded-3xl overflow-hidden bg-[#eeded4] shadow-sm border border-black/10 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-1">
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

      {/* ====================================================================
          3. BRANDING & PACKAGING PROJECTS (SEPARATE DEDICATED SECTION)
          ==================================================================== */}
      {packagingProjects.length > 0 && (
        <section className="relative w-full px-4 sm:px-8 max-w-7xl mx-auto pb-24 md:pb-36 z-10">
          <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-black/10 pb-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-black/60">
                Identity & Tangible Products
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-black uppercase tracking-tight mt-0.5">
                Branding & Packaging
              </h2>
            </div>
            <span className="text-xs font-mono text-black/50">
              {packagingProjects.length} featured packaging cases
            </span>
          </div>

          {/* 3-Column Grid for Packaging Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {packagingProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col cursor-pointer no-underline text-inherit"
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Packaging Card Container (Portrait 4:5 Box) */}
                <div className="relative aspect-[4/5] w-full rounded-2xl md:rounded-3xl overflow-hidden bg-[#ecdcd2] shadow-sm border border-black/5 transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1">
                  {/* Primary Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Secondary Hover View (Revealed right after scribble completes filling the card) */}
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

                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-black text-xs font-semibold tracking-wide shadow-xs">
                    {project.tag}
                  </div>
                </div>

                {/* Details Footer */}
                <div className="pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full inline-block flex-shrink-0"
                      style={{ backgroundColor: project.colorDot }}
                    />
                    <div>
                      <h3 className="font-display text-xl text-black uppercase tracking-tight group-hover:text-[#0576fc] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-black/60 font-sans text-xs">
                        {project.category}
                      </p>
                    </div>
                  </div>

                  <div className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center text-black group-hover:border-[#0576fc] group-hover:bg-[#0576fc] group-hover:text-white transition-all duration-300 flex-shrink-0 ml-2">
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
              </div>
            ))}
          </div>
        </section>
      )}

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

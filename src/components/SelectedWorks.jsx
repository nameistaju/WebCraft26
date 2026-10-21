import React, { useState } from 'react';
import { assetMap } from '../assets/assetMap';

export default function SelectedWorks() {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Show only a curated selection (4 websites + 3 packaging) on homepage
  const featuredWebsites = (assetMap.projects || []).slice(0, 4);
  const featuredPackaging = (assetMap.packagingProjects || []).slice(0, 3);

  return (
    <section id="works" className="relative w-full bg-[#F8EEE8] py-20 md:py-32 px-4 sm:px-8">
      {/* ====================================================================
          SECTION 1: FEATURED CLIENT WEBSITES (HORIZONTAL 16:10 BOXES)
          ==================================================================== */}
      <div className="max-w-7xl mx-auto mb-12 md:mb-16 text-center flex flex-col items-center">
        <div className="section-tag tracking-widest text-xs font-semibold uppercase text-black/60 mb-2">
          Featured Digital Works
        </div>
        <h2 className="section-title text-[11vw] sm:text-[9vw] md:text-[76px] lg:text-[96px] font-display text-black leading-none uppercase">
          SELECTED WORKS
        </h2>
        <p className="max-w-xl text-center text-sm md:text-base text-black/70 font-sans mt-3">
          A preview of our recent client platforms — built for performance, design distinction, and measurable growth.
        </p>
      </div>

      {/* 2-Column Grid for Horizontal Website Cards (Only 4 on Homepage) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {featuredWebsites.map((project) => (
          <a
            key={project.id}
            href={project.link || '#'}
            target={project.link ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className="group flex flex-col cursor-pointer no-underline text-inherit"
            onMouseEnter={() => setHoveredCard(project.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Horizontal 16:10 Browser Card Container */}
            <div className="relative aspect-[16/10] w-full rounded-2xl md:rounded-3xl overflow-hidden bg-[#ecdcd2] shadow-sm border border-black/10 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-1">
              {/* Browser Window Header Bar */}
              <div className="absolute top-0 left-0 right-0 h-7 bg-white/75 backdrop-blur-md z-30 flex items-center px-3.5 gap-1.5 border-b border-black/5 transition-colors group-hover:bg-white/90">
                <span className="w-2 h-2 rounded-full bg-[#FF5F56]/80" />
                <span className="w-2 h-2 rounded-full bg-[#FFBD2E]/80" />
                <span className="w-2 h-2 rounded-full bg-[#27C93F]/80" />
                <span className="ml-2 text-[11px] font-mono text-black/50 truncate max-w-[200px] sm:max-w-xs">
                  {project.link ? project.link.replace(/^https?:\/\//, '').replace(/\/$/, '') : project.title}
                </span>
              </div>

              {/* Website Cover Screenshot (Full Horizontal View) */}
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover object-top pt-7 transition-transform duration-700 ease-out group-hover:scale-103"
              />

              {/* Animated SVG Scribble Loop: Floods & Fills the Entire Card on Hover */}
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

              {/* Bottom Tag */}
              <div className="absolute bottom-3 left-3.5 z-30 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-white text-[11px] font-mono tracking-wider uppercase">
                {project.tag}
              </div>
            </div>

            {/* Details Footer */}
            <div className="pt-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span
                  className="w-2.5 h-2.5 rounded-full inline-block flex-shrink-0"
                  style={{ backgroundColor: project.colorDot || '#0576fc' }}
                />
                <div>
                  <h3 className="font-display text-xl sm:text-2xl text-black uppercase tracking-tight group-hover:text-[#0576fc] transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-black/60 font-sans text-xs sm:text-sm mt-0.5">
                    {project.category}
                  </p>
                </div>
              </div>

              {/* Action Circular Arrow Button */}
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0576fc] text-white flex items-center justify-center flex-shrink-0 group-hover:rotate-45 group-hover:scale-105 transition-all duration-300 shadow-sm ml-2">
                <svg
                  width="10"
                  height="10"
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

      {/* ====================================================================
          SECTION 2: BRANDING & PACKAGING (CURATED 3 ON HOMEPAGE)
          ==================================================================== */}
      {featuredPackaging.length > 0 && (
        <div className="max-w-7xl mx-auto mt-24 md:mt-32">
          {/* Section Divider & Header */}
          <div className="mb-12 md:mb-16 text-center flex flex-col items-center">
            <div className="section-tag tracking-widest text-xs font-semibold uppercase text-black/60 mb-2">
              Identity, Products & Packaging
            </div>
            <h2 className="section-title text-[9vw] sm:text-[7vw] md:text-[64px] lg:text-[80px] font-display text-black leading-none uppercase">
              BRANDING & PACKAGING
            </h2>
            <p className="max-w-xl text-center text-sm md:text-base text-black/70 font-sans mt-3">
              Physical merchandise, tactile packaging, and high-impact identity design.
            </p>
          </div>

          {/* 3-Column Grid for Packaging Products */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {featuredPackaging.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col cursor-pointer no-underline text-inherit"
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Packaging Card Container (Portrait 4:5 Box) */}
                <div className="relative aspect-[4/5] w-full rounded-2xl md:rounded-3xl overflow-hidden bg-[#ecdcd2] shadow-sm border border-black/5 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-1">
                  {/* Primary Packaging Photo */}
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Secondary Hover Photo (Revealed right after scribble completes filling the card) */}
                  {project.hoverImage && (
                    <img
                      src={project.hoverImage}
                      alt={`${project.title} secondary packaging view`}
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
                      stroke="#0576fc"
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

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-30 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-black text-xs font-semibold tracking-wide shadow-xs">
                    {project.tag}
                  </div>
                </div>

                {/* Packaging Details Footer */}
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

                  {/* Circular Arrow Badge */}
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
        </div>
      )}

      {/* ====================================================================
          END CALLOUT: "WE COULD KEEP GOING, BUT THERE'S A WHOLE PAGE FOR THAT."
          ==================================================================== */}
      <div className="max-w-4xl mx-auto mt-24 md:mt-32 text-center flex flex-col items-center">
        <div className="relative mb-8">
          <p className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black leading-tight tracking-tight uppercase">
            WE COULD KEEP GOING,
            <br />
            BUT THERE’S A WHOLE PAGE FOR THAT.
          </p>

          <div className="hidden md:block absolute -top-8 -left-12">
            <span className="hero-pill -rotate-6 text-xs py-1 px-3">The plot thickens</span>
          </div>
          <div className="hidden md:block absolute -top-6 -right-10">
            <span className="hero-pill rotate-6 text-xs py-1 px-3">Very convenient</span>
          </div>
        </div>

        {/* CTA Button: See all projects */}
        <a
          href="#work"
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-black text-white hover:bg-[#0576fc] transition-colors duration-300 font-sans text-base font-medium shadow-md"
        >
          <span>See all projects</span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
          >
            <path
              d="M1.46439 8.53621L8.53546 1.46515M3.05538 1.28837L8.53546 1.46515L8.71223 6.94522"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}

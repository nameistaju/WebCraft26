import React from 'react';
import { assetMap } from '../assets/assetMap';
import WebcraftLogo from './WebcraftLogo';

export default function Footer({ onOpenContact }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#0576fc] text-white pt-20 md:pt-32 pb-0 px-4 sm:px-8 overflow-hidden">
      {/* Background Texture Loops SVG */}
      <div className="absolute inset-0 w-full h-full pointer-events-none opacity-20 select-none">
        <img
          src={assetMap.brand.footerTexture}
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col justify-between min-h-[500px]">
        {/* Top Area: Heading & Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start mb-16 md:mb-24">
          {/* Top Left: Headline & Email CTA */}
          <div className="md:col-span-7 flex flex-col items-start">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight uppercase mb-8">
              Okay that’s
              <br />
              enough website
            </h2>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 flex-wrap">
              <button
                onClick={onOpenContact}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-black text-white hover:bg-white hover:text-black transition-colors duration-300 font-sans text-base font-medium shadow-md cursor-pointer"
              >
                <span>Let's talk</span>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                >
                  <path
                    d="M1.46439 8.53621L8.53546 1.46515M3.05538 1.28837L8.53546 1.46515L8.71223 6.94522"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <a
                href="mailto:webcraftsoftwaresolutions@gmail.com?subject=Hey%20WebCraft!"
                className="text-white/80 hover:text-white font-sans text-sm underline underline-offset-4 transition-colors break-all"
              >
                webcraftsoftwaresolutions@gmail.com
              </a>

              <a
                href="tel:7396668037"
                className="text-white/80 hover:text-white font-sans text-sm underline underline-offset-4 transition-colors whitespace-nowrap"
              >
                +91 73966 68037
              </a>
            </div>
          </div>

          {/* Top Right: Links Columns */}
          <div className="md:col-span-5 grid grid-cols-2 gap-8 text-sm">
            {/* Main Menu */}
            <div className="flex flex-col gap-3 font-sans">
              <span className="text-white/60 uppercase tracking-widest text-xs font-semibold">
                Main Menu
              </span>
              <a href="#work" className="text-white hover:underline transition-all">
                Work
              </a>
              <a href="#about" className="text-white hover:underline transition-all">
                About us
              </a>
              <a href="#services" className="text-white hover:underline transition-all">
                Services
              </a>
              <a href="#faq" className="text-white hover:underline transition-all">
                FAQ
              </a>
              <a href="#spin" className="text-white hover:underline transition-all font-semibold text-yellow-300 flex items-center gap-1">
                <span>🎡</span> Spin &amp; Win
              </a>
            </div>

            {/* Socials & Location */}
            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-3 font-sans">
                <span className="text-white/60 uppercase tracking-widest text-xs font-semibold">
                  Socials
                </span>
                <a
                  href="https://www.instagram.com/two26_studio/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-white hover:underline transition-all"
                >
                  <span>Instagram</span>
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.48418 7.50615L7.33428 0.656055M2.02545 0.484802L7.33428 0.656055L7.50553 5.96488" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/two26-studio/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-white hover:underline transition-all"
                >
                  <span>LinkedIn</span>
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.48418 7.50615L7.33428 0.656055M2.02545 0.484802L7.33428 0.656055L7.50553 5.96488" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-white hover:underline transition-all"
                >
                  <span>Behance</span>
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.48418 7.50615L7.33428 0.656055M2.02545 0.484802L7.33428 0.656055L7.50553 5.96488" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Giant Wordmark & Copyright */}
        <div className="pt-8 border-t border-white/20 flex flex-col gap-6">
          <div className="flex items-center justify-between text-xs sm:text-sm text-white/80 font-sans">
            <div>© Copyright 2026 — WebCraft Software Solutions</div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 15 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.17285 16.1729L7.17285 1.17285M1.17285 6.79785L7.17285 1.17285L13.1729 6.79785"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Massive "WEBCRAFT" Footer Wordmark */}
          <div className="w-full pt-4 pb-2 text-[#ECEAE5]">
            <WebcraftLogo
              variant="full"
              className="w-full h-auto block select-none"
              color="#ECEAE5"
              strokeWidth={36}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

import React, { useState, useEffect } from 'react';
import { assetMap } from '../assets/assetMap';
import WebcraftLogo from './WebcraftLogo';

export default function Navbar({ onOpenContact, currentView, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-5 transition-all duration-300 pointer-events-none">
        <nav className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
          {/* Left Pill Links */}
          <div className="hidden md:flex items-center gap-2.5">
            <button
              onClick={() => onNavigate('work')}
              className={`px-5 py-2 rounded-full font-sans text-sm font-medium transition-all duration-200 cursor-pointer ${
                currentView === 'work'
                  ? 'bg-black text-white shadow-sm'
                  : 'bg-white text-black hover:bg-black hover:text-white shadow-sm border border-black/5'
              }`}
            >
              Work
            </button>

            <button
              onClick={() => onNavigate('about')}
              className={`px-5 py-2 rounded-full font-sans text-sm font-medium transition-all duration-200 cursor-pointer ${
                currentView === 'about'
                  ? 'bg-black text-white shadow-sm'
                  : 'bg-white text-black hover:bg-black hover:text-white shadow-sm border border-black/5'
              }`}
            >
              About us
            </button>

            <button
              onClick={() => onNavigate('experience')}
              className={`px-5 py-2 rounded-full font-sans text-sm font-medium transition-all duration-200 cursor-pointer ${
                currentView === 'experience'
                  ? 'bg-black text-white shadow-sm'
                  : 'bg-white text-black hover:bg-black hover:text-white shadow-sm border border-black/5'
              }`}
            >
              Experience
            </button>
          </div>

          {/* Center Brand Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center justify-center transition-transform hover:scale-105 cursor-pointer text-[#0576fc]"
            aria-label="WebCraft Home"
          >
            <WebcraftLogo
              variant="full"
              className="h-5 md:h-6 w-auto"
              color="#0576fc"
            />
          </button>

          {/* Right Controls */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            {/* Small Detail: Monday-Friday schedule */}
            <div className="hidden sm:flex flex-col text-right text-[11px] font-sans font-medium leading-tight text-black">
              <span>Monday–Friday</span>
              <span>10:00 – 17:00</span>
            </div>

            {/* Small Fullscreen Toggle Icon Button */}
            <button
              onClick={toggleFullscreen}
              className="w-9 h-9 rounded-full bg-white/90 hover:bg-white text-black hover:text-[#0576fc] border border-black/10 flex items-center justify-center transition-all duration-200 shadow-sm cursor-pointer"
              title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
              aria-label="Toggle Fullscreen"
            >
              {isFullscreen ? (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/>
                </svg>
              ) : (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                </svg>
              )}
            </button>

            {/* Let's Talk Button with Blue Arrow Badge */}
            <button
              onClick={onOpenContact}
              className="group relative inline-flex items-center gap-2.5 pl-5 pr-1.5 py-1.5 rounded-full bg-black text-white hover:bg-black/90 transition-all font-sans text-sm font-medium shadow-sm cursor-pointer"
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

            {/* Mobile / Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-11 h-11 rounded-full bg-white/80 backdrop-blur-sm border border-black/10 flex items-center justify-center p-2.5 text-black hover:bg-black hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-full h-full"
                viewBox="-2 6.52 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.01247 34.0204C7.01247 34.0204 10.1314 34.0204 20.8246 34.0204C31.5179 34.0204 31.2364 16.0204 20.8246 16.0205C10.4128 16.0205 9.00975 16.0196 9.00975 16.0196C5.0415 16.0196 2 12.8812 2 9.00979C2 5.13835 5.0415 2 9.00975 2C12.978 2 16.0195 5.13835 16.0195 9.00979V34.0204"
                  stroke="#0576fc"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#E5EFFF] flex flex-col justify-between p-8 pt-28 md:hidden animate-in fade-in duration-200">
          <div className="flex flex-col gap-6 text-4xl font-display">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('work');
              }}
              className="text-left text-black hover:text-[#0576fc] transition-colors"
            >
              Work
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('about');
              }}
              className="text-left text-black hover:text-[#0576fc] transition-colors"
            >
              About us
            </button>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-black hover:text-[#0576fc] transition-colors"
            >
              Services
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-black hover:text-[#0576fc] transition-colors"
            >
              FAQ
            </a>
          </div>

          <div className="pt-8 border-t border-black/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-4 rounded-full bg-[#0576fc] text-white font-sans font-medium text-lg"
            >
              Let's talk
            </button>
          </div>
        </div>
      )}
    </>
  );
}

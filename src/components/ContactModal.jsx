import React, { useEffect } from 'react';
import { assetMap } from '../assets/assetMap';
import WebcraftLogo from './WebcraftLogo';

export default function ContactModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0576fc] text-[#F8EEE8] overflow-y-auto animate-in fade-in duration-300 flex flex-col justify-between p-6 sm:p-10 md:p-14 selection:bg-white selection:text-[#0576fc]">
      {/* Top Header Bar */}
      <div className="w-full flex items-center justify-between">
        {/* Left: WebCraft Logo in Cream */}
        <div className="flex items-center text-[#F8EEE8]">
          <WebcraftLogo
            variant="full"
            className="h-5 sm:h-6 w-auto"
            color="#F8EEE8"
          />
        </div>

        {/* Right: Close Button */}
        <button
          onClick={onClose}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-black hover:bg-black hover:text-white transition-all font-sans text-xs font-semibold shadow-sm cursor-pointer"
        >
          <span>✕</span>
          <span>Close</span>
        </button>
      </div>

      {/* Main Content Area: 2 Columns */}
      <div className="max-w-7xl w-full mx-auto my-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
        {/* Left Column: Massive Headline */}
        <div className="lg:col-span-7 flex flex-col items-start justify-center">
          <h1 className="font-display text-[15vw] sm:text-[13vw] md:text-[10vw] lg:text-[110px] xl:text-[125px] font-bold leading-[0.88] tracking-tight uppercase select-none text-[#F8EEE8]">
            WANT TO
            <br />
            START
            <br />
            A NEW
            <br />
            PROJECT?
          </h1>
          <p className="font-sans normal-case text-2xl sm:text-3xl md:text-4xl text-[#F8EEE8]/90 font-normal mt-4 md:mt-6 select-none">
            or just say hello!
          </p>
        </div>

        {/* Right Column: Inquiries & Hand Illustration */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full pt-6 lg:pt-0">
          {/* Email & Phone Contacts */}
          <div className="flex flex-col gap-6 font-sans">
            <div>
              <span className="block text-[11px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-[#F8EEE8]/70 mb-1">
                EMAIL INQUIRIES
              </span>
              <a
                href="mailto:webcraftsoftwaresolutions@gmail.com"
                className="text-lg sm:text-xl lg:text-2xl font-medium text-white hover:underline transition-all break-all"
              >
                webcraftsoftwaresolutions@gmail.com
              </a>
            </div>

            <div>
              <span className="block text-[11px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-[#F8EEE8]/70 mb-1">
                PHONE / WHATSAPP
              </span>
              <a
                href="tel:7396668037"
                className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white hover:underline transition-all"
              >
                +91 73966 68037
              </a>
            </div>
          </div>

          {/* Hand Holding "LET'S TALK :)" Sign Illustration */}
          <div className="mt-8 flex justify-center lg:justify-end">
            <img
              src={assetMap.controls.contactSticker}
              alt="Let's Talk :)"
              className="w-56 sm:w-64 md:w-72 lg:w-80 h-auto object-contain select-none transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Bottom Footer Controls */}
      <div className="w-full flex items-center justify-between pt-6 border-t border-white/20 text-sm font-sans">
        {/* Instagram Pill */}
        <a
          href="https://www.instagram.com/two26_studio/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-white/60 text-white hover:bg-white hover:text-[#0576fc] transition-colors duration-200 cursor-pointer"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
          <span className="font-medium text-xs sm:text-sm">Instagram</span>
        </a>

        {/* LinkedIn Pill */}
        <a
          href="https://www.linkedin.com/company/two26-studio/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-white/60 text-white hover:bg-white hover:text-[#0576fc] transition-colors duration-200 cursor-pointer"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64c-.95 0-1.72.78-1.72 1.73s.77 1.72 1.72 1.72 1.73-.77 1.73-1.72-.78-1.73-1.73-1.73Z"/>
          </svg>
          <span className="font-medium text-xs sm:text-sm">Linkedin</span>
        </a>
      </div>
    </div>
  );
}

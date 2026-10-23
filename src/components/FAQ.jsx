import React, { useState } from 'react';
import { assetMap } from '../assets/assetMap';
import WebcraftLogo from './WebcraftLogo';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What kind of projects do you take on?",
      a: "Branding is our main thing, from strategy and identity to packaging, illustration, motion and web design. We like projects where there’s room to think, question things and build something with a bit of character.",
    },
    {
      q: "How much does a branding project cost?",
      a: "It depends on what we’re making. Every project is a little diﬀerent, so we price based on scope rather than pulling a mysterious number out of a hat. Tell us what you have in mind and we’ll take it from there.",
    },
    {
      q: "Can you work with a brand that already exists?",
      a: "Of course. Not everything needs to be burned to the ground and rebuilt. Sometimes a brand just needs a fresh pair of eyes and a few very intentional changes.",
    },
    {
      q: "Do you work with clients globally?",
      a: "Absolutely. Our Wi-Fi travels remarkably well. We’re happy to work with people pretty much anywhere.",
    },
    {
      q: "What if we don’t like the first concepts?",
      a: "We talk about why. Feedback is part of the process, and nothing is presented just because “we thought it looked cool.” Although we do like when things look cool.",
    },
    {
      q: "How involved do we need to be?",
      a: "Involved enough. We’ll need your knowledge, feedback and decisions along the way. Don’t worry, we won’t make you sit next to us while we move things two pixels to the left.",
    },
    {
      q: "Can you start yesterday?",
      a: "We checked. Unfortunately, yesterday is fully booked. But send us a message and we’ll tell you when we can realistically get started.",
    },
    {
      q: "Do you work with small businesses?",
      a: "Yep. Company size matters less to us than the project, the people behind it and what we can actually do together.",
    },
    {
      q: "Do you also develop websites?",
      a: "We design them. For development, we work with people we trust and can bring them into the project when needed. So yes, your website can actually become a website.",
    },
    {
      q: "What’s with all the cats?",
      a: "Those are Oreo and Oliver. They’re not technically employed by WebCraft, but they’ve somehow made it into the brand anyway. They mostly sleep through meetings and contribute very little creatively. We keep them around.",
    },
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative w-full bg-[#F8EEE8] py-20 md:py-32 px-4 sm:px-8 border-t border-black/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading and Dog Illustration */}
        <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-28">
          <div className="section-tag tracking-widest text-xs font-semibold uppercase text-black/60 mb-2">
            Frequently Asked Questions
          </div>
          <h2 className="section-title text-[10vw] sm:text-[8vw] md:text-[60px] lg:text-[76px] font-display text-black leading-[0.9] text-left mb-8">
            THINGS YOU MIGHT ASK
          </h2>

          {/* Original Dog Scratching Head Illustration SVG */}
          <div className="w-full max-w-sm mt-4">
            <img
              src={assetMap.faq.illustration}
              alt="FAQ Cat / Dog Illustration"
              className="w-full h-auto object-contain select-none"
            />
          </div>
        </div>

        {/* Right Column: Accordion List */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl bg-white/70 backdrop-blur-sm border border-black/10 transition-all duration-300 overflow-hidden hover:bg-white shadow-xs"
              >
                {/* Question Trigger */}
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer font-sans text-base sm:text-lg font-medium text-black group"
                >
                  <span className="group-hover:text-[#0576fc] transition-colors">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full border border-black/20 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-45 bg-[#0576fc] border-[#0576fc] text-white' : 'text-black'
                    }`}
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 0V8M0 4H8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </button>

                {/* Collapsible Answer */}
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-black/70 font-sans text-sm sm:text-base leading-relaxed border-t border-black/5 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 animate-in fade-in duration-300">
                    <p className="max-w-xl">{faq.a}</p>

                    {/* Badge WC Short Monogram */}
                    <div className="w-12 h-6 flex-shrink-0 self-end text-[#0576fc]">
                      <WebcraftLogo
                        variant="short"
                        className="w-full h-full object-contain"
                        color="#0576fc"
                        strokeWidth={36}
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

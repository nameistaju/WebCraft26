import React, { useState, useEffect, useRef } from 'react';
import { assetMap } from '../assets/assetMap';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      id: 1,
      heading: "Working with Bogdan and Diana has been one of the smoothest collaborations I've had",
      body: "They're sharp, always responsive, and have a real talent for turning briefs into compelling visuals. No matter the challenge: tight deadlines, shifting requirements, tricky creative constraints, they always show up with solutions. Highly recommend working with them!",
      name: "Ruxandra Florescu",
      role: "COO, Dare Digital",
      avatar: assetMap.testimonials[0].avatar,
    },
    {
      id: 2,
      heading: "Bogdan and Diana truly brought HeyGluco to life",
      body: "Both of them are truly amazing humans, with an incredible amount of creativity and talent. They took our vision, understood it completely, and brought it to life in ways that went beyond anything we could have imagined. We absolutely loved working with them and feel incredibly lucky that, along the way, we got to call them friends.",
      name: "Luiza Zamfirescu",
      role: "Co-Founder, HeyGluco",
      avatar: assetMap.testimonials[1].avatar,
    },
    {
      id: 3,
      heading: "Working with WebCraft is a bit like brainstorming ideas with your best friends",
      body: "Always fun, always insightful, always constructive. It hardly feels like working, cause the whole process is always so smooth. That's what you get for getting the job done with cool creatives, I guess.",
      name: "Vlad Belcin",
      role: "Sr. Copywriter, Dare Digital",
      avatar: assetMap.testimonials[2].avatar,
    },
    {
      id: 4,
      heading: "Four projects and counting",
      body: "We’ve worked together on two websites and two visual identities so far, and it’s been a pleasure every time. Great ideas, really well executed, and just lovely people to work with. Pretty sure we’re not done yet.",
      name: "Ionut Belet",
      role: "Founder, MVP Agency",
      avatar: assetMap.testimonials[3].avatar,
    },
    {
      id: 5,
      heading: "Better than we imagined",
      body: "Working with WebCraft on our brand identity was a great experience from start to finish. They’re incredibly creative and thoughtful, but also easy to work with and genuinely invested in getting things right. They brought ideas we wouldn’t have thought of ourselves and gave the brand a personality that really feels like us.",
      name: "Monica Tantu",
      role: "Co-Founder, Merci",
      avatar: assetMap.testimonials[4].avatar,
    },
  ];

  const rotations = [-4, 5, -6, 3, -2];

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Automatic change of testimonial cards every 4.5 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused, testimonials.length]);

  return (
    <section className="relative w-full bg-[#F8EEE8] py-20 md:py-32 px-4 sm:px-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-14 md:mb-20 text-center flex flex-col items-center">
        <div className="section-tag tracking-widest text-xs font-semibold uppercase text-black/60 mb-2">
          Testimonials
        </div>
        <h2 className="section-title text-[12vw] sm:text-[10vw] md:text-[80px] lg:text-[100px] font-display text-black leading-none uppercase">
          APPARENTLY, THEY LIKE US
        </h2>
      </div>

      {/* Main Blue Container with Stacked Cards */}
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="max-w-5xl mx-auto rounded-3xl bg-[#0576fc] p-6 sm:p-10 md:p-16 pb-16 sm:pb-20 relative overflow-hidden shadow-xl min-h-[500px] md:min-h-[550px] flex items-center justify-center"
      >
        {/* Background Deck of Rotated Cards */}
        {testimonials.map((item, idx) => {
          const isCurrent = idx === currentIndex;
          const order = (idx - currentIndex + testimonials.length) % testimonials.length;
          const rotationAngle = isCurrent ? 0 : rotations[idx % rotations.length];
          const zIndex = testimonials.length - order;

          return (
            <div
              key={item.id}
              onClick={nextCard}
              style={{
                zIndex,
                transform: `rotate(${rotationAngle}deg) scale(${isCurrent ? 1 : 0.98})`,
              }}
              className={`absolute w-[92%] sm:w-[85%] max-w-2xl bg-[#FDF8F5] rounded-2xl p-6 sm:p-8 md:p-10 border border-[#0576fc]/20 shadow-lg cursor-pointer transition-all duration-500 ease-out select-none ${
                isCurrent ? 'opacity-100 pointer-events-auto' : 'opacity-85 pointer-events-none'
              }`}
            >
              {/* Heading Quote */}
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#0576fc] leading-tight tracking-tight uppercase mb-6">
                "{item.heading}"
              </h3>

              {/* Bottom Content: Avatar & Body */}
              <div className="flex flex-col sm:flex-row gap-6 items-start justify-between pt-4 border-t border-black/10">
                {/* Avatar and Name */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-[#0576fc]/30 flex-shrink-0">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-black uppercase leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-black/60 font-sans text-xs sm:text-sm font-medium">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Body paragraph */}
                <p className="text-black/70 font-sans text-xs sm:text-sm leading-relaxed sm:max-w-xs">
                  {item.body}
                </p>
              </div>
            </div>
          );
        })}

        {/* Previous Card Arrow Button */}
        <button
          onClick={prevCard}
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white text-black hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center shadow-lg cursor-pointer"
          aria-label="Previous testimonial"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 15 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="-rotate-90 transform"
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

        {/* Next Card Arrow Button */}
        <button
          onClick={nextCard}
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white text-black hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center shadow-lg cursor-pointer"
          aria-label="Next testimonial"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 15 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="rotate-90 transform"
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

        {/* Progress Indicator Dots */}
        <div className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                i === currentIndex
                  ? 'w-7 bg-white shadow-sm'
                  : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Jump to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

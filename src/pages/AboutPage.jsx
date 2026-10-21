import React from 'react';
import { assetMap } from '../assets/assetMap';
import Footer from '../components/Footer';

export default function AboutPage({ onOpenContact }) {
  const teamMembers = [
    {
      name: "Bogdan Dobreghici",
      role: "Co-founder & Creative Director",
      image: "/assets/about/bogdan.avif",
    },
    {
      name: "Diana Dobreghici",
      role: "Co-founder & Lead Designer",
      image: "/assets/about/diana.avif",
    },
    {
      name: "Andreea Udrea",
      role: "Art Director",
      image: "/assets/about/andreea.avif",
    },
  ];

  const behindPhotos = [
    "/assets/about/behind-1.jpg",
    "/assets/about/behind-2.jpg",
    "/assets/about/behind-3.jpg",
    "/assets/about/behind-4.jpg",
    "/assets/about/behind-5.jpg",
    "/assets/about/behind-6.jpg",
    "/assets/about/behind-7.jpg",
    "/assets/about/behind-8.jpg",
    "/assets/about/behind-9.jpg",
    "/assets/about/behind-10.jpg",
  ];

  const values = [
    {
      title: "THE BRIEF IS NOT SET IN STONE",
      desc: "A brief is a starting point, not a cage. The best work usually comes from questioning assumptions and finding angles no one thought to look for.",
    },
    {
      title: "GOOD IDEAS NEED SPACE",
      desc: "Rushing into execution is the fastest way to make something forgettable. We give concepts time to breathe, test them thoroughly, and only build what works.",
    },
    {
      title: "PRETTY IS NOT A STRATEGY",
      desc: "Great design has to do more than look good on a screen. It needs to solve a real problem, connect with actual people, and stand out in the real world.",
    },
    {
      title: "IF IT CAN BE SIMPLE, SIMPLIFY",
      desc: "Clutter is the enemy of great brands. If an element doesn’t add meaning or clarity, it doesn’t belong.",
    },
  ];

  const categories = [
    "Alcoholic Beverages",
    "Art & Culture",
    "Beverages",
    "Biotech",
    "Books",
    "Campers & RVs",
    "Coffee",
    "Consumer Packaged Goods",
    "Education",
    "Fashion",
    "Finance & Fintech",
    "Food",
    "Hospitality",
    "Interior Design",
    "Media & Entertainment",
    "Music",
    "Non-profit",
    "Real Estate",
    "Software & Tech",
    "Sport & Fitness",
    "Wellness & Healthcare",
  ];

  return (
    <div className="relative w-full bg-[#F8EEE8] text-black overflow-x-hidden pt-24 md:pt-32">
      {/* 1. About Hero Section */}
      <section className="relative w-full px-4 sm:px-8 max-w-7xl mx-auto pb-20 md:pb-32 flex flex-col items-center">
        {/* Title with Pills */}
        <div className="relative text-center max-w-5xl mx-auto">
          {/* Pill 1: Tiny team */}
          <div className="absolute -top-3 left-[5%] md:left-[8%] transform -rotate-6 z-20">
            <span className="hero-pill shadow-sm text-xs sm:text-sm font-medium">
              Tiny team
            </span>
          </div>

          {/* Pill 2: Big impact */}
          <div className="absolute -top-3 right-[5%] md:right-[10%] transform rotate-3 z-20">
            <span className="hero-pill shadow-sm text-xs sm:text-sm font-medium">
              Big impact
            </span>
          </div>

          <h1 className="font-display text-[13vw] sm:text-[10vw] md:text-[90px] lg:text-[115px] font-bold text-[#0576fc] uppercase leading-[0.88] tracking-tight select-none">
            SMALL STUDIO,
            <br />
            BIG BRAND ENERGY
          </h1>
        </div>

        {/* Two Heads Vector Illustration */}
        <div className="relative w-full max-w-4xl mx-auto mt-8 md:mt-12 flex justify-center">
          <img
            src="/assets/about/about-hero.svg"
            alt="Two founders illustration"
            className="w-full max-w-2xl h-auto object-contain select-none"
          />
        </div>

        {/* Story Part 1: Two '90s kids */}
        <div className="w-full max-w-5xl mx-auto mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5 flex justify-center md:justify-start">
            <img
              src="/assets/about/drinks-clink.svg"
              alt="Hands clinking drinks"
              className="w-64 sm:w-80 h-auto object-contain"
            />
          </div>
          <div className="md:col-span-7 flex flex-col font-sans">
            <span className="text-xs uppercase tracking-widest text-[#0576fc] font-semibold mb-2">
              SINCE 2020
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#0576fc] uppercase font-bold leading-tight mb-4">
              Two '90s kids, one shared itch to make better brands.
            </h2>
            <p className="text-black/80 text-base sm:text-lg leading-relaxed font-normal">
              A decade in the game and we still get a kick out of turning ideas into brands that turn heads. We don’t have layers of hierarchy or account managers — you work directly with us, the people who actually design and build your brand.
            </p>
          </div>
        </div>

        {/* Story Part 2: Less size, more scope */}
        <div className="w-full max-w-5xl mx-auto mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 flex flex-col font-sans order-2 md:order-1">
            <span className="text-xs uppercase tracking-widest text-[#0576fc] font-semibold mb-2">
              HOW WE ROLL
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#0576fc] uppercase font-bold leading-tight mb-4">
              Less size, more scope
            </h2>
            <p className="text-black/80 text-base sm:text-lg leading-relaxed font-normal">
              We’re not a traditional agency and we don’t want to be. Being small means we can stay agile, give each project our full attention, and move fast without compromising on quality. When a project needs extra firepower, we pull in trusted specialists from our network.
            </p>
          </div>
          <div className="md:col-span-5 flex justify-center md:justify-end order-1 md:order-2">
            <img
              src="/assets/about/chairs.svg"
              alt="Two chairs illustration"
              className="w-64 sm:w-80 h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* 2. Team Section: THIS IS PRETTY MUCH EVERYONE (Full-bleed Blue) */}
      <section className="relative w-full bg-[#0576fc] text-white py-24 md:py-32 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <span className="text-xs uppercase tracking-widest text-white/70 font-semibold mb-2">
            THE CREW
          </span>
          <h2 className="font-display text-[10vw] sm:text-[8vw] md:text-[70px] lg:text-[85px] uppercase font-bold text-center leading-none tracking-tight mb-16 md:mb-20">
            THIS IS PRETTY MUCH EVERYONE
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 w-full">
            {teamMembers.map((member, i) => (
              <div key={i} className="flex flex-col group">
                <div className="relative aspect-[3/4] w-full rounded-2xl md:rounded-3xl overflow-hidden bg-black/10 shadow-lg mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <h3 className="font-display text-xl sm:text-2xl text-white font-bold tracking-tight">
                  {member.name}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-white/80 font-medium">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BEHIND THE WORK (Photo Mosaic) */}
      <section className="relative w-full bg-[#F8EEE8] py-20 md:py-32 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <span className="text-xs uppercase tracking-widest text-black/60 font-semibold mb-2">
            LIFE AT WEBCRAFT
          </span>
          <h2 className="font-display text-[10vw] sm:text-[7vw] md:text-[65px] lg:text-[80px] uppercase font-bold text-black text-center leading-none tracking-tight mb-14 md:mb-20">
            BEHIND THE WORK
          </h2>

          {/* Grid Collage */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4 w-full">
            {behindPhotos.map((photo, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-xl overflow-hidden bg-black/5 shadow-sm group hover:-translate-y-1 transition-transform duration-300"
              >
                <img
                  src={photo}
                  alt={`Behind the work ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Values & Principles Section */}
      <section className="relative w-full bg-[#F8EEE8] py-16 md:py-24 px-4 sm:px-8 border-t border-black/10">
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

      {/* 5. WE'VE GOT RANGE (Category Tag Cloud) */}
      <section className="relative w-full bg-[#F8EEE8] py-20 md:py-32 px-4 sm:px-8 text-center border-t border-black/10">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <span className="text-xs uppercase tracking-widest text-black/60 font-semibold mb-2">
            INDUSTRIES &amp; SECTORS
          </span>
          <h2 className="font-display text-[10vw] sm:text-[7vw] md:text-[60px] lg:text-[75px] uppercase font-bold text-black leading-none tracking-tight mb-12">
            WE’VE GOT RANGE
          </h2>

          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3.5 max-w-4xl">
            {categories.map((cat, i) => (
              <span
                key={i}
                className="px-5 py-2.5 rounded-full border border-[#0576fc]/40 bg-white/60 text-[#0576fc] font-sans text-xs sm:text-sm font-semibold tracking-wide shadow-sm hover:bg-[#0576fc] hover:text-white transition-colors duration-200 cursor-default"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Footer */}
      <Footer onOpenContact={onOpenContact} />
    </div>
  );
}

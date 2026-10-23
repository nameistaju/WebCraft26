import React, { useState } from 'react';

export default function SpinWheelTrigger({ onOpen }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex items-center group select-none">
      {/* Expanding 'Spin & Win' Pill - visible ONLY on hover to the left of the wheel */}
      <div className="overflow-hidden transition-all duration-300 max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 mr-2 pointer-events-none">
        <span className="px-4 py-2 rounded-full bg-[#0576fc] text-white font-display font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-[#0576fc]/30 whitespace-nowrap block">
          Spin &amp; Win
        </span>
      </div>

      {/* Main Wheel Trigger - 1:1 transparent PNG, zero background/border around it */}
      <button
        onClick={onOpen}
        aria-label="Open Spin and Win wheel"
        className="cursor-pointer relative flex items-center justify-center p-0 bg-transparent border-0 outline-none transition-transform duration-300 active:scale-95 focus:outline-none"
      >
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-22 md:h-22 flex items-center justify-center">
          {/* Default Image: Glossy Blue and Cream Prize Wheel (1:1 with transparent bg) */}
          <img
            src="/assets/spinWheel/Glossy Blue and Cream Prize Wheel.png"
            alt="Spin & Win Wheel"
            className="w-full h-full object-contain pointer-events-none drop-shadow-[0_8px_24px_rgba(5,118,252,0.3)] transition-all duration-300 group-hover:opacity-0 group-hover:scale-95"
          />

          {/* Hover Image: Glossy Blue Prize Wheel Burst (1:1 with transparent bg) */}
          <img
            src="/assets/spinWheel/Glossy Blue Prize Wheel Burst.png"
            alt="Spin & Win Burst"
            className="absolute inset-0 w-full h-full object-contain pointer-events-none drop-shadow-[0_12px_32px_rgba(5,118,252,0.45)] transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-110"
          />
        </div>
      </button>

      {/* Subtle Dismiss button on hover */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setVisible(false);
        }}
        title="Hide"
        aria-label="Hide spin wheel button"
        className="opacity-0 group-hover:opacity-60 hover:!opacity-100 transition-opacity ml-1 w-5 h-5 rounded-full bg-black/40 text-white text-xs flex items-center justify-center cursor-pointer"
      >
        &times;
      </button>
    </div>
  );
}

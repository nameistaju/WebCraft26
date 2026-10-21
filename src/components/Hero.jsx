import React from 'react';
import { assetMap } from '../assets/assetMap';
import CurvedMarquee from './CurvedMarquee';

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Decorative Blue Loop SVG - Left Edge (Thick, cropped with screen edge) */}
      <div className="hero-path-left">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 229 599"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="p-0 m-0 block"
          aria-hidden="true"
        >
          <path
            d="M33.502 584.112C104.502 557.112 147.911 474.964 143.002 393.612C139.502 335.612 106.002 281.612 59.0025 252.612C7.82072 221.032 -4.20053 385.572 52.5031 405.612C140.218 436.612 225.002 369.112 212.002 252.612C208.376 220.111 192.539 178.612 152.002 121.612C117.866 73.6124 42.0029 11.6124 42.0029 11.6124"
            stroke="#0576fc"
            strokeWidth="30"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Decorative Blue Loop SVG - Right Edge (Thick, cropped with screen edge) */}
      <div className="hero-path-right">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 354 487"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="p-0 m-0 block"
          aria-hidden="true"
        >
          <path
            d="M250.687 12.2982C192.69 52.7982 114.69 199.814 245.687 315.798C376.684 431.783 364.19 140.889 235.187 83.2982C153.19 46.6926 54.8365 106.798 30.1893 172.298C-59.5565 410.798 277.687 471.798 277.687 471.798"
            stroke="#0576fc"
            strokeWidth="30"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Hero Headline & Interactive Floating Pills (Positioned relative to heading block) */}
      <div className="hero-heading-container">
        <div className="hero-heading-block">
          {/* Top Line: LOOKING */}
          <h1 className="hero-heading-line1">
            LOOKING
          </h1>

          {/* Bottom Line: SUSPICIOUSLY GOOD */}
          <h2 className="hero-heading-line2">
            SUSPICIOUSLY GOOD
          </h2>

          {/* Floating Pill: Independent studio */}
          <div className="hero-pill-wrapper pill-independent">
            <span className="hero-pill">
              Independent studio
            </span>
          </div>

          {/* Floating Pill: Branding & design */}
          <div className="hero-pill-wrapper pill-branding">
            <span className="hero-pill">
              Branding &amp; design
            </span>
          </div>

          {/* Floating Pill: No funny business */}
          <div className="hero-pill-wrapper pill-nofunny">
            <span className="hero-pill">
              No funny business
            </span>
          </div>
        </div>
      </div>

      {/* Hero Character Animation (1080p MP4 Video with multiply blend mode) */}
      <div className="hero-video-wrapper">
        <video
          src={assetMap.hero.video}
          poster={assetMap.hero.poster}
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
        >
          <source src={assetMap.hero.video} type="video/mp4" />
          <img
            src={assetMap.hero.poster}
            alt="WebCraft Studio - Characters walking with cats"
            className="hero-video"
          />
        </video>
      </div>

      {/* Curved Marquee Ribbon */}
      <CurvedMarquee />
    </section>
  );
}

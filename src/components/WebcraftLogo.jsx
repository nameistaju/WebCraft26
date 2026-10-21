import React from 'react';

/**
 * WebCraft Brand Logo & Monogram (WC)
 * Based on the authentic vector path geometry from webcraft-intro.html
 */
export default function WebcraftLogo({
  variant = 'full', // 'full' | 'short'
  className = 'h-6 w-auto',
  color = 'currentColor',
  strokeWidth = 42,
}) {
  if (variant === 'short') {
    // WC Monogram: W (119..477) + C (shifted next to W)
    return (
      <svg
        viewBox="90 240 600 270"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        role="img"
        aria-label="WC"
      >
        {/* W */}
        <path d="M119 269 V392 C119 450 160 485 207 485 C240 485 272 470 298 452 C330 415 366 385 366 335 C366 295 335 269 298 269 C261 269 230 295 230 335 C230 385 266 415 298 452 C324 470 356 485 389 485 C436 485 477 450 477 392 V269" />
        {/* C (shifted to x=540) */}
        <g transform="translate(-610, 0)">
          <path d="M1176 307 A105 105 0 1 0 1176 441" />
        </g>
      </svg>
    );
  }

  // Full WEBCRAFT Wordmark
  return (
    <svg
      viewBox="90 240 2020 270"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      role="img"
      aria-label="WEBCRAFT"
    >
      {/* W */}
      <path d="M119 269 V392 C119 450 160 485 207 485 C240 485 272 470 298 452 C330 415 366 385 366 335 C366 295 335 269 298 269 C261 269 230 295 230 335 C230 385 266 415 298 452 C324 470 356 485 389 485 C436 485 477 450 477 392 V269" />
      {/* E */}
      <path d="M705 269 H580 C558 269 545 283 545 306 V444 C545 467 558 481 580 481 H705 M545 375 H690" />
      {/* B */}
      <path d="M770 269 V481 M770 269 H858 C897 269 917 285 917 313 C917 341 897 372 858 372 H770 M858 372 C902 372 920 395 920 426 C920 458 900 481 858 481 H770" />
      {/* C */}
      <path d="M1176 307 A105 105 0 1 0 1176 441" />
      {/* R */}
      <path d="M1247 481 V269 H1342 C1376 269 1397 288 1397 322 C1397 356 1378 392 1342 392 H1312 M1312 392 L1394 481" />
      {/* A */}
      <path d="M1456 479 L1533 298 C1543 276 1552 269 1561 269 C1570 269 1579 276 1589 298 L1668 479" />
      {/* F */}
      <path d="M1727 479 V300 C1727 280 1740 269 1760 269 H1858 M1727 372 H1850" />
      {/* T */}
      <path d="M1921 269 H2077 M1998 269 V479" />
    </svg>
  );
}

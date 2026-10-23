import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import WebcraftLogo from './WebcraftLogo';

export default function Navbar({ onOpenContact, currentView, onNavigate, experienceProgress = 0 }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const rootRef = useRef(null);
  const toggleButtonRef = useRef(null);
  const svgRef = useRef(null);
  const stemRef = useRef(null);
  const crossRef = useRef(null);
  const overlayRef = useRef(null);
  const contentContainerRef = useRef(null);
  const firstLinkRef = useRef(null);
  const itemsRef = useRef([]);
  const currentTlRef = useRef(null);
  const ctxRef = useRef(null);

  const isNightNav = currentView === 'experience' && experienceProgress > 0.55;

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

  const lockScroll = () => {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
  };

  const unlockScroll = () => {
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    document.body.style.touchAction = '';
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {}, rootRef);
    ctxRef.current = ctx;

    return () => {
      if (currentTlRef.current) currentTlRef.current.kill();
      ctx.revert();
      unlockScroll();
    };
  }, []);

  const openMenu = () => {
    if (currentTlRef.current) {
      currentTlRef.current.kill();
    }
    setMobileMenuOpen(true);
    lockScroll();

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    ctxRef.current?.add(() => {
      const tl = gsap.timeline();
      currentTlRef.current = tl;

      if (prefersReduced) {
        gsap.set(svgRef.current, { rotation: 45, transformOrigin: '50% 50%' });
        gsap.set(stemRef.current, { strokeDashoffset: -85.5 });
        gsap.set(crossRef.current, { strokeWidth: 4, strokeDashoffset: 0 });
        gsap.set(overlayRef.current, { visibility: 'visible', pointerEvents: 'auto' });
        tl.to(overlayRef.current, { opacity: 1, duration: 0.2, ease: 'power2.out' }, 0)
          .to(itemsRef.current.filter(Boolean), { opacity: 1, x: 0, y: 0, scale: 1, rotation: 0, duration: 0.2, ease: 'power2.out' }, 0);
      } else {
        // Toggle morph
        tl.to(svgRef.current, { rotation: 45, duration: 0.85, ease: 'power3.inOut', transformOrigin: '50% 50%' }, 0);
        tl.to(stemRef.current, { strokeDashoffset: -85.5, duration: 0.85, ease: 'power2.inOut' }, 0);
        tl.to(crossRef.current, { strokeWidth: 4, strokeDashoffset: 0, duration: 0.6, ease: 'power2.inOut' }, 0.2);

        // Overlay fade in
        gsap.set(overlayRef.current, { visibility: 'visible', pointerEvents: 'auto' });
        tl.to(overlayRef.current, { opacity: 1, duration: 0.4, ease: 'power2.out' }, 0);

        // Children spring in one by one with slight tilt
        const validChildren = itemsRef.current.filter(Boolean);
        validChildren.forEach((child, i) => {
          tl.fromTo(
            child,
            {
              opacity: 0,
              x: -35,
              y: 50,
              scale: 0.4,
              rotation: gsap.utils.random(-10, 10),
              transformOrigin: 'center center',
            },
            {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              rotation: 0,
              duration: 0.75,
              ease: 'back.out(2.2)',
            },
            0.15 + i * 0.09
          );
        });
      }

      tl.call(() => {
        firstLinkRef.current?.focus();
      });
    });
  };

  const closeMenu = (onAfterClose) => {
    if (currentTlRef.current) {
      currentTlRef.current.kill();
    }
    setMobileMenuOpen(false);

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    ctxRef.current?.add(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(overlayRef.current, { visibility: 'hidden', pointerEvents: 'none' });
          unlockScroll();
          toggleButtonRef.current?.focus();
          if (typeof onAfterClose === 'function') {
            onAfterClose();
          }
        },
      });
      currentTlRef.current = tl;

      if (prefersReduced) {
        gsap.set(svgRef.current, { rotation: 0, transformOrigin: '50% 50%' });
        gsap.set(stemRef.current, { strokeDashoffset: 0 });
        gsap.set(crossRef.current, { strokeWidth: 0, strokeDashoffset: 20 });
        tl.to([overlayRef.current, ...itemsRef.current.filter(Boolean)], {
          opacity: 0,
          duration: 0.2,
          ease: 'power2.inOut',
        });
      } else {
        // Toggle morph reverses
        tl.to(svgRef.current, { rotation: 0, duration: 0.85, ease: 'power3.inOut', transformOrigin: '50% 50%' }, 0);
        tl.to(stemRef.current, { strokeDashoffset: 0, duration: 0.85, ease: 'power2.inOut' }, 0);
        tl.to(crossRef.current, { strokeWidth: 0, strokeDashoffset: 20, duration: 0.6, ease: 'power2.inOut' }, 0);

        // Children stagger out
        tl.to(itemsRef.current.filter(Boolean), {
          opacity: 0,
          y: 20,
          scale: 0.8,
          duration: 0.25,
          stagger: 0.04,
          ease: 'power2.in',
        }, 0);

        // Overlay fades out
        tl.to(overlayRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.inOut',
        }, 0.1);
      }
    });
  };

  const toggleMenu = () => {
    if (mobileMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  // Close menu on route/view change
  useEffect(() => {
    if (mobileMenuOpen) {
      closeMenu();
    }
  }, [currentView]);

  // Close menu on hash change
  useEffect(() => {
    const handleHashChange = () => {
      if (mobileMenuOpen) {
        closeMenu();
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [mobileMenuOpen]);

  // Close menu when viewport reaches >= 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        closeMenu();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  // Focus trap and Escape key listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!mobileMenuOpen) return;
      if (e.key === 'Escape') {
        e.preventDefault();
        closeMenu();
        return;
      }
      if (e.key === 'Tab') {
        const focusables = [
          toggleButtonRef.current,
          ...itemsRef.current.filter(Boolean),
        ];
        if (focusables.length === 0) return;
        const firstEl = focusables[0];
        const lastEl = focusables[focusables.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstEl) {
            e.preventDefault();
            lastEl.focus();
          }
        } else {
          if (document.activeElement === lastEl) {
            e.preventDefault();
            firstEl.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navItems = [
    { id: 'work', label: 'Work', action: () => onNavigate('work') },
    { id: 'about', label: 'About us', action: () => onNavigate('about') },
    { id: 'experience', label: 'Experience', action: () => onNavigate('experience') },
    {
      id: 'services',
      label: 'Services',
      action: () => {
        if (currentView !== 'home') {
          onNavigate('home');
          setTimeout(() => {
            const el = document.getElementById('services');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 120);
        } else {
          const el = document.getElementById('services');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      },
    },
    {
      id: 'faq',
      label: 'FAQ',
      action: () => {
        if (currentView !== 'home') {
          onNavigate('home');
          setTimeout(() => {
            const el = document.getElementById('faq');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 120);
        } else {
          const el = document.getElementById('faq');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      },
    },
  ];

  return (
    <div ref={rootRef}>
      <header className="fixed top-0 left-0 w-full z-50 px-5 md:px-8 py-5 transition-all duration-300 pointer-events-none">
        <nav className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
          {/* Left Pill Links (Desktop Only) */}
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

            {currentView !== 'experience' && (
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
            )}
          </div>

          {/* Brand Logo (Left on Mobile, Center on Desktop) */}
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
            {/* Monday-Friday Schedule (Desktop Only) */}
            <div className={`hidden md:flex flex-col text-right text-[11px] font-sans font-medium leading-tight transition-colors duration-150 ${
              isNightNav ? 'text-white' : 'text-black'
            }`}>
              <span>Monday–Friday</span>
              <span>10:00 – 17:00</span>
            </div>

            {/* Fullscreen Toggle (Desktop Only) */}
            <button
              onClick={toggleFullscreen}
              className="hidden md:flex w-9 h-9 rounded-full bg-white/90 hover:bg-white text-black hover:text-[#0576fc] border border-black/10 items-center justify-center transition-all duration-200 shadow-sm cursor-pointer"
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

            {/* Let's Talk CTA (Desktop Only) */}
            <button
              onClick={onOpenContact}
              className="hidden md:inline-flex group relative items-center gap-2.5 pl-5 pr-1.5 py-1.5 rounded-full bg-black text-white hover:bg-black/90 transition-all font-sans text-sm font-medium shadow-sm cursor-pointer"
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

            {/* Mobile Menu Toggle Button (<768px Only) */}
            <button
              ref={toggleButtonRef}
              onClick={toggleMenu}
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              className="md:hidden two26-toggle-btn focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0576fc]"
            >
              <svg
                ref={svgRef}
                className="w-full h-full"
                viewBox="-2 6.52 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ transformOrigin: '50% 50%' }}
              >
                {/* Looping Stem Path */}
                <path
                  ref={stemRef}
                  className="toggle-stem"
                  d="M7.01247 34.0204C7.01247 34.0204 10.1314 34.0204 20.8246 34.0204C31.5179 34.0204 31.2364 16.0204 20.8246 16.0205C10.4128 16.0205 9.00975 16.0196 9.00975 16.0196C5.0415 16.0196 2 12.8812 2 9.00979C2 5.13839 5.13839 2 9.00979 2C12.8679 2.01076 15.9893 5.1363 16 8.98937V34.5196"
                  stroke="#0576fc"
                  strokeWidth="4"
                  strokeLinecap="round"
                  style={{ strokeDasharray: '52.6, 111.029', strokeDashoffset: 0 }}
                />
                {/* Horizontal Crossbar Path */}
                <path
                  ref={crossRef}
                  className="toggle-cross"
                  d="M6 24.52H26"
                  stroke="#0576fc"
                  strokeWidth="0"
                  strokeLinecap="round"
                  style={{ strokeDasharray: '20, 20', strokeDashoffset: 20 }}
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu Overlay */}
      <div
        id="mobile-menu"
        ref={overlayRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
        style={{
          opacity: 0,
          visibility: 'hidden',
          pointerEvents: 'none',
        }}
        onClick={(e) => {
          if (e.target === overlayRef.current || e.target === contentContainerRef.current) {
            closeMenu();
          }
        }}
        className="fixed inset-0 h-[100svh] z-[48] bg-[rgba(229,239,255,0.95)] md:hidden overflow-y-auto"
      >
        <div
          ref={contentContainerRef}
          style={{
            paddingTop: 'max(100px, calc(env(safe-area-inset-top) + 100px))',
            paddingRight: '20px',
            paddingLeft: '20px',
            paddingBottom: 'max(32px, env(safe-area-inset-bottom))',
          }}
          className="flex flex-col items-end gap-[14px] min-h-full"
        >
          {navItems.map((item, index) => {
            const isBlackPill = currentView === item.id;
            return (
              <button
                key={item.id}
                ref={(el) => {
                  itemsRef.current[index] = el;
                  if (index === 0) firstLinkRef.current = el;
                }}
                onClick={() => {
                  closeMenu();
                  item.action();
                }}
                className={`font-sans font-medium text-[22px] leading-[1.2] px-8 py-[18px] rounded-full w-auto self-end cursor-pointer active:scale-[0.96] transition-transform duration-120 ${
                  isBlackPill
                    ? 'bg-black text-white shadow-sm'
                    : 'bg-white text-black hover:bg-black hover:text-white shadow-sm border border-black/5'
                }`}
              >
                {item.label}
              </button>
            );
          })}

          {/* Let's Talk CTA (Black Pill with Blue Arrow Badge) */}
          <button
            ref={(el) => {
              itemsRef.current[navItems.length] = el;
            }}
            onClick={() => {
              closeMenu();
              onOpenContact();
            }}
            className="group relative inline-flex items-center gap-3 pl-6 pr-2 h-[46px] rounded-full bg-black text-white hover:bg-black/90 active:scale-[0.96] transition-all duration-120 font-sans text-[15px] font-medium shadow-sm cursor-pointer self-end"
          >
            <span>Let's Talk</span>
            <span className="w-8 h-8 rounded-full bg-[#0576fc] text-white flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-300">
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
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

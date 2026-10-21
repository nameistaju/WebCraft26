import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import lottie from 'lottie-web';

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

const DEBUG = false;
const LINE_SPEED = 1;
const D = 1.12;

const DESKTOP_PATH_D =
  'M1601 15C1241.24 56.6913 1025.14 308.977 1139.71 377.393C1191.45 408.29 1240.74 339.444 1181.39 282.059C1075.45 179.627 937.582 215.243 741.458 298.287C701.638 315.147 622.383 350.59 552.298 410.201C487.298 465.486 487.725 549.018 534.765 563.77C581.804 578.523 632.714 579.634 681.058 587.392C729.731 595.202 767.011 617.17 797.836 657.756C833.766 705.065 838.864 772.034 862.127 825.767C890.491 891.283 966.341 911.2 1033.5 915.638C1130.56 922.052 1195.74 891.215 1286.16 899.069C1347.7 904.414 1457.75 932.208 1466.92 1059.42C1477.81 1210.68 1340.4 1252.99 1221.76 1286.05C1118.2 1314.91 997.775 1397.54 862.127 1334.5C757.468 1285.86 666.411 1293.34 650.401 1384.21C634.391 1475.07 710.968 1532.13 837.283 1542.81C963.598 1553.5 1146.44 1534.93 1181.39 1676C1226.53 1858.21 954.075 1839.5 797.836 1839.5C661.891 1839.5 422.283 1807.72 385.5 1700C340.427 1568 635.939 1584.37 465.5 1917C414.516 2016.5 310 2165.31 15 2165.31';

const MOBILE_PATH_D =
  'M542.705 10C465.727 48.981 92.8237 79.5116 92.8237 185.592C92.8237 291.673 352.712 336 346.322 440.868C339.933 545.736 104.278 543.251 92.8237 652.131C79.6013 777.82 353.287 765.564 346.322 898.5C339.358 1031.44 63.9084 911.5 68 1046C72.0916 1180.5 335.245 1170.41 328.309 1279.59C320.5 1402.5 -37.4522 1513.46 -135.704 1545.09';

const SERVICES_CONFIG = [
  {
    id: 'brand-strategy',
    word1: 'Brand',
    word2: 'Strategy',
    desc: 'We find the idea, the angle and the reasons people should care.',
    lottie: '/lottie/brand-strategy.json',
  },
  {
    id: 'brand-identity',
    word1: 'Brand',
    word2: 'Identity',
    desc: 'We give your brand a distinctive look, feel and personality that feels unmistakably yours.',
    lottie: '/lottie/brand-identity.json',
  },
  {
    id: 'web-design',
    word1: 'Web',
    word2: 'Design & Dev',
    desc: 'We turn your brand into a digital experience that looks great, feels right and is easy to navigate.',
    lottie: '/lottie/web-design.json',
  },
  {
    id: 'illustration',
    word1: 'Illustration',
    word2: '',
    desc: 'We create distinctive illustrations that add character to your brand.',
    lottie: '/lottie/illustration.json',
  },
  {
    id: 'motion-graphics',
    word1: 'Motion',
    word2: 'Graphics',
    desc: 'We make your brand move, cause standing still just isn’t enough.',
    lottie: '/lottie/motion-design.json',
  },
  {
    id: 'packaging-design',
    word1: 'Packaging',
    word2: 'Design',
    desc: 'We create packaging that catches the eye and works better for your brand.',
    lottie: '/lottie/packaging.json',
  },
  {
    id: 'art-direction',
    word1: 'Art',
    word2: 'Direction',
    desc: 'We keep all the moving parts moving in the same direction, from the big idea down to the smallest detail.',
    lottie: '/lottie/art-direction.json',
  },
];

const DESKTOP_STOPS = [0.06, 0.24, 0.33, 0.445, 0.60, 0.70, 0.92];
const MOBILE_STOPS = [0.06, 0.20, 0.35, 0.50, 0.65, 0.80, 0.94];

export default function ServicesPath() {
  const sectionRef = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const body = bodyRef.current;
    if (!section || !body) return;

    // Detect scroller (page container vs window)
    const scroller = document.querySelector('.page') || window;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Load Lottie instances
    const lottieBoxes = section.querySelectorAll('.lottie-box');
    const lottieInstances = [];

    lottieBoxes.forEach((box, i) => {
      const path = SERVICES_CONFIG[i]?.lottie;
      if (path) {
        try {
          const anim = lottie.loadAnimation({
            container: box,
            renderer: 'svg',
            loop: true,
            autoplay: false,
            path,
          });
          lottieInstances.push(anim);
        } catch (e) {
          lottieInstances.push(null);
        }
      } else {
        lottieInstances.push(null);
      }
    });

    if (prefersReduced) {
      gsap.set(section.querySelectorAll('.services-path-line'), { drawSVG: '100%' });
      gsap.set(section.querySelectorAll('.service-dot'), { scale: 1, opacity: 1 });
      gsap.set(section.querySelectorAll('.service-svg'), { width: 'clamp(3rem, 6vw, 6rem)', scale: 1, opacity: 1 });
      gsap.set(section.querySelectorAll('.service-text span'), { yPercent: 0, opacity: 1 });
      gsap.set(section.querySelectorAll('.service-block-para-wrapper'), { xPercent: -50, rotation: -5, scale: 1, opacity: 1 });
      lottieInstances.forEach((a) => a && a.goToAndStop(0, true));
      return () => {
        lottieInstances.forEach((a) => a && a.destroy());
      };
    }

    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: '(min-width: 992px)',
        isMobile: '(max-width: 991px)',
      },
      (context) => {
        const { isDesktop } = context.conditions;
        const activeSvg = section.querySelector(isDesktop ? '.desktop-path' : '.mobile-path');
        const activePath = activeSvg ? activeSvg.querySelector('.services-path-line') : null;
        const startDot = section.querySelector('.start-dot');
        const endDot = section.querySelector('.end-dot');
        const layers = Array.from(section.querySelectorAll('.service-layer'));

        if (!activeSvg || !activePath) return;

        const total = activePath.getTotalLength();
        const stops = isDesktop ? DESKTOP_STOPS : MOBILE_STOPS;
        const viewBoxW = isDesktop ? 1616 : 407;
        const viewBoxH = isDesktop ? 2187 : 1556;

        // Position start and end dots
        const p0 = activePath.getPointAtLength(0);
        const pEnd = activePath.getPointAtLength(total);

        startDot.style.left = `${(p0.x / viewBoxW) * 100}%`;
        startDot.style.top = `${(p0.y / viewBoxH) * 100}%`;
        endDot.style.left = `${(pEnd.x / viewBoxW) * 100}%`;
        endDot.style.top = `${(pEnd.y / viewBoxH) * 100}%`;

        // PATCH 4: Measured edge-clamp layout
        function layout() {
          const bodyW = body.clientWidth;
          const margin = bodyW * 0.01;
          layers.forEach((layer, i) => {
            const block = layer.querySelector('.service-block');
            const svg = layer.querySelector('.service-svg');
            const pill = layer.querySelector('.service-block-para-wrapper');
            const prev = svg.style.width;
            svg.style.width = '';                      // use the CSS width (revealed state)
            svg.dataset.finalW = svg.offsetWidth;      // store the icon target width
            const finalW = block.offsetWidth;          // label width with the icon expanded
            svg.style.width = prev;                    // restore the hidden state
            const half = Math.max(finalW, pill.offsetWidth) / 2;
            const p = activePath.getPointAtLength(stops[i] * total);
            let x = (p.x / viewBoxW) * bodyW;
            x = Math.min(Math.max(x, half + margin), bodyW - half - margin);
            layer.style.left = x + 'px';
            layer.style.top = (p.y / viewBoxH) * 100 + '%';
            layer.style.transform = 'translate(-50%, -50%)';

            if (DEBUG) {
              let debugDot = layer.querySelector('.debug-dot');
              if (!debugDot) {
                debugDot = document.createElement('div');
                debugDot.className = 'debug-dot';
                debugDot.style.cssText =
                  'position:absolute; width:10px; height:10px; background:red; border-radius:50%; top:50%; left:50%; transform:translate(-50%,-50%); z-index:999; pointer-events:none;';
                layer.appendChild(debugDot);
              }
              if (block) block.style.outline = '2px dashed red';
            }
          });
        }

        layout();
        ScrollTrigger.addEventListener('refreshInit', layout);

        // PATCH 5: Set initial hidden states in JS with xPercent: -50 on pill
        gsap.set(activePath, { drawSVG: '0%' });
        gsap.set(startDot, { scale: 1, opacity: 1 });
        gsap.set(endDot, { scale: 0, opacity: 0 });

        layers.forEach((layer) => {
          const texts = layer.querySelectorAll('.service-text span');
          const svg = layer.querySelector('.service-svg');
          const para = layer.querySelector('.service-block-para-wrapper');

          gsap.set(texts, { yPercent: 110, opacity: 0 });
          gsap.set(svg, { width: 0, scale: 0, opacity: 0 });
          gsap.set(para, { xPercent: -50, scale: 0, rotation: 0, opacity: 0 });
        });

        // Build ScrollTrigger Timeline (Slower line draw with LINE_SPEED control)
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: body,
            scroller: scroller === window ? undefined : scroller,
            start: 'top 75%',
            end: () => '+=' + (body.offsetHeight * 1.0 + window.innerHeight * 0.3) / LINE_SPEED,
            scrub: 2,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const p = self.progress;
              stops.forEach((s, i) => {
                const anim = lottieInstances[i];
                if (!anim) return;
                if (p >= s) {
                  if (!anim.__isPlaying) {
                    anim.play();
                    anim.__isPlaying = true;
                  }
                } else {
                  if (anim.__isPlaying) {
                    anim.pause();
                    anim.goToAndStop(0, true);
                    anim.__isPlaying = false;
                  }
                }
              });
            },
          },
        });

        // Draw line smoothly from 0% to 100% across duration D
        tl.fromTo(
          activePath,
          { drawSVG: '0%' },
          { drawSVG: '100%', ease: 'none', duration: D },
          0
        );

        // End dot appears when line reaches end (D - 0.04)
        tl.fromTo(
          endDot,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, ease: 'back.out(2)', duration: 0.04 },
          D - 0.04
        );

        // Reveals synchronized with line arrival at each stop (stops[i] * D - 0.03 * D)
        layers.forEach((layer, i) => {
          const s = stops[i];
          const revealStart = Math.max(0, s * D - 0.03 * D);

          const texts = layer.querySelectorAll('.service-text span');
          const svg = layer.querySelector('.service-svg');
          const para = layer.querySelector('.service-block-para-wrapper');

          // (a) Text words slide up from mask
          tl.to(
            texts,
            { yPercent: 0, opacity: 1, ease: 'back.out(1.4)', duration: 0.12 },
            revealStart
          );

          // (b) Icon expands width to measured dataset.finalW (PATCH 5)
          tl.to(
            svg,
            {
              width: () => +svg.dataset.finalW,
              scale: 1,
              opacity: 1,
              ease: 'back.out(3.5)',
              duration: 0.14,
            },
            revealStart
          );

          // (c) Paragraph pill pops in tilted -5deg (do not touch xPercent)
          tl.to(
            para,
            {
              scale: 1,
              rotation: -5,
              opacity: 1,
              ease: 'back.out(3.5)',
              duration: 0.14,
            },
            revealStart + 0.02
          );
        });

        return () => {
          ScrollTrigger.removeEventListener('refreshInit', layout);
        };
      }
    );

    window.requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      mm.revert();
      lottieInstances.forEach((a) => a && a.destroy());
    };
  }, []);

  return (
    <section id="services" ref={sectionRef} className="section-services">
      <header className="services-header">
        <span className="services-eyebrow">OUR SERVICES</span>
        <h2 className="services-title">THIS IS OUR THING</h2>
      </header>

      <div ref={bodyRef} className="services-body">
        {/* Desktop SVG Path */}
        <svg
          className="services-path desktop-path"
          viewBox="0 0 1616 2187"
          preserveAspectRatio="xMidYMid meet"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Faint guide track at 15% opacity */}
          <path
            className="services-path-guide"
            d={DESKTOP_PATH_D}
            fill="none"
            stroke="var(--brand-blue, #0576fc)"
            strokeWidth="14"
            strokeOpacity="0.15"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Main animated scroll-drawn path */}
          <path
            className="services-path-line"
            d={DESKTOP_PATH_D}
            fill="none"
            stroke="var(--brand-blue, #0576fc)"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Mobile SVG Path */}
        <svg
          className="services-path mobile-path"
          viewBox="0 0 407 1556"
          preserveAspectRatio="xMidYMid meet"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            className="services-path-guide"
            d={MOBILE_PATH_D}
            fill="none"
            stroke="var(--brand-blue, #0576fc)"
            strokeWidth="18"
            strokeOpacity="0.15"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className="services-path-line"
            d={MOBILE_PATH_D}
            fill="none"
            stroke="var(--brand-blue, #0576fc)"
            strokeWidth="20"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Start and End Dots */}
        <div className="service-dot start-dot" aria-hidden="true" />
        <div className="service-dot end-dot" aria-hidden="true" />

        {/* 7 Services Layers with Exact Required Structure */}
        {SERVICES_CONFIG.map((srv) => (
          <div key={srv.id} className="service-layer" data-service={srv.id}>
            <div className="service-block">
              <div className="service-text">
                <span>{srv.word1}</span>
              </div>
              <div className="service-svg">
                <div className="lottie-box" />
              </div>
              {srv.word2 && (
                <div className="service-text">
                  <span>{srv.word2}</span>
                </div>
              )}
              <div className="service-block-para-wrapper">
                <p className="service-block-para">{srv.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

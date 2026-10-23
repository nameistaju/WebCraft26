import React, { useEffect, useRef, useState } from 'react';

export default function NotFoundPage({ onNavigateHome }) {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(() => {
    try {
      return +(localStorage.getItem('tr404best') || 0);
    } catch {
      return 0;
    }
  });
  const [gameState, setGameState] = useState('ready'); // 'ready' | 'play' | 'over'
  const [finalText, setFinalText] = useState('0 gaps cleared');

  const onHomeClick = (e) => {
    e.preventDefault();
    if (onNavigateHome) {
      onNavigateHome();
    } else {
      window.location.hash = '';
    }
  };

  const restartGameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const NAVY = '#2d3b48';
    const YEL = '#eada4f';
    const LIGHT = '#f4f4f2';

    const PLANE_SVG = `<svg width="91" height="85" viewBox="0 0 91 85" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M90.8994 6.26844C90.9088 4.43429 90.2327 2.66278 89.0036 1.30135C87.8668 0.644745 86.6086 0.225556 85.3052 0.0691427C84.0017 -0.0872703 82.6801 0.0223438 81.4202 0.391355C76.7937 1.41189 72.2246 2.67756 67.7323 4.18302C65.4194 4.86552 63.1444 5.66177 60.9073 6.53385C57.5707 7.7851 54.3098 9.22594 51.0111 10.6668C44.941 13.3176 39.0175 16.292 33.2661 19.5772C27.4954 22.8255 22.0596 26.6356 17.0377 30.9522L4.03232 42.5926L1.03691 45.588C0.667375 45.9757 0.348829 46.4089 0.0889896 46.8772C-0.0296632 47.2081 -0.0296632 47.57 0.0889896 47.9009C0.166681 48.3172 0.345694 48.7079 0.610213 49.0385C0.874732 49.3692 1.21661 49.6296 1.60566 49.7968C3.0706 50.2968 4.60771 50.553 6.15566 50.5551C7.82399 50.5551 10.7815 50.5551 13.3219 50.9343C14.6067 50.8957 15.8888 51.0752 17.1136 51.4651L17.834 59.9205C18.0615 62.3472 18.1752 64.243 18.1752 66.0251C18.1752 68.8689 17.7961 73.798 17.7961 77.6655C17.7961 78.0074 17.9319 78.3353 18.1737 78.5771C18.4154 78.8189 18.7433 78.9547 19.0852 78.9547C19.4271 78.9547 19.7551 78.8189 19.9968 78.5771C20.2386 78.3353 20.3744 78.0074 20.3744 77.6655C20.3744 73.8739 20.8673 68.8689 20.9052 66.0251C20.9052 64.1672 20.9052 62.2334 20.6398 59.693C20.3744 57.1526 20.3744 53.9676 20.0711 52.1097C19.7677 50.2518 19.7298 49.228 14.9902 48.318C12.1844 47.9768 8.31691 47.7872 6.23149 47.6734L4.14607 47.3701L6.34524 45.2089L19.4265 33.8339C24.2686 29.6297 29.5285 25.9325 35.124 22.8001C40.7802 19.7492 46.589 16.9903 52.5277 14.5343C55.7507 13.1693 59.0115 11.8422 62.2723 10.7426C69.2101 8.17355 76.3682 6.24441 83.6573 4.97927C87.0698 6.45802 86.5769 7.74719 86.5011 8.77094C86.3596 10.6849 86.0165 12.5786 85.4773 14.4205L80.5861 30.9522C79.6003 34.2509 78.5386 37.3222 77.439 40.3176C74.7469 47.5597 71.7894 54.3468 69.0594 62.1955C68.4198 63.9767 67.6597 65.7122 66.7844 67.3901C65.3815 70.0443 63.789 72.5847 62.3102 74.9734C61.8932 75.7461 61.4112 76.4818 60.8694 77.1726L60.4902 77.6276L60.2627 77.2864L56.4711 71.3334C54.6014 68.7684 52.6018 66.3006 50.4802 63.9397C48.3525 61.5585 46.0862 59.3049 43.6932 57.1905C42.0627 55.8255 37.4748 52.0339 36.1098 54.7639C35.7307 55.2568 35.3136 56.2047 35.0861 56.4701L30.6498 62.9159L26.1757 70.8405C24.5832 73.6084 22.6873 76.2247 20.9811 78.9926C20.2607 80.2059 19.5402 81.4572 18.9336 82.7843C18.8032 83.0558 18.7859 83.368 18.8854 83.6524C18.9849 83.9367 19.1931 84.17 19.4644 84.3009C19.4644 84.3009 20.5261 85.173 22.0807 83.9976C23.6352 82.8222 24.0902 82.5189 24.9623 81.8364C25.8344 81.1539 27.844 79.7509 29.2469 78.7651C30.6498 77.7793 31.7873 77.0589 33.0386 76.1868L38.8019 72.1676C41.8352 70.0064 44.7548 67.7693 47.5986 65.3805L48.2432 66.1009C50.2907 68.4897 52.2244 70.9922 53.8927 73.343L57.3052 79.1822C57.6526 79.8285 58.0454 80.4494 58.4807 81.0401C58.6976 81.2698 58.964 81.4472 59.2596 81.5588C59.5552 81.6705 59.8723 81.7135 60.1869 81.6847C61.0853 81.5369 61.9253 81.1432 62.6136 80.5472C63.6913 79.5023 64.6225 78.316 65.3815 77.0209C66.9361 74.6322 68.6423 72.0159 70.1211 69.4376C71.1396 67.6257 72.0143 65.7367 72.7373 63.788C75.5432 55.9772 78.6523 49.2659 81.3823 42.0997C82.5957 38.9905 83.6953 35.8434 84.719 32.4689L89.6482 15.7855C90.5677 12.6997 90.9901 9.4871 90.8994 6.26844ZM34.4794 69.8926C33.1703 70.7382 31.9048 71.6493 30.6877 72.6226C29.3986 73.6464 28.1852 74.708 26.8961 75.8455L24.0523 78.7651C25.5311 76.528 27.0857 74.3668 28.4507 72.0918L33.1523 64.5084L37.5127 58.2522C37.7023 58.0247 38.2711 57.0768 38.4986 56.6976C38.7261 56.3184 39.2569 57.1905 39.674 57.4939C40.0911 57.7972 41.3802 59.0484 41.8732 59.4655C43.1623 60.6409 44.4515 61.968 45.6648 63.2572C42.0627 65.6459 38.1573 67.5797 34.4794 69.8926Z" fill="#2D3B48"/><path d="M51.8452 33.4926C49.8356 35.6917 48.0535 38.0047 46.0818 40.3934C44.1102 42.7822 41.8352 45.8534 39.9014 48.7351C39.4843 49.3417 39.1052 49.9863 38.726 50.593C37.7402 53.5884 39.1431 53.1334 41.7593 50.8963L42.1006 50.3655C44.2239 47.6734 46.6127 45.133 48.8498 42.7822C52.4518 38.6492 56.4331 34.8576 60.2248 31.1038L68.6423 23.1792C72.7752 19.3876 76.9081 15.3684 80.9652 11.3872C87.1077 0.618819 70.3864 15.7855 61.3623 24.0134C58.0635 27.1605 54.8785 30.1559 51.8452 33.4926Z" fill="#2D3B48"/><path d="M50.3286 21.8902C45.0582 25.4543 39.9774 29.246 34.8965 33.2652L22.9149 43.0098C22.1565 43.6923 21.2845 44.4127 20.4124 45.1331C18.5924 47.4081 18.8578 48.2423 22.9907 46.4223C23.5974 46.0052 24.204 45.5881 24.697 45.171L37.2095 36.2227L68.3769 14.7239C71.4482 12.6385 74.4057 10.5531 77.4769 8.5435C78.1974 6.00308 72.8132 7.78517 68.3769 10.4014L66.3674 11.6148C60.9832 14.9893 55.5611 18.2881 50.3286 21.8902Z" fill="#2D3B48"/></svg>`;

    const planeImg = new Image();
    planeImg.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(PLANE_SVG)));

    const PSVG_W = 91;
    const PSVG_H = 85;
    const P_CX = 58;
    const P_CY = 40;
    const BASE_ANG = 0.62;

    let W = window.innerWidth;
    let H = window.innerHeight;
    let dpr = 1;

    let SPACE = 380;
    let TW = 120;
    let PX = 160;
    let PR = 14;
    let GRAV = 0.46;
    let FLAP = -8;
    let LW = 2.8;
    let GH = 60;
    let groundY = 0;
    let GAP = 210;

    let state = 'ready'; // 'ready' | 'play' | 'over'
    let plane = { x: 160, y: 300, vy: 0 };
    let trees = [];
    let props = [];
    let curScore = 0;
    let curBest = 0;
    try {
      curBest = +(localStorage.getItem('tr404best') || 0);
    } catch {}
    let scrollX = 0;

    function metrics() {
      GH = Math.max(48, Math.min(H * 0.07, 90));
      groundY = H - GH;
      GAP = Math.max(184, Math.min(H * 0.28, 256));
      SPACE = Math.max(300, Math.min(W * 0.4, 520));
      TW = Math.max(96, Math.min(W * 0.09, 168));
      PX = Math.max(120, W * 0.2);
      PR = Math.max(12, Math.min(W * 0.012, 16));
      LW = Math.max(2.6, TW * 0.024);
      plane.x = PX;
    }

    function rnd(s) {
      const x = Math.sin(s * 127.1 + 0.7) * 43758.5453;
      return x - Math.floor(x);
    }

    function handStroke(pts, seed, amp, close) {
      const jp = pts.map((p, i) => [
        p[0] + (rnd(seed + i * 1.7) - 0.5) * amp,
        p[1] + (rnd(seed + i * 3.1 + 11) - 0.5) * amp,
      ]);
      ctx.beginPath();
      ctx.moveTo(jp[0][0], jp[0][1]);
      for (let i = 1; i < jp.length - 1; i++) {
        const mx = (jp[i][0] + jp[i + 1][0]) / 2;
        const my = (jp[i][1] + jp[i + 1][1]) / 2;
        ctx.quadraticCurveTo(jp[i][0], jp[i][1], mx, my);
      }
      const n = jp.length;
      if (close) {
        ctx.quadraticCurveTo(jp[n - 1][0], jp[n - 1][1], jp[0][0], jp[0][1]);
      } else {
        ctx.lineTo(jp[n - 1][0], jp[n - 1][1]);
      }
    }

    function blobPts(cx, cy, rx, ry, lumps, seed) {
      const pts = [];
      for (let i = 0; i < lumps; i++) {
        const a = (i / lumps) * Math.PI * 2;
        const r = 0.8 + 0.34 * rnd(seed + i * 2.3);
        pts.push([cx + Math.cos(a) * rx * r, cy + Math.sin(a) * ry * r]);
      }
      return pts;
    }

    function cloud(cx, bottomY, seed) {
      const top = -TW * 0.24;
      const cyc = (bottomY + top) / 2;
      const rx = TW * 0.85;
      const ry = (bottomY - top) / 2;
      const bumps = 6 + ((rnd(seed) * 2) | 0);
      const pts = [];
      for (let i = 0; i < bumps; i++) {
        const a0 = (i / bumps) * 6.2832;
        const a1 = ((i + 0.5) / bumps) * 6.2832;
        const vR = 0.76 + 0.07 * rnd(seed + i * 5);
        const tR = 1.02 + 0.22 * rnd(seed + i * 3);
        pts.push([cx + Math.cos(a0) * rx * vR, cyc + Math.sin(a0) * ry * vR]);
        pts.push([cx + Math.cos(a1) * rx * tR, cyc + Math.sin(a1) * ry * tR]);
      }
      ctx.strokeStyle = NAVY;
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';
      ctx.lineWidth = LW;
      handStroke(pts, seed, 3, true);
      ctx.stroke();
      ctx.lineWidth = LW * 0.5;
      ctx.globalAlpha = 0.3;
      handStroke(pts, seed + 5.5, 4.5, true);
      ctx.stroke();
      ctx.globalAlpha = 1;
    }

    function crown(cx, cy, r, seed) {
      ctx.strokeStyle = NAVY;
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';
      ctx.lineWidth = LW;
      handStroke(blobPts(cx, cy, r, r * 0.92, 11, seed), seed, r * 0.05, true);
      ctx.stroke();
      ctx.lineWidth = LW * 0.55;
      ctx.globalAlpha = 0.4;
      handStroke(blobPts(cx, cy, r, r * 0.92, 11, seed + 3.3), seed + 3.3, r * 0.07, true);
      ctx.stroke();
      ctx.globalAlpha = 1;
      ctx.lineWidth = LW * 0.8;
      for (let k = 0; k < 3; k++) {
        const ax = cx + (rnd(seed + k * 7) - 0.5) * r * 1.05;
        const ay = cy + (rnd(seed + k * 9) - 0.4) * r * 0.9;
        ctx.beginPath();
        ctx.arc(ax, ay, r * (0.13 + 0.06 * rnd(seed + k)), 0.6, 2.4);
        ctx.stroke();
      }
    }

    function trunk(cx, topY, tw, seed) {
      ctx.strokeStyle = NAVY;
      ctx.lineWidth = LW;
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';
      const edge = (side) => {
        const segs = 6;
        const pl = [];
        for (let i = 0; i <= segs; i++) {
          const t = i / segs;
          const y = topY + (groundY - topY) * t;
          const fl = 1 + t * t * 0.9;
          pl.push([cx + side * tw * fl, y]);
        }
        handStroke(pl, seed + side * 5, 2.2, false);
        ctx.stroke();
      };
      edge(-1);
      edge(1);
      ctx.beginPath();
      ctx.moveTo(cx - tw, groundY);
      ctx.quadraticCurveTo(cx - tw * 2.4, groundY - 3, cx - tw * 3.0, groundY);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx + tw, groundY);
      ctx.quadraticCurveTo(cx + tw * 2.4, groundY - 3, cx + tw * 3.0, groundY);
      ctx.stroke();
      ctx.lineWidth = LW * 0.85;
      const my = topY + (groundY - topY) * 0.45;
      ctx.beginPath();
      ctx.moveTo(cx - tw * 1.1, my);
      ctx.lineTo(cx - tw * 1.1 - 15, my - 11);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx + tw * 1.1, my + 22);
      ctx.lineTo(cx + tw * 1.1 + 16, my + 11);
      ctx.stroke();
    }

    function rock(cx, seed, s) {
      ctx.strokeStyle = NAVY;
      ctx.lineWidth = LW * 0.8;
      ctx.lineJoin = 'round';
      handStroke(blobPts(cx, groundY - s * 0.42, s, s * 0.5, 7, seed), seed, 1.6, true);
      ctx.stroke();
    }

    function grass(cx, seed) {
      ctx.strokeStyle = NAVY;
      ctx.lineWidth = LW * 0.75;
      ctx.lineCap = 'round';
      const n = 3 + ((rnd(seed) * 3) | 0);
      for (let i = 0; i < n; i++) {
        const dx = (i - (n - 1) / 2) * 5;
        const h = 12 + rnd(seed + i) * 12;
        const bend = (rnd(seed + i * 2) - 0.5) * 10;
        ctx.beginPath();
        ctx.moveTo(cx + dx, groundY);
        ctx.quadraticCurveTo(cx + dx + bend, groundY - h * 0.6, cx + dx + bend * 1.6, groundY - h);
        ctx.stroke();
      }
    }

    function bushP(cx, seed, s) {
      ctx.strokeStyle = NAVY;
      ctx.lineWidth = LW * 0.8;
      ctx.lineJoin = 'round';
      handStroke(blobPts(cx, groundY - s * 0.5, s, s * 0.55, 9, seed), seed, 2, true);
      ctx.stroke();
    }

    function spawnTree(x) {
      const gapTop = H * 0.1 + Math.random() * (H * 0.12);
      const gapBottom = gapTop + GAP;
      let r = TW * (0.4 + Math.random() * 0.3);
      r = Math.max(TW * 0.34, Math.min(r, (groundY - 40 - gapBottom) / 1.7));
      trees.push({ cx: x, r, gapTop, gapBottom, cy: gapBottom + r, seed: Math.random() * 1000, sc: false });
    }

    function spawnProp(x) {
      const r = Math.random();
      const type = r < 0.5 ? 'grass' : r < 0.8 ? 'rock' : 'bush';
      props.push({
        x,
        type,
        seed: Math.random() * 1000,
        s: type === 'bush' ? 22 + Math.random() * 16 : 14 + Math.random() * 16,
      });
    }

    function reset() {
      trees = [];
      props = [];
      curScore = 0;
      setScore(0);
      plane.y = H * 0.4;
      plane.vy = 0;
      scrollX = 0;
      const first = Math.max(plane.x + 300, W * 0.6);
      for (let i = 0; i < 3; i++) spawnTree(first + i * SPACE);
      for (let x = W * 0.35; x < W + 200; x += 120 + Math.random() * 150) spawnProp(x);
    }

    function gameOver() {
      state = 'over';
      setGameState('over');
      setFinalText(curScore + (curScore === 1 ? ' gap cleared' : ' gaps cleared'));
    }

    function flap() {
      if (state === 'ready') {
        state = 'play';
        setGameState('play');
        reset();
        plane.vy = FLAP;
        return;
      }
      if (state === 'play') {
        plane.vy = FLAP;
      }
    }

    restartGameRef.current = () => {
      setGameState('play');
      state = 'play';
      reset();
      plane.vy = FLAP;
    };

    function drawPlane(x, y, ang) {
      if (!planeImg.complete) return;
      const s = (PR * 2.6) / 52;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(ang);
      ctx.scale(s, s);
      ctx.drawImage(planeImg, -P_CX, -P_CY, PSVG_W, PSVG_H);
      ctx.restore();
    }

    function hills() {
      ctx.save();
      ctx.globalAlpha = 0.07;
      ctx.fillStyle = NAVY;
      ctx.beginPath();
      ctx.moveTo(0, groundY);
      ctx.quadraticCurveTo(W * 0.18, groundY - H * 0.16, W * 0.36, groundY - H * 0.05);
      ctx.quadraticCurveTo(W * 0.55, groundY - H * 0.2, W * 0.74, groundY - H * 0.06);
      ctx.quadraticCurveTo(W * 0.9, groundY - H * 0.15, W, groundY - H * 0.02);
      ctx.lineTo(W, groundY);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    function ground() {
      ctx.strokeStyle = NAVY;
      ctx.lineWidth = LW;
      ctx.lineCap = 'round';
      ctx.beginPath();
      for (let x = 0; x <= W; x += 26) {
        const y = groundY + Math.sin((x + scrollX * 0.6) * 0.018) * 2.4;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    function render() {
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = LIGHT;
      ctx.fillRect(0, 0, W, H);

      ctx.save();
      ctx.globalAlpha = 0.04;
      ctx.fillStyle = NAVY;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = '700 ' + Math.min(W, H) * 0.5 + "px 'PT Serif', serif, Georgia";
      ctx.fillText('404', W / 2, H * 0.42);
      ctx.restore();
      ctx.textBaseline = 'alphabetic';

      hills();
      trees.forEach((t) => {
        cloud(t.cx, t.gapTop, t.seed + 200);
        trunk(t.cx, t.cy + t.r * 0.45, Math.max(5, t.r * 0.2), t.seed + 50);
        crown(t.cx, t.cy, t.r, t.seed);
      });
      ground();
      props.forEach((p) => {
        p.type === 'grass' ? grass(p.x, p.seed) : p.type === 'rock' ? rock(p.x, p.seed, p.s) : bushP(p.x, p.seed, p.s);
      });

      const tilt = Math.max(-0.5, Math.min(0.85, plane.vy * 0.05));
      drawPlane(plane.x, plane.y, BASE_ANG + (state === 'ready' ? Math.sin(performance.now() / 420) * 0.12 : tilt));
    }

    let animId = null;
    let last = performance.now();

    function loop(now) {
      const dt = Math.min((now - last) / 16.67, 2.2);
      last = now;

      if (state === 'play') {
        plane.vy += GRAV * dt;
        plane.y += plane.vy * dt;
        const sp = (2.8 + Math.min(curScore * 0.05, 2.6)) * dt;
        scrollX += sp;
        trees.forEach((t) => (t.cx -= sp));
        props.forEach((p) => (p.x -= sp));

        if (trees.length && trees[trees.length - 1].cx < W - SPACE) {
          spawnTree(trees[trees.length - 1].cx + SPACE);
        }
        if (trees.length && trees[0].cx + TW < -60) {
          trees.shift();
        }
        if (props.length && props[props.length - 1].x < W - 90) {
          spawnProp(props[props.length - 1].x + 120 + Math.random() * 150);
        }
        if (props.length && props[0].x < -40) {
          props.shift();
        }

        for (const t of trees) {
          if (!t.sc && t.cx + TW * 0.5 < plane.x) {
            t.sc = true;
            curScore++;
            setScore(curScore);
            if (curScore > curBest) {
              curBest = curScore;
              setBestScore(curBest);
              try {
                localStorage.setItem('tr404best', curBest);
              } catch {}
            }
          }
          if (plane.x + PR > t.cx - TW * 0.5 && plane.x - PR < t.cx + TW * 0.5 && plane.y - PR < t.gapTop) {
            gameOver();
          }
          const hw = t.r * 0.85;
          if (plane.x + PR > t.cx - hw && plane.x - PR < t.cx + hw && plane.y + PR > t.gapBottom) {
            gameOver();
          }
        }

        if (plane.y + PR > groundY || plane.y - PR < 0) {
          gameOver();
        }
      }

      render();
      animId = requestAnimationFrame(loop);
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.style.width = W + 'px';
      canvas.style.height = H + 'px';
      canvas.width = Math.floor(W * dpr);
      canvas.height = Math.floor(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      metrics();
      if (state === 'ready') plane.y = H * 0.4;
    }

    const handlePointerDown = (e) => {
      e.preventDefault();
      flap();
    };

    const handleKeyDown = (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        flap();
      }
    };

    window.addEventListener('resize', resize);
    canvas.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('keydown', handleKeyDown);

    resize();
    planeImg.onload = render;
    animId = requestAnimationFrame(loop);

    return () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden bg-[#f4f4f2] text-[#2d3b48] select-none z-[99999] font-sans">
      {/* Canvas Stage */}
      <div className="fixed inset-0">
        <canvas ref={canvasRef} className="block w-full h-full cursor-pointer touch-none" />
      </div>

      {/* Back to Home Button (Hidden during active flight like reference) */}
      <button
        onClick={onHomeClick}
        className={`fixed top-6 left-6 z-10 font-bold text-xs sm:text-sm tracking-wide text-[#2d3b48] opacity-60 hover:opacity-100 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2d3b48]/35 transition-all hover:bg-[#2d3b48]/10 cursor-pointer ${
          gameState === 'play' ? 'hidden' : ''
        }`}
      >
        <span>&larr;</span> Back to Home
      </button>

      {/* Score HUD */}
      <div className="fixed top-6 left-0 right-0 pointer-events-none flex justify-center gap-12 sm:gap-14 text-center">
        <div>
          <div className="font-bold text-[11px] sm:text-xs tracking-widest uppercase opacity-45">Score</div>
          <div className="font-serif font-bold text-3xl sm:text-4xl leading-none mt-1 tabular-nums">{score}</div>
        </div>
        <div>
          <div className="font-bold text-[11px] sm:text-xs tracking-widest uppercase opacity-45">Best</div>
          <div className="font-serif font-bold text-3xl sm:text-4xl leading-none mt-1 tabular-nums">{bestScore}</div>
        </div>
      </div>

      {/* Control Hint */}
      {gameState !== 'over' && (
        <div className="fixed left-1/2 bottom-8 -translate-x-1/2 font-bold text-xs sm:text-sm tracking-wide text-[#2d3b48] opacity-50 pointer-events-none text-center px-4">
          Click, Tap or Spacebar to fly · Navigate through the gaps
        </div>
      )}

      {/* Game Over Screen */}
      {gameState === 'over' && (
        <div className="fixed inset-0 grid place-items-center bg-[#f4f4f2]/85 backdrop-blur-xs z-20 p-4">
          <div className="text-center text-[#2d3b48] animate-[pop_0.4s_cubic-bezier(0.2,0.9,0.25,1.1)_both]">
            <div className="font-serif font-bold text-7xl sm:text-9xl leading-none relative inline-block">
              404
              <span className="absolute top-[0.18em] -right-[0.34em] w-[0.2em] h-[0.2em] rounded-full bg-[#eada4f]" />
            </div>

            <div className="text-base sm:text-lg opacity-65 mt-3 tracking-wide">
              Looks like this page flew away.
            </div>

            <div className="font-serif font-bold text-xl sm:text-2xl mt-5">
              {finalText}
            </div>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-7">
              <button
                onClick={() => {
                  if (restartGameRef.current) restartGameRef.current();
                }}
                className="cursor-pointer font-bold text-sm sm:text-base tracking-wide text-[#2d3b48] bg-[#eada4f] hover:bg-[#dfce44] border-0 rounded-full px-7 py-3.5 shadow-sm transition-transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Fly Again
              </button>
              <button
                onClick={onHomeClick}
                className="cursor-pointer font-bold text-sm sm:text-base tracking-wide text-[#2d3b48] bg-transparent border-2 border-[#2d3b48] rounded-full px-7 py-3.5 transition-transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

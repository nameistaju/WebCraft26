const { spawn } = require('child_process');

async function run() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9222',
    '--disable-gpu',
    '--no-sandbox',
    '--window-size=1920,877'
  ]);

  await new Promise(r => setTimeout(r, 1500));

  try {
    const listRes = await fetch('http://127.0.0.1:9222/json/list');
    const targets = await listRes.json();
    const pageTarget = targets.find(t => t.type === 'page');
    if (!pageTarget) throw new Error('No page target found');

    const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);
    let msgId = 1;
    const pending = new Map();

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.id && pending.has(data.id)) {
        pending.get(data.id)(data);
        pending.delete(data.id);
      }
    };

    const send = (method, params = {}) => {
      return new Promise((resolve) => {
        const id = msgId++;
        pending.set(id, resolve);
        ws.send(JSON.stringify({ id, method, params }));
      });
    };

    await new Promise(r => ws.onopen = r);

    // Set viewport
    await send('Emulation.setDeviceMetricsOverride', {
      width: 1920,
      height: 877,
      deviceScaleFactor: 1,
      mobile: false
    });

    await send('Page.navigate', { url: 'http://localhost:5173/#work' });
    await new Promise(r => setTimeout(r, 2000));

    // Evaluate getBoundingClientRect for target elements
    const res = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const l1 = document.querySelector('.work-hero-line-1');
          const l1Text = document.querySelector('.work-hero-line-1 .work-hero-text');
          const l2 = document.querySelector('.work-hero-line-2');
          const l2Text = document.querySelector('.work-hero-line-2 .work-hero-text');
          const pill1 = document.querySelector('.pill--1');
          const pill2 = document.querySelector('.pill--2');
          const illust = document.querySelector('.work-hero-illustration');
          const illustImg = document.querySelector('.work-hero-illustration img');
          const para = document.querySelector('.work-hero-paragraph');
          const pathBox = document.querySelector('.work-hero-path-box');
          const path = document.querySelector('.work-hero-path-box path');
          const hero = document.querySelector('.section-work-hero');

          const heroRect = hero ? hero.getBoundingClientRect() : null;

          return {
            window: { innerWidth: window.innerWidth, innerHeight: window.innerHeight },
            hero: heroRect,
            l1: l1 ? l1.getBoundingClientRect() : null,
            l1Text: l1Text ? l1Text.getBoundingClientRect() : null,
            l2: l2 ? l2.getBoundingClientRect() : null,
            l2Text: l2Text ? l2Text.getBoundingClientRect() : null,
            pill1: pill1 ? pill1.getBoundingClientRect() : null,
            pill2: pill2 ? pill2.getBoundingClientRect() : null,
            illust: illust ? illust.getBoundingClientRect() : null,
            illustImg: illustImg ? illustImg.getBoundingClientRect() : null,
            para: para ? para.getBoundingClientRect() : null,
            pathBox: pathBox ? pathBox.getBoundingClientRect() : null,
            pathBBox: path ? path.getBBox() : null
          };
        })()
      `,
      returnByValue: true
    });

    console.log(JSON.stringify(res.result.value, null, 2));

    ws.close();
  } catch (err) {
    console.error('Error:', err);
  } finally {
    chrome.kill();
  }
}

run();

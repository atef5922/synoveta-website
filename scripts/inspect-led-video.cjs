const { chromium } = require('C:/Users/PC/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs = require('fs');
(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage();
  await page.goto('http://localhost:3001/LED-Display/hero_video/led-display-hero.mp4');
  const result = await page.evaluate(async () => {
    const v = document.querySelector('video'); v.pause();
    if (v.readyState < 2) await new Promise(r => v.addEventListener('loadeddata', r, {once:true}));
    v.currentTime = 3;
    await new Promise(r => v.addEventListener('seeked',r,{once:true}));
    const c = document.createElement('canvas'); c.width=1600; c.height=Math.round(1600*v.videoHeight/v.videoWidth);
    c.getContext('2d').drawImage(v,0,0,c.width,c.height);
    return {width:v.videoWidth,height:v.videoHeight,duration:v.duration,poster:c.toDataURL('image/jpeg',.86)};
  });
  fs.writeFileSync('public/LED-Display/hero_video/led-display-poster.jpg', Buffer.from(result.poster.split(',')[1], 'base64'));
  console.log({width:result.width,height:result.height,duration:result.duration});
  await browser.close();
})();

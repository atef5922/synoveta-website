const { chromium } = require('C:/Users/PC/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs = require('fs');
const assert = require('assert');
(async () => {
 const browser = await chromium.launch({channel:'chrome',headless:true});
 fs.mkdirSync('.dbg/led-responsive',{recursive:true});
 for (const [width,height] of [[320,740],[390,844],[600,960],[768,1024],[900,900],[1024,768],[1100,800],[1120,800],[1366,630],[1440,900],[1800,840],[1920,1080],[2560,1440],[844,390]]) {
  const page = await browser.newPage({viewport:{width,height},reducedMotion:'reduce'});
  const errors=[]; page.on('pageerror',e=>errors.push(e.message));
  await page.goto('http://localhost:3001/products/led-display-solution/',{waitUntil:'networkidle'});
  await page.locator('.led-platform-room img').evaluate(i=>i.decode());
  const result=await page.evaluate(()=>{
   const bounds=e=>e.getBoundingClientRect();
   const clipped=[...document.querySelectorAll('.led-platform-copy>*')].filter(e=>{
    const r=bounds(e),p=bounds(e.closest('.led-platform'));return r.left<p.left-1||r.top<p.top-1||r.right>p.right+1||r.bottom>p.bottom+1||e.scrollWidth>e.clientWidth+1;
   }).map(e=>e.className);
   const header=document.querySelector('.nav-wrap');
   const items=[...header.children].filter(e=>getComputedStyle(e).display!=='none').map(bounds);
   return {overflow:document.documentElement.scrollWidth>innerWidth,clipped,headerOverlap:items.some((r,i)=>i&&r.left<items[i-1].right),container:Math.round(bounds(document.querySelector('.led-platforms>.container')).width),heroBottom:Math.round(bounds(document.querySelector('.led-cinema')).bottom)};
  });
  assert(!result.overflow,JSON.stringify({width,...result}));
  assert(!result.headerOverlap,'header overlap '+width);
  assert.deepEqual(result.clipped,[],'clipped copy '+width);
  assert.deepEqual(errors,[]);
  if([320,390,768,1024,1366,1800,2560].includes(width)){
   await page.screenshot({path:'.dbg/led-responsive/hero-'+width+'.jpg',type:'jpeg',quality:75});
   await page.locator('#led-series').screenshot({path:'.dbg/led-responsive/platforms-'+width+'.jpg',type:'jpeg',quality:75});
  }
  if(width<=1100){
   await page.locator('.mobile-menu summary').click();
   assert(await page.locator('.mobile-panel').isVisible());
   assert(await page.locator('.mobile-panel').evaluate(e=>e.getBoundingClientRect().bottom<=innerHeight+1));
   await page.locator('.mobile-menu summary').click();
  }
  console.log(width+'x'+height,JSON.stringify(result));
  await page.close();
 }
 await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});

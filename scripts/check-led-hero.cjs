const { chromium } = require('C:/Users/PC/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs = require('fs');
const assert = require('assert');
(async () => {
 const browser = await chromium.launch({ channel:'chrome', headless:true });
 fs.mkdirSync('.dbg/led-hero',{recursive:true});
 const errors=[];
 for(const [name,width,height] of [['desktop',1440,900],['mobile',390,844],['small',320,740]]) {
  const page=await browser.newPage({viewport:{width,height}});
  page.on('pageerror', e=>errors.push(e.message));
  await page.goto('http://localhost:3001/products/led-display-solution/',{waitUntil:'networkidle'});
  await page.locator('.led-cinema').waitFor();
  await page.waitForFunction(()=>document.querySelector('video').readyState>=2);
  assert.equal(await page.locator('h1').count(),1);
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'horizontal overflow '+name);
  assert.equal(await page.locator('.led-cinema-footer').count(),0);
  assert.equal(await page.locator('.header').evaluate(el=>el.getBoundingClientRect().height),width>760?64:58);
  await page.locator('video').evaluate(v=>v.pause());
  assert(await page.locator('video').evaluate(v=>v.paused));
  await page.locator('video').evaluate(v=>{v.currentTime=3});
  await page.waitForTimeout(250);
  await page.screenshot({path:'.dbg/led-hero/'+name+'.jpg',type:'jpeg',quality:75});
  await page.locator('video').evaluate(v=>v.play());
  await page.waitForFunction(()=>!document.querySelector('video').paused);
  await page.getByRole('link',{name:'Explore LED displays',exact:true}).click();
  await page.waitForTimeout(900);
  assert(await page.locator('#led-series').evaluate(el=>Math.abs(el.getBoundingClientRect().top-24)<5));
  assert.equal(await page.getByRole('link',{name:'Discuss your project'}).getAttribute('href'),'/contact/');
  console.log(name+': compact header, removed footer, layout and CTA checks passed');
  await page.close();
 }
 const reduced=await browser.newPage({reducedMotion:'reduce'});
 await reduced.goto('http://localhost:3001/products/led-display-solution/',{waitUntil:'networkidle'});
 assert(await reduced.locator('video').evaluate(v=>v.paused));
 console.log('Reduced motion: autoplay disabled');
 assert.deepEqual(errors,[]);
 await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});

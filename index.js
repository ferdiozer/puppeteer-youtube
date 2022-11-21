
const  puppeteer = require('puppeteer');


const youtubeLink="https://youtu.be/XOyoLHeZAYc"

const headless = false

const intervalTimer = (1000*60*60)+(1000*60*10)


init()
setInterval(()=>{
   init()
},intervalTimer)

function init() {
   for (let index = 0; index < 5; index++) {
      start2()
   }
}
async function start2() {
   const selector = '/html/body/ytd-app/ytd-consent-bump-v2-lightbox/tp-yt-paper-dialog/div[4]/div[2]/div[6]/div[1]/ytd-button-renderer[2]/yt-button-shape/button/yt-touch-feedback-shape/div/div[2]'
   try {
      const browser = await puppeteer.launch({ 
         headless: headless
      });
      for (let index = 0; index < 5; index++) {
         const  page = await browser.newPage();
         await page.setViewport({ width: 1280, height: 800 })
         await page.goto(youtubeLink)
        
         await page.waitForXPath(selector)
         const linkEx = await page.$x(selector)
         if (linkEx.length > 0) {
            await linkEx[0].click()
          }
      }
   } catch (error) {
      console.log("error",error)
   }
}



async function start() {
   try {
      const browser = await puppeteer.launch({ 
         headless: headless
      });
      const  page = await browser.newPage();
      const  page2 = await browser.newPage();

     await page.goto(youtubeLink)
     await page2.goto(youtubeLink)
   } catch (error) {
      console.log("error",error)
   }

}


async function test(params) {
 for (let index = 0; index < 5; index++) {
  const browser = await puppeteer.launch({ 
    headless: headless
 });
 
    const  page = await browser.newPage();
    page.setViewport({
        width: 1280,
        height: 800,
        isMobile: false
    });
    page.goto(youtubeLink)

 }
    

}

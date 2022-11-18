
const  puppeteer = require('puppeteer');


const youtubeLink="https://youtu.be/XOyoLHeZAYc"

const headless = false

const intervalTimer = (1000*60*60)+(1000*60*10)

init()

setInterval(()=>{
   init()
},intervalTimer)

function init() {
   for (let index = 0; index < 20; index++) {
      start()
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

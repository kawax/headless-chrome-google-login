const puppeteer = require('puppeteer');

const config = require('./config');

//trueにすると途中段階のスクリーンショットを残す。
const screenshot = true;

//「次へ」ボタンのclass。後から変わりそう。
const next_class = 'snByac';

//ローカルでテストする場合、falseにすると動作してる様子が表示される。
const headless = false;

(async () => {

    const browser = await puppeteer.launch({headless: headless});
    const page = await browser.newPage();

    await page.goto('https://accounts.google.com/', {waitUntil: 'networkidle2'});

    if (screenshot) {
        await page.screenshot({path: 'screenshot/login.png'});
    }

    await page.type('input[name=identifier]', config.mail);
    await page.click('span.' + next_class);

    await page.waitFor(1000);

    if (screenshot) {
        await page.screenshot({path: 'screenshot/pass.png'});
    }

    await page.type('input[name=password]', config.password)
    await page.click('span.' + next_class)

    await page.waitFor(5000);

    if (screenshot) {
        await page.screenshot({path: 'screenshot/success.png'});
    }

    console.log(page.url());


    browser.close();
})();

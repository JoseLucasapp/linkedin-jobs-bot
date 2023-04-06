import puppeteer from "puppeteer";

export default async (email, password) => {
    const browser = await puppeteer.launch({
        'args': [
            '--no-sandbox',
            '--disable-setuid-sandbox'
        ],
        headless: false
    })

    const page = await browser.newPage()
    await page.goto('https://www.linkedin.com/feed/')

    await page.click('.main__sign-in-link')

    await page.type('#username', email)
    await page.type('#password', password)
    await page.click('.btn__primary--large')
}
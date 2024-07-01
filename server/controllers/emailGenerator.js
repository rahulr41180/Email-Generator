
import puppeteer from "puppeteer";
import { OpenAI } from "openai";

const scrapeLinkedIn = async (linkedInUrl) => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(linkedInUrl);

        await page.waitForNavigation({ waitUntil : "networkidle0" })


        const data = await page.evaluate(() => {
            const nameElement = document.querySelector(".top-card-layout__title");
            const titleElement = document.querySelector(".top-card-layout__headline");
            const companyElement = document.querySelector(".experience-item__subtitle");

            const name = nameElement ? nameElement.innerText.trim() : null;
            const title = titleElement ? titleElement.innerText.trim() : null;
            const company = companyElement ? companyElement.innerText.trim() : null;

            return { name, title, company };
        })

        await browser.close();
        return data;
    } catch (error) {
        console.log('error:', error.message);
    }
}


export const generateEmail = async (lead) => {
    try {
        const linkedInData = await scrapeLinkedIn(lead.linkedInUrl);

        const openAi = new OpenAI({
            apiKey: "OPENAI_API_KEY"
        })

        const prompt = `Write a professional email to ${linkedInData.name} who works at ${linkedInData.company} as a ${linkedInData.title}.`;

        const response = await openAi.completions({
            model: "gpt-3.5-turbo-instruct",
            prompt: prompt,
            max_tokens: 150
        })

        return response.data.choices[0].text;
    } catch (error) {
        console.log('error:', error.message);
    }
}
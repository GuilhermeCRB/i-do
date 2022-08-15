import { customsearch } from "googleapis/build/src/apis/customsearch/index.js";
import { stripHtml } from "string-strip-html";
import dotenv from "dotenv";

dotenv.config();

async function googleSearch(place: any, q: any, start: any) {
    const { sanitizedPlace, sanitizedQ, sanitizedStart } = sanitizePath(place, q, start);
    const credential = createCredentials(sanitizedPlace, sanitizedQ, sanitizedStart);
    const response = await customsearch("v1").cse.list(credential);
    return formatResponse(response.data);
}

function sanitizePath(place: string, q: string, start: string) {
    let sanitizedQ = "";
    let sanitizedPlace = "";

    if(q){
        sanitizedQ = stripHtml(q).result
    }

    if(place){
        sanitizedPlace = stripHtml(place).result
    }

    return {
        sanitizedPlace,
        sanitizedQ,
        sanitizedStart: stripHtml(start).result
    }
}

function createCredentials(place: string, q: string, sanitizedStart: string) {
    const searchAmount = 10;

    return {
        auth: process.env.GOOGLE_CLOUD_KEY,
        cx: process.env.SEARCH_ENGINE_ID,
        q: `casamento ${place} ${q}`,
        num: searchAmount,
        start: parseInt(sanitizedStart)
    }
}

function formatResponse(response: any) {
    const results = response.items;
    const data = results.map(result => {
        let image = "";

        if(result.pagemap.cse_thumbnail){
            image = result.pagemap.cse_thumbnail[0].src;
        }

        return {
            title: result.title,
            link: result.link,
            displayLink: result.displayLink,
            snippet: result.snippet,
            image
        }
    });

    return {
        resultsAmount: response.searchInformation.formattedTotalResults,
        data
    }
}

const suppliersService = {
    googleSearch
};

export default suppliersService;
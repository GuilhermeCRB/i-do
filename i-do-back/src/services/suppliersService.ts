import { customsearch } from "googleapis/build/src/apis/customsearch/index.js";
import dotenv from "dotenv";

dotenv.config();

async function googleSearch(filter: string, q: any) {
    const credential = createCredentials(filter, q);
    const response = await customsearch("v1").cse.list(credential);
    return formatResponse(response.data);
}

function createCredentials(filter: string, q: string){
    const searchAmount = 10;

    return{
        auth: process.env.GOOGLE_CLOUD_KEY,
        cx: process.env.SEARCH_ENGINE_ID,
        q: "casamento" + filter + q,
        num: searchAmount
    }
}

function formatResponse(response: any){
    const results = response.items;
    const data = results.map(result => {
        return {
            title: result.title,
            link: result.link,
            displayLink: result.displayLink,
            snippet: result.snippet,
            image: result.pagemap.cse_thumbnail[0].src
        }
    });

    return{
        resultsAmount: response.searchInformation.formattedTotalResults,
        data
    }
}

const suppliersService = {
    googleSearch
};

export default suppliersService;
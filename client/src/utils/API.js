import axios from "axios";

export default {
    articleSearch: (params) => {
        const apiKey = "297e0813c14744f492ff37e0c8db8a3e";
        const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${apiKey}`
        return axios.get(url).then(response => response)
    }
}
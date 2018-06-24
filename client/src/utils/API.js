import axios from "axios";

export default {
    articleSearch: (params) => {
        const apiKey = "297e0813c14744f492ff37e0c8db8a3e";
        const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${apiKey}&q=${params.q}`
        return axios.get(url).then((response) => {
            const respArticles = response.data.response.docs;
            const articles = [];
            respArticles.forEach(element => {
                const node = {}
                node["url"] = element.web_url;
                node["title"] = element.headline.main;
                node["articleID"] = element._id;
                articles.push(node);
            })
            return articles;
        })
    }
}
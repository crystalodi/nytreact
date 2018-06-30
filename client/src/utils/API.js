import axios from "axios";

export default {
    articleSearch: (params) => {
        const apiKey = "297e0813c14744f492ff37e0c8db8a3e";
        const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${apiKey}&q=${params.q}&begin_date=${params.begin_date}&end_date=${params.end_date}`
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
    },
    saveArticle: (params) => {
        return axios.post("/api/articles", params);
    },
    getArticles: () => {
        return axios.get("/api/articles");
    },
    deleteArticle: (id) => {
        return axios.delete("/api/articles/" + id);
    },
    getArticle: (id) => {
        return axios.get("/api/articles/" + id)
    }
}
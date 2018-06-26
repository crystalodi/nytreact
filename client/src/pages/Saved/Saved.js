import React, {Component} from "react";
import Row from "../../components/Row";
import Column from "../../components/Column";
import API from "../../utils/API";
import Results from "../../components/Results";

class Saved extends Component {
    state = {
        articles: []
    }
    loadArticles = () => {
        API.getArticles()
        .then(response => this.setState({
            articles: response.data
        }))
        .catch(err => console.log(err))
    }
    deleteFromSaved = (articleID) => {
        API.deleteArticle(articleID)
        .then(response => this.loadArticles())
        .catch(err => console.log(err))
    }
    componentDidMount() {
        this.loadArticles();
    }
    render() {
        return (
           <React.Fragment>
            {this.state.articles.length ? (
                <Row className="row">
                    <Column size="col-md-12">  
                        {this.state.articles.map((article, index) => (
                            <Results key={index} index={index + 1} title={article.title} clickHandler={this.deleteFromSaved} articleID={article._id} linktitle="Remove Article From Saved" iconToShow="glyphicon glyphicon-remove saveicon pull-right"/>
                        ))}
                    </Column>
                </Row>
            ): (
                <div></div>
            )}
            </React.Fragment>
        )
    }
}

export default Saved;
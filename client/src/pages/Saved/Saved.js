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
        API.getArticles().then(response => this.setState({
            articles: response.data
        }, () => console.log(this.state)))
    }
    componentDidMount() {
        this.loadArticles();
    }
    render() {
        return (
           <React.Fragment>
               <Row>
                
                </Row>
            </React.Fragment>
        )
    }
}

export default Saved;
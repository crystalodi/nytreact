import React, {Component} from "react";
import Row from "../../components/Row";
import Column from "../../components/Column";
import {Button, Input, Label, FormGroup} from "../../components/Form";
import API from "../../utils/API";
import Results from "../../components/Results";
class Home extends Component {
    state = {
        searchTerm: "",
        startYear: "",
        endYear: "",
        articles: []
    }
    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        }, ()=> console.log(this.state))
    }
    handleFormSubmit = event => {
        event.preventDefault();
        console.log("about to search")
        const params = {
            q: this.state.searchTerm
        }
        API.articleSearch(params)
        .then(response=>this.setState({
            articles: response
        }))
        .catch(err => console.log(err));
    }
    findArticle = articleID => {
        const articleToSave = this.state.articles[this.state.articles.findIndex(article => articleID === article.articleID)]
        API.getArticle(articleID)
        .then(response=> {
            if(!response.data.length) {
                this.saveArticle(articleToSave)
            } else {
                console.log("article already in the database")
            }
        })
        .catch(err=> console.log(err))
    }
    saveArticle = articleToSave => {
        API.saveArticle(articleToSave)
        .then(response=> console.log(response.data))
        .catch(err => console.log(err))
    }
    render() {
        return (
            <React.Fragment>
            <Row className="row">
                <Column size="col-md-12">
                    <form>
                        <FormGroup>
                            <Label htmlFor="searchTerm">Search Term</Label>
                            <Input type="text" onChange={this.handleInputChange} placeholder="Search Term" id="searchTerm" name="searchTerm"/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="startYear">Start Year (Optional)</Label>
                            <Input type="text" onChange={this.handleInputChange} id="startYear" name="startYear" placeholder="Start Year"/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="endYear">End Year (Optional)</Label>
                            <Input type="text" onChange={this.handleInputChange} id="endYear" name="endYear" placeholder="End Year"/>
                        </FormGroup>
                        <Button onClick={this.handleFormSubmit} className="btn btn-primary">Submit</Button>
                    </form>
                </Column>
            </Row>
            {this.state.articles.length ? (
                <Row className="row">
                    <Column size="col-md-12">  
                        {this.state.articles.map((article, index) => (
                            <Results key={index} index={index + 1} title={article.title} clickHandler={this.findArticle} articleID={article.articleID} linktitle="Save Article" iconToShow="glyphicon glyphicon-save saveicon pull-right"/>
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

export default Home;
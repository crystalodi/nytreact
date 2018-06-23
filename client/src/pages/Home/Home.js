import React, {Component} from "react";
import Row from "../../components/Row";
import Column from "../../components/Column";
import Card from "../../components/Card"
import {Button, Input, Label, FormGroup} from "../../components/Form";
class Home extends Component {
    state = {
        searchTerm: "",
        numberToRetrieve: "",
        startYear: "",
        endYear: "",
        articles: []
    }
    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <Row>
                <Column size="col-md-12">
                    <Card cardtitle="Search">
                        <form>
                            <FormGroup>
                                <Label htmlFor="searchTerm">Search Term</Label>
                                <Input type="text" onChange={this.handleInputChange} placeholder="Search Term" id="searchTerm"/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="numResults">Number of Results</Label>
                                <Input type="number" onChange={this.handleInputChange} id="numResults"/>
                            </FormGroup>
                        </form>
                    </Card>
                </Column>
            </Row> 
        )
    }
}

export default Home;
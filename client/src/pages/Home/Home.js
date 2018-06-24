import React, {Component} from "react";
import Row from "../../components/Row";
import Column from "../../components/Column";
import Card from "../../components/Card"
import {Button, Input, Label, FormGroup} from "../../components/Form";
class Home extends Component {
    state = {
        searchTerm: "",
        numResults: "",
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
    }
    render() {
        return (
            <Row>
                <Column size="col-md-12">
                    <Card cardtitle="Search">
                        <form>
                            <FormGroup>
                                <Label htmlFor="searchTerm">Search Term</Label>
                                <Input type="text" onChange={this.handleInputChange} placeholder="Search Term" id="searchTerm" name="searchTerm"/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="numResults">Number of Results</Label>
                                <Input type="number" onChange={this.handleInputChange} id="numResults" name="numResults"/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="startYear">Start Year (Optional)</Label>
                                <Input type="text" onChange={this.handleInputChange} id="startYear" name="startYear"/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="endYear">End Year (Optional)</Label>
                                <Input type="text" onChange={this.handleInputChange} id="endYear" name="endYear"/>
                            </FormGroup>
                            <Button onClick={this.handleFormSubmit} className="btn btn-primary">Submit</Button>
                        </form>
                    </Card>
                </Column>
            </Row> 
        )
    }
}

export default Home;
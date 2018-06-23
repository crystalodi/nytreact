import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import Container from "./components/Container";
import Home from "./pages/Home"
class App extends Component {
  render() {
    return (
      <Container>
        <Jumbotron/>
        <Home/>
      </Container>
    );
  }
}

export default App;

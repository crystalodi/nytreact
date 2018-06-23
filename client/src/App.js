import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import Container from "./components/Container";
class App extends Component {
  render() {
    return (
      <Container>
        <Jumbotron/>
      </Container>
    );
  }
}

export default App;

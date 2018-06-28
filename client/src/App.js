import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import Container from "./components/Container";
import Home from "./pages/Home"
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
class App extends Component {
  render() {
    return (
      <Router>
      <Container>
        <Jumbotron />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/articles" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </Router>
    );
  }
}

export default App;

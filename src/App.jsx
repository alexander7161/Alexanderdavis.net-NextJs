import React, { Component } from "react";
import AppBar from "./components/AppBar";
import BottomNavigation from "./components/BottomNavigation";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import { history } from "./configureStore";

class App extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div className="App">
          <AppBar />
          <div style={{ marginTop: "100px" }}>
            <Route exact path="/" component={Projects} />
            <Route exact path="/resume" component={Resume} />
          </div>
          <BottomNavigation />
        </div>
      </ConnectedRouter>
    );
  }
}

export default App;

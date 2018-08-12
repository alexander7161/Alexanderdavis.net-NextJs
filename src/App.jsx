import React, { Component } from "react";
import AppBar from "./components/AppBar";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SwipeableRoutes from "react-swipeable-routes";
import CssBaseline from "@material-ui/core/CssBaseline";
import BottomTabs from "./components/BottomTabs";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <CssBaseline />
          <AppBar />
          <div>
            <SwipeableRoutes>
              <Route exact path="/" component={Projects} />
              <Route exact path="/resume" component={Resume} />
            </SwipeableRoutes>
          </div>
          <BottomTabs />
        </div>
      </Router>
    );
  }
}

export default App;

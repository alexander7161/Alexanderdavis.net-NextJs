import React, { Component } from "react";
import AppBar from "./components/AppBar";
import Projects from "./components/projects/index";
import Resume from "./components/Resume";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SwipeableRoutes from "react-swipeable-routes";
import CssBaseline from "@material-ui/core/CssBaseline";
import BottomTabs from "./components/BottomTabs";
import { updateGithubUpdated } from "./components/projects/store/actions";
import { connect } from "react-redux";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#39D1FF",
      light: "#60daff",
      dark: "#2792b2",
      contrastText: "#0E3440"
    },
    secondary: {
      main: "#007bff",
      light: "#3395ff",
      dark: "#0056b2"
    }
  }
});

class App extends Component {
  componentDidMount() {
    this.props.dispatch(updateGithubUpdated());
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div>
            <CssBaseline />
            <AppBar />
            <div style={{ marginBottom: 75 }}>
              <SwipeableRoutes>
                <Route path="/" render={() => <Projects key="projects" />} />
                <Route
                  exact
                  path="/resume"
                  render={() => <Resume key="resume" />}
                />
              </SwipeableRoutes>
            </div>
            <BottomTabs />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default connect()(App);

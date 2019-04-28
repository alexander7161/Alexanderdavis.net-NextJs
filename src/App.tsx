// tslint:disable-next-line: no-submodule-imports
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import React, { Component } from "react";
import { connect, DispatchProp } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SwipeableRoutes from "react-swipeable-routes";
import { ThemeProvider } from "styled-components";
import AppBar from "./components/AppBar";
import BottomTabs from "./components/BottomTabs";
import Projects from "./components/projects/index";
import { updateGithubUpdated } from "./components/projects/store/actions";
import Resume from "./components/Resume";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#39D1FF",
            light: "#60daff",
            dark: "#2792b2",
            contrastText: "#0E3440",
        },
        secondary: {
            main: "#007bff",
            light: "#3395ff",
            dark: "#0056b2",
        },
    },
});

class App extends Component<DispatchProp<any>> {
    public componentDidMount() {
        this.props.dispatch(updateGithubUpdated());
    }

    public render() {
        return (
            <MuiThemeProvider theme={theme}>
                <ThemeProvider theme={theme}>
                    <Router>
                        <React.Fragment>
                            <AppBar />
                            <SwipeableRoutes
                                style={{
                                    WebkitOverflowScrolling: "touch", // iOS momentum scrolling
                                }}
                            >
                                <Route path="/" component={Projects} />
                                <Route exact={true} path="/resume" component={Resume} />
                            </SwipeableRoutes>
                            <BottomTabs />
                        </React.Fragment>
                    </Router>
                </ThemeProvider>
            </MuiThemeProvider>
        );
    }
}

export default connect()(App);
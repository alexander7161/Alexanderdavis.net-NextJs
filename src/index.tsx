import { CssBaseline } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";
import { Provider } from "react-redux";
import "typeface-roboto";
import App from "./App";
import store from "./configureStore";
import registerServiceWorker from "./registerServiceWorker";

ReactGA.initialize("UA-44297367-1");

ReactDOM.render(
    <Provider store={store}>
        <React.Fragment>
            <CssBaseline />
            <App />
        </React.Fragment>
    </Provider>,
    document.getElementById("root"),
);

registerServiceWorker();

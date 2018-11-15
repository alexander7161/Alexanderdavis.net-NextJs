import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import store from "./configureStore";
import "typeface-roboto";
import CssBaseline from "@material-ui/core/CssBaseline";
import ReactGA from "react-ga";
ReactGA.initialize("UA-44297367-1");
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <Provider store={store}>
    <React.Fragment>
      <CssBaseline />

      <App />
    </React.Fragment>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

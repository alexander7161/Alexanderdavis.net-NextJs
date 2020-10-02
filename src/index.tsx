import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";
import { Provider } from "react-redux";
import { Router } from "react-router";
import { createBrowserHistory } from "history";

import "typeface-roboto";

import ThemeProvider from "./Providers/ThemeProvider";
import store from "./configureStore";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";

ReactGA.initialize("UA-44297367-1");

const history = createBrowserHistory();

ReactDOM.render(
	<Router history={history}>
		<Provider store={store}>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</Provider>
	</Router>,
	document.getElementById("root")
);

// serviceWorker.register();

import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "typeface-roboto";
import App from "./App";
import store from "./configureStore";
import ThemeProvider from "./Providers/ThemeProvider"
// import * as serviceWorker from "./serviceWorker";

ReactGA.initialize("UA-44297367-1");

ReactDOM.render(
	<Router>
		<Provider store={store}>
			<ThemeProvider>
					<App />
			</ThemeProvider>
		</Provider>
	</Router>,
	document.getElementById("root")
);

// serviceWorker.register();

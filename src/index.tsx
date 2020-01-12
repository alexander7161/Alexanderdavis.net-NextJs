import {
	createMuiTheme,
	CssBaseline,
	MuiThemeProvider
} from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "typeface-roboto";
import App from "./App";
import store from "./configureStore";
import * as serviceWorker from "./serviceWorker";

ReactGA.initialize("UA-44297367-1");

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

ReactDOM.render(
	<Router>
		<Provider store={store}>
			<CssBaseline />
			<MuiThemeProvider theme={theme}>
				<ThemeProvider theme={theme}>
					<Router>
						<App />
					</Router>
				</ThemeProvider>
			</MuiThemeProvider>
		</Provider>
	</Router>,
	document.getElementById("root")
);

serviceWorker.register();

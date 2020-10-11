import React, { ReactNode } from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import {
	createMuiTheme,
	CssBaseline,
	MuiThemeProvider,
} from "@material-ui/core";

export const theme = createMuiTheme({
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

const ThemeProvider = ({ children }: { children: ReactNode }) => {
	React.useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	return (
		<MuiThemeProvider theme={theme}>
			<SCThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</SCThemeProvider>
		</MuiThemeProvider>
	);
};

export default ThemeProvider;

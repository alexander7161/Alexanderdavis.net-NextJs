import React, { FC } from "react";
import { AppProps } from "next/app";
import { wrapper } from "../store";
import { useDispatch } from "react-redux";
import ThemeProvider from "../Providers/ThemeProvider";

import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

import {
	faAndroid,
	faChrome,
	faGithub,
	faJava,
	faLastfm,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

library.add(faLinkedin, faLastfm, faGithub, faJava, faAndroid, faChrome);

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {
	const dispatch = useDispatch();
	return (
		<ThemeProvider>
			<Component {...pageProps} dispatch={dispatch} />
		</ThemeProvider>
	);
};

export default wrapper.withRedux(WrappedApp);

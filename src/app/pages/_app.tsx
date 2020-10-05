import React, { FC } from "react";
import { AppProps } from "next/app";
import { wrapper } from "../store";
import { useDispatch } from "react-redux";
import ThemeProvider from "../Providers/ThemeProvider";

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {
	const dispatch = useDispatch();
	return (
		<ThemeProvider>
			<Component {...pageProps} dispatch={dispatch} />
		</ThemeProvider>
	);
};

export default wrapper.withRedux(WrappedApp);

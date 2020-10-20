import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
} from "next/document";
import React from "react";
import { ServerStyleSheet } from "styled-components";
import { ServerStyleSheets } from "@material-ui/styles";
import Manifest from "next-manifest/manifest";
import { theme } from "../Providers/ThemeProvider";

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const styledComponentsSheet = new ServerStyleSheet();
		const materialSheets = new ServerStyleSheets();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						styledComponentsSheet.collectStyles(
							materialSheets.collect(<App {...props} />)
						),
				});
			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<React.Fragment>
						{initialProps.styles}
						{materialSheets.getStyleElement()}
						{styledComponentsSheet.getStyleElement()}
					</React.Fragment>
				),
			};
		} finally {
			styledComponentsSheet.seal();
		}
	}

	render() {
		return (
			<Html>
				<Head>
					<link rel="shortcut icon" href={require("../public/icon.png")} />
					<meta name="theme-color" content={theme.palette.primary.dark} />
					<Manifest href="../manifest.json" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

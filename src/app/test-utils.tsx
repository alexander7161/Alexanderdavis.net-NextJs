import React, { ReactNode } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import { Router } from "react-router";
import { makeStore } from "./store";
import ThemeProvider from "./Providers/ThemeProvider";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const AllTheProviders = ({ children }: { children?: ReactNode }) => {
	return (
		<Router history={history}>
			<Provider store={makeStore({})}>
				<ThemeProvider>{children}</ThemeProvider>
			</Provider>
		</Router>
	);
};

const customRender = (
	ui: React.ReactElement,
	options?: Omit<RenderOptions, "queries">
) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };

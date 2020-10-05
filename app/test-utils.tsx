import React, { ReactNode } from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { Router } from "react-router";
import store from "./configureStore";
import ThemeProvider from "./Providers/ThemeProvider";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const AllTheProviders = ({ children }: { children: ReactNode }) => {
	return (
		<Router history={history}>
			<Provider store={store}>
				<ThemeProvider>{children}</ThemeProvider>
			</Provider>
		</Router>
	);
};

const customRender = (ui: any, options?: any) =>
	render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };

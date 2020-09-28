import React, { ReactNode } from 'react'
import { render } from '@testing-library/react'
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./configureStore";
import ThemeProvider from "./Providers/ThemeProvider"

const AllTheProviders = ({ children } : {children:ReactNode}) => {
  return (
    <Router>
		<Provider store={store}>
			<ThemeProvider>
        {children}
        </ThemeProvider>
		</Provider>
	</Router>
  )
}

const customRender = (ui, options?) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
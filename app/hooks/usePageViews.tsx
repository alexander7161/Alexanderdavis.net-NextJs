import React from "react";
import ReactGA from "react-ga";
import { useLocation } from "react-router";

export const usePageViews = () => {
	const location = useLocation();

	const recordPageView = (page: string) => ReactGA.pageview(page);

	React.useEffect(() => {
		recordPageView(location.pathname);
	}, [location]);
};

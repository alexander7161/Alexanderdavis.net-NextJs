import React from "react";
import ReactGA from "react-ga";
import { useLocation } from "react-router-dom";

export const usePageViews = () => {
	const location = useLocation();

	const recordPageView = (page: string) => ReactGA.pageview(page);

	React.useEffect(() => {
		recordPageView(location.pathname);
	}, [location]);
};

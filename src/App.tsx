// tslint:disable-next-line: no-submodule-imports
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faAndroid,
	faChrome,
	faGithub,
	faJava,
	faLastfm,
	faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import ReactGA from "react-ga";
import { useDispatch } from "react-redux";
import { Route, useLocation } from "react-router-dom";
import SwipeableRoutes from "react-swipeable-routes";
import styled from "styled-components";
import AppBar from "./components/AppBar";
import BottomTabs from "./components/BottomTabs";
import Projects from "./pages/projects";
import { updateGithubUpdated } from "./pages/projects/store/actions";
import Resume from "./pages/Resume";

library.add(faLinkedin, faLastfm, faGithub, faJava, faAndroid, faChrome);

const Container = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
`;

const usePageViews = () => {
	const location = useLocation();

	const recordPageView = (page: string) => ReactGA.pageview(page);

	React.useEffect(() => {
		recordPageView(location.pathname);
	}, [location]);
};

const App = () => {
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(updateGithubUpdated());
	}, [dispatch]);

	usePageViews();

	return (
		<Container>
			<AppBar />
			<SwipeableRoutes
				style={{
					WebkitOverflowScrolling: "touch", // iOS momentum scrolling
					overflowY: "hidden"
				}}
			>
				<Route path="/" component={Projects} />
				<Route exact={true} path="/resume" component={Resume} />
			</SwipeableRoutes>
			<BottomTabs />
		</Container>
	);
};

export default App;

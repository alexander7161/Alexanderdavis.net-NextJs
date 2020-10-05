// tslint:disable-next-line: no-submodule-imports
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faAndroid,
	faChrome,
	faGithub,
	faJava,
	faLastfm,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { Route } from "react-router";
import SwipeableRoutes from "react-swipeable-routes";
import AppBar from "./components/AppBar";
import BottomTabs from "./components/BottomTabs";
import Projects from "./pages/projects";
import Resume from "./pages/Resume";
import { usePageViews } from "./hooks/usePageViews";
import { Container } from "./styles";

library.add(faLinkedin, faLastfm, faGithub, faJava, faAndroid, faChrome);

const App = () => {
	usePageViews();
	return (
		<Container>
			<AppBar />
			<SwipeableRoutes
				style={{
					WebkitOverflowScrolling: "touch", // iOS momentum scrolling
					overflowY: "hidden",
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

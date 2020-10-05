import React from "react";
import { NextPage } from "next";
import AppBar from "../components/AppBar";
import Container from "../components/Container";
import { Route } from "react-router";
import BottomTabs from "../components/BottomTabs";
import SwipeableRoutes from "react-swipeable-routes";
import Projects from "../components/projects";
import Resume from "../components/Resume";

const Index: NextPage = () => {
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

export default Index;

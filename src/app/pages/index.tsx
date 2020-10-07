import React from "react";
import { NextPage } from "next";
import Projects from "../components/projects";
import SwipeableViews from "react-swipeable-views";
import Resume from "../components/Resume";
import Container from "../components/Container";
import AppBar from "../components/AppBar";
import BottomTabs from "../components/BottomTabs";
import { useRouter } from "next/router";

const Index: NextPage = () => {
	const router = useRouter();

	return (
		<Container>
			<AppBar />
			<SwipeableViews
				index={Number(router.query.page)}
				onChangeIndex={(i) => router.replace(`/?page=${i}`, "/")}
			>
				<Projects />
				<Resume />
			</SwipeableViews>
			<BottomTabs />
		</Container>
	);
};

export default Index;

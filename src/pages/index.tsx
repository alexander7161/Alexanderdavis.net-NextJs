import React, { useEffect } from "react";
import { NextPage } from "next";
import Head from "next/head";
import ReactGA from "react-ga";

import Projects from "../components/projects";
import SwipeableViews from "react-swipeable-views";
import Resume from "../components/Resume";
import Container from "../components/Container";
import AppBar from "../components/AppBar";
import BottomTabs from "../components/BottomTabs";
import { wrapper } from "../store";
import { updateGithubUpdated } from "../store/projects/actions";
import usePageIndex from "../hooks/usePageIndex";

const Index: NextPage = () => {
	const {
		current: { index, name },
		next: { replace },
	} = usePageIndex();

	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, [index]);

	return (
		<>
			<Head>
				<title>Alexander Davis | {name}</title>
			</Head>
			<Container>
				<AppBar />
				<SwipeableViews index={index} onChangeIndex={replace}>
					<Projects />
					<Resume />
				</SwipeableViews>
				<BottomTabs />
			</Container>
		</>
	);
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
	store.dispatch(updateGithubUpdated());
});

export default Index;

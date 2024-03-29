import React from "react";
import { NextPage } from "next";
import Head from "next/head";

import Projects from "../modules/projects";
import SwipeableViews from "react-swipeable-views";
import Resume from "../modules/Resume";
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

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
	store.dispatch(updateGithubUpdated());
	return { props: {} };
});

export default Index;

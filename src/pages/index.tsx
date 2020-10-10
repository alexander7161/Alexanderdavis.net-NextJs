import React from "react";
import { NextPage } from "next";
import Projects from "../components/projects";
import SwipeableViews from "react-swipeable-views";
import Resume from "../components/Resume";
import Container from "../components/Container";
import AppBar from "../components/AppBar";
import BottomTabs from "../components/BottomTabs";
import { useRouter } from "next/router";
import { wrapper } from "../store";
import { updateGithubUpdated } from "../store/projects/actions";

const Index: NextPage = () => {
	const router = useRouter();

	return (
		<Container>
			<AppBar />
			<SwipeableViews
				index={Number(router.query.page ?? 0)}
				onChangeIndex={(i) =>
					router.replace(`/?page=${i}`, i === 0 ? "/" : "/resume")
				}
			>
				<Projects />
				<Resume />
			</SwipeableViews>
			<BottomTabs />
		</Container>
	);
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
	store.dispatch(updateGithubUpdated());
});

export default Index;

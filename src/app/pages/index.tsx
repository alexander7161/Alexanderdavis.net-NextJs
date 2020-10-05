import React from "react";
import { NextPage } from "next";
import AppBar from "../components/AppBar";
import Container from "../components/Container";
// import BottomTabs from "../components/BottomTabs";
import Projects from "../components/projects";

const Index: NextPage = () => {
	return (
		<Container>
			<AppBar />
			<Projects />
			{/* <BottomTabs /> */}
		</Container>
	);
};

export default Index;

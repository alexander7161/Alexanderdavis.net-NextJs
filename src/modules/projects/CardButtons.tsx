import Button from "./Button";
import React from "react";
import styled from "styled-components";
import { withStyles } from "@material-ui/core";

const StyledButton = withStyles({
	root: {
		marginBottom: 20,
	},
})(Button);

const Container = styled.div`
	margin: 0px 4px;
	display: flex;
	@media (max-width: 1279.95px) {
		display: block;
	}
	:last-child {
		margin-bottom: 0;
	}
`;

const CardButtons = ({ project }: { project: Project }) => {
	const { title, githubURL, siteURL, downloadURL, languages } = project;
	return (
		<Container>
			{githubURL && (
				<StyledButton
					text="CHECK IT OUT"
					name="github"
					URL={githubURL}
					eventLabel={title + " github"}
				/>
			)}
			{siteURL && (
				<StyledButton
					text="VISIT SITE"
					name="chrome"
					URL={siteURL}
					eventLabel={title + " Website"}
				/>
			)}
			{downloadURL && (
				<StyledButton
					text="DOWNLOAD"
					name={languages === "Android" ? "android" : "download"}
					URL={downloadURL}
					eventLabel={title + " download"}
				/>
			)}
		</Container>
	);
};

export default CardButtons;

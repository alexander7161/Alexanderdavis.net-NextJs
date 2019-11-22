import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
	display: flex;
	@media (max-width: 1279.95px) {
		display: block;
	}
`;

export default ({ project }: { project: Project }) => {
	const { title, githubURL, siteURL, downloadURL, languages } = project;
	return (
		<Container>
			{githubURL && (
				<Button
					text="CHECK IT OUT"
					name="github"
					URL={githubURL}
					eventLabel={title + " github"}
				/>
			)}
			{siteURL && (
				<Button
					text="VISIT SITE"
					name="chrome"
					URL={siteURL}
					eventLabel={title + " Website"}
				/>
			)}
			{downloadURL && (
				<Button
					text="DOWNLOAD"
					name={languages === "Android" ? "android" : "download"}
					URL={downloadURL}
					eventLabel={title + " download"}
				/>
			)}
		</Container>
	);
};

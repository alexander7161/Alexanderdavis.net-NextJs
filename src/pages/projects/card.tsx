import { Card, CardActions, CardContent, Typography } from "@material-ui/core";
import React from "react";
import Image from "react-image-webp";
import styled from "styled-components";
import CardButtons from "./CardButtons";

const CardContainer = styled(Card)`
	&& {
		height: 100%;
		position: relative;
		@media (min-width: 960px) {
			padding-bottom: 100px;
		}
		@media (max-width: 959.95px) {
			padding-bottom: 130px;
			margin-left: 8px;
			margin-right: 8px;
		}
	}
`;

const StyledImage = styled(Image)`
	&& {
		height: auto;
		width: 100%;
		display: block;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}
`;

const StyledCardActions = styled(CardActions)`
	&& {
		padding: 0px 4px 4px 0px;
		position: absolute;
		bottom: 0;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.03);
		border-top: 1px solid rgba(0, 0, 0, 0.125);
		display: block;
	}
`;

const LastUpdatedText = styled(Typography)`
	color: #777;
	padding-bottom: 4px;
	padding-left: 4px;
`;

export default ({ project }: { project: Project }) => {
	const {
		title,
		img,
		description,
		lastUpdated,
		dateCreated,
		lastUpdatedString,
	} = project;
	return (
		<CardContainer>
			<StyledImage
				alt={title}
				title={title}
				src={require(`./img/${img}.png`)}
				webp={require(`./img/${img}.webp`)}
			/>
			<CardContent>
				<Typography gutterBottom={true} variant="h5" component="h2">
					{title}
				</Typography>
				<Typography component="p">{description}</Typography>
			</CardContent>
			<StyledCardActions>
				<LastUpdatedText variant="body1" gutterBottom={true}>
					{lastUpdated
						? `Last Updated ${lastUpdatedString}`
						: dateCreated
						? `Created ${dateCreated}`
						: ""}
				</LastUpdatedText>
				<CardButtons project={project} />
			</StyledCardActions>
		</CardContainer>
	);
};

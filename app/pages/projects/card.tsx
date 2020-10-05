import CardContainer from "../../components/Card";
import CardButtons from "./CardButtons";
import { CardActions, CardContent, Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const Card = styled(CardContainer)`
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

const StyledImage = styled.picture`
	height: auto;
	width: 100%;
	display: block;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
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
		<Card>
			<StyledImage title={title}>
				<source srcSet={require(`/img/${img}.png?webp`)} type="image/webp" />
				<source srcSet={require(`/img/${img}.png`)} type="image/png" />
				<img src={require(`/img/${img}.png`)} />
			</StyledImage>

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
		</Card>
	);
};

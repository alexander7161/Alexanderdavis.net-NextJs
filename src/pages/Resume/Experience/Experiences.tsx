import { Grid, Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import ExperienceCard from "./ExperienceCard";
import { experienceData } from "./store/experienceData";

const Heading = styled(Typography)`
	&& {
		@media (max-width: 959.95px) {
			margin-left: 12px;
		}
	}
`;

export default () => {
	return (
		<>
			<Heading gutterBottom={true} variant="h5">
				Experience
			</Heading>
			<Grid container={true} spacing={2}>
				{experienceData
					.sort((a, b) => +b.date - +a.date)
					.map((e, i) => (
						<Grid key={i} item={true} md={6} sm={6} xs={12}>
							<ExperienceCard data={e} />
						</Grid>
					))}
			</Grid>
		</>
	);
};

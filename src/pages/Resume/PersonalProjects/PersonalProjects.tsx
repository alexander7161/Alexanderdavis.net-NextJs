import { Grid, Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import { personalProjectData } from "./store/personalProjectData";

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
				Personal Projects
			</Heading>
			<Grid container={true} spacing={2}>
				{personalProjectData
					.sort((a, b) => +b.date - +a.date)
					.map((h, i) => (
						<Grid key={i} item={true} md={6} sm={6} xs={12}>
							<ProjectCard data={h} />
						</Grid>
					))}
			</Grid>
		</>
	);
};

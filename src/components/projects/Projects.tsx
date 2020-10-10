import { Grid } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import ContainerDiv from "../ContainerDiv";
import Card from "./Card";
import { getProjectsWithLastUpdated } from "../../store/projects/selectors";

const Projects = () => {
	const projects = useSelector(getProjectsWithLastUpdated);

	return (
		<ContainerDiv>
			<Grid container={true} spacing={2}>
				{projects.map((t, i) => (
					<Grid key={i} item={true} md={4} sm={6} xs={12}>
						<Card project={t} />
					</Grid>
				))}
			</Grid>
		</ContainerDiv>
	);
};

export default Projects;

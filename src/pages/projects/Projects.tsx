import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ContainerDiv from "../../components/ContainerDiv";
import Card from "./card";
import { getProjectsWithLastUpdated } from "./store/selectors";
import { updateGithubUpdated } from "./store/actions";

const Projects = () => {
	const dispatch = useDispatch();
	const projects = useSelector(getProjectsWithLastUpdated);

	useEffect(() => {
		dispatch(updateGithubUpdated());
	}, [dispatch]);

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

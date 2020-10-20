import { Grid, Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import HackathonCard from "./HackathonCard";
import { hackathonData } from "./store/hackathonData";

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
				Hackathons ({hackathonData.length} Total)
			</Heading>
			<Grid container={true} spacing={2}>
				{hackathonData
					.sort((a: Hackathon, b: Hackathon) => +b.date - +a.date)
					.map((h, i) => (
						<Grid key={i} item={true} md={6} sm={6} xs={12}>
							<HackathonCard hackathon={h} />
						</Grid>
					))}
			</Grid>
		</>
	);
};

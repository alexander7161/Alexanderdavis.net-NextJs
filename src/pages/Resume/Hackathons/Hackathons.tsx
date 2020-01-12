import { Grid, Typography } from "@material-ui/core";
import React from "react";
import HackathonCard from "./HackathonCard";
import { hackathonData } from "./store/hackathonData";

export default () => {
	return (
		<Grid container={true} spacing={2}>
			{hackathonData.map((h, i) => (
				<Grid key={i} item={true} md={4} sm={6} xs={12}>
					<HackathonCard hackathon={h} />
				</Grid>
			))}
		</Grid>
	);
};

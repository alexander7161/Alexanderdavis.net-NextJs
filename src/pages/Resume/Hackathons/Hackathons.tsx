import { Typography } from "@material-ui/core";
import React from "react";
import { hackathonData } from "./store/hackathonData";

export default () => {
	return (
		<>
			<Typography variant="h6" color="inherit">
				Hackathons
			</Typography>
			{hackathonData.map((h, i) => (
				<div key={i}>{h.name}</div>
			))}
		</>
	);
};

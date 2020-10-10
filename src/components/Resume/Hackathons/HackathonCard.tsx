import { CardContent, Typography } from "@material-ui/core";
import React from "react";
import Card from "../../Card";

const HackathonCard = ({ hackathon: h }: { hackathon: Hackathon }) => {
	return (
		<Card>
			<CardContent>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "flex-start",
					}}
				>
					<Typography gutterBottom={true} variant="h5" component="h2">
						{h.name}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{h.date.toLocaleDateString()}
					</Typography>
				</div>
				<Typography variant="body2" color="textSecondary" component="p">
					{h.location.city}, {h.location.country}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default HackathonCard;

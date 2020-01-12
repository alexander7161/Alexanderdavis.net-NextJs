import { CardContent, Typography } from "@material-ui/core";
import React from "react";
import Card from "../../../components/Card";

const ExperienceCard = ({ data: d }: { data: Experience }) => {
	return (
		<Card>
			<CardContent>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "flex-start"
					}}
				>
					<Typography gutterBottom={true} variant="h5" component="h2">
						{d.name}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{d.date.toLocaleDateString()}
					</Typography>
				</div>
				<Typography variant="body2" color="textSecondary" component="p">
					{d.location.city}, {d.location.country}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default ExperienceCard;

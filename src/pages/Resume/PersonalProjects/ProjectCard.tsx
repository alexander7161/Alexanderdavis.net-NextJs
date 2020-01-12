import { CardContent, Typography } from "@material-ui/core";
import React from "react";
import Card from "../../../components/Card";

const HackathonCard = ({ data: d }: { data: PersonalProject }) => {
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
			</CardContent>
		</Card>
	);
};

export default HackathonCard;

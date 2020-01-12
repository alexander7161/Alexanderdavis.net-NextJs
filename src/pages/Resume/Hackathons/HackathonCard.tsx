import React from "react";

const HackathonCard = ({ hackathon }: { hackathon: Hackathon }) => {
	return <div style={{ height: 200 }}>{hackathon.name}</div>;
};

export default HackathonCard;

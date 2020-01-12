import React from "react";
import ContainerDiv from "../../components/ContainerDiv";
import Experience from "./Experience";
import Hackathons from "./Hackathons";
import PersonalProjects from "./PersonalProjects";

export default () => {
	return (
		<ContainerDiv>
			<Hackathons />
			<PersonalProjects />
			<Experience />
		</ContainerDiv>
	);
};

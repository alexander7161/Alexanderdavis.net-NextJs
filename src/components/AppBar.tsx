import { IconName } from "@fortawesome/fontawesome-svg-core";
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import WhiteIcon from "./WhiteIcon";
import usePageIndex from "../hooks/usePageIndex";

const StyledA = styled.a`
	text-decoration: none;
`;

const ButtonLink = ({
	href,
	title,
	type,
}: {
	href: string;
	title: string;
	type: IconName;
}) => (
	<StyledA href={href} title={title}>
		<IconButton color="inherit">
			<WhiteIcon icon={["fab", type]} />
		</IconButton>
	</StyledA>
);

const ButtonContainer = styled.div`
	right: 16px;
	left: auto;
	position: absolute;
`;

export default () => {
	const {
		current: { name },
	} = usePageIndex();
	return (
		<AppBar position="sticky">
			<Toolbar>
				<Typography variant="h6" color="inherit" style={{ color: "white" }}>
					{name}
				</Typography>
				<ButtonContainer>
					<ButtonLink
						href="https://www.linkedin.com/in/alexander-l-davis/"
						title="LinkedIn - Alexander7161"
						type="linkedin"
					/>
					<ButtonLink
						href="https://github.com/alexander7161"
						title="GitHub - Alexander7161"
						type="github"
					/>
					<ButtonLink
						href="https://www.last.fm/user/alexander7161"
						title="LastFm - Alexander7161"
						type="lastfm"
					/>
				</ButtonContainer>
			</Toolbar>
		</AppBar>
	);
};

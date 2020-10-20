import WhiteIcon from "../../components/WhiteIcon";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { Button } from "@material-ui/core";
import React from "react";
import ReactGA from "react-ga";
import styled, { css } from "styled-components";

const buttonStyle = css`
	&& {
		text-decoration: none;
		width: 100%;
		font-size: 0.95em;
		@media (min-width: 960px) {
			margin: 1px;
		}
		@media (max-width: 959.95px) {
			margin-bottom: 4px;
			font-size: 1.2em;
		}
	}
`;

const StyledButton = styled(Button)`
	${buttonStyle}
	height: 100%;
`;

const StyledLink = styled(ReactGA.OutboundLink)`
	${buttonStyle}
`;

const Icon = styled(WhiteIcon)`
	font-size: 1.3em;
	margin-right: 4px;
	margin-bottom: auto;
	margin-top: auto;
`;

const ButtonComponent = ({
	name,
	URL,
	text,
	eventLabel,
	className,
}: {
	text: string;
	name?: IconName;
	URL: string;
	eventLabel: string;
	className?: string;
}) => (
	<StyledLink eventLabel={eventLabel} to={URL} className={className}>
		<StyledButton size="small" variant="contained" color="secondary">
			{name && <Icon icon={["fab", name]} />}
			{text}
		</StyledButton>
	</StyledLink>
);

export default ButtonComponent;

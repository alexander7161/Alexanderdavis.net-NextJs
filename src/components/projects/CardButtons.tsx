import { IconName } from "@fortawesome/fontawesome-svg-core";
import { Button } from "@material-ui/core";
import React from "react";
import ReactGA from "react-ga";
import styled, { css } from "styled-components";
import WhiteIcon from "../WhiteIcon";

const Container = styled.div`
	display: flex;
	@media (max-width: 1279.95px) {
		display: block;
	}
`;

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

const ButtonContainer = ({
    name,
    URL,
    text,
    eventLabel,
}: {
    text: string;
    name?: IconName;
    URL: string;
    eventLabel: string;
}) => (
    <StyledLink eventLabel={eventLabel} to={URL}>
        <StyledButton size="small" variant="contained" color="secondary">
            {name && <Icon icon={["fab", name]} />}
            {text}
        </StyledButton>
    </StyledLink>
);

export default ({ project }: { project: Project }) => {
    const { title, githubURL, siteURL, downloadURL, languages } = project;
    return (
        <Container>
            {githubURL && (
                <ButtonContainer
                    text="CHECK IT OUT"
                    name="github"
                    URL={githubURL}
                    eventLabel={title + " github"}
                />
            )}
            {siteURL && (
                <ButtonContainer
                    text="VISIT SITE"
                    name="chrome"
                    URL={siteURL}
                    eventLabel={title + " Website"}
                />
            )}
            {downloadURL && (
                <ButtonContainer
                    text="DOWNLOAD"
                    name={languages === "Android" ? "android" : "download"}
                    URL={downloadURL}
                    eventLabel={title + " download"}
                />
            )}
        </Container>
    );
};

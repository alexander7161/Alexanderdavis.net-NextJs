import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { withRouter } from "react-router";
import styled from "styled-components";
import WhiteIcon from "./WhiteIcon";

const ButtonLink = styled.a`
	text-decoration: none;
`;
const ButtonContainer = styled.div`
	right: 16px;
	left: auto;
	position: absolute;
`;
export default withRouter(({ location }) => {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="title" color="inherit" style={{ color: "white" }}>
                    {location.pathname === "/resume" ? "Resume" : "Projects"}
                </Typography>
                <ButtonContainer>
                    <ButtonLink
                        href="https://www.linkedin.com/in/alexander-l-davis/"
                        title="LinkedIn - Alexander7161"
                    >
                        <IconButton color="inherit">
                            <WhiteIcon icon={["fab", "linkedin"]} />
                        </IconButton>
                    </ButtonLink>
                    <ButtonLink
                        href="https://github.com/alexander7161"
                        title="GitHub - Alexander7161"
                    >
                        <IconButton color="inherit">
                            <WhiteIcon icon={["fab", "github"]} />
                        </IconButton>
                    </ButtonLink>
                    <ButtonLink
                        href="https://www.last.fm/user/alexander7161"
                        title="LastFm - Alexander7161"
                    >
                        <IconButton color="inherit">
                            <WhiteIcon icon={["fab", "lastfm"]} />
                        </IconButton>
                    </ButtonLink>
                </ButtonContainer>
            </Toolbar>
        </AppBar>
    );
});

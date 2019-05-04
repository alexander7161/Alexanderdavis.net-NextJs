import { Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { ContainerDiv } from "../components";

const ResumeContainer = styled(ContainerDiv)`
	width: 100%;
	padding-top: 25vh;
	text-align: center;
`;

export default ({ theme }: { theme: any }) => {
    return (
        <ResumeContainer theme={theme}>
            <Typography variant="title" color="inherit">
                Coming Soon
            </Typography>
        </ResumeContainer>
    );
};

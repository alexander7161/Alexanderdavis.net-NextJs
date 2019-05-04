import { Grid } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { ContainerDiv } from "../../components";
import { AppState } from "../../configureStore";
import Card from "./card";
import { getProjectsWithLastUpdated } from "./store/selectors";

const Root = styled(Grid)`
	&& {
		padding-top: 16px;
		padding-bottom: 16px;
		margin-left: auto;
		margin-right: auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		overflow: hidden;
	}
`;

export default connect(mapStateToProps)(
    ({ theme, projects }: { projects: Project[]; theme: any }) => {
        return (
            <ContainerDiv theme={theme}>
                <Root item={true} xs={12} md={10} lg={8}>
                    <Grid container={true} spacing={16}>
                        {projects.map((t, i) => (
                            <Grid key={i} item={true} md={4} sm={6} xs={12}>
                                <Card project={t} />
                            </Grid>
                        ))}
                    </Grid>
                </Root>
            </ContainerDiv>
        );
    },
);

function mapStateToProps(state: AppState) {
    return { projects: getProjectsWithLastUpdated(state) };
}

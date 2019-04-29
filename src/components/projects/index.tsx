import { Grid } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { AppState } from "../../configureStore";
import Card from "./card";
import { selectProjects } from "./store/selectors";

const ContainerDiv = styled.div`
	overflow-y: scroll;
	height: calc(
		100vh - ${(props) => props.theme.mixins.toolbar.minHeight}px - 72px
	);
`;

const Root = styled.div`
	padding-top: 16px;
	padding-bottom: 16px;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	overflow: hidden;
`;

export default connect(mapStateToProps)(
    ({ theme, tileData }: { tileData: Project[]; theme: any }) => {
        return (
            <ContainerDiv theme={theme}>
                <Root>
                    <Grid item={true} xs={12} md={10} lg={8}>
                        <Grid container={true} spacing={16}>
                            {tileData.map((t, i) => (
                                <Grid key={i} item={true} md={4} sm={6} xs={12}>
                                    <Card data={t} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Root>
            </ContainerDiv>
        );
    },
);

function mapStateToProps(state: AppState) {
    return { tileData: selectProjects(state) };
}

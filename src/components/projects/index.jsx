import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "./card";
import { connect } from "react-redux";
import styled from "styled-components";

const ContainerDiv = styled.div`
	overflow-y: scroll;
	height: calc(
		100vh - ${props => props.theme.mixins.toolbar["minHeight"]}px - 72px
	);
`;

const RootGrid = styled(Grid)`
	padding-top: 16px;
	padding-bottom: 16px;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	overflow: hidden;
`;

const FlexGrowGrid = styled(Grid)`
	flex-grow: 1;
`;

export default connect(mapStateToProps)(({ theme, tileData }) => {
	return (
		<ContainerDiv theme={theme}>
			<RootGrid container>
				<Grid item xs={12} md={10} lg={8}>
					<FlexGrowGrid container spacing={16}>
						{tileData.map((t, i) => (
							<Grid key={i} item md={4} sm={6} xs={12}>
								<Card data={t} />
							</Grid>
						))}
					</FlexGrowGrid>
				</Grid>
			</RootGrid>
		</ContainerDiv>
	);
});

function mapStateToProps(state) {
	return { tileData: state.data };
}

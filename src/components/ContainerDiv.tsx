import { Container } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

export const ContentContainer = styled.div`
	overflow-y: scroll;
	overflow-x: hidden;
	height: calc(
		100vh - ${props => props.theme.mixins.toolbar.minHeight}px - 72px
	);
`;

export const ContentRoot = styled(Container)`
	margin: 16px auto;
`;

const ContainerDiv: React.FC = ({ children }) => {
	return (
		<ContentContainer>
			<ContentRoot maxWidth="md" disableGutters={true}>
				{children}
			</ContentRoot>
		</ContentContainer>
	);
};

export default ContainerDiv;

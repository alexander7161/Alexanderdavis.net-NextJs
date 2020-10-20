import styled from "styled-components";
import { Container } from "@material-ui/core";

export const ContentContainer = styled.div`
	overflow-y: scroll;
	overflow-x: hidden;
	height: calc(
		100vh - ${({ theme }) => theme.mixins.toolbar.minHeight}px - 72px
	);
`;

export const ContentRoot = styled(Container)`
	margin: 16px auto;
`;

import styled from "styled-components";

export default styled.div`
	overflow-y: scroll;
	height: calc(
		100vh - ${(props) => props.theme.mixins.toolbar.minHeight}px - 72px
	);
`;

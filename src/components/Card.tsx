import { Card } from "@material-ui/core";
import styled from "styled-components";

const CardContainer = styled(Card)`
	&& {
		height: 100%;
		position: relative;
		@media (max-width: 959.95px) {
			margin-left: 8px;
			margin-right: 8px;
		}
	}
`;

export default CardContainer;

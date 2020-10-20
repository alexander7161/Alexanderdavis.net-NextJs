import React, { FC } from "react";
import { ContentContainer, ContentRoot } from "./styles";

const SwipeablePageContainer: FC = ({ children }) => (
	<ContentContainer>
		<ContentRoot maxWidth="md" disableGutters={true}>
			{children}
		</ContentRoot>
	</ContentContainer>
);

export default SwipeablePageContainer;

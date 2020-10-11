import { Tab, Tabs } from "@material-ui/core";
import { List as ListIcon, Person as PersonIcon } from "@material-ui/icons";

import React from "react";
// import { useHistory, useLocation } from "react-router";
import styled from "styled-components";
import usePageIndex from "../hooks/usePageIndex";
import { PageIndex } from "../hooks/usePageIndex/types";

const Root = styled.div`
	position: fixed;
	width: 100%;
	bottom: 0px;
	border-top: 0.5px solid lightgray;
	z-index: 1100;
	background-color: white;
`;

const BottomTabs = () => {
	const {
		current: { index },
		next: { replace },
	} = usePageIndex();
	const handleChange = (_event: unknown, value: number) =>
		replace(value as PageIndex);

	return (
		<Root>
			<Tabs
				indicatorColor="secondary"
				textColor="secondary"
				centered={true}
				variant="fullWidth"
				value={index}
				onChange={handleChange}
				TabIndicatorProps={{ style: { top: 0 } }}
			>
				<Tab className="btn" label="Projects" icon={<ListIcon />} />
				<Tab className="btn" label="Résumé" icon={<PersonIcon />} />
			</Tabs>
		</Root>
	);
};

export default BottomTabs;

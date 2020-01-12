import { Tab, Tabs, withStyles } from "@material-ui/core";
import { List as ListIcon, Person as PersonIcon } from "@material-ui/icons";
import React from "react";
import { useHistory, useLocation, withRouter } from "react-router";
import styled from "styled-components";

const Root = styled.div`
	width: 100%;
	bottom: 0px;
	border-top: 0.5px solid lightgray;
	z-index: 1100;
	background-color: white;
`;

const useTabIndex = () => {
	const location = useLocation();
	if (location.pathname === "/resume") {
		return 1;
	} else {
		return 0;
	}
};

const BottomTabs = () => {
	const history = useHistory();
	const index = useTabIndex();

	const handleChange = (event: any, value: number) => {
		switch (value) {
			case 0:
				history.push("/");
				break;
			case 1:
				history.push("/resume");
				break;
			default:
		}
	};

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

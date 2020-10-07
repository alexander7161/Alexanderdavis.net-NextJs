import { Tab, Tabs } from "@material-ui/core";
import { List as ListIcon, Person as PersonIcon } from "@material-ui/icons";
import { useRouter, NextRouter } from "next/router";

import React from "react";
// import { useHistory, useLocation } from "react-router";
import styled from "styled-components";

const Root = styled.div`
	position: fixed;
	width: 100%;
	bottom: 0px;
	border-top: 0.5px solid lightgray;
	z-index: 1100;
	background-color: white;
`;

const useTabIndex = (router: NextRouter) => {
	return Number(router.query.page);
};

const BottomTabs = () => {
	const router = useRouter();
	const index = useTabIndex(router);
	console.log(index);

	const handleChange = (_event: any, value: number) => {
		router.replace(`/?page=${value}`, "/");

		// switch (value) {
		// 	case 0:
		// 		router.replace("/?page=Projects", "/");
		// 		break;
		// 	case 1:
		// 		router.replace("/?page=Resume", "/");
		// 		break;
		// 	default:
		// }
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

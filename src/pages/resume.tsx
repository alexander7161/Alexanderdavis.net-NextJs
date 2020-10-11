import React, { useEffect } from "react";
import usePageIndex from "../hooks/usePageIndex";

const Resume = () => {
	const {
		next: { replace },
	} = usePageIndex();
	useEffect(() => {
		replace();
	}, []);
	return <div />;
};

export default Resume;

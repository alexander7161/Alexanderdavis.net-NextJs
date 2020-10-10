import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Resume = () => {
	const router = useRouter();
	useEffect(() => {
		router.replace(`/?page=${1}`, "/resume");
	}, []);
	return <div />;
};

export default Resume;

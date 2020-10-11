import { useRouter } from "next/router";
import { PageIndex } from "./types";

export const getNextPageIndex = (index: PageIndex): PageIndex => {
	switch (index) {
		case 1:
			return 0;
		default:
			return 1;
	}
};

export const getPageName = (index: PageIndex): string => {
	switch (index) {
		case 1:
			return "Resume";
		default:
			return "Projects";
	}
};

export const getPageRoute = (index: PageIndex): string => {
	switch (index) {
		case 0:
			return "";
		case 1:
			return "resume";
		default:
			return "";
	}
};

const usePageIndex = () => {
	const router = useRouter();
	const index = Number(router.query.page ?? 0) as PageIndex;
	const nextIndex = getNextPageIndex(index);

	return {
		current: { index, name: getPageName(index) },
		next: {
			index: nextIndex,
			name: getPageName(nextIndex),
			replace: (newIndex: PageIndex = nextIndex) =>
				router.replace(`/?page=${newIndex}`, `/${getPageRoute(newIndex)}`),
		},
	};
};

export default usePageIndex;

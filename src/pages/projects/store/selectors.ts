import { createSelector, OutputSelector } from "reselect";
import { AppState } from "../../../configureStore";
import { getLastUpdated } from "./getLastUpdated";
import { ProjectsState } from "./types";

export const selectProjects = (state: AppState): ProjectFromAPI[] =>
	state.projects.data;

export const getProjectsWithLastUpdated: OutputSelector<
	{
		projects: ProjectsState;
	},
	ProjectFromAPI[],
	(res: ProjectFromAPI[]) => Project[]
> = createSelector(
	[selectProjects],
	(projects) =>
		projects.map((p) =>
			p.lastUpdated
				? { ...p, lastUpdatedString: getLastUpdated(p.lastUpdated) }
				: p,
		),
);

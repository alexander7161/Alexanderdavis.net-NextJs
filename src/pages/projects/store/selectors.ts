import { createSelector } from "reselect";
import { AppState } from "../../../configureStore";
import { getLastUpdated } from "./getLastUpdated";

export const selectProjects = (state: AppState): ProjectFromAPI[] =>
  state.projects.data;

export const getProjectsWithLastUpdated = createSelector(
  [selectProjects],
  (projects) =>
	projects.map((p) =>
		p.lastUpdated
		? { ...p, lastUpdatedString: getLastUpdated(p.lastUpdated) }
		: p,
	),
);

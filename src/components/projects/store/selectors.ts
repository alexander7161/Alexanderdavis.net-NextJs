import { createSelector, OutputSelector } from "reselect";
import { AppState } from "../../../configureStore";
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

function getLastUpdated(lastUpdated: Date): string {
    const timeDiff =
        Math.abs(new Date().getTime() - lastUpdated.getTime()) / 1000;
    if (timeDiff < 3600) {
        const diff = Math.ceil(timeDiff / 60);
        if (diff === 1) {
            return diff + " minute ago";
        } else {
            return diff + " minutes ago";
        }
    } else if (timeDiff < 86400) {
        const diff = Math.ceil(timeDiff / 3600);
        if (diff === 1) {
            return diff + " hour ago";
        } else {
            return diff + " hours ago";
        }
    } else {
        const diff = Math.ceil(timeDiff / (3600 * 24));
        if (diff === 1) {
            return diff + " day ago";
        } else {
            return diff + " days ago";
        }
    }
}

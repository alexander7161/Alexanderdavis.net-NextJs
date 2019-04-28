import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { ProjectsState, UPDATE_RESTAURANTS } from "./types";

export function updateGithubUpdated(): ThunkAction<
    void,
    ProjectsState,
    null,
    Action<string>
> {
    return async (dispatch, getState) => {
        const oldProjects = getState().data;
        const newProjects = await Promise.all(
            oldProjects.map(async (p: Project) => {
                if (p.githubURL) {
                    const response = await fetch(
                        "https://api.github.com/repos/" +
                            p.githubURL.substr(19, p.githubURL.length - 1) +
                            "/commits",
                    );
                    const json = await response.json();
                    if (json && json[0] && json[0].commit) {
                        return {
                            ...p,
                            lastUpdated: new Date(json[0].commit.author.date),
                        };
                    }
                }
                return p;
            }),
        );
        dispatch(updateProjects(newProjects));
    };
}

function updateProjects(projects: Project[]) {
    return {
        type: UPDATE_RESTAURANTS,
        projects,
    };
}

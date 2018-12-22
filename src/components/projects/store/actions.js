import { UPDATE_RESTAURANTS } from "./actionTypes";

export function updateGithubUpdated() {
  return async (dispatch, getState) => {
    var newProjects = [];
    for (var p of getState().data) {
      var newP = Object.assign({}, p);

      if (p.githubURL) {
        const response = await fetch(
          "https://api.github.com/repos/" +
            p.githubURL.substr(19, p.githubURL.length - 1) +
            "/commits"
        );
        const json = await response.json();
        if (json && json[0] && json[0].commit) {
          newP.lastUpdated = new Date(json[0].commit.author.date);
        }
      }
      newProjects.push(newP);
    }
    dispatch(updateProjects(newProjects));
  };
}

function updateProjects(projects) {
  return {
    type: UPDATE_RESTAURANTS,
    projects
  };
}

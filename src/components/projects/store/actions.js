import { UPDATE_RESTAURANTS } from "./actionTypes";

export function updateGithubUpdated() {
  return (dispatch, getState) => {
    var projects = getState().data;
    var returnData = [];
    projects
      .filter(p => p.githubURL)
      .forEach(p => {
        fetch(
          "https://api.github.com/repos/" +
            p.githubURL.substr(19, p.githubURL.length - 1) +
            "/commits"
        )
          .then(response => response.json())
          .then(data => {
            returnData.push({
              [p.title]: new Date(data[0].commit.author.date)
            });
          });
      });
    dispatch(updateProjects(returnData));
  };
}

function updateProjects(projects) {
  return {
    type: UPDATE_RESTAURANTS,
    projects
  };
}

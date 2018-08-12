import { push } from "connected-react-router";

export const goToProjects = () => dispatch => {
  dispatch(push("/"));
};

export const goToResume = () => dispatch => {
  dispatch(push("/resume"));
};

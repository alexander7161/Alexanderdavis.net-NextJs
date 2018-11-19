import { UPDATE_RESTAURANTS } from "./actionTypes";
import { data } from "./projectData";

const todos = (state = { data }, action) => {
  switch (action.type) {
    case UPDATE_RESTAURANTS:
      return Object.assign({}, state, { data: action.projects });
    default:
      return state;
  }
};

export default todos;

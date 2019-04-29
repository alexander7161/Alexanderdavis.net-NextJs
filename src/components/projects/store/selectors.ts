import { AppState } from "../../../configureStore";
export const selectProjects = (state: AppState) => state.projects.data;

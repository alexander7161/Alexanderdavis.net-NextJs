import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { data } from "./projectData";

const initialState: {
  data: ProjectFromAPI[];
  error: Error | null;
} = {
  data,
  error: null,
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
	updateProjects(state, action: PayloadAction<ProjectFromAPI[]>) {
		state.data = action.payload;
		state.error = null;
	},
  },
});
// Extract the action creators object and the reducer
const { actions, reducer } = projectsSlice;
// Extract and export each action creator by name
export const { updateProjects } = actions;
// Export the reducer, either as a default or named export
export default reducer;

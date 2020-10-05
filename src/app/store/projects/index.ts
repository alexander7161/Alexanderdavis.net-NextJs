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

const { actions, reducer } = projectsSlice;
export const { updateProjects } = actions;
export default reducer;

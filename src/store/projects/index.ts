import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
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
	extraReducers: {
		[HYDRATE]: (state, action) => ({ ...state, ...action.payload }),
	},
});

const { actions, reducer } = projectsSlice;
export const { updateProjects } = actions;
export default reducer;

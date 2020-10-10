import { MakeStore, createWrapper } from "next-redux-wrapper";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import projectsReducer from "./projects";

const reducers = combineReducers({
	projects: projectsReducer,
});

export type AppState = ReturnType<typeof reducers>;

export const makeStore: MakeStore<AppState> = () =>
	configureStore({
		reducer: reducers,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
		devTools: process.env.NODE_ENV !== "production",
	});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const wrapper = createWrapper<AppState, any>(makeStore, {
	debug: process.env.NODE_ENV !== "production",
});

import { createStore, applyMiddleware } from "redux";
import { MakeStore, createWrapper } from "next-redux-wrapper";

import { combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import projectsReducer from "./projects";

const reducers = combineReducers({
	projects: projectsReducer,
});

export type AppState = ReturnType<typeof reducers>;

const makeStore: MakeStore<AppState> = () =>
	createStore(reducers, applyMiddleware(thunk, ...getDefaultMiddleware()));

export const wrapper = createWrapper<AppState>(makeStore, { debug: true });

import { MakeStore, createWrapper } from "next-redux-wrapper";

import { combineReducers, configureStore, Store } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import projectsReducer from "./projects";

const reducers = combineReducers({
	projects: projectsReducer,
});

export type AppState = ReturnType<typeof reducers>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type StoreType = Store<AppState, any>;

export const makeStore: MakeStore<StoreType> = () =>
	configureStore({
		reducer: reducers,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
		devTools: process.env.NODE_ENV !== "production",
	});

export const wrapper = createWrapper<StoreType>(makeStore, {
	debug: process.env.NODE_ENV !== "production",
});

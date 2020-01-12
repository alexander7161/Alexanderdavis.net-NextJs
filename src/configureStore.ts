import {
  combineReducers,
  configureStore,
  getDefaultMiddleware
} from "@reduxjs/toolkit";
import { createBrowserHistory } from "history";
import thunk from "redux-thunk";
import projectsReducer from "./pages/projects/store";

const history = createBrowserHistory();

const reducers = combineReducers({
  projects: projectsReducer
});

export type AppState = ReturnType<typeof reducers>;

const store = configureStore({
  reducer: reducers,
  middleware: [thunk, ...getDefaultMiddleware()]
});

export default store;

export { history };

import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import projectsReducer from "./pages/projects/store/reducer";

const history = createBrowserHistory();
const composeEnhancers =
    (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    projects: projectsReducer,
});

export type AppState = ReturnType<typeof reducers>;

const store = createStore(
    connectRouter(history)(reducers),
    composeEnhancers(applyMiddleware(routerMiddleware(history), thunk)),
);

export default store;

export { history };

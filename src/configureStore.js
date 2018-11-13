import thunk from "redux-thunk";
import reducer from "./components/projects/store/reducer";

import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
const history = createBrowserHistory();

const store = createStore(
  connectRouter(history)(reducer),
  compose(applyMiddleware(routerMiddleware(history), thunk))
);

export default store;

export { history };

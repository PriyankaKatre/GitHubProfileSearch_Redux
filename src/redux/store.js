import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";
import { rootReducer } from "./rootReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

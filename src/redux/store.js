import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducers/root";
const loggerMiddleware = (store) => (next) => (action) => {
  console.log(action);
  return next(action);
};

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(loggerMiddleware))
);

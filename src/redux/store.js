import { createStore, combineReducers, applyMiddleware } from "redux";
import contactReducer from "./contacts/reducer";
import thunk from "redux-thunk";

const store = createStore(
  combineReducers(contactReducer),
  applyMiddleware(thunk)
);

export default store;

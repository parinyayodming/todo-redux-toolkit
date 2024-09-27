import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { logger } from "redux-logger";
import goalsSlice from "./store/goalsSlice";

const rootReducer = combineReducers({
  goals: goalsSlice,
});

const middleware = (getDefaultMiddleware) =>
  process.env.NODE_ENV !== "production"
    ? getDefaultMiddleware().concat(logger)
    : getDefaultMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import roomReducer from "./reducers/roomSlice";

const rootReducer = combineReducers({
  rooms: roomReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

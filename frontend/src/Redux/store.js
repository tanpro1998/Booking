import { configureStore, combineReducers } from "@reduxjs/toolkit";
import roomReducer from "./reducers/roomSlice";
import bookingReducer from "./reducers/bookingSlice";
import detailReducer from "./reducers/detailSlice";
import existingReducer from "./reducers/existingSlice";
import confirmReducer from "./reducers/confirmSlice";
import authReducer from "./reducers/authSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  rooms: roomReducer,
  bookings: bookingReducer,
  details: detailReducer,
  existing: existingReducer,
  confirm: confirmReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

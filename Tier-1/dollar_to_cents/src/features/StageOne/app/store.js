import { configureStore } from "@reduxjs/toolkit";
import DollarsToCentsReducer from "../dollarsToCentsSlice";

export const store = configureStore({
  reducer: {
    DollarsToCents: DollarsToCentsReducer,
  },
});

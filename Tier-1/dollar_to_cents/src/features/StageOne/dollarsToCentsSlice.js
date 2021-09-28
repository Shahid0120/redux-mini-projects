import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "DollarsToCents",
  initialState: {
    cents: 0,
  },
  reducers: {
    convert: (state, action) => {
      state.cents += 1;
    },
  },
});
export const { convert } = slice.actions;
export const selectCents = (state) => state.DollarsToCents.cents;

export default slice.reducer;

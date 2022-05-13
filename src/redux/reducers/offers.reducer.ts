import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
  initialState: {
    offersData: undefined,
  },
  name: "offers",
  reducers: {
    saveOffers: (state, { payload }) => ({
      ...state,
      offersData: payload,
    }),
  },
});

export { actions as offersActions, reducer as offersReducer };

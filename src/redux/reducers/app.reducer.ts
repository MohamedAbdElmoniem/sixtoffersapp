import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
  initialState: {
    loading: false,
  },
  name: "app",
  reducers: {
    setLoading: (state, { payload }) => ({
      ...state,
      offers: payload,
    }),
  },
});

export { actions as appActions, reducer as appReducer };

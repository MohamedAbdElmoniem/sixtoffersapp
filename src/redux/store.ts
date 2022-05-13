import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { appActions, appReducer } from "./reducers/app.reducer";
import { offersActions, offersReducer } from "./reducers/offers.reducer";

const reducer = combineReducers({
  app: appReducer,
  offers: offersReducer,
});

export const store = configureStore({
  reducer,
});

export const generalActions = {
  setLoading: (loadingState: boolean) =>
    store.dispatch(appActions.setLoading(loadingState)),
  saveOffers: (offers: any) => store.dispatch(offersActions.saveOffers(offers)),
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

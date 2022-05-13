import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { AppNavigation } from "./navigation";
import { store } from "./redux/store";
import { getOffers } from "./services/API/offers/api";

export default function App() {
  useEffect(() => {
    getOffers();
  }, []);
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

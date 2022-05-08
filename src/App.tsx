import React from "react";
import { Provider } from 'react-redux'
import { store } from "./redux/store";

export default function App() {
  return <Provider store={store}>
    <div>App</div>
  </Provider>
}

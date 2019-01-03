import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./container";
import "./styles.css";

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<Root />, rootElement);

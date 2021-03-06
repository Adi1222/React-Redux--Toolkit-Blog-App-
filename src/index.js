import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Assets
import "./index.css";

// Local imports
import App from "./App";
import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

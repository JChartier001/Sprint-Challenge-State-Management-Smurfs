import React from "react";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import {reducer} from "./reducers/reducers"
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

const store = createStore(reducers, applyMiddleware(thunk, logger));

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, 
document.getElementById("root"));

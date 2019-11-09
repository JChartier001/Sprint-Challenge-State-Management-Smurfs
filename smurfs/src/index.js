import React from "react";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import {reducers} from "./reducers/reducers"
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";

const store = createStore(reducers, applyMiddleware(thunk, logger));

ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <App />
        </BrowserRouter>
</Provider>, 
document.getElementById("root"));

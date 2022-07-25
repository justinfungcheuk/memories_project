import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// Provider is going to keep track of that store which is global state and that allows us to access that store from anywhere inside of the of the app 
// we don't have to be exactly in a parent component or in a child component we can access that state from anywhere
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";

import App from "./App";
import "./index.css"; 

const store = createStore(reducers, compose(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        < App />
    </Provider>
);
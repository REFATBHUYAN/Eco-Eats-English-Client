import React from "react";
import { Provider } from "react-redux";
import store from "./store";


// const { Provider } = require("react-redux");

export function Providers({ children }) {
    return <Provider store={store}>
        {children}
    </Provider>
}
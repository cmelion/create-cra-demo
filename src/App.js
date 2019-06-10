// src/App.js

import React from "react";
import { hot } from "react-hot-loader";
import Counter from "./components/counter";
import DataTable from "./components/data-table"
import JssProvider from "react-jss/lib/JssProvider";
import { create } from "jss";
import { jssPreset } from "@material-ui/core/styles";

const jss = create({
    ...jssPreset(),
    // We define a custom insertion point that JSS will look for injecting the styles in the DOM.
    insertionPoint: "jss-insertion-point"
});

const App = () => (
    <JssProvider jss={jss}>
        <React.Fragment>
            <Counter/>
            <DataTable/>
        </React.Fragment>
    </JssProvider>
);

export default hot(module)(App);

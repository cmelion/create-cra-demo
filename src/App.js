// src/App.js

import React from "react";
import Counter from "./components/counter";
import DataTable from "./components/data-table"
import { create } from 'jss';
import { StylesProvider, jssPreset } from '@material-ui/styles';

const jss = create({
    ...jssPreset(),
    // We define a custom insertion point that JSS will look for injecting the styles in the DOM.
    insertionPoint: "jss-insertion-point"
});

const App = () => (
    <StylesProvider jss={jss}>
        <React.Fragment>
            <Counter/>
            <DataTable/>
        </React.Fragment>
    </StylesProvider>
);

export default App;

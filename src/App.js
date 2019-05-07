// src/App.js

import React from "react";
import { hot } from "react-hot-loader";
import { useSelector, useDispatch } from 'react-redux'

// TODO: Determine if babel-plugin-transform-require-ignore can work here instead of canUseDOM
let canUseDOM = !!((typeof window !== 'undefined' && window.document && window.document.createElement));
/* istanbul ignore next */
if (canUseDOM) {
    require('./App.scss');
}

const onIncrement = () => ({ type: "counter/increment" });
const onDecrement = () => ({ type: "counter/decrement" });

const App = () => {
    const count = useSelector(
        state => state.count
    );
    const dispatch = useDispatch();
    return (
        <div className="App">
            <p>{count}</p>
            <button onClick={() => dispatch(onIncrement())}>increment (+)</button>
            <button onClick={() => dispatch(onDecrement())}>decrement (-)</button>
        </div>
    );
};

export default hot(module)(App);

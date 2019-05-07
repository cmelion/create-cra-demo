// src/App.js

import React, { useState } from "react";
import { hot } from "react-hot-loader";

// TODO: Determine if babel-plugin-transform-require-ignore can work here instead of canUseDOM
let canUseDOM = !!((typeof window !== 'undefined' && window.document && window.document.createElement));
/* istanbul ignore next */
if (canUseDOM) {
    require('./App.scss');
}


const useCounter = (initialValue) => {
    const [count, setCount] = useState(initialValue);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    return { count, increment, decrement };
};

const App = () => {
    const { count, increment, decrement } = useCounter(0);
    return (
        <div className="App">
            <p>Learn React</p>
            <p>{count}</p>
            <button onClick={increment}>increment (+)</button>
            <button onClick={decrement}>decrement (-)</button>
        </div>
    );
};

export default hot(module)(App);

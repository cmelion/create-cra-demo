// src/App.js (react-hooks)

import React, { useState } from "react";
import { hot } from "react-hot-loader";
import './App.scss';

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

// src/App.js (react-hooks)

import React from "react";
import { hot } from "react-hot-loader";
import './App.scss';

const counterReducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state -1;
        default:
            throw new Error();
    }
};

const useCounter = (initialValue) => {
    const [count, dispatch] = React.useReducer(counterReducer, initialValue);
    const increment = () => dispatch({ type: 'increment' });
    const decrement = () => dispatch({ type: 'decrement' });
    return { count, increment, decrement };
};

const App = () => {
    const { count, increment, decrement } = useCounter(0);
    return (
        <div className="App">
            <p>Learn React</p>
            <p>{count}</p>
            <button id="count-up" onClick={increment}>increment (+)</button>
            <button id="count-down" onClick={decrement}>decrement (-)</button>
        </div>
    );
};

export default hot(module)(App);

// src/App.js (react-hooks)

import React from "react";
import { hot } from "react-hot-loader";
import './App.scss';

const counterReducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + 1 };
        case 'decrement':
            return { ...state, count: state.count - 1 };
        default:
            throw new Error();
    }
};

const useCounter = (initialValue) => {
    const [state, dispatch] = React.useReducer(counterReducer, { count: initialValue });
    const increment = () => dispatch({ type: 'increment' });
    const decrement = () => dispatch({ type: 'decrement' });
    return { state, increment, decrement };
};

const App = () => {
    const { state: { count }, increment, decrement } = useCounter(0);
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

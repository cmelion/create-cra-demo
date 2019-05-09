// src/App.js

import React from "react";
import { hot } from "react-hot-loader";
import { connect } from 'react-redux';
import './App.scss';

const Counter = ({ count, onIncrement, onDecrement }) => (
    <div className="App">
        <p>{count}</p>
        <button onClick={onIncrement}>increment (+)</button>
        <button onClick={onDecrement}>decrement (-)</button>
    </div>
);

const mapStateToProps = state => {
    return {
        count: state.count
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrement: () => {
            dispatch({ type: 'counter/increment' });
        },
        onDecrement: () => {
            dispatch({ type: 'counter/decrement' });
        }
    };
};

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default hot(module)(App);

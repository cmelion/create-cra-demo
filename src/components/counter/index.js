// components/counter/index.js
import React from "react";
import { hot } from "react-hot-loader";
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { useCounter } from './dux/index';

const Counter = () => {
    const count = useSelector(
        state => state.counter.count  // counter.count is set in via combineReducers in the root reducer's imports
    );
    const { increment, decrement } = bindActionCreators(useCounter.actions, useDispatch());
    return (
        <div className="counter">
            <p>count: {count}</p>
            <button onClick={ increment }>increment (+)</button>
            <button onClick={ decrement }>decrement (-)</button>
        </div>
    );
};

export default hot(module)(Counter);

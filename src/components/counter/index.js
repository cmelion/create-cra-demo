// components/counter/index.js
import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { useCounter } from './dux/index';
import styles from "./styles.module.scss";

const Counter = () => {
    const count = useSelector(
        state => state.counter.count  // counter.count is set in via combineReducers in the root reducer's imports
    );
    const { increment, decrement } = bindActionCreators(useCounter.actions, useDispatch());
    return (
        <div className={styles.counter}>
            <p>count: {count}</p>
            <button aria-label="Increment" onClick={ increment }>Count Up (+)</button>
            <button aria-label="Decrement" onClick={ decrement }>Count Down (-)</button>
        </div>
    );
};

const MemoizedCounterComponent = React.memo(Counter);
export default MemoizedCounterComponent;

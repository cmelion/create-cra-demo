// src/App.js

import React from "react";
import { hot } from "react-hot-loader";
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { counter } from './dux/counter';


// TODO: Determine if babel-plugin-transform-require-ignore can work here instead of canUseDOM
let canUseDOM = !!((typeof window !== 'undefined' && window.document && window.document.createElement));
/* istanbul ignore next */
if (canUseDOM) {
    require('./App.scss');
}

const App = () => {
    const count = useSelector(
        state => state.count
    );
    const { increment, decrement } = bindActionCreators(counter.actions, useDispatch());
    return (
        <div className="App">
            <p>{count}</p>
            <button onClick={ increment }>increment (+)</button>
            <button onClick={ decrement }>decrement (-)</button>
        </div>
    );
};

export default hot(module)(App);

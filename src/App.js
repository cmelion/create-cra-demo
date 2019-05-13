// src/App.js

import React from "react";
import { hot } from "react-hot-loader";
import InputForm from './components/input-form';
import Counter from './components/counter';
import './App.scss';

const App = () => (
    <div className="App">
        <InputForm/>
        <Counter/>
    </div>
);

export default hot(module)(App);

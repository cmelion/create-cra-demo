// src/App.js

import React from "react";
import { hot } from "react-hot-loader";
import InputForm from './input-form'
import './App.scss';

const App = () => (
    <div className="App">
        <InputForm/>
    </div>
);

export default hot(module)(App);

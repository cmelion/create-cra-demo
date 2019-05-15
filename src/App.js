// src/App.js

import React from "react";
import { hot } from "react-hot-loader";
import InputForm from './components/input-form';
import Counter from './components/counter';
import styles from './App.module.scss';

const App = () => (
    <div className={styles.app}>
        <InputForm/>
        <Counter/>
    </div>
);

export default hot(module)(App);

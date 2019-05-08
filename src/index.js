import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as serviceWorker from './serviceWorker';
import { composeWithDevTools } from 'redux-devtools-extension';
import { counter } from './dux/counter';
import App from './App';

let store = createStore(counter.reducer, composeWithDevTools());

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

if (module.hot && process.env.NODE_ENV === "development") {
    module.hot.accept('./App', () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>,
            document.getElementById('root')
        );
    })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

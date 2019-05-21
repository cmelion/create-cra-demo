import React from 'react';
import { Provider } from 'react-redux';
import App from '../../src/App';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

configure({ adapter: new Adapter() });
const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const middlewares = [];
const mockStore = configureStore(middlewares);
const initialState = {count: 1};
Given('the DOM', function () {
    const { JSDOM } = require('jsdom');
    const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
    const { window } = jsdom;
    global.window = window;
    global.document = window.document;
});

When('I shallow render a React component called: App', function () {
    const store = mockStore(initialState);
    this.wrapper = mount(
        <Provider store={store}>
            <App/>
        </Provider>
    );
    console.log(this.wrapper.debug());
});

Then('my app should contain the initial count', function () {
    assert(this.wrapper.contains(initialState.count.toString()));
});

import React from 'react';
import App from '../../src/App';
import InputForm from '../../src/components/input-form';
import Counter from '../../src/components/counter';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {expect} from "chai";
const { Given, When, Then } = require('cucumber');

// Configures Enzyme Adapter
configure({ adapter: new Adapter() });

Given('the DOM', function () {
    const { JSDOM } = require('jsdom');
    const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
    const { window } = jsdom;
    global.window = window;
    global.document = window.document;
});

When('I shallow render a React component called: App', function () {
    this.wrapper = shallow(<App />);
});

Then('my app should contain the words: Learn React', function () {
    expect(this.wrapper.find(InputForm)).to.have.lengthOf(1);
    expect(this.wrapper.find(Counter)).to.have.lengthOf(1);
});

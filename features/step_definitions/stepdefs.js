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

// TODO: Refactor to use page-objects or screenplay patterns to support sharing features and step_definitions with QA
// By using page-objects or the screenplay pattern only the API would need to be rewritten to support both Client and Server DEVs and QA

Given('the App has been opened', function () {
    const { JSDOM } = require('jsdom');
    const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
    const { window } = jsdom;
    global.window = window;
    global.document = window.document;
});

When('the demo app renders', function () {
    this.wrapper = shallow(<App />);
});

Then('the app should contain an Input Form and a Counter', function () {
    expect(this.wrapper.find(InputForm)).to.have.lengthOf(1);
    expect(this.wrapper.find(Counter)).to.have.lengthOf(1);
});

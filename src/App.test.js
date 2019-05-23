import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Counter from './components/counter';
import InputForm from './components/input-form';
import App from './App';

it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(InputForm)).to.have.lengthOf(1);
    expect(wrapper.find(Counter)).to.have.lengthOf(1);
});

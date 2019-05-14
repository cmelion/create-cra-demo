import React from 'react';
import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Counter from './components/counter';
import InputForm from './components/input-form';
import App from './App';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(InputForm)).to.have.lengthOf(1);
    expect(wrapper.find(Counter)).to.have.lengthOf(1);
});

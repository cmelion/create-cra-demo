import React from 'react';
import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './App';
import Adapter from "enzyme-adapter-react-16/build/index";

const middlewares = [];
const mockStore = configureStore(middlewares);
configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const initialState = {};
  const store = mockStore(initialState);
    const wrapper = shallow(
        <Provider store={store}>
            <App/>
        </Provider>
    ).dive();

    expect(wrapper.length).to.equal(1);
});

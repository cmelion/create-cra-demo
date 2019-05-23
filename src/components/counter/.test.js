import React from "react";
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import Counter from './index';
import * as ReactRedux from 'react-redux';
import { useCounter } from './dux/index';

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('<Counter />', () => {
    let wrapper;
    const initialState = { counter: { count: 0 } };
    const store = mockStore(initialState);
    const dispatchSpy = jest.spyOn(store, 'dispatch');

    beforeEach(() => {
        wrapper = mount(<ReactRedux.Provider store={store}><Counter /></ReactRedux.Provider>);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('Count Up', () => {
        it('triggers the increment action', () => {
            wrapper.find('[aria-label="Increment"]').props().onClick();
            expect(dispatchSpy).toHaveBeenCalledWith(useCounter.actions.increment());
        });
    });

    describe('Count Down', () => {
        it('triggers the decrement action', () => {
            wrapper.find('[aria-label="Decrement"]').props().onClick();
            expect(dispatchSpy).toHaveBeenCalledWith(useCounter.actions.decrement());
        });
    });

});

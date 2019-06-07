import React from "react";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
    let wrapper;
    const dispatch = jest.fn();
    const useReducerSpy = jest.spyOn(React, 'useReducer');
    useReducerSpy.mockImplementation(() => [{}, dispatch]);

    beforeEach(() => {
        wrapper = Enzyme.shallow(<App />);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('Count Up', () => {
        it('increments the count by 1', () => {
            wrapper.find('#count-up').props().onClick();
            expect(dispatch).toHaveBeenCalledWith({"type": "increment"});
        });
    });

    describe('Count Down', () => {
        it('decrements the count by 1', () => {
            wrapper.find('#count-down').props().onClick();
            expect(dispatch).toHaveBeenCalledWith({"type": "decrement"});
        });
    });

});

import {combineReducers} from 'redux';
import { useCounter } from './components/counter/dux';
export default combineReducers(
    {
        counter: useCounter.reducer
    }
);

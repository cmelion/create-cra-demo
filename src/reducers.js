import {combineReducers} from 'redux';
import { counter } from './components/counter/dux';
export default combineReducers(
    {
        counter: counter.reducer
    }
);

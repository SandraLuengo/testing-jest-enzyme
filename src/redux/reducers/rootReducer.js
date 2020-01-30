import { combineReducers } from 'redux';
import simpleReducer from './simple/simpleReducer';
import changeColorReducer from './changeColor/changeColorReducer';

export default combineReducers({
  simpleReducer,
  changeColorReducer,
});

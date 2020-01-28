import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import changeColorReducer from './changeColorReducer';

export default combineReducers({
  simpleReducer,
  changeColorReducer,
});

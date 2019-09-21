import { combineReducers } from 'redux';
import basketReducer from './basketReducer';
import miscReducer from './miscReducer';
 
export default combineReducers({
  basket: basketReducer,
  misc: miscReducer
});
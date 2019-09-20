import { combineReducers } from 'redux';
import basketReducer from './basketReducer';

export default combineReducers({
  basket: basketReducer
});
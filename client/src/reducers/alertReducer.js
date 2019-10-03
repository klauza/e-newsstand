import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type){

    case SET_ALERT:
      return[ ...state, action.payload];    // [...any other alerts, alert that got sent]
    
    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== action.payload); // filtering out the unwanted alert by id
    
    default:
      return state;
  }
}
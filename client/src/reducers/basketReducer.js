import { ADD_TO_BASKET, CLEAR_BASKET, UPDATE_BASKET, DELETE_ITEM_BASKET } from '../actions/types';

const initialState = {
  items: []
}

export default(state = initialState, action) => {
  switch(action.type){

    case ADD_TO_BASKET:
      return{
        ...state,
        items: [action.payload, ...state.items]
     }
    case CLEAR_BASKET:
      return{
        items: []
      }
    case UPDATE_BASKET:
      return{
        ...state,
        items: state.items.map((item) => item.id === action.payload.id ? action.payload : item) // swap if true, skip if false
      }
    case DELETE_ITEM_BASKET:
      return{
        ...state,
        items: state.items.filter( item => item.id !== action.payload )
      }
    
    default:
      return state;
  }
}
import { ADD_TO_BASKET, CLEAR_BASKET } from '../actions/types';

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

    default:
      return state;
  }
}
import { PERSIST_SEARCH_VIEW } from '../actions/types';

const initialState = {
  searchView: true
}

export default (state = initialState, action) => {
  switch(action.type){

    case PERSIST_SEARCH_VIEW:
      return{
        ...state,
        searchView: action.payload
      }

    default:
      return state;
  }
}
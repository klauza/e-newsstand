import { PERSIST_SEARCH_VIEW, PAGE_LOCATION } from '../actions/types';

const initialState = {
  searchView: true,
  pageLocation:  {
      shop: null
    }
  
}

export default (state = initialState, action) => {
  switch(action.type){

    case PERSIST_SEARCH_VIEW:
      return{
        ...state,
        searchView: action.payload
      }

    case PAGE_LOCATION:
      return{
        ...state,
        pageLocation: action.payload
      }

    default:
      return state;
  }
}
import { PERSIST_SEARCH_VIEW, PAGE_LOCATION } from './types';

export const persistSearchView = (view) => async dispatch => {
  dispatch({
    type: PERSIST_SEARCH_VIEW,
    payload: view
  })
}

export const setPageLocation = (loc) => async dispatch => {
  dispatch({
    type: PAGE_LOCATION,
    payload: loc
  })
}
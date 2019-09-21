import { PERSIST_SEARCH_VIEW } from './types';

export const persistSearchView = (view) => async dispatch => {
  dispatch({
    type: PERSIST_SEARCH_VIEW,
    payload: view
  })
}
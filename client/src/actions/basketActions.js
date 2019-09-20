import { ADD_TO_BASKET, CLEAR_BASKET } from './types';

export const addToBasket = (item) => async dispatch => {
  // setLoading();
  dispatch({
    type: ADD_TO_BASKET,
    payload: item
  })
}

export const clearBasket = () => async dispatch => {
  dispatch({
    type: CLEAR_BASKET
  })
}
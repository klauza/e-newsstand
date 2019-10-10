import { ADD_TO_BASKET, CLEAR_BASKET, UPDATE_BASKET, DELETE_ITEM_BASKET } from './types';

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

export const updateBasket = (item) => async dispatch => {
  dispatch({
    type: UPDATE_BASKET,
    payload: item
  })
}

export const deleteItem = (id) => async dispatch => {
  dispatch({
    type: DELETE_ITEM_BASKET,
    payload: id
  })
}
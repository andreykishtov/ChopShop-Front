import axios from 'axios';
import { GET_ITEMS, GET_ITEMS_SUCCESS, GET_ITEMS_FAILURE, GET_ITEMS_URL } from '../constants/items';

export const getItems = () => ({ type: GET_ITEMS });

export const getItemsSuccess = data => ({ type: GET_ITEMS_SUCCESS, payload: { data } });

export const getItemsFailure = error => ({
  type: GET_ITEMS_FAILURE,
  payload: { error }
});

export const itemsRequest = () => async dispatch => {
  dispatch(getItems());

  try {
    const res = await axios.get(GET_ITEMS_URL);
    dispatch(getItemsSuccess(res.data));
  } catch (error) {
    dispatch(getItemsFailure(error));
  }
};

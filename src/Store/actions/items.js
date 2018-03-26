import axios from 'axios';
import { GET_ITEMS, GET_ITEMS_SUCCESS, GET_ITEMS_FAILURE } from '../constants/items';

const URL = 'http://localhost:9000/api/items';

export const getItems = () => ({ type: GET_ITEMS });
export const getItemsSuccess = items => ({ type: GET_ITEMS_SUCCESS, payload: { items } });
export const getItemsFailure = error => ({
  type: GET_ITEMS_FAILURE,
  payload: { error }
});

export const itemsRequest = () => async dispatch => {
  dispatch(getItems());

  try {
    const res = await axios.get(URL);
    const { data } = res;
    dispatch(getItemsSuccess(data));
  } catch (error) {
    dispatch(getItemsFailure(error));
  }
};

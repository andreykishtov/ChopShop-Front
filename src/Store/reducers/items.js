import { GET_ITEMS, GET_ITEMS_SUCCESS, GET_ITEMS_FAILURE } from '../constants/items';

const initialState = {
  data: [],
  getItemsPending: false,
  getItemsError: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return { ...state, getItemsPending: true };
    case GET_ITEMS_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        getItemsPending: false
      };
    case GET_ITEMS_FAILURE:
      return {
        ...state,
        getItemsError: action.payload.error,
        getItemsPending: false
      };
    default:
      return state;
  }
};

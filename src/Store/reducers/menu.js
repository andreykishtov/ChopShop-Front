import { TOGGLE_MENU } from '../constants/menu';

const initialState = {
  menu: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        menu: !state.menu
      };
    default:
      return state;
  }
};

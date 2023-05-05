import { NOTIFICATION, OPENLOGINPOPUP } from "../actionTypes/actionTypes";

const initialState = {
  notification: {},
  openLoginPopup: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NOTIFICATION:
      return {
        ...state,
        notification: action.payload,
      };
    case OPENLOGINPOPUP:
      return {
        ...state,
        openLoginPopup: action.payload,
      };
    default:
      return state;
  }
};

import {
  NOTIFICATION,
  OPENLOGINPOPUP,
  THEMECOLOR,
} from "../actionTypes/actionTypes";

const initialState = {
  notification: {},
  openLoginPopup: false,
  themeColor: "#ffa500",
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
    case THEMECOLOR:
      return {
        ...state,
        themeColor: action.payload,
      };
    default:
      return state;
  }
};

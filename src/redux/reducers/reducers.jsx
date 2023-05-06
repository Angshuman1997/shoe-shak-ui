import {
  NOTIFICATION,
  OPENLOGINPOPUP,
  THEMECOLOR,
  THEMELAYOUT,
} from "../actionTypes/actionTypes";

const initialState = {
  notification: {},
  openLoginPopup: false,
  themeColor: "#CAF4F4",
  themeLayout: "multisize",
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
    case THEMELAYOUT:
      return {
        ...state,
        themeLayout: action.payload,
      };
    default:
      return state;
  }
};

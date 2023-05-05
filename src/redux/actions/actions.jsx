import { NOTIFICATION, OPENLOGINPOPUP, THEMECOLOR } from "../actionTypes/actionTypes";

const notificationFunc = (data) => {
  return {
    type: NOTIFICATION,
    payload: data,
  };
};

const openLoginPopupFunc = (data) => {
  return {
    type: OPENLOGINPOPUP,
    payload: data,
  };
};

const themeColorFunc = (data) => {
  return {
    type: THEMECOLOR,
    payload: data,
  };
};
export { notificationFunc, openLoginPopupFunc, themeColorFunc };

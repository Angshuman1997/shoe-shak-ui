import { NOTIFICATION, OPENLOGINPOPUP, THEMECOLOR, THEMELAYOUT } from "../actionTypes/actionTypes";

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

const themeLayoutFunc = (data) => {
  return {
    type: THEMELAYOUT,
    payload: data,
  };
};

export { notificationFunc, openLoginPopupFunc, themeColorFunc, themeLayoutFunc };

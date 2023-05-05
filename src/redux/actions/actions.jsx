import {NOTIFICATION, OPENLOGINPOPUP} from "../actionTypes/actionTypes"

const notificationFunc = (data) => {
  return {
    type: NOTIFICATION,
    payload: data
  };
};

const openLoginPopupFunc = (data) => {
    return {
      type: OPENLOGINPOPUP,
      payload: data
    };
  };

export { notificationFunc, openLoginPopupFunc };
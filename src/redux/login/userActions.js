import { USER_LOGIN, USER_LOGOUT } from "./userTypes";

export const userLogin = (user) => {
  return {
    type: USER_LOGIN,
    payload: user,
  };
};
export const userLogout = (user) => {
  return {
    type: USER_LOGOUT,
    payload: user,
  };
};

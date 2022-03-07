import { USER_LOGIN, USER_LOGOUT } from "./userTypes";

const initialUserState = {
  user: null,
};

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        user: action.payload,
      };
    case USER_LOGOUT:
      return {
        user: null,
      };
    default:
      return state;
  }
};

import { LOGIN, SIGNUP } from "./actionsTypes";

const initState = {
  name: "",
  email: "",
  password: "",
  isLogin: false,
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
      };

    case LOGIN:
      if (action.payload === false) {
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          email: action.payload.email,
          password: action.payload.password,
          isLogin: true,
        };
      }

    default:
      return state;
  }
};

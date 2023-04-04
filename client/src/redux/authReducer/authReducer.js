import { LOGIN, SIGNUP } from "./actionsTypes";

const initState = {
  name: "Jyoti",
  email: "abc",
  password: "123",
};

console.log(initState);
export const authReducer = (state = initState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
      };

    case LOGIN:
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
      };

    default:
      return state;
  }
};

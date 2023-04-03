import { LOGIN, SIGNUP } from "./actionsTypes";

let initState = {
  //   token: localStorage.getItem("authToken"),
  //   isAuth: !!localStorage.getItem("authToken"),
  //   otpVerified: false,
  //   signupState: false,
  //   userExists: false,
  //   fillSignup: false,
  //   wrongOtp: false,
  //   successOtp: false,
  //   invalidEmail: false,
  //   wrongLoginCreds: false,
  //   redirectOtp: false,
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        signupState: action.payload,
        userExists: action.payload ? false : true,
      };

    case LOGIN:
      if (
        action.payload !== "wrong credentials" &&
        action.payload !== "verify otp"
      )
        localStorage.setItem("authToken", action.payload.token);
      return {
        ...state,
        isAuth: action.payload.token ? true : false,
        wrongLoginCreds: action.payload === "wrong credentials" ? true : false,
        redirectOtp: action.payload === "verify otp" ? true : false,
      };

    default:
      return state;
  }
};

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
  name: "Jyoti",
  email: "abc",
  password: "123",
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SIGNUP:
      console.log("Hello", action.payload.name);
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
      };

    case LOGIN:
      //   if (
      //     action.payload !== "wrong credentials" &&
      //     action.payload !== "verify otp"
      //   )
      //     localStorage.setItem("authToken", action.payload.token);
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
      };

    default:
      return state;
  }
};

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
  name: "",
  email: "",
  password: "",
};

export const authReducer = (state = initState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.password,
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

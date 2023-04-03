import { LOGIN, SIGNUP } from "./actionsTypes";

export const signup = (details) => async (dispatch) => {
  //   let res = await axios.post("http://localhost:8080/users/signup", details);

  // if (res.data.message === "otp updated" || res.data.message === "OTP Sent") {
  dispatch({ type: SIGNUP, payload: details });
  // } else if (res.data === "user already exists") {
  //     dispatch({ type: SIGNUP, payload: false });
  //   }
};
export const login = (details) => async (dispatch) => {
  //   console.log(details);
  //   let res = await axios.post("http://localhost:8080/users/login", details);
  //   if (res.data.message === "login successful")
  //     dispatch({ type: LOGIN, payload: { token: res.data.token } });
  //   else if (res.data.message === "wrong credentials")
  //     dispatch({ type: LOGIN, payload: "wrong credentials" });
  //   else if (res.data.message === "verify otp")
  dispatch({ type: LOGIN, payload: details });
};

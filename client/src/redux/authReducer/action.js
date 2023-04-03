import { SIGNUP } from "./actionsTypes";

export const signup = (details) => async (dispatch) => {
  //   let res = await axios.post("http://localhost:8080/users/signup", details);

  // if (res.data.message === "otp updated" || res.data.message === "OTP Sent") {
  dispatch({ type: SIGNUP, payload: details });
  // } else if (res.data === "user already exists") {
  //     dispatch({ type: SIGNUP, payload: false });
  //   }
};

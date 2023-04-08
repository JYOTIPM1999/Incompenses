import { LOGIN, SIGNUP } from "./actionsTypes";
import axios from "axios";

export const signup = (details) => async (dispatch) => {
  let res = await axios.post("http://localhost:8085/user/signup", details);
  console.log(res);
  dispatch({ type: SIGNUP, payload: details });
};
export const login = (details) => async (dispatch) => {
  let res = await axios.post("http://localhost:8085/user/login", details);
  localStorage.setItem("token", res.data.token);
  localStorage.setItem("refreshToken", res.data.refreshToken);

  if (res.data.message === "Email & password matched") {
    dispatch({ type: LOGIN, payload: details });
  } else {
    dispatch({ type: LOGIN, payload: false });
  }
};

import { LOGIN, SIGNUP } from "./actionsTypes";
import axios from "axios";

export const signup = (details) => async (dispatch) => {
  let res = await axios.post("http://localhost:8085/user/signup", details);
  console.log(res);
  dispatch({ type: SIGNUP, payload: details });
};
export const login = (details) => async (dispatch) => {
  let res = await axios.post("http://localhost:8085/user/login", details);
  console.log(res.data);
  if (res.data === "Email & password matched") {
    dispatch({ type: LOGIN, payload: details });
  } else {
    dispatch({ type: LOGIN, payload: false });
  }
};

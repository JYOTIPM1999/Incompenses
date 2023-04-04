import { LOGIN, SIGNUP } from "./actionsTypes";

export const signup = (details) => async (dispatch) => {
  dispatch({ type: SIGNUP, payload: details });
};
export const login = (details) => async (dispatch) => {
  dispatch({ type: LOGIN, payload: details });
};

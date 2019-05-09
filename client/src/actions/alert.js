import uuid from "uuid";
import { SET_ALERT, REMOVE_ALERT } from "./types";

//Set Alert if passwords don't match
export const setAlert = (msg, alertType) => dispatch => {
  const id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });
  //Remove Passwords Do Not Match Alert After 5 Seconds
  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 5000);
};

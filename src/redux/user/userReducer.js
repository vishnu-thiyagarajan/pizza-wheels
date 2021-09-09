import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  RESET_STATE,
} from "./userActionTypes";
import { produce } from "immer";

const initialState = {
  loading: false,
  error: "",
  user: null,
  isAuthenticated: false,
  message: "",
};

const userReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOGIN_USER_REQUEST:
        draft.loading = true;
        return;
      case LOGIN_USER_SUCCESS:
        draft.loading = false;
        draft.isAuthenticated = true;
        draft.user = action.payload;
        return;
      case LOGIN_USER_FAILURE:
        draft.loading = false;
        draft.isAuthenticated = false;
        draft.user = null;
        draft.error = action.payload;
        return;
      case RESET_STATE:
        draft.user = null;
        return;
      default:
        return;
    }
  });
};

export default userReducer;

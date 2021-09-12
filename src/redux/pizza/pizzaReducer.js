import {
  GET_PIZZA_REQUEST,
  GET_PIZZA_SUCCESS,
  GET_PIZZA_FAILURE,
  SET_PIZZA_IN_VIEW,
} from "./pizzaActionTypes";
import { produce } from "immer";

const initialState = {
  loading: false,
  error: "",
  pizzas: null,
  inView: "",
  imgs: [],
  imgIndex: 0,
};

const pizzaReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case GET_PIZZA_REQUEST:
        draft.loading = true;
        return;
      case GET_PIZZA_SUCCESS:
        draft.loading = false;
        draft.pizzas = action.payload;
        draft.imgs = action.imgs;
        draft.inView = Object.keys(action.payload)[0];
        return;
      case GET_PIZZA_FAILURE:
        draft.loading = false;
        draft.pizzas = null;
        draft.error = action.payload;
        return;
      case SET_PIZZA_IN_VIEW:
        draft.inView = action.payload;
        return;
      default:
        return;
    }
  });
};

export default pizzaReducer;

import axios from "../../services/Axios/Axios";
import groupBy from "../../utils/groupby";
import unsplash from "../../services/UnSplash/unsplash";
import {
  GET_PIZZA_REQUEST,
  GET_PIZZA_SUCCESS,
  GET_PIZZA_FAILURE,
  SET_PIZZA_IN_VIEW,
} from "./pizzaActionTypes";

export const getPizzas = () => {
  return (dispatch) => {
    dispatch(getPizzasRequest());
    axios
      .get("/getPizzas")
      .then(async (response) => {
        const pizzas = response.data.pizzas;
        const pizzasGroupedByCategory = groupBy(pizzas, "category");
        const imgs = await unsplash.get("/search/photos", {
          params: { query: "pizza" },
        });
        dispatch(getPizzasSuccess(pizzasGroupedByCategory, imgs.data.results));
      })
      .catch((error) => {
        if (error.response) {
          dispatch(getPizzasFailure(error.response.data.message));
        } else {
          dispatch(getPizzasFailure(error.message));
        }
      });
  };
};

export const getPizzasRequest = () => {
  return {
    type: GET_PIZZA_REQUEST,
  };
};

export const getPizzasSuccess = (pizzas, imgs) => {
  return {
    type: GET_PIZZA_SUCCESS,
    payload: pizzas,
    imgs: imgs,
  };
};

export const getPizzasFailure = (error) => {
  return {
    type: GET_PIZZA_FAILURE,
    payload: error,
  };
};

export const setInView = (category) => {
  return {
    type: SET_PIZZA_IN_VIEW,
    payload: category,
  };
};

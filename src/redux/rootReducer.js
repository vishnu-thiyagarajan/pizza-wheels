import { combineReducers } from "redux";
import pizzaReducer from "./pizza/pizzaReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  pizza: pizzaReducer,
});

export default rootReducer;

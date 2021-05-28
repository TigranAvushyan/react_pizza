import { combineReducers } from "redux";
import pizzas from "./reducers/pizzas";
import cart from "./reducers/cart";


export const rootReducer = combineReducers({
  pizzas, cart
});

export type RootState = ReturnType<typeof rootReducer>

import { Dispatch } from "redux";
import { CartAction, CartActionTypes, CartPizza } from "../../types/cart";

export function addPizza(pizza: CartPizza) {
  return (dispatch: Dispatch<CartAction>) => {
    try {
      dispatch({
        type: CartActionTypes.ADD_PIZZA,
        payload: pizza
      })
    } catch (e) {
      console.log(e);
    }
  }
}
export function deletePizza(pizza: CartPizza) {
  return (dispatch: Dispatch<CartAction>) => {
    try {
      dispatch({
        type: CartActionTypes.DELETE_PIZZA,
        payload: pizza
      })
    } catch (e) {
      console.log(e);
    }
  }
}
export function removePizza(pizza: CartPizza) {
  return (dispatch: Dispatch<CartAction>) => {
    try {
      dispatch({
        type: CartActionTypes.REMOVE_PIZZA,
        payload: pizza
      })
    } catch (e) {
      console.log(e);
    }
  }
}

export function removeCart() {
  return (dispatch: Dispatch<CartAction>) => {
    try {
      dispatch({
        type: CartActionTypes.REMOVE_CART,
      })
    } catch (e) {
      console.log(e);
    }
  }
}

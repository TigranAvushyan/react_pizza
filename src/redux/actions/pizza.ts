import { Dispatch } from "redux";
import { Pizza, PizzaAction, PizzaActionTypes } from "../../types/pizza";
import axios from "axios";
import { sortAndFilter } from "../../utils";


export const fetchPizzas = (category: null | number = null, sortBy: string = "name") => {
  return async (dispatch: Dispatch<PizzaAction>) => {
    try {
      dispatch({
        type: PizzaActionTypes.FETCH_PIZZA
      });
      const res = await axios.get("http://localhost:3001/pizzas");
      const data = sortAndFilter<Pizza>(
        res.data,
        (a, b) => a[sortBy] > b[sortBy],
        (i) => category === null ? false : i.category !== category);
      dispatch({
        type: PizzaActionTypes.FETCH_SUCCESS,
        payload: {
          items: data,
          category: category,
          sortBy: sortBy
        }
      });
    } catch (e) {
      dispatch({
        type: PizzaActionTypes.FETCH_ERROR,
        payload: "Error"
      });
    }

  };
};



import { PizzaAction, PizzaActionTypes, PizzaState } from "../../types/pizza";

const initialState: PizzaState = {
  error: null,
  loading: true,
  items: null,
  category: null,
  sortBy: "name"
};


const pizzas = (state = initialState, action: PizzaAction): PizzaState => {
  switch (action.type) {
    case PizzaActionTypes.FETCH_PIZZA:
      return {
        ...state,
        loading: true,
        items: null
      };
    case PizzaActionTypes.FETCH_SUCCESS:
      return {
        loading: false,
        items: action.payload.items,
        error: null,
        category: action.payload.category,
        sortBy: action.payload.sortBy
      };
    case PizzaActionTypes.FETCH_ERROR:
      return {
        loading: false,
        items: null,
        error: action.payload,
        category: null,
        sortBy: "name"
      };
    default:
      return state;
  }
};

export default pizzas;

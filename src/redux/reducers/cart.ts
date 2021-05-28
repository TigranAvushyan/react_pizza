import { CartAction, CartActionTypes, CartPizza, CartState } from "../../types/cart";

const initialState: CartState = {
  items: [],
  totalPrice: 0,
  totalCount: 0
};

export default (state = initialState, action: CartAction): CartState => {
  switch (action.type) {
    case CartActionTypes.ADD_PIZZA:
      return addPizza(action.payload, state);
    case CartActionTypes.DELETE_PIZZA:
      return deletePizza(action.payload, state);
    case CartActionTypes.REMOVE_PIZZA:
      return removePizza(action.payload, state);
    case CartActionTypes.REMOVE_CART:
      return {
        items: [],
        totalPrice: 0,
        totalCount: 0
      };
    default:
      return state;
  }
};

function addPizza(pizza: CartPizza, state: CartState): CartState {
  const items: CartPizza[] = state.items

  const totalPrice: number = state.totalPrice + pizza.price;
  const totalCount: number = state.totalCount + 1;

  for (let i = 0; i < items.length; i++) {
    if (items[i].id === pizza.id) {
      const price = items[i].price + pizza.pizzaPrice;
      const count = items[i].count + 1;
      items[i] = {
        ...pizza,
        price, count
      }
      return {
        items,
        totalPrice,
        totalCount
      };
    }
  }
  items.push(pizza)
  return {
    items, totalPrice, totalCount
  };
}

function deletePizza(pizza: CartPizza, state: CartState): CartState {
  if (pizza.count === 1) return state

  const items: CartPizza[] = state.items.map((i: CartPizza) => {
    if (pizza.id === i.id) {
      return {
        ...pizza,
        price: i.price - pizza.pizzaPrice,
        count: i.count - 1
      };
    }
    return i;
  });
  const totalPrice: number = state.totalPrice - pizza.pizzaPrice;
  const totalCount: number = state.totalCount - 1;
  return {
    items,
    totalPrice,
    totalCount
  };
}

function removePizza(pizza: CartPizza, state: CartState): CartState {
  const totalPrice: number = state.totalPrice - pizza.price;
  const totalCount: number = state.totalCount - pizza.count;
  let items: CartPizza[] = state.items.filter(i => i.id !== pizza.id);
  return {
    items,
    totalPrice,
    totalCount
  };
}

export interface CartPizza {
  id: number,
  pizzaId: number,
  pizzaImg: string,
  pizzaName: string,
  pizzaPrice: number,
  count: number,
  type: string,
  size: number,
  price: number
}

export interface CartState {
  items: CartPizza[] | [],
  totalPrice: number,
  totalCount: number,
}

export enum CartActionTypes {
  ADD_PIZZA = "ADD_PIZZA", REMOVE_CART = "REMOVE_CART", REMOVE_PIZZA = "REMOVE_PIZZA", UPDATE_PIZZA = "UPDATE_PIZZA", DELETE_PIZZA = "DELETE_PIZZA"
}

interface AddPizza {
  type: CartActionTypes.ADD_PIZZA,
  payload: CartPizza
}

interface RemovePizza {
  type: CartActionTypes.REMOVE_PIZZA,
  payload: CartPizza
}
interface DeletePizza {
  type: CartActionTypes.DELETE_PIZZA,
  payload: CartPizza
}

interface UpdatePizza {
  type: CartActionTypes.UPDATE_PIZZA,
  payload: string
}

interface RemoveCart {
  type: CartActionTypes.REMOVE_CART,
}

export type CartAction = AddPizza | RemovePizza | UpdatePizza | DeletePizza | RemoveCart;

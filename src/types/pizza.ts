export interface PizzaType  {
  "id": number,
  "type": string,
  "inStock": boolean,
  "price": number
}
export interface PizzaSize  {
  id: number,
  size: number,
  inStock: boolean,
  price: number
}


export interface Pizza {
  id: number,
  imageUrl: string,
  name: string,
  types: PizzaType[],
  sizes: PizzaSize[],
  minPrice: number,
  category: number,
  rating: number,
  [key: string]: any
}

export interface PizzaState {
  error: string | null,
  loading: boolean,
  items: Pizza[] | null,
  category: number | null,
  sortBy: string
}

export enum PizzaActionTypes {
  FETCH_PIZZA = "FETCH_PIZZAS",
  FETCH_SUCCESS = "FETCH_PIZZA_SUCCESS",
  FETCH_ERROR = "FETCH_PIZZA_ERROR",
}

interface FetchPizzaSuccessAction {
  type: PizzaActionTypes.FETCH_SUCCESS;
  payload: {
    items: Pizza[],
    category: number | null,
    sortBy: string
  };
}

interface FetchPizzaErrorAction {
  type: PizzaActionTypes.FETCH_ERROR;
  payload: string
}

interface FetchPizzaAction {
  type: PizzaActionTypes.FETCH_PIZZA;
}

export type PizzaAction =
    FetchPizzaAction
    | FetchPizzaErrorAction
    | FetchPizzaSuccessAction

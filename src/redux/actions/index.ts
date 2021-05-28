import * as PizzaActionCreator from "./pizza";
import * as CartActionCreator from "./cart";

export default {
  ...PizzaActionCreator,
  ...CartActionCreator
}

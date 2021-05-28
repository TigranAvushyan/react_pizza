import React, { FC } from "react";
import { Pizza, PizzaSize, PizzaType } from "../types/pizza";
import classNames from "classnames";
import { useActions } from "../hooks/useActions";
import { pizzaIdGenerator } from "../utils";
import { useTypedSelector } from "../hooks/useTypedSelector";

const PizzaBlock: FC<Pizza> = ({
  id,
  imageUrl,
  name,
  minPrice,
  sizes,
  types
}) => {
  const [activeType, setActiveType] = React.useState<PizzaType>(types[0]);
  const [activeSize, setActiveSize] = React.useState<PizzaSize>(sizes[0]);


  const totalPrice: number = minPrice + activeType.price + activeSize.price;

  React.useEffect(() => {
    const initialTypeId = activeState(types);
    const initialSizesId = activeState(sizes);
    if (!(
        initialTypeId === null || initialSizesId === null
    )) {
      setActiveType(types[initialTypeId]);
      setActiveSize(sizes[initialSizesId]);
    }
  }, []);
  const { addPizza } = useActions();
  const cartId: number = pizzaIdGenerator(id, activeType.id, activeSize.size);
  const addPizzaToCart = () => {
    addPizza({
      id: cartId,
      pizzaId: id,
      pizzaImg: imageUrl,
      pizzaName: name,
      pizzaPrice: totalPrice,
      price: totalPrice,
      count: 1,
      type: activeType.type,
      size: activeSize.size
    });
  };

  const count = useTypedSelector(state => {
    const res = state.cart.items.find(i => i.id === cartId);
    return res === undefined ? 0 : res.count;
  });

  return (
      <div className="pizza-block">
        <img
            className="pizza-block__image"
            src={ imageUrl }
            alt="Pizza"
        />
        <h4 className="pizza-block__title">{ name }</h4>
        <div className="pizza-block__selector">
          <ul>
            { types?.map(i => (
                <li
                    key={ i.id }
                    className={ classNames({
                      active: i.id === activeType.id,
                      disable: !i.inStock
                    }) }
                    onClick={ () => {
                      if (i.inStock) setActiveType(i);
                    } }
                >{ i.type }</li>
            )) }
          </ul>
          <ul>
            { sizes?.map(i => (
                <li
                    key={ i.id }
                    className={ classNames({
                      active: i.id === activeSize.id,
                      disable: !i.inStock
                    }) }
                    onClick={ () => {
                      if (i.inStock) setActiveSize(i);
                    } }
                >{ i.size } см.</li>
            )) }
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от { totalPrice } ₽</div>
          <div
              className="button button--outline button--add"
              onClick={ addPizzaToCart }
          >
            <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                  fill="white"
              />
            </svg>
            <span>Добавить</span>
            <i>{ count }</i>
          </div>
        </div>
      </div>
  );
};

function activeState(key: PizzaSize[] | PizzaType[]): number | null {
  for (let i of key) if (i.inStock) return i.id;
  return null;
}

export default PizzaBlock;

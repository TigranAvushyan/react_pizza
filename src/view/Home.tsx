import React, { FC } from "react";
import Category from "../components/Category";
import Sort from "../components/Sort";
import { useTypedSelector } from "../hooks/useTypedSelector";
import PizzaBlock from "../components/PizzaBlock";
import ContentLoader from "react-content-loader";
import { useActions } from "../hooks/useActions";

const Pizza: FC = () => {
  const {
    items: pizzas,
    error,
    loading,
    sortBy,
    category
  } = useTypedSelector(state => state.pizzas);
  const { fetchPizzas } = useActions();
  React.useEffect(() => {
    fetchPizzas();
  }, []);

  if (error) {
    return <h1>{ error }</h1>;
  }

  return (
      <div className="container">
        <div className="content__top">
          <Category
              sortBy={ sortBy }
          /> <Sort
            category={ category }
            sortBy={ sortBy }
        />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          { loading ?
            Array.from({ length: 10 },
                (_, i) => (
                    <ContentLoader
                        key={ i }
                        className="pizza-block"
                        speed={ 2 }
                        width={ 400 }
                        height={ 420 }
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb"
                    >
                      <circle cx="130" cy="130" r="130" />
                      <rect x="0" y="280" rx="0" ry="0" width="259" height="25" />
                      <rect x="0" y="320" rx="0" ry="0" width="259" height="50" />
                      <rect x="135" y="385" rx="10" ry="10" width="125" height="30" />
                      <rect x="0" y="385" rx="0" ry="0" width="125" height="30" />
                    </ContentLoader>
                )) :
            pizzas?.map(item => (
                <PizzaBlock key={ item.id } { ...item } />
            )) }
        </div>
      </div>
  );
};

export default Pizza;


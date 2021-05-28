import React from "react";
import classNames from "classnames";
import { useActions } from "../hooks/useActions";

const items: string[] = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

const Category = React.memo<{ sortBy: string }>(({
  sortBy
}) => {
  const { fetchPizzas } = useActions();
  const [activeCategory, setActiveCategory] = React.useState<number | null>(null);
  return (
      <div className="categories">
        <ul>
          <li
              className={ classNames({ active: activeCategory === null }) }
              onClick={ () => {
                setActiveCategory(null);
                fetchPizzas(null, sortBy);
              } }
          >
            Все
          </li>
          { items.map((item, idx) => (
              <li
                  key={ item + idx }
                  className={ classNames({ active: idx === activeCategory }) }
                  onClick={ () => {
                    setActiveCategory(idx);
                    fetchPizzas(idx, sortBy);
                  } }
              >
                { item }
              </li>
          )) }
        </ul>
      </div>
  );
});

export default Category;

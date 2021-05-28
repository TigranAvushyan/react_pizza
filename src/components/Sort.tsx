import React from "react";
import classNames from "classnames";
import { useActions } from "../hooks/useActions";

interface SortItem {
  name: string,
  type: string
}

const sortItem: SortItem[] = [
  {
    name: "популярности",
    type: "rating"
  }, {
    name: "цене",
    type: "minPrice"
  }, {
    name: "алфавиту",
    type: "name"
  }
];
const Sort = React.memo<{ category: number | null, sortBy: string }>(({
  category,
  sortBy
}) => {
  const [showPopup, setShowPopup] = React.useState<boolean>(false);
  const { fetchPizzas } = useActions();

  const current: SortItem = sortItem.find(i => i.type === sortBy) || sortItem[0];
  return (
      <div className="sort">
        <div
            className="sort__label"
            onClick={ () => {
              setShowPopup(prevState => !prevState);
            } }
        >
          <b>Сортировка по:</b>
          <span>{ current.name }</span>
        </div>
        { showPopup && <div className="sort__popup">
          <ul>
            { sortItem.map(i => (
                <li
                    key={ i.type + i.name }
                    className={ classNames({ active: i.type === sortBy }) }
                    onClick={ () => {
                      setShowPopup(false);
                      fetchPizzas(category, i.type);
                    } }
                >{ i.name }</li>
            )) }
          </ul>
        </div> }
      </div>
  );
});

export default Sort;

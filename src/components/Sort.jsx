import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { setSort } from "../redux/slices/filterSlice";

// function Sort({ value, onClickSort, hidden, onClickHiddenSort }) {
function Sort() {
  const [hidden, setHidden] = React.useState(false);

  const sort = useSelector((state) => state.filterSlice.sort);
  const dispatch = useDispatch();

  const onClickType = (i) => {
    dispatch(setSort(i));
    setHidden(!hidden);
  };
  const sortType = [
    { name: "popular", sortProperty: "rating" },
    { name: "alphabet", sortProperty: "name" },
    { name: "price", sortProperty: "price" },
    { name: "hight", sortProperty: "hight" },
  ];
  return (
    <div className="sort">
      <div className="sort-label">
        <b>Sort by:</b>
        <span onClick={() => setHidden(!hidden)}>{sort.name}</span>
      </div>
      {hidden && (
        <div className="sort-popup">
          <ul>
            {sortType.map((value, i) => (
              <li
                key={i}
                onClick={() => onClickType(value)}
                className={i === value ? "active" : ""}
              >
                {value.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;

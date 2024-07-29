import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSort, setHiddenSort } from '../redux/slices/filterSlice';
import { click } from '@testing-library/user-event/dist/click';

function Sort() {
  const { sort, hiddenSort } = useSelector(
    (state) => state.filterSlice,
  );
  const dispatch = useDispatch();
  const sortRef = React.useRef();

  const onClickType = (i) => {
    dispatch(setSort(i));
    dispatch(setHiddenSort(!hiddenSort));
  };
  const sortType = [
    { name: 'popular', sortProperty: 'rating' },
    { name: 'alphabet', sortProperty: 'name' },
    { name: 'price', sortProperty: 'price' },
    { name: 'hight', sortProperty: 'hight' },
  ];

  React.useEffect(() => {
    const handleClick = (e) => {
      if (hiddenSort === true) return;
      if (!sortRef.current.contains(e.target)) {
        dispatch(setHiddenSort(true));
      }
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [hiddenSort]);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort-label">
        <b>Sort by:</b>
        <span onClick={() => dispatch(setHiddenSort(!hiddenSort))}>
          {sort.name}
        </span>
      </div>
      {!hiddenSort && (
        <div className="sort-popup">
          <ul>
            {sortType.map((value, i) => (
              <li
                key={i}
                onClick={() => onClickType(value)}
                className={i === value ? 'active' : ''}>
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

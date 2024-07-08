import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSort } from '../redux/slices/filterSlice';
import { click } from '@testing-library/user-event/dist/click';

// function Sort({ value, onClickSort, hidden, onClickHiddenSort }) {
function Sort() {
  const [hidden, setHidden] = React.useState(false);

  const sort = useSelector((state) => state.filterSlice.sort);
  const dispatch = useDispatch();
  const sortRef = React.useRef();

  const onClickType = (i) => {
    dispatch(setSort(i));
    setHidden(!hidden);
  };
  const sortType = [
    { name: 'popular', sortProperty: 'rating' },
    { name: 'alphabet', sortProperty: 'name' },
    { name: 'price', sortProperty: 'price' },
    { name: 'hight', sortProperty: 'hight' },
  ];

  // React.useEffect(() => {
  //   document.addEventListener('click', (event) => {
  //     console.log(event);
  //   });
  // }, []);
  React.useEffect(() => {
    const handleClick = (e) => {
      if (hidden === false) return;
      if (!sortRef.current.contains(e.target)) {
        setHidden(false);
      }
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [hidden]);

  return (
    <div ref={sortRef} className="sort">
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

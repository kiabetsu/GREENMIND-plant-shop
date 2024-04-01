import React from 'react';

function Sort() {
  const [hidden, setHidden] = React.useState(false);
  const [sorty, setSorty] = React.useState(0);
  const sortType = ['popular', 'alphabet', 'price'];

  const onClickType = (i) => {
    setSorty(i);
    setHidden(!hidden);
  };

  return (
    <div className="sort">
      <div className="sort-label">
        <b>Sort by:</b>
        <span onClick={() => setHidden(!hidden)}>{sortType[sorty]}</span>
      </div>
      {hidden && (
        <div className="sort-popup">
          <ul>
            {sortType.map((value, i) => (
              <li key={i} onClick={() => onClickType(i)} className={i === sorty ? 'active' : ''}>
                {value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;

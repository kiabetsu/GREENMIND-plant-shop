import React from 'react';

function Sort({value, onClickSort, hidden, onClickHiddenSort}) {

  const sortType = [{name:'popular', sortProperty: 'rating'}, {name:'alphabet', sortProperty: 'name'}, {name:'price', sortProperty: 'price'}, {name: 'hight', sortProperty: 'hight'}];
  return (
    <div className="sort">
      <div className="sort-label">
        <b>Sort by:</b>
        <span onClick={() => onClickHiddenSort(!hidden)}>{value.name}</span>
      </div>
      {hidden && (
        <div className="sort-popup">
          <ul>
            {sortType.map((value, i) => (
              <li key={i} onClick={() => onClickSort(value)} className={i === value ? 'active' : ''}>
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

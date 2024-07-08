import React from 'react';
import { Plus } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';

import { useSelector } from 'react-redux';

function FlowerBlock({
  id,
  name,
  image,
  pot,
  colorPot,
  price,
  care,
  hight,
}) {
  const potType = ['With a pot', 'Without a pot'];
  const [activePot, setActivePot] = React.useState(0);
  const [activeColor, setActiveColor] = React.useState(0);
  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state.cartSlice.items.find((obj) => obj.id === id),
  );

  const addCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item = {
      id,
      name,
      image,
      pot: activePot,
      colorPot: activeColor,
      price,
      care,
      hight,
    };
    dispatch(addItem(item));
  };

  return (
    <div className="flowerBlock">
      <div className="flowerImage">
        <a href="">
          <img src={image} alt="plantPng" />
        </a>
      </div>
      <a href="">
        <h4>{name}</h4>
      </a>
      <div style={{ minHeight: 104 }}>
        <div className="flowerBlock__selector">
          <ul>
            {pot.map((value) => (
              <li
                key={value}
                onClick={() => setActivePot(value)}
                className={activePot === value ? 'active' : ''}>
                {potType[value]}
              </li>
            ))}
          </ul>
          <ul>
            {activePot === 0 &&
              colorPot.map((calor, i) => (
                <li
                  key={i}
                  onClick={() => setActiveColor(i)}
                  className={activeColor === i ? 'active' : ''}>
                  {calor}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="flowerBlock__bottom">
        <div className="flowerBlock__bottom__info">
          <div className="flowerBlock__bottom__hight">
            hight {hight} sm
          </div>
          <div className="flowerBlock__bottom__price">
            ₱ {price}.00
          </div>
        </div>
        <button
          onClick={onClickAdd}
          className="button button--outline button--add">
          <Plus size={18} strokeWidth={2} />
          &nbsp; <span>Add</span> &nbsp;{' '}
          {addCount > 0 ? <i>{addCount}</i> : ''}
        </button>
      </div>
    </div>
  );
}

export default FlowerBlock;

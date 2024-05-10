import React from 'react';
import { Plus } from 'lucide-react';

function FlowerBlock({ name, image, pot, colorPot, price, care, hight }) {
  const potType = ['With a pot', 'Without a pot'];
  const [activePot, setActivePot] = React.useState(0);
  const [activeColor, setActiveColor] = React.useState(0);
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
          <div className="flowerBlock__bottom__hight">hight {hight} sm</div>
          <div className="flowerBlock__bottom__price">₱ {price}.00</div>
        </div>
        <button className="button button--outline button--add">
          <Plus size={18} strokeWidth={2} />
          &nbsp; <span>Add</span>
        </button>
      </div>
    </div>
  );
}

export default FlowerBlock;

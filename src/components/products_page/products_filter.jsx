import CollapseCard from '../CollapseCard/CollapseCard';
import { useState } from 'react';
import MultiRangeSlider, { ChangeResult } from 'multi-range-slider-react';

function Filter({priceMin, priceMax, care, onSetCare, hight, onSetHight}) {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);
  // const [minPrice2, setMinPrice2] = useState(0);
  // const [maxPrice2, setMaxPrice2] = useState(0);

  const updateMas = (category, type) => {
    let mas = [...category];
    mas.indexOf(type) == -1 ? mas.push(type) : mas.splice(mas.indexOf(type), 1);
    return mas;
  };

  const careType = ['Easy', 'Medium', 'Hard'];
  const hightType = [
    [0, 50],
    [50, 90],
    [90, 120],
    [120, 150],
    [150, 180],
    [180, 999],
  ];

  return (
    <div className="filter">
      <CollapseCard title="Price">
        <div className="price_content">
          <div className="input-box">
            <div className="min-box">
              <div className="input-wrap">
                <span className="input-addon">Min</span>
                <input
                  type="text"
                  name="min-input"
                  className="input-field min-input"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
              </div>
            </div>
            <div className="max-box">
              <div className="input-wrap">
                <span className="input-addon">Max</span>
                <input
                  type="text"
                  name="max-input"
                  className="input-field max-input"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="range-slider">
            {/* <MultiRangeSlider
              min={0}
              max={10000}
              minValue={0}
              maxValue={10000}
              canMinMaxPriceSame={true}
              onInput={(e: ChangeResult) => {
                setMinPrice(e.minPrice);
                setMaxPrice(e.maxPrice);
              }}
              onChange={(e: ChangeResult) => {
                setMinPrice2(e.minPrice);
                setMaxPrice2(e.maxPrice);
              }}
              label={false}
              ruler={false}
              style={{ border: 'none', boxShadow: 'none', padding: '15px 10px' }}
              barLeftColor="darker(#f3f3f3, 8%)"
              barInnerColor="#C1DCDC"
              barRightColor="darker(#f3f3f3, 8%)"
              thumbLeftColor="#C1DCDC"
              thumbRightColor="#C1DCDC"
            /> */}
          </div>
        </div>
      </CollapseCard>

      <CollapseCard style={{ marginTop: '10px' }} title="Care">
        <div className="content">
          {careType.map((value, i) => (
            <label key={i} htmlFor={value} >
              <div className="type">
                <input name="ct-cb" id={value} onClick={() => {onSetCare(updateMas(care, i))}}  type="checkbox" />
                <span>{value}</span>
              </div>
            </label>
          ))}
        </div>
      </CollapseCard>

      <CollapseCard title="Hight">
        <div className="content">
          {hightType.map((value, i) => (
            <label key={i} htmlFor={value[0]} onClick={() => onSetHight(updateMas(hight, i))}>
              <div className="type">
                <input name="ht-cb" id={value[0]} type="checkbox" />
                {i !== hightType.length - 1 ? (
                  <span>
                    from {value[0]} to {value[1]} sm
                  </span>
                ) : (
                  <span>over {value[0]} sm</span>
                )}
              </div>
            </label>
          ))}
        </div>
      </CollapseCard>
      <button className="button button-apply">Apply</button>
    </div>
  );
}

export default Filter;

import { useState } from 'react';
import MultiRangeSlider, {
  ChangeResult,
} from 'multi-range-slider-react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setCare,
  setHight,
  setMaxPrice,
  setMaxPrice2,
  setMinPrice,
  setMinPrice2,
} from '../../redux/slices/filterSlice';
import CollapseCard from '../CollapseCard/CollapseCard';

// function Filter({ priceMin, priceMax, care, onSetCare, hight, onSetHight }) {
function Filter() {
  const { care, hight, minPrice, maxPrice, minPrice2, maxPrice2 } =
    useSelector((state) => state.filterSlice);
  const dispatch = useDispatch();

  const updateMas = (category, type) => {
    let mas = [...category];
    mas.indexOf(type) == -1
      ? mas.push(type)
      : mas.splice(mas.indexOf(type), 1);
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
                  onChange={(e) =>
                    dispatch(setMinPrice(e.target.value))
                  }
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
                  onChange={(e) =>
                    dispatch(setMaxPrice(e.target.value))
                  }
                />
              </div>
            </div>
          </div>
          {/* <div className="range-slider">
            <MultiRangeSlider
              min={minPrice}
              max={maxPrice}
              minValue={minPrice}
              maxValue={maxPrice}
              canMinMaxPriceSame={true}
              onInput={(e: ChangeResult) => {
                dispatch(setMinPrice(e.minPrice));
                dispatch(setMaxPrice(e.maxPrice));
              }}
              onChange={(e: ChangeResult) => {
                dispatch(setMinPrice2(e.minPrice));
                dispatch(setMaxPrice2(e.maxPrice));
              }}
              label={false}
              ruler={false}
              style={{
                border: 'none',
                boxShadow: 'none',
                padding: '15px 10px',
              }}
              barLeftColor="darker(#f3f3f3, 8%)"
              barInnerColor="#C1DCDC"
              barRightColor="darker(#f3f3f3, 8%)"
              thumbLeftColor="#C1DCDC"
              thumbRightColor="#C1DCDC"
            />
          </div> */}
        </div>
      </CollapseCard>

      <CollapseCard style={{ marginTop: '10px' }} title="Care">
        <div className="content">
          {careType.map((value, i) => (
            <label key={i} htmlFor={value}>
              <div className="type">
                <input
                  name="ct-cb"
                  id={value}
                  onClick={() =>
                    dispatch(setCare(updateMas(care, i)))
                  }
                  type="checkbox"
                />
                <span>{value}</span>
              </div>
            </label>
          ))}
        </div>
      </CollapseCard>

      <CollapseCard title="Hight">
        <div className="content">
          {hightType.map((value, i) => (
            <label key={i} htmlFor={value[0]}>
              <div className="type">
                <input
                  name="ht-cb"
                  id={value[0]}
                  onClick={() =>
                    dispatch(setHight(updateMas(hight, i)))
                  }
                  type="checkbox"
                />
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
    </div>
  );
}

export default Filter;

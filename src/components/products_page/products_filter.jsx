import CollapseCard from '../CollapseCard/CollapseCard';
import { useState } from 'react';
import MultiRangeSlider, { ChangeResult } from 'multi-range-slider-react';

function Filter() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [minPrice2, setMinPrice2] = useState(0);
  const [maxPrice2, setMaxPrice2] = useState(0);

  console.log(minPrice);

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
                  onChange={(e) => setMaxPrice(e)}
                />
              </div>
            </div>
          </div>
          <div className="range-slider">
            <MultiRangeSlider
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
            />
          </div>
        </div>
      </CollapseCard>

      <CollapseCard style={{ marginTop: '10px' }} title="Care">
        <div className="content">
          <label for="easy-ct-cb">
            <div className="type">
              <input name="ct-cb" id="easy-ct-cb" type="checkbox" />
              <span>Easy (for beginners)</span>
            </div>
          </label>
          <label htmlFor="medium-ct-cb">
            <div className="type">
              <input name="ct-cb" id="medium-ct-cb" type="checkbox" />
              <span>Medium (for the experienced)</span>
            </div>
          </label>
          <label htmlFor="hard-ct-cb">
            <div className="type">
              <input name="ct-cb" id="hard-ct-cb" type="checkbox" />
              <span>Hard (for the advanced)</span>
            </div>
          </label>
        </div>
      </CollapseCard>

      <CollapseCard title="Hight">
        <div className="content">
          <label for="0-50-ht-cb">
            <div className="type">
              <input name="ht-cb" id="0-50-ht-cb" type="checkbox" />
              <span>from 0 to 50 sm</span>
            </div>
          </label>
          <label for="50-90-ht-cb">
            <div className="type">
              <input name="ht-cb" id="50-90-ht-cb" type="checkbox" />
              <span>from 50 to 90 sm</span>
            </div>
          </label>
          <label for="90-120-ht-cb">
            <div className="type">
              <input name="ht-cb" id="90-120-ht-cb" type="checkbox" />
              <span>from 90 to 120 sm</span>
            </div>
          </label>
          <label for="120-150-ht-cb">
            <div className="type">
              <input name="ht-cb" id="120-150-ht-cb" type="checkbox" />
              <span>from 120 to 150 sm</span>
            </div>
          </label>
          <label for="150-180-ht-cb">
            <div className="type">
              <input name="ht-cb" id="150-180-ht-cb" type="checkbox" />
              <span>from 150 to 180 sm</span>
            </div>
          </label>
          <label for="0-50-ht-cb">
            <div className="type">
              <input name="ht-cb" id="0-50-ht-cb" type="checkbox" />
              <span>over 180 sm</span>
            </div>
          </label>
        </div>
      </CollapseCard>
    </div>
  );
}

export default Filter;

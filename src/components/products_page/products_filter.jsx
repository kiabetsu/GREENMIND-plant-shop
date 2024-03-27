import CollapseCard from '../CollapseCard/CollapseCard';

function Filter() {
  return (
    <div className="filter">
      <CollapseCard title="Price">
        <div className="price_content">
          <div className="price_field">
            <span>Min</span>
            <input type="number" className="inputMin" />
          </div>
          <div className="separator">-</div>
          <div className="price_field">
            <span>Max</span>
            <input type="number" className="inputMax" />
          </div>
        </div>
        <div className="slider">
          <div className="progress"></div>
        </div>
        <div className="range-input">
          <input type="range" className="range-min" min="0" max="10000" value="2500" />
          <input type="range" className="range-max" min="0" max="10000" value="7500" />
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

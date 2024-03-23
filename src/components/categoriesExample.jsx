import { MoveRight } from 'lucide-react';

function CategoriesExample() {
  return (
    <div className="categoriesExample">
      <h2>Categories</h2>
      <span>Find what you are looking for</span>
      <div className="categoriesExample__box">
        <div className="categoriesExample__box__options">
          <div className="cat1">
            <img src={'img/categories/Frame 36.png'} alt="" />
            <h4>Natural Plants</h4>
          </div>
          <div className="cat2">
            <img src={'img/categories/Frame 38.png'} alt="" />
            <h4>Plant Accessories</h4>
          </div>
          <div className="cat3">
            <img src={'img/categories/Frame 37.png'} alt="" />
            <h4>Artificial Plants</h4>
          </div>
        </div>
        <span className="Horem">Horem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        <button className="button">
          Explore&nbsp;
          <MoveRight strokeWidth={1} />
        </button>
      </div>
    </div>
  );
}

export default CategoriesExample;

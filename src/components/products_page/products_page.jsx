import Filter from './products_filter';
import Sort from '../Sort';
import FlowerBlock from '../flowerBlock';
import flowers from '../../assets/flowers.json';

function Products_page() {
  return (
    <div className="products_page">
      <div className="filter">
        <Filter />
      </div>
      <div className="products">
        <div className="content-top">
          <Sort />
        </div>
        <div className="content-items">
          {flowers.map((obj) => (
            <FlowerBlock key={obj.id} {...obj} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products_page;

import React from 'react';
import { SlidersHorizontal } from 'lucide-react';

import Filter from '../components/products_page/products_filter';
import Sort from '../components/Sort';
import FlowerBlock from '../components/FlowerBlock/flowerBlock';
import Skeleton from '../components/FlowerBlock/flowerBlockSkeleton';

function Products_page() {
  const [hiddenFilter, setHiddenFilter] = React.useState(false);
  const [popupFilter, setPopupFilter] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [flowersItems, setFlowersItems] = React.useState([]);

  React.useEffect(() => {
    fetch('https://660bbfc3ccda4cbc75dd9c98.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setFlowersItems(json);
        setIsLoading(false);
      });
    const onResize = () => setHiddenFilter(window.innerWidth >= 1200 ? false : true);
    window.addEventListener('resize', onResize);
    onResize();

    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div className="products_page">
      {!hiddenFilter && (
        <div className="filter">
          <Filter />
        </div>
      )}
      <div className="products">
        <div className="content-top">
          {hiddenFilter && (
            <div className="filter-button-popup">
              <button
                onClick={() => setPopupFilter(!popupFilter)}
                className="button button--outline button--add">
                <span>Filter</span> &nbsp; <SlidersHorizontal size={18} strokeWidth={2} />
              </button>
              {popupFilter && (
                <div className="filter--popup">
                  <Filter />
                </div>
              )}
            </div>
          )}
          <Sort />
        </div>
        <div className="content-items">
          {isLoading
            ? [...new Array(12)].map((_, i) => <Skeleton key={i} />)
            : flowersItems.map((obj) => <FlowerBlock key={obj.id} {...obj} />)}
        </div>
      </div>
    </div>
  );
}

export default Products_page;

import React from 'react';
import { SlidersHorizontal } from 'lucide-react';

import Filter from '../../components/products_page/products_filter';
import Sort from '../../components/Sort';
import FlowerBlock from '../../components/FlowerBlock/flowerBlock';
import Skeleton from '../../components/FlowerBlock/flowerBlockSkeleton';
import Search from '../../components/Search/index';
import Pagination from '../../components/Pagination/index';

function Products_page( {searchValue, setSearchValue}) {
  const [hiddenFilter, setHiddenFilter] = React.useState(false);
  const [popupFilter, setPopupFilter] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [flowersItems, setFlowersItems] = React.useState([]);

  const [hidden, setHidden] = React.useState(false);
  const [sort, setSort] = React.useState({name:'popular', sortProperty: 'rating'});

  const [filterPriceMin, setFilterPriceMin] = React.useState(0)
  const [filterPriceMax, setFilterPriceMax] = React.useState(30000)
  const [filterCare, setFilterCare] = React.useState([])
  const [filterHight, setFilterHight] = React.useState([])


  const onClickType = (i) => {
    setSort(i);
    setHidden(!hidden);
  };

  // ${filterCare == [] ? `care=[0, 1, 2]` : `care=${filterCare}`}
  React.useEffect(() => {
    setIsLoading(true);
//FIXME: доделать поиск: ошибка при несовпадении
//FIXME: доделать фильтрацию: не могу передать массив
//FIXME: додлетаь фИЛьтрацию: придумать как делать запрос с высотой
    const search = searchValue ? `&search=${searchValue}` : ``;

    fetch(`https://660bbfc3ccda4cbc75dd9c98.mockapi.io/items?${filterCare.length==0 ? `` : `care=${filterCare}`}${search}&sortBy=${sort.sortProperty}`)
      .then((res) => {

        return res.json();
      })
      .then((json) => {
        setFlowersItems(json);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
    const onResize = () => setHiddenFilter(window.innerWidth >= 1200 ? false : true);
    window.addEventListener('resize', onResize);
    onResize();

    return () => window.removeEventListener('resize', onResize);
  }, [sort, filterCare]);

  return (
    <div className="products_page">
      {!hiddenFilter && (
        <div className="filter">
          <Filter priceMin={filterPriceMin} priceMax={filterPriceMax} care={filterCare} onSetCare={(mas) => { setFilterCare(mas)}} hight={filterHight} onSetHight={(mas) => setFilterHight(mas)}/>
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
          <Search  searchValue={searchValue} setSearchValue={(value) =>setSearchValue(value)}/>
          <Sort value={sort} onClickSort={(i) => onClickType(i)} hidden={hidden} onClickHiddenSort={()=> setHidden(!hidden)}/>
        </div>
        <div className="content-items">
          {isLoading
            ? [...new Array(12)].map((_, i) => <Skeleton key={i} />)
            : flowersItems.map((obj) => <FlowerBlock key={obj.id} {...obj} />)}
        </div>
        <div className="content-bot">
            <Pagination />
        </div>
      </div>
    </div>
  );
}

export default Products_page;

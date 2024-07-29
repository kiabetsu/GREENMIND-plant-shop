import React, { useRef } from 'react';
import axios from 'axios';
import { SlidersHorizontal } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';

import Filter from '../../components/products_page/products_filter';
import Sort from '../../components/Sort';
import FlowerBlock from '../../components/FlowerBlock/flowerBlock';
import Skeleton from '../../components/FlowerBlock/flowerBlockSkeleton';
import Search from '../../components/Search/index';
import Pagination from '../../components/Pagination/index';
import NotFoundBlock from '../../components/NotFoundBlock';
import {
  setFilters,
  setHiddenFilter,
  setPopupFilter,
} from '../../redux/slices/filterSlice';
import { fetchPlants } from '../../redux/slices/plantSlice';

function Products_page() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);
  // const filterRef = React.useRef();

  // const [hiddenFilter, setHiddenFilter] = React.useState(false);
  // const [popupFilter, setPopupFilter] = React.useState(false);

  const {
    search,
    sort,
    care,
    hight,
    currentPage,
    hiddenFilter,
    popupFilter,
  } = useSelector((state) => state.filterSlice);
  const { status, items } = useSelector((state) => state.plantSlice);

  const sortType = [
    { name: 'popular', sortProperty: 'rating' },
    { name: 'alphabet', sortProperty: 'name' },
    { name: 'price', sortProperty: 'price' },
    { name: 'hight', sortProperty: 'hight' },
  ];

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sort = sortType.find(
        (obj) => obj.sortProperty === params.sort,
      );
      dispatch(setFilters({ ...params, sort }));

      isSearch.current = true;
    }
  }, []);

  React.useEffect(() => {
    if (!isSearch.current) {
      dispatch(fetchPlants());
    }

    isSearch.current = false;

    window.scrollTo(0, 0);
    const onResize = () =>
      dispatch(
        setHiddenFilter(window.innerWidth >= 1350 ? false : true),
      );
    window.addEventListener('resize', onResize);
    onResize();

    return () => window.removeEventListener('resize', onResize);
  }, [sort, care, hight, search, currentPage]);

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sort: sort.sortProperty,
        care,
        hight,
        currentPage,
      });

      navigate(`?${queryString}`);
    }

    isMounted.current = true;
  }, [sort, care, hight, search, currentPage]);

  // React.useEffect(() => {
  //   const handleClick = (e) => {
  //     if (popupFilter === false) return;
  //     if (!filterRef.current.contains(e.target)) {
  //       dispatch(setPopupFilter(true));
  //     }
  //   };
  //   document.addEventListener('click', handleClick);
  //   return () => {
  //     document.removeEventListener('click', handleClick);
  //   };
  // }, [popupFilter]);

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
                onClick={() => dispatch(setPopupFilter(!popupFilter))}
                className="button button--outline button--add">
                <span>Filter</span> &nbsp;{' '}
                <SlidersHorizontal size={18} strokeWidth={2} />
              </button>
              {popupFilter && (
                <div className="filter--popup">
                  <Filter />
                </div>
              )}
            </div>
          )}
          <Search />
          <Sort />
        </div>
        {status !== 'error' ? (
          <div className="content-items">
            {status === 'loading'
              ? [...new Array(12)].map((_, i) => <Skeleton key={i} />)
              : items.map((obj) => (
                  <FlowerBlock key={obj.id} {...obj} />
                ))}
          </div>
        ) : (
          <NotFoundBlock />
        )}
        <div className="content-bot">
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default Products_page;

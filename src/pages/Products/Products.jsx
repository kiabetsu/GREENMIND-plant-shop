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
import { setFilters } from '../../redux/slices/filterSlice';

function Products_page({ searchValue, setSearchValue }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const [hiddenFilter, setHiddenFilter] = React.useState(false);
  const [popupFilter, setPopupFilter] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [flowersItems, setFlowersItems] = React.useState([]);
  const [correctReq, setCorrectReq] = React.useState(true);

  // const [hidden, setHidden] = React.useState(false);
  const sort = useSelector((state) => state.filterSlice.sort);
  const care = useSelector((state) => state.filterSlice.care);
  const hight = useSelector((state) => state.filterSlice.hight);
  const currentPage = useSelector(
    (state) => state.filterSlice.currentPage,
  );

  const sortType = [
    { name: 'popular', sortProperty: 'rating' },
    { name: 'alphabet', sortProperty: 'name' },
    { name: 'price', sortProperty: 'price' },
    { name: 'hight', sortProperty: 'hight' },
  ];

  // const [sort, setSort] = React.useState({
  //   name: "popular",
  //   sortProperty: "rating",
  // });

  // const [filterPriceMin, setFilterPriceMin] = React.useState(0);
  // const [filterPriceMax, setFilterPriceMax] = React.useState(30000);

  // const [currentPage, setCurrentPage] = React.useState(1);

  // const onClickType = (i) => {
  //   dispatch(setSort(i));
  //   setHidden(!hidden);
  // };

  const fetchPlants = () => {
    setIsLoading(true);

    const search = searchValue ? `&name=${searchValue}` : ``;
    console.log(care, care === undefined, care.length);
    axios
      .get(
        `https://660bbfc3ccda4cbc75dd9c98.mockapi.io/items?page=${currentPage}&limit=12&${
          care.length === 0 ? '' : `care=[${care}]`
        }&${
          hight.length === 0 ? '' : `hightType=[${hight}]`
        }${search}&sortBy=${sort.sortProperty}`,
      )
      .then((res) => {
        setCorrectReq(true);
        setFlowersItems(res.data);
        setIsLoading(false);
      })
      .catch((e) => {
        if (e.response.status === 404) {
          setCorrectReq(false);
        }
      });
  };

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sort = sortType.find(
        (obj) => obj.sortProperty === params.sort,
      );
      console.log(params);
      dispatch(setFilters({ ...params, sort }));

      isSearch.current = true;
    }
  }, []);
  //TODO: сделать закрытие popup при нажатии в любую точку экрана

  React.useEffect(() => {
    if (!isSearch.current) {
      fetchPlants();
    }

    isSearch.current = false;

    window.scrollTo(0, 0);
    const onResize = () =>
      setHiddenFilter(window.innerWidth >= 1350 ? false : true);
    window.addEventListener('resize', onResize);
    onResize();

    return () => window.removeEventListener('resize', onResize);
  }, [sort, care, hight, searchValue, currentPage]);

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
  }, [sort, care, hight, searchValue, currentPage]);

  return (
    <div className="products_page">
      {!hiddenFilter && (
        <div className="filter">
          <Filter
          // priceMin={filterPriceMin}
          // priceMax={filterPriceMax}
          // care={filterCare}
          // onSetCare={(mas) => {
          //   setFilterCare(mas);
          // }}
          // hight={filterHight}
          // onSetHight={(mas) => setFilterHight(mas)}
          />
        </div>
      )}
      <div className="products">
        <div className="content-top">
          {hiddenFilter && (
            <div className="filter-button-popup">
              <button
                onClick={() => setPopupFilter(!popupFilter)}
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
          <Search
            searchValue={searchValue}
            setSearchValue={(value) => setSearchValue(value)}
          />
          <Sort
          // value={sort}
          // onClickSort={(i) => onClickType(i)}
          // hidden={hidden}
          // onClickHiddenSort={() => setHidden(!hidden)}
          />
        </div>
        {correctReq === true ? (
          <div className="content-items">
            {isLoading
              ? [...new Array(12)].map((_, i) => <Skeleton key={i} />)
              : flowersItems.map((obj) => (
                  <FlowerBlock key={obj.id} {...obj} />
                ))}
          </div>
        ) : (
          <NotFoundBlock />
        )}
        <div className="content-bot">
          <Pagination
          // onChangePage={(number) => onChangePage(number)}
          />
        </div>
      </div>
    </div>
  );
}

export default Products_page;

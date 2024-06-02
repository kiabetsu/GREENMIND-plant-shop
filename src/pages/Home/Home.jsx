import React from 'react';

import SearchBlock from '../../components/home_page/home_search';
import Sales from '../../components/home_page/home_sales';
import AboutUs from '../../components/home_page/home_aboutUs';
import CategoriesExample from '../../components/home_page/home_categoriesExample';

function Home() {
  return (
    <div className="home_page">
      <SearchBlock />
      <Sales />
      <AboutUs />
      <CategoriesExample />
    </div>
  );
}

export default Home;

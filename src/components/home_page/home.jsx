import SearchBlock from './home_search';
import Sales from './home_sales';
import AboutUs from './home_aboutUs';
import CategoriesExample from './home_categoriesExample';

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

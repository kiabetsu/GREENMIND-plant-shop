import './scss/app.scss';
import Header from './components/header';
import SearchBlock from './components/search';
import Sales from './components/sales';
import AboutUs from './components/aboutUs';
import CategoriesExample from './components/categoriesExample';



function App() {
  return (
    <div className="App">
      <Header />
      <SearchBlock />
      <Sales />
      <AboutUs />
      <CategoriesExample />
    </div>
  );
}

export default App;

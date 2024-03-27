import './scss/app.scss';
import Header from './components/header';
import Home from './components/home_page/home';
import Products_page from './components/products_page/products_page';



function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <Products_page />
    </div>
  );
}

export default App;

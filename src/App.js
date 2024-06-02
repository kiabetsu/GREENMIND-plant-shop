import './scss/app.scss';
import Header from './components/header';
import Home from './pages/Home/Home.jsx';
import Products from './pages/Products/Products.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import Cart from './pages/Cart/index.jsx';
import { Route, Routes } from 'react-router-dom';
import React from 'react';




function App() {

  const [searchValue, setSearchValue] = React.useState();
  console.log(searchValue);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home searchValue={searchValue} setSearchValue={(value) => setSearchValue(value)} />} />
        <Route path='/products' element={<Products searchValue={searchValue} setSearchValue={setSearchValue}/>} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;

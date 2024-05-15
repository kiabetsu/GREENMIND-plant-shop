import './scss/app.scss';
import Header from './components/header';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import NotFound from './pages/NotFound.jsx';
import Cart from './pages/Cart/index.jsx';
import { Route, Routes } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;

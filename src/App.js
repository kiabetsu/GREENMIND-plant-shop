import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import "./scss/app.scss";
import Header from "./components/header";
import Home from "./pages/Home/Home.jsx";
import Products from "./pages/Products/Products.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import Cart from "./pages/Cart/index.jsx";

import React from "react";

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home />
          }
        />
        <Route
          path="/products"
          element={
            <Products />
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

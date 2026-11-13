
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import App from "./App.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Cart from "./pages/Cart.jsx";
import "./index.css";
import Checkout from "./pages/Checkout.jsx";
import OrderSuccess from "./pages/OrderSuccess.jsx";

function Main() {

  const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("shopweb-cart");
        return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("shopweb-cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product, quantity) {
    const existingProduct = cart.find(
      item => item.id === product.id
    );

    if (existingProduct){
      setCart(cart.map(item =>
        item.id === product.id?{...item,quantity: item.quantity + quantity} : item
      ));
    }else{
      setCart([...cart,{...product,quantity}]);
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route
          path="/products/:id"
          element={<ProductDetails addToCart={addToCart} />}
        />

        <Route
          path="/cart"
          element={<Cart cart={cart} setCart={setCart} />}
        />

        <Route
          path="/checkout"
          element={<Checkout cart={cart} setCart={setCart} />}
        />

        <Route
          path="/order-success"
          element={<OrderSuccess />}
        />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

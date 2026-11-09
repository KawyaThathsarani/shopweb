import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router";

import App from "./App.jsx";
import "./index.css";
import ProductDetails from "./pages/ProductDetails.jsx";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Products/:id" element={<ProductDetails/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
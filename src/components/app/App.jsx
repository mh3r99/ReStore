import React from "react";
import "./App.css";
import withBookstoreService from "../hoc/with-bookstore-service";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
}

export default App;

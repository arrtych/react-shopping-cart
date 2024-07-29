import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import ShoppingCart from "./components/ShoppingCart";
import { ShoppingCartContextProvider } from "./context/ShoppingCartContext";
import { DrawerProvider } from "./context/DrawerContext";

function App() {
  return (
    <ShoppingCartContextProvider>
      <DrawerProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            {/* <Route path="/about" element={<About />} /> */}
          </Routes>
          <ShoppingCart />
        </Router>
      </DrawerProvider>
    </ShoppingCartContextProvider>
  );
}

export default App;

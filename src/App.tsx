import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import ShoppingCart from "./components/ShoppingCart";
import { ShoppingCartContextProvider } from "./context/ShoppingCartContext";

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const changeDrawer = (e: any) => {
    setOpenDrawer((e) => !e);
  };

  const closeDrawer = () => {
    setOpenDrawer(false);
  };

  return (
    <ShoppingCartContextProvider>
      <Router>
        <Navbar isOpen={openDrawer} onClick={changeDrawer} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
        <ShoppingCart isOpen={openDrawer} onClose={closeDrawer} />
      </Router>
    </ShoppingCartContextProvider>
  );
}

export default App;

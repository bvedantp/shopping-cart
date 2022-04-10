import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import About from './components/About'
import Home from './components/Home'
import Shop from './components/Shop'
import Nav from "./components/Nav";

const RouteSwitch = ()=> {
    return(
        <BrowserRouter basename="/shopping-cart">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/about" element={<About />} />
                <Route path="/nav" element={<Nav />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch
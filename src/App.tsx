import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Login from "./pages/Login";
import About from "./pages/About";
import Orders from "./pages/Orders";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <div className=" px-4 sm:px-[5w] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer></ToastContainer>
      <NavBar></NavBar>
      <SearchBar></SearchBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>\{" "}
        <Route path="/collection" element={<Collection></Collection>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/orders" element={<Orders></Orders>}></Route>
        <Route path="/product/:productId" element={<Product></Product>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/place-order" element={<PlaceOrder></PlaceOrder>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

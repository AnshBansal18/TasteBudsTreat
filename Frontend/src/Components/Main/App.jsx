import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Menu from "../Menu/Menu";
import About from "../AboutMe/About";
import Cart from "../Cart/Cart";
import Error from "./Error";
import ContactUs from "../ContactUs/ContactUs";
import Register_Restaurant from "../Admin/Restaurant/Register_Restaurant";
import MenuForm from "../Admin/Restaurant/Menu";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="Menu" element={<Menu />} />
            <Route path="About" element={<About />} />
            <Route path="Cart" element={<Cart />} />
            <Route path="Contact-Us" element={<ContactUs />} />
            <Route
              path="Admin/register_restaurant"
              element={<Register_Restaurant />}
            />
            <Route path="Admin/menu" element={<MenuForm />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

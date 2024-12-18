import React from "react";
import { useNavigate } from "react-router-dom";
import Favourite from "./Card/Favourite";
import Testimonials from "./Testimonials/Testimonials";
import ServicesSection from "./ServiceSection/ServiceSection";
import PopularCatagories from "./PopularCatagories/PopularCatagories";
import Footer from "../Footer/Footer";
import "./home.css";
function Home() {
  const recipie = useNavigate();
  const register = useNavigate();
  const redirect = () => {
    recipie("/menu");
  };
  const redirectRegister = () => {
    register("/about");
  };
  return (
    <div className=" flex justify-center">
      <div className=" w-4/5 overflow-x-hidden">
        <div className=" flex justify-center mt-16 max-md:flex-col-reverse">
          <div className=" w-1/3 flex flex-col justify-center align-middle max-md:items-center max-md:w-full">
            <p className=" font-Salsa text-6xl max-md:text-4xl max-md:w-3/4 max-md:text-center">
              It's Not just Food, it's an experience.
            </p>
            <div className=" max-md:flex z-10 text-lg max-md:justify-between max-md:w-full max-md:mt-6 font-WorkSans font-semibold">
              <button
                className="button max-md:p-3 max-md:m-0 bg-green-500 w-2/5   hover:scale-105 transition-all duration-300 hover:bg-olive"
                onClick={redirect}
              >
                Menu
              </button>
              <button
                className="button max-md:p-3 max-md:m-0 bg-stone-300  hover:scale-105 transition-all duration-300 hover:bg-peach text-black ml-11"
                onClick={redirectRegister}
              >
                Know-More
              </button>
            </div>
          </div>
          <div className=" flex items-center justify-center">
            <img
              className="h-fit w-auto"
              src=".\images\salad-with-fresh-vegetables-plate-top-view_169016-29107-removebg-preview.png"
            />
          </div>
        </div>
        <PopularCatagories />
        <Favourite />
        <Testimonials />
        <ServicesSection />
        <Footer />
      </div>
    </div>
  );
}

export default Home;

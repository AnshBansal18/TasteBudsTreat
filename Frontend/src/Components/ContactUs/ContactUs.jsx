import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import FAQ from "./FAQ/FAQ";

function ContactUs() {
  return (
    <div>
      <div>
        <div className=" h-64 relative mt-3">
          <div>
            <img
              src="https://b.zmtcdn.com/webFrontend/8015dbe54fd3659cc0366c1cc77f664c1601890512.jpeg?output-format=webp"
              className="w-full h-full object-cover absolute"
            />
          </div>
          <div className="h-full relative w-full">
            <p className="text-white font-WorkSans absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-5xl text-center">
              We Would Love To Hear From You!
            </p>
          </div>
        </div>
        <div className="flex justify-center flex-col items-center">
          <div className=" shadow rounded-lg p-8 relative w-1/2 shadow-white mb-8">
            <form className="relative z-10">
              <div className="mb-4">
                <label
                  className="block text-lg font-semibold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full text-black font-bold  px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-lg font-semibold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full text-black font-bold px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-lg font-semibold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  className="w-full text-black font-bold  px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className=" w-1/4 bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <FAQ />
        </div>
      </div>
      <div className="flex justify-center mt-7">
        <div className="w-4/5">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
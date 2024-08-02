// App.jsx

import React, { useState } from "react";
import "./Home.css";
import "../font.css";
import Typewriter from "typewriter-effect";

const App = () => {
  return (
    <div className="flex justify-start items-center h-full pt-16 px-5 lg:p-0">
      <div className="home-intro text-left">
        <h1 className="text-black font-bold text-left mx-0 px-0 text-3xl lg:text-5xl" style={{ fontFamily: 'Poppins, sans-serif',textAlign: 'left' }}>
        Our Global Reach.
        </h1>
        <p className="text-xl text-left mx-0 px-0" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        At Databrix, our mission is to empower businesses with transformative technology solutions that drive growth, efficiency, and success. We strive to be at the forefront of innovation, constantly pushing the boundaries to deliver unparalleled value to our clients..
        </p>
        
        <div className="contact-me">
          <button className="bg-red-500 text-white text-base font-semibold py-2 px-4 rounded-md">Get In Touch</button>
        </div>
      </div>
    </div>
  );
};

export default App;

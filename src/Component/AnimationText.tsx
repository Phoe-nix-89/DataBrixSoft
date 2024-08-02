// App.jsx

import React, { useState } from "react";
import "./Home.css";
import "../font.css";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

const App = () => {
  const [state] = useState({
    title: "Hi,",
    titleTwo: "I'm",
    titleThree: "Code&Coding",
  });

  return (
    <div className="home flex justify-center items-center h-full">
      <div className="home-intro">
        <h1 className="text-black font-bold text-left mx-0 px-0 hidden md:block" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Innovative IT solutions, Tailored for Success.
        </h1>
        <h2 className="text-black font-bold text-left mx-0 px-0 block md:hidden" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Innovative IT solutions, Tailored for Success.
        </h2>
        <p className="text-xl text-left mx-0 px-0" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Boost your effectiveness and expand your business with optimized
          solution.
        </p>
        <div className="text font-bold" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.3rem' }}>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: [
                "We do Website Development",
                "We do Mobile Application Development",
                "We do UI/UX Designing",
                "We do Cloud Services",
                "We do Graphics Designing and Branding",
                "We do Graphics Digital Marketing",
                "We do Graphics Digital Marketing",
                "We do Graphics Digital Marketing",
              ],
            }}
          />
        </div>
        <div className="contact-me">
        <Link to="/contact-us"><button className="bg-blue-500 text-white text-base font-semibold py-2 px-4 rounded-full">Get In Touch</button>
        </Link></div>
      </div>
    </div>
  );
};

export default App;

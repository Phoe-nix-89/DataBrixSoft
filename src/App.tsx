import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import LottieAnimation from './Component/loader';
import Home from './Component/Home';
import AiMl from './Component/Ai-ml';
import AboutUs from './Component/AboutUs';
import ContactUs from './Component/ContactUs';
import Security from './Component/security';
import NoFound from './Component/404NoFound';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Websitedevelopment from './Component/website-development';
import MobileApplication from './Component/mobile-application';
import SS from './Component/staffing-solution';
import CloudService from './Component/cloud-service'
import Careers from './Component/Carrer'
import NewFooter from './Component/NewFooter';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Delay loading for 2 seconds
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <div className="lottie-container" style={isLoading ? {} : { opacity: 0 }}>
        <LottieAnimation />
        </div>
      ) : (
        <div>
      
        <BrowserRouter basename="/">
        {/* <Routes>
        <Route path="/admin" element={<Home />} />
        </Routes> */}
       <Header />
        <br />
        <br />
        <br />
         
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services/website-develepment" element={<Websitedevelopment />} />
            <Route path="/services/mobile-develepment" element={<MobileApplication />} />
            <Route path="/services/cloud-service" element={<CloudService />} />
            <Route path="/services/security" element={<Security />} />
            <Route path="/services/staffing-solution" element={<SS />} />
            <Route path="/services/ai-ml" element={<AiMl />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="*" element={<NoFound />} />
          </Routes>
          {/* <Footer /> */}
          <NewFooter />
        </BrowserRouter>
      
      
      </div>
      )}
    </div>
  );
}

export default App;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin,faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/Databrifsoft Logo Source File/Final/DataBrifsoft Logo.png';
import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center text-white bg-black-800">
      {/* Section: Social media */}
      <section className="flex justify-between p-4" style={{ background: 'linear-gradient(135deg,red 0%,rgb(0, 0, 0) 100%)' }}>
        {/* Left */}
        <div className="me-5">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* Left */}
        {/* Right */}
        <div>
          <a href="#" className="text-white me-4">
          <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="#" className="text-white me-4">
          <FontAwesomeIcon icon={faLinkedin} />
          </a>
          {/* <a href="#" className="text-white me-4">
          <FontAwesomeIcon icon={faFacebookF} />
          </a> */}
          <a href="#" className="text-white me-4">
          <FontAwesomeIcon icon={faInstagram} />
          </a>
          {/* <a href="#" className="text-white me-4">
          <FontAwesomeIcon icon={faTwitter} />
          </a> */}
          {/* Other social media icons */}
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}
      {/* Section: Links  */}
      <section className="bg-slate-500">
        <div className="container mx-auto py-16">
          {/* Grid row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 ">
            {/* Grid column */}
            <div className="h-40 p-4 ">
              {/* Content */}
              <img src={logo} className="my-10" alt="logo"></img>
              {/* <div>
                <h6 className="text-lg font-bold uppercase mb-4 ">DataBrix SOFT</h6>
                <hr className="mb-4 mx-28" style={{ width: '60px', backgroundColor: 'red', height: '2px' }} />
                <p>Tailored for Success</p>
              </div> */}
              
              
            </div>
            {/* Links */}
            <div className="h-full w-40 mx-3 md:mx-32">
              {/* <h6 className="text-lg font-bold uppercase mb-4">Menu</h6>
              <hr className="mb-4 mx-14 " style={{ width: '60px', backgroundColor: 'red', height: '2px' }} /> */}
              <ul className='text-left'>
                <li className="p-2 hover:text-red-300 font-medium"><a href="#">Home</a></li>
                <li className="p-2 hover:text-red-300 font-medium"><a href="#">Service</a></li>
                <li className="p-2 hover:text-red-300 font-medium"><a href="#">Contect us</a></li>
                <li className="p-2 hover:text-red-300 font-medium"><a href="#">About us</a></li>
              </ul>
              
                {/* Other product links */}
            </div>
            <div className="h-40 text-left p-4 ">
              <h6 className="text-lg font-bold uppercase mb-4">Address</h6>
              <hr className="mb-4" style={{ width: '60px', backgroundColor: 'red', height: '2px' }} />
              <p className='mx-0 px-0 text-white'>12, Shiv Chamber, Sector 11, CBD Belapur, Navi Mumbai, Maharashtra 400614</p>
              <div>
          <a href="#" className="text-white me-4 hover:text-red-300">
          <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="#" className="text-white me-4 hover:text-red-300">
          <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="#" className="text-white me-4 hover:text-red-300">
          <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="text-white me-4 hover:text-red-300">
          <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="text-white me-4 hover:text-red-300">
          <FontAwesomeIcon icon={faTwitter} />
          </a>
          {/* Other social media icons */}
        </div>
                {/* Other product links */}
            </div>
            {/* Other grid columns */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      <div className="text-center py-3 bg-gray-700">
        © {new Date().getFullYear()} Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">@databrixsoft.com</a>
      </div>
      {/* Copyright */}
    </footer>
  );
};

export default Footer;

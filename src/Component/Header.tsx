import React, { useState, useEffect } from "react";
// import DropdownComponent from '../dropdown/DropdownComponent';
import { Link } from "react-router-dom";
import "./header.css";
import animationData from "../assets/Databrifsoft Logo Source File/Final/DataBrifsoft Logo.png";
import logoImage from "../assets/Databrifsoft Logo Source File/Final/DataBrifsoft Logo - Symbol.png";
import { faMicrochip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const HeaderComponent = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  // const [showSidebar, setShowSidebar] = useState(false);

  // Event handler for mouse enter (hover)
  const handleMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  // Event handler for mouse leave (hover out)
  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition > 0) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };
  const [expanded, setExpanded] = useState(false);

  const togglePanel = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openDropdown = () => {
    setShowDropdown(true);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  return (
    <>
      <header className="bg-[#023455] shadow-2xl z-40 fixed w-full">
        <nav
          className="container mx-auto flex items-center justify-between py-6"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="ml-4">
              <img className="h-10 w-auto" src={animationData} alt="" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white mr-3"
              onClick={() => {
                setShowDropdown(true);
              }}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <Link to="/">
              <a
                href="#"
                className="text-sm font-semibold leading-6  hover:text-red-700 text-white"
                onMouseLeave={handleMouseLeave}
              >
                Home
              </a>
            </Link>
            <div className="relative">
              <button
                type="button"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white  hover:text-red-700 pb-2"
                aria-expanded="false"
              >
                Service
                <svg
                  className="h-5 w-5 flex-none text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`${
                  isDropdownVisible ? "absolute" : "hidden"
                }  -left-64 z-10 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5`}
              >
                <div className="p-4">
                  <Link to="/services/ai-ml">
                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <FontAwesomeIcon
                          icon={faMicrochip}
                          style={{ width: "23px", height: "23px" }}
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href="#"
                          className="block font-semibold text-gray-900"
                        >
                          AI and ML
                          <span className="absolute inset-0"></span>
                        </a>
                        <p className="mt-1 text-gray-600">
                          Artificial Intelligence and Machine Learning
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/services/website-develepment">
                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 512"
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                        >
                          <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
                        </svg>
                      </div>
                      <div className="flex-auto">
                        <a
                          href="#"
                          className="block font-semibold text-gray-900"
                        >
                          Website Development
                          <span className="absolute inset-0"></span>
                        </a>
                        <p className="mt-1 text-gray-600">
                          Get a better understanding of your traffic
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/services/mobile-develepment">
                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                        >
                          <path d="M420.6 301.9a24 24 0 1 1 24-24 24 24 0 0 1 -24 24m-265.1 0a24 24 0 1 1 24-24 24 24 0 0 1 -24 24m273.7-144.5 47.9-83a10 10 0 1 0 -17.3-10h0l-48.5 84.1a301.3 301.3 0 0 0 -246.6 0L116.2 64.5a10 10 0 1 0 -17.3 10h0l47.9 83C64.5 202.2 8.2 285.6 0 384H576c-8.2-98.5-64.5-181.8-146.9-226.6" />
                        </svg>
                      </div>
                      <div className="flex-auto">
                        <a
                          href="#"
                          className="block font-semibold text-gray-900"
                        >
                          Mobile Development
                          <span className="absolute inset-0"></span>
                        </a>
                        <p className="mt-1 text-gray-600">
                          Speak directly to your customers
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/services/security">
                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <svg
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
                          />
                        </svg>
                      </div>
                      <div className="flex-auto">
                        <a
                          href="#"
                          className="block font-semibold text-gray-900"
                        >
                          Security
                          <span className="absolute inset-0"></span>
                        </a>
                        <p className="mt-1 text-gray-600">
                          Your customers’ data will be safe and secure
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/services/cloud-service">
                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 512"
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                        >
                          <path d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z" />
                        </svg>
                      </div>
                      <div className="flex-auto">
                        <a
                          href="#"
                          className="block font-semibold text-gray-900"
                        >
                          Cloud Services
                          <span className="absolute inset-0"></span>
                        </a>
                        <p className="mt-1 text-gray-600">
                          Connect with third-party tools
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/services/staffing-solution">
                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 flex-none text-gray-400"
                          viewBox="0 0 640 512"
                        >
                          <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z" />
                        </svg>
                      </div>
                      <div className="flex-auto">
                        <a
                          href="#"
                          className="block font-semibold text-gray-900"
                        >
                          Staffing Solution
                          <span className="absolute inset-0"></span>
                        </a>
                        <p className="mt-1 text-gray-600">
                          Build strategic funnels that will convert
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
                {/* <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
            <a href="#" className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
              <svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z" clipRule="evenodd" />
              </svg>
              Watch demo
            </a>
            <a href="#" className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
              <svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
              </svg>
              Contact sales
            </a>
          </div> */}
              </div>
            </div>
            <Link to="/about-us">
              <a
                className="text-sm font-semibold leading-6 text-white hover:text-red-700"
                onMouseLeave={handleMouseLeave}
              >
                About Us
              </a>
            </Link>
            <Link to="/careers">
              <a
                className="text-sm font-semibold leading-6 text-white hover:text-red-700"
                onMouseLeave={handleMouseLeave}
                onClick={closeDropdown}
              >
                Careers
              </a>
            </Link>
            <Link to="/contact-us">
              <a
                className="text-sm font-semibold leading-6 text-white hover:text-red-700"
                onMouseLeave={handleMouseLeave}
              >
                Contact Us
              </a>
            </Link>
          </div>
        </nav>
        <div
          className={showDropdown ? "lg:hidden" : "lg:hidden hidden"}
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 z-10"></div>
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#023455] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-8 w-auto" src={logoImage} alt="" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => {
                  setShowDropdown(false);
                }}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <div className="-mx-3">
                    {/* <button type="button" className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" aria-controls="disclosure-1" aria-expanded="false" onClick={()=>{setShowDropdown(false)}}>
                <svg className="h-5 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button> */}
                    <div className="mt-2 space-y-2" id="disclosure-1">
                      {/* <Link to="/" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Home</Link>
                <Link to="/services/website-develepment" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Services</Link>
                <Link to="/about-us" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">About Us</Link>
                <Link to="/contact" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Contact Us</Link> */}
                      <ul>
                        <li className="py-3">
                          <Link to="/">
                            <a
                              href="#"
                              className="text-sm font-semibold leading-6 text-white hover:text-red-700"
                              onMouseLeave={handleMouseLeave}
                              onClick={closeDropdown}
                            >
                              Home
                            </a>
                          </Link>
                        </li>
                        {/* <li className="py-3">
                        <Link to="/services/ai-ml">
                            <a
                              href="#"
                              className="text-sm font-semibold leading-6 text-gray-900 hover:text-red-700"
                              onMouseLeave={handleMouseLeave}
                              onClick={closeDropdown}
                            >
                              Service
                            </a>
                          </Link>
                        </li> */}
                        <li>
                        </li>
                       
                        <div className="rounded overflow-hidden">
      <div
        className="flex items-center justify-center p-4 cursor-pointer"
        onClick={togglePanel}
      >
        <h2 className="text-sm font-semibold leading-6 text-white hover:text-red-700 pl-6 pr-5">Data</h2>
        <svg
          className={`w-5 h-5 text-white transition-transform transform ${
            expanded ? 'rotate-90' : ''
          }`}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 18L15 12L9 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {expanded && (
        <div className="p-4 bg-white">
           <Link to="/services/ai-ml" onClick={closeDropdown}>
                                  <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                      <FontAwesomeIcon
                                        icon={faMicrochip}
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                      />
                                    </div>
                                    <div className="flex-auto">
                                      <a
                                        href="#"
                                        className="block font-semibold text-gray-900"
                                      >
                                        AI and ML
                                        <span className="absolute inset-0"></span>
                                      </a>
                                      <p className="mt-1 text-gray-600">
                                        Artificial Intelligence and Machine
                                        Learning
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                                <Link to="/services/website-develepment" onClick={closeDropdown}>
                                  <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 640 512"
                                        className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                      >
                                        <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
                                      </svg>
                                    </div>
                                    <div className="flex-auto">
                                      <a
                                        href="#"
                                        className="block font-semibold text-gray-900"
                                      >
                                        Website Development
                                        <span className="absolute inset-0"></span>
                                      </a>
                                      <p className="mt-1 text-gray-600">
                                        Get a better understanding of your
                                        traffic
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                                <Link to="/services/mobile-develepment" onClick={closeDropdown}>
                                  <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512"
                                        className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                      >
                                        <path d="M420.6 301.9a24 24 0 1 1 24-24 24 24 0 0 1 -24 24m-265.1 0a24 24 0 1 1 24-24 24 24 0 0 1 -24 24m273.7-144.5 47.9-83a10 10 0 1 0 -17.3-10h0l-48.5 84.1a301.3 301.3 0 0 0 -246.6 0L116.2 64.5a10 10 0 1 0 -17.3 10h0l47.9 83C64.5 202.2 8.2 285.6 0 384H576c-8.2-98.5-64.5-181.8-146.9-226.6" />
                                      </svg>
                                    </div>
                                    <div className="flex-auto">
                                      <a
                                        href="#"
                                        className="block font-semibold text-gray-900"
                                      >
                                        Mobile Development
                                        <span className="absolute inset-0"></span>
                                      </a>
                                      <p className="mt-1 text-gray-600">
                                        Speak directly to your customers
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                                <Link to="/services/security" onClick={closeDropdown}>
                                  <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                      <svg
                                        className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
                                        />
                                      </svg>
                                    </div>
                                    <div className="flex-auto">
                                      <a
                                        href="#"
                                        className="block font-semibold text-gray-900"
                                      >
                                        Security
                                        <span className="absolute inset-0"></span>
                                      </a>
                                      <p className="mt-1 text-gray-600">
                                        Your customers’ data will be safe and
                                        secure
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                                <Link to="/services/cloud-service" onClick={closeDropdown}>
                                  <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 640 512"
                                        className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                      >
                                        <path d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z" />
                                      </svg>
                                    </div>
                                    <div className="flex-auto">
                                      <a
                                        href="#"
                                        className="block font-semibold text-gray-900"
                                      >
                                        Cloud Services
                                        <span className="absolute inset-0"></span>
                                      </a>
                                      <p className="mt-1 text-gray-600">
                                        Connect with third-party tools
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                                <Link to="/services/staffing-solution" onClick={closeDropdown}>
                                  <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 flex-none text-gray-400"
                                        viewBox="0 0 640 512"
                                      >
                                        <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z" />
                                      </svg>
                                    </div>
                                    <div className="flex-auto">
                                      <a
                                        href="#"
                                        className="block font-semibold text-gray-900"
                                      >
                                        Staffing Solution
                                        <span className="absolute inset-0"></span>
                                      </a>
                                      <p className="mt-1 text-gray-600">
                                        Build strategic funnels that will
                                        convert
                                      </p>
                                    </div>
                                  </div>
                                </Link>
        </div>
      )}
    </div>

                        <li className="py-3">
                          <Link to="/about-us">
                            <a
                              className="text-sm font-semibold leading-6 text-white hover:text-red-700"
                              onMouseLeave={handleMouseLeave}
                              onClick={closeDropdown}
                            >
                              About Us
                            </a>
                          </Link>
                        </li>
                        <li className="py-3">
                          <Link to="/careers">
                            <a
                              className="text-sm font-semibold leading-6 text-white hover:text-red-700"
                              onMouseLeave={handleMouseLeave}
                              onClick={closeDropdown}
                            >
                              Careers
                            </a>
                          </Link>
                        </li>
                        <li className="py-3">
                          <Link to="/contact-us">
                            <a
                              className="text-sm font-semibold leading-6 text-white hover:text-red-700"
                              onMouseLeave={handleMouseLeave}
                              onClick={closeDropdown}
                            >
                              Contact Us
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderComponent;

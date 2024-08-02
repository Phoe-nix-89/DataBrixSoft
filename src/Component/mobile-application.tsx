import React, { useState } from "react";
import Globe from "../assets/mobile.png";
import Stages from "./AndroidStages";
import { faAndroid, faApple } from "@fortawesome/free-brands-svg-icons";
import { faBug, faMobileAlt, faPalette, faTools } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const MobileApplication = () => {
  const [showMoreCards, setShowMoreCards] = useState(false);

  const handleLearnMoreClick = () => {
    setShowMoreCards(true);
  };

  const handleReadLessClick = () => {
    setShowMoreCards(false);
  };
  return (
    <div className="">
    <div className="mobile-app">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 container mx-auto">
        <div>
          <div className="pt-[4rem] lg:pt-[7rem] md:py-[7rem] px-7 flex items-center">
            <div>
              <h1 className="text-3xl font-bold text-left mb-8 text-black mx-0 px-0">
                Welcome to DataBrix Soft - Your Premier Mobile App Development Partner
              </h1>
              <div className="">
                <p className="text-lg mb-4 text-left text-black mx-0 px-0">
                  At DataBrix Soft, we understand the significance of mobile applications in today's digital era. Mobile apps are essential tools for engaging with customers, enhancing user experiences, and driving business growth. Our team of expert developers specializes in crafting cutting-edge mobile applications tailored to your specific requirements and objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full h-full flex items-center justify-center">
            <img src={Globe} alt="" className="p-0 m-0 h-[30rem]" />
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gray-100">
  <div className="container mx-auto py-6">
    <h2 className="text-3xl font-semibold text-center text-3xl lg:text-5xl mb-8"
              style={{ fontFamily: "Poppins, sans-serif" }}>
      Mobile Application Development
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Android App Development */}
      <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 mx-8">
        <FontAwesomeIcon
          icon={faAndroid}
          className="text-3xl text-green-500 mb-4"
        />
        <h3 className="text-xl font-semibold mb-4">Android App Development</h3>
        <p className="text-gray-700 mb-4 text-justify">
          Our Android app development services focus on creating high-quality, feature-rich applications for the Android platform. From user-friendly interfaces to seamless performance, we leverage the latest tools and technologies to bring your app idea to life on Android devices.
        </p>
      </div>

      {/* iOS App Development */}
      <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 mx-8">
        <FontAwesomeIcon
          icon={faApple}
          className="text-3xl text-blue-500 mb-4"
        />
        <h3 className="text-xl font-semibold mb-4">iOS App Development</h3>
        <p className="text-gray-700 mb-4 text-justify">
          Our iOS app development services specialize in creating elegant and intuitive applications for Apple devices. From iPhones to iPads, we design and develop iOS apps that deliver exceptional user experiences and meet the highest standards of performance and security.
        </p>
      </div>

      {/* Cross-Platform App Development */}
      <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 mx-8">
        <FontAwesomeIcon
          icon={faMobileAlt}
          className="text-3xl text-purple-500 mb-4"
        />
        <h3 className="text-xl font-semibold mb-4">Cross-Platform App Development</h3>
        <p className="text-gray-700 mb-4 text-justify">
          Our cross-platform app development services enable you to reach a wider audience by building apps that run seamlessly on multiple platforms, including Android and iOS. Using frameworks like React Native or Flutter, we develop cost-effective and efficient cross-platform solutions without compromising on performance or user experience.
        </p>
      </div>

      {/* Render additional cards when "Learn More" is clicked */}
      {showMoreCards && (
        <>
          {/* Mobile UI/UX Design */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 mx-8">
            <FontAwesomeIcon
              icon={faPalette}
              className="text-3xl text-blue-500 mb-4"
            />
            <h3 className="text-xl font-semibold mb-4">Mobile UI/UX Design</h3>
            <p className="text-gray-700 mb-4 text-justify">
              Our mobile UI/UX design services focus on creating intuitive and visually appealing interfaces that enhance user engagement and satisfaction. From wireframing to prototyping, we prioritize usability and accessibility to deliver mobile apps that stand out in the competitive app market.
            </p>
          </div>

          {/* App Testing and QA */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 mx-8">
            <FontAwesomeIcon
              icon={faBug}
              className="text-3xl text-red-500 mb-4"
            />
            <h3 className="text-xl font-semibold mb-4">App Testing and QA</h3>
            <p className="text-gray-700 mb-4 text-justify">
              Our app testing and QA services ensure your mobile app meets the highest standards of quality and performance. From functional testing to usability testing, we identify and address any issues or bugs to deliver a flawless user experience across different devices and platforms.
            </p>
          </div>

          {/* App Maintenance and Support */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 mx-8">
            <FontAwesomeIcon
              icon={faTools}
              className="text-3xl text-yellow-500 mb-4"
            />
            <h3 className="text-xl font-semibold mb-4">App Maintenance and Support</h3>
            <p className="text-gray-700 mb-4 text-justify">
              Our app maintenance and support services ensure your mobile app remains up-to-date and performs optimally over time. From regular updates to bug fixes and feature enhancements, we provide ongoing support to keep your app running smoothly and meeting the evolving needs of your users.
            </p>
          </div>

          {/* Read Less Button */}
        </>
      )}

      {/* Conditional rendering of "Learn More" button */}
      
    </div>
    {!showMoreCards && (
        <div className="flex justify-center mt-8">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out"
            onClick={handleLearnMoreClick}
          >
            Learn More
          </button>
        </div>
      )}
      {showMoreCards && (
        <div className="flex justify-center mt-8">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out"
            onClick={handleReadLessClick}
          >
            Read Less
          </button>
        </div>
      )}
  </div>
</div>

    {/* <WebsiteDevelopmentPage /> */}
    <Stages />
  </div>
  
  );
};

export default MobileApplication;

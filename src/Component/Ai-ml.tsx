import React, { useState } from "react";
import Globe from "../assets/img/globe-bg.png";
import AnimatedText from "./AboutUsGlobeText";
import AboutUsLottie from "./AIMLlottie";
import Stages from "./AIMLstages";
import Slider from "./slider";
import animationData from "../assets/AI.jpg";
import cloudImg from '../assets/ai.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBalanceScale, faBrain, faChalkboardTeacher, faChartLine, faComments } from "@fortawesome/free-solid-svg-icons";
const Home = () => {

  const [showMoreCards, setShowMoreCards] = useState(false);

  const handleLearnMoreClick = () => {
    setShowMoreCards(true);
  };

  const handleReadLessClick = () => {
    setShowMoreCards(false);
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-0">
        <div className=" flex justify-center items-center h-full pt-16 px-5 md:pl-32">
          <div className="home-intro pt-4 md:pt-0">
            <h1
              className="text-black font-bold text-left mx-0 px-0 text-3xl lg:text-5xl"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Unlock the Power of Artificial Intelligence.
            </h1>
            <p
              className="text-xl text-left mx-0 px-0"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Welcome to Databrix Soft, where innovation meets intelligence. Our
              cutting-edge AI technology is revolutionizing industries,
              empowering businesses to achieve unprecedented efficiency,
              accuracy, and growth. With AI at the core of our solutions, we are
              redefining what's possible in the digital age.
            </p>

            <div className="contact-me">
              <button className="bg-red-500 text-white text-base font-semibold py-2 px-4 rounded-md">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center">
            {/* <img src={Globe} alt="" className="p-0 m-0 h-[40rem] w-[40rem]" /> */}
            <img src={cloudImg} alt="Data Security" />
            {/* <AboutUsLottie /> */}
          </div>
        </div>
      </div>
      <div>
      <div className="bg-gray-100">
  <div className="container mx-auto py-6">
    <h1 className="text-3xl font-semibold text-center mb-8 px-4 text-3xl lg:text-5xl" style={{ fontFamily: "Poppins, sans-serif" }}>
      Artificial Intelligence & Machine Learning
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Predictive Analytics */}
      <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 mx-8">
        <FontAwesomeIcon
          icon={faChartLine}
          className="text-3xl text-blue-500 mb-4"
        />
        <h3 className="text-xl font-semibold mb-4">Predictive Analytics</h3>
        <p className="text-gray-700 mb-4 text-justify">
          Our predictive analytics solutions leverage AI and machine learning algorithms to analyze data patterns and make accurate predictions. From sales forecasting to risk assessment, we help you gain valuable insights and make data-driven decisions to drive business growth.
        </p>
      </div>

      {/* Natural Language Processing */}
      <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 mx-8">
        <FontAwesomeIcon
          icon={faComments}
          className="text-3xl text-blue-500 mb-4"
        />
        <h3 className="text-xl font-semibold mb-4">Natural Language Processing</h3>
        <p className="text-gray-700 mb-4 text-justify">
          Our natural language processing (NLP) solutions enable machines to understand and interpret human language. From sentiment analysis to language translation, we help you unlock the power of textual data and enhance customer interactions through intelligent chatbots and virtual assistants.
        </p>
      </div>

      {/* Machine Learning Model Development */}
      <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 mx-8">
        <FontAwesomeIcon
          icon={faBrain}
          className="text-3xl text-blue-500 mb-4"
        />
        <h3 className="text-xl font-semibold mb-4">Machine Learning Model Development</h3>
        <p className="text-gray-700 mb-4 text-justify">
          Our machine learning model development services cover the entire lifecycle of model development, from data collection and preprocessing to model training and deployment. Whether you're building recommendation systems or image recognition algorithms, we provide expertise in building custom ML models tailored to your business needs.
        </p>
      </div>

      {/* Render additional cards when "Learn More" is clicked */}
      {showMoreCards && (
        <>
          {/* Deep Learning */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 mx-8">
            <FontAwesomeIcon
              icon={faBrain}
              className="text-3xl text-blue-500 mb-4"
            />
            <h3 className="text-xl font-semibold mb-4">Deep Learning</h3>
            <p className="text-gray-700 mb-4 text-justify">
              Our deep learning solutions harness the power of neural networks to tackle complex problems in computer vision, natural language processing, and more. From image recognition to speech synthesis, we deliver cutting-edge AI solutions to drive innovation and competitiveness.
            </p>
          </div>

          {/* AI Consulting */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 mx-8">
            <FontAwesomeIcon
              icon={faChalkboardTeacher}
              className="text-3xl text-blue-500 mb-4"
            />
            <h3 className="text-xl font-semibold mb-4">AI Consulting</h3>
            <p className="text-gray-700 mb-4 text-justify">
              Our AI consulting services provide strategic guidance and technical expertise to help you implement AI solutions that align with your business goals. From AI strategy development to implementation roadmaps, we support you at every stage of your AI journey to maximize ROI and drive business transformation.
            </p>
          </div>

          {/* AI Ethics and Governance */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 mx-8">
            <FontAwesomeIcon
              icon={faBalanceScale}
              className="text-3xl text-blue-500 mb-4"
            />
            <h3 className="text-xl font-semibold mb-4">AI Ethics and Governance</h3>
            <p className="text-gray-700 mb-4 text-justify">
              Our AI ethics and governance services help you address ethical considerations and regulatory compliance in AI development and deployment. From bias detection to transparency frameworks, we ensure responsible AI practices and build trust with stakeholders.
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

      </div>
      <Stages />
      <div className="grid md:grid-cols-2 gap-4  container mx-auto">
        <div>
          <div className="w-full h-full">
            <img
              src={animationData}
              alt=""
              className="p-0 md:mx-24 h-[40rem] w-[30rem]"
            />
            {/* <AboutUsLottie/> */}
          </div>
        </div>
        <div className="">
          <div className=" home flex justify-center items-center h-full pt-16 px-8 py-12 lg:p-0">
            <div className="home-intro">
              <h1
                className="text-black font-bold text-left mx-0 px-0"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Experience the Future Today.
              </h1>
              <p
                className="text-xl text-left mx-0 px-0"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Join the ranks of forward-thinking businesses that are embracing the future with AI from Databrix Soft. Contact us today to learn more about how our AI solutions can transform your business.
              </p>

              <div className="contact-me">
                <button className="bg-red-500 text-white text-base font-semibold py-2 px-4 rounded-md">
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

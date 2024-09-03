import React, { useState } from "react";
import Globe from "../assets/img/globe-bg.png";
import AnimatedText from "./AboutUsGlobeText";
import AboutUsLottie from "./AIMLlottie";
import Stages from "./AIMLstages";
import Slider from "./slider";
import animationData from "../assets/AI.jpg";
import aiml_img1 from '../assets/aiml_img1.png';
import aiml_img2 from '../assets/aiml_img2.png';
import aiml_img3 from '../assets/aiml_img3.png';
import trophy from '../assets/trophy.png';
import like from '../assets/like.png';
import phone from '../assets/phone.png';
import osbtm from '../assets/osbtm.png';
import cloudImg from '../assets/ai.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBalanceScale, faBrain, faChalkboardTeacher, faChartLine, faComments } from "@fortawesome/free-solid-svg-icons";
import './Ai-ml.css';
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
      <div className="top-div">
        <div className="top-div-text-button">
          <div className="top-div-top-text font-semibold">Unlock The Power Of Artificial Intellgence</div>
          <div className="top-div-mid-text">Welcome to Databrix Soft, where innovation meets intelligence. Our cutting-edge AI technology is revolutionizing industries, empowering businesses to achieve unprecedented efficiency, accuracy, and growth. With AI at the core of our solutions, we are redefining what's possible in the digital age.</div>
          <button className="top-div-bot-button">Get In Touch</button>
        </div>
        <div className="top-div-image">
          {/* <img src={aiml_img1} className="aiml-img1" alt="" /> */}
          <img src={aiml_img2} className="aiml_img2" alt="" />
        </div>
      </div>
      <div className="">
        <div className="">
          <div className="container mx-auto py-6">
            <h1 className="text-3xl font-semibold text-center mb-8 px-4 text-3xl lg:text-5xl second-div" style={{ fontFamily: "Poppins, sans-serif" }}>
              Artificial Intelligence & Machine Learning
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Predictive Analytics */}
              <div className="bg-[#023455] rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 mx-8">
                {/* <FontAwesomeIcon
                  icon={faChartLine}
                  className="text-3xl text-blue-500 mb-4"
                /> */}
                <div className="PA-div">
                  <img src={trophy} className="PA" alt="" />
                </div>
                <h3 className="text-xl text-white font-semibold mb-4">Predictive Analytics</h3>
                <p className="text-white mb-4 text-justify">
                  Our predictive analytics solutions leverage AI and machine learning algorithms to analyze data patterns and make accurate predictions. From sales forecasting to risk assessment, we help you gain valuable insights and make data-driven decisions to drive business growth.
                </p>
              </div>

              {/* Natural Language Processing */}
              <div className="bg-[#023455] rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 mx-8">
                <div className="PA-div">
                  <img src={like} className="PA" alt="" />
                </div>
                <h3 className="text-white text-xl font-semibold mb-4">Natural Language Processing</h3>
                <p className="text-white mb-4 text-justify">
                  Our natural language processing (NLP) solutions enable machines to understand and interpret human language. From sentiment analysis to language translation, we help you unlock the power of textual data and enhance customer interactions through intelligent chatbots and virtual assistants.
                </p>
              </div>

              {/* Machine Learning Model Development */}
              <div className="bg-[#023455] rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 mx-8">
                <div className="PA-div">
                  <img src={phone} className="PA" alt="" />
                </div>
                <h3 className="text-white text-xl font-semibold mb-4">Machine Learning Model Development</h3>
                <p className="text-white mb-4 text-justify">
                  Our machine learning model development services cover the entire lifecycle of model development, from data collection and preprocessing to model training and deployment. Whether you're building recommendation systems or image recognition algorithms, we provide expertise in building custom ML models tailored to your business needs.
                </p>
              </div>

              {/* Render additional cards when "Learn More" is clicked */}
              {showMoreCards && (
                <>
                  {/* Deep Learning */}
                  <div className="bg-[#023455] rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 mx-8">
                    <div className="PA-div">
                      <img src={trophy} className="PA" alt="" />
                    </div>
                    <h3 className="text-white text-xl font-semibold mb-4">Deep Learning</h3>
                    <p className="text-white mb-4 text-justify">
                      Our deep learning solutions harness the power of neural networks to tackle complex problems in computer vision, natural language processing, and more. From image recognition to speech synthesis, we deliver cutting-edge AI solutions to drive innovation and competitiveness.
                    </p>
                  </div>

                  {/* AI Consulting */}
                  <div className="bg-[#023455] rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 mx-8">
                    <div className="PA-div">
                      <img src={trophy} className="PA" alt="" />
                    </div>
                    <h3 className="text-white text-xl font-semibold mb-4">AI Consulting</h3>
                    <p className="text-white mb-4 text-justify">
                      Our AI consulting services provide strategic guidance and technical expertise to help you implement AI solutions that align with your business goals. From AI strategy development to implementation roadmaps, we support you at every stage of your AI journey to maximize ROI and drive business transformation.
                    </p>
                  </div>

                  {/* AI Ethics and Governance */}
                  <div className="bg-[#023455] rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 mx-8">
                    <div className="PA-div">
                      <img src={trophy} className="PA" alt="" />
                    </div>
                    <h3 className="text-white text-xl font-semibold mb-4">AI Ethics and Governance</h3>
                    <p className="text-white mb-4 text-justify">
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

      <div className="experience">
        <div className="ex-inner">
          <div className="ex-text">
            <div className="ex-text-top">
              <div>Experience the Future <br /> 
              Today</div>
              {/* <div></div> */}
              <div><img className="ex-text-img" src={osbtm} alt="" /></div>
            </div>
            <div className="ex-text-mid">
            Join the ranks of forward-thinking businesses that are embracing the future with AI from Databrix Soft. Contact us today to learn more about how our AI solutions can transform your business.
            </div>
            <div className="flex ex-but-div">
              <button className=" ex-text-bot">Get In Touch</button>
            </div>
          </div>
          <div className="ex-img">
            <div className="ex-img-div">
              <img className="ex-img-img" src={aiml_img3} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Stages />
    </div>
  );
};

export default Home;

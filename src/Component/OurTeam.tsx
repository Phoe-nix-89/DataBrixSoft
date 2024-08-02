import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./ourteam.css";
import Idea from "../assets/prerana.png";
import design from "../assets/Mahendra.png";
import development from "../assets/krutika.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const OurTeam = () => {

  return (
    <div className="bg-gradient-to-br from-red-300 via-green-300 to-blue-300 py-12">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-purple-900 mb-4">
          Our Team
        </h1>
        <h3 className="text-lg text-center text-pink-700 mb-8">
        Meet our exceptional team members, driving innovation and success. Each brings unique expertise and passion to deliver exceptional results. Get to know our dedicated professionals today.
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 w-full relative">
          <div className="w-full p-4 relative">
            <div className="my-class overflow-hidden shadow-lg relative">
              <img src={Idea} alt="CEO" className="w-full h-[36rem]" />
              <div className="h1-intro text-white p-4">
                <h1 className="text-2xl font-bold mb-2">Prerana</h1>
                <p className="text-lg text-black font-medium py-7 text-left">
                As the Recruitment Director at Databrix, I spearhead our talent acquisition strategy to attract top-tier professionals who drive our company's growth. By leveraging innovative recruitment methods and fostering strong partnerships, I ensure we assemble a diverse and skilled team aligned with our organizational objectives. Together, we shape a workforce poised for excellence.
                </p>
                {/* <a
                  href="https://www.linkedin.com/in/vidhya/"
                  className="text-blue-900 hover:text-pink-700"
                >
                 <FontAwesomeIcon
          icon={faLinkedin}
          className="text-3xl text-green-500 mb-4"
        />
                </a> */}
              </div>
            </div>
          </div>
          <div className="w-full p-4 relative">
            <div className="my-class overflow-hidden shadow-lg relative">
              <img src={design} alt="Director of Recruitment" className="w-full h-[36rem]" />
              <div className="h1-intro2 text-white p-4">
                <h1 className="text-2xl font-bold mb-2">Mahendra</h1>
                <p className="text-lg text-black font-medium py-7 text-left">
                As CEO of Databrix, my vision is to drive innovation and transform industries through cutting-edge data solutions. With a focus on excellence and customer-centricity, I lead our talented team in delivering tailored products that empower businesses to harness the full potential of their data. Together, we're shaping the future of technology.
                </p>
                {/* <a
                  href="https://www.linkedin.com/in/prerana/"
                  className="text-purple-900 hover:text-pink-700"
                >
                    <FontAwesomeIcon
          icon={faLinkedin}
          className="text-3xl text-green-500 mb-4"
        />
                </a> */}
              </div>
            </div>
          </div>
          <div className="w-full p-4 relative">
            <div className="my-class overflow-hidden shadow-lg relative">
              <img src={development} alt="HR Director" className="w-full h-[36rem]" />
              <div className="h1-intro3 text-white p-4">
                <h1 className="text-2xl font-bold mb-2">Krutika</h1>
                <p className="text-lg text-black font-medium py-7 text-left">
                As the HR Manager at Databrix, I am dedicated to fostering a vibrant and inclusive workplace culture. Through strategic talent acquisition, employee development initiatives, and fostering a positive work environment, I ensure our team thrives. By aligning HR strategies with company goals, we cultivate a dynamic workforce poised for success.
                </p>
                {/* <a
                  href="https://www.linkedin.com/in/rahul/"
                  className="text-purple-900 hover:text-pink-700"
                >
                    <FontAwesomeIcon
          icon={faLinkedin}
          className="text-3xl text-green-500 mb-4"
        />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    

  );
};

export default OurTeam;

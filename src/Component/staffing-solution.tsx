import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faUserTie,
  faGlobe,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import "./ss.scss";
import emp from '../assets/emp.jpg'
import empolyee from '../assets/empolyee.png'

const StaffingSolutions = () => {
  const [showMoreCards, setShowMoreCards] = useState(false);

  const handleLearnMoreClick = () => {
    setShowMoreCards(true);
  };

  const handleReadLessClick = () => {
    setShowMoreCards(false);
  };

  return (
    <section className="">
        <div className="ss-bg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:h-[40rem] container mx-auto">
        <div>
          <div className="pt-[4rem] lg:pt-[7rem] md:py-[10rem] px-7 flex items-center">
            <div>
              <h1 className="text-3xl font-bold text-left mb-8 text-white mx-0 px-0">
                Explore Our Staffing Solutions
              </h1>
              <div className="">
                <p className="text-lg mb-4 text-left text-white mx-0 px-0">
                  At DataBrix Soft, we offer comprehensive staffing solutions to
                  meet your workforce needs. Whether you're looking for
                  temporary, permanent, or contract-to-hire staff, our team is
                  dedicated to finding the right talent for your projects. With
                  our expertise in recruitment and industry knowledge, we ensure
                  a seamless hiring process and provide you with top-tier
                  candidates who align with your company's goals and culture.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
        <div className="pt-6">
            <img src={empolyee} alt="" className="h-full w-full" />
        </div>
        </div>
      </div>
      </div>
      <div className="bg-gray-100">
      <div className="container mx-auto py-6">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Staffing Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Temporary Staffing */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 mx-8">
            <FontAwesomeIcon
              icon={faBriefcase}
              className="text-3xl text-blue-500 mb-4"
            />
            <h3 className="text-xl font-semibold mb-4">Temporary Staffing</h3>
            <p className="text-gray-700 mb-4 text-justify">
              Our temporary staffing solutions provide you with skilled
              professionals on a short-term basis, allowing you to scale your
              workforce as needed for projects, seasonal workloads, or special
              assignments. Whether you need developers, designers, or project
              managers, we've got you covered.
            </p>
          </div>

          {/* Permanent Staffing */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105  mx-8">
            <FontAwesomeIcon
              icon={faUserTie}
              className="text-3xl text-blue-500 mb-4"
            />
            <h3 className="text-xl font-semibold mb-4">Permanent Staffing</h3>
            <p className="text-gray-700 mb-4 text-justify">
              Our permanent staffing solutions help you find the right talent to
              join your team on a long-term basis. We source, screen, and
              deliver top-tier candidates who align with your company culture
              and business goals, saving you time and resources in the hiring
              process.
            </p>
          </div>

          {/* Contract-to-Hire */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 mx-8">
            <FontAwesomeIcon
              icon={faCog}
              className="text-3xl text-blue-500 mb-4"
            />
            <h3 className="text-xl font-semibold mb-4">Contract-to-Hire</h3>
            <p className="text-gray-700 mb-4 text-justify">
              Our contract-to-hire staffing solutions offer a flexible hiring
              option that allows you to assess a candidate's performance before
              making a permanent commitment. It's an ideal choice for companies
              seeking to evaluate a candidate's fit within their organization
              while maintaining project continuity.
            </p>
          </div>

          {/* Render additional cards when "Learn More" is clicked */}
          {showMoreCards && (
            <>
              {/* Additional Card 1 */}
              <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 mx-8">
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className="text-3xl text-blue-500 mb-4"
                />
                <h3 className="text-xl font-semibold mb-4">
                  Freelance Staffing
                </h3>
                <p className="text-gray-700 mb-4 text-justify">
                  Our freelance staffing solutions offer access to a network of
                  independent professionals ready to support your projects on a
                  flexible basis. Whether you need a freelance developer,
                  designer, or content creator, we can connect you with the
                  right talent to get the job done.
                </p>
              </div>

              {/* Executive Staffing */}
              <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 mx-8">
                <FontAwesomeIcon
                  icon={faUserTie}
                  className="text-3xl text-blue-500 mb-4"
                />
                <h3 className="text-xl font-semibold mb-4">
                  Executive Staffing
                </h3>
                <p className="text-gray-700 mb-4 text-justify">
                  Our executive staffing solutions focus on recruiting top-level
                  talent for leadership and senior management positions within
                  your organization. We understand the importance of finding
                  executives who not only possess the necessary skills and
                  experience but also align with your company's vision and
                  values.
                </p>
              </div>

              {/* Global Staffing */}
              <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 mx-8">
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="text-3xl text-blue-500 mb-4"
                />
                <h3 className="text-xl font-semibold mb-4">Global Staffing</h3>
                <p className="text-gray-700 mb-4 text-justify">
                  Our global staffing solutions enable you to build a
                  distributed team of skilled professionals from around the
                  world. Whether you're expanding into new markets or seeking
                  specialized talent from specific regions, we can help you
                  navigate the complexities of international hiring and build a
                  diverse and dynamic workforce.
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 container mx-auto">
        <div>
            <img src={emp} alt="" />
        </div>
      <div className="py-[5rem] px-7 flex items-center">
      <div>
        <h1 className="text-3xl font-bold text-left mb-8 text-black mx-0 px-0">
          Unlock Your Potential with Our Staffing Solutions
        </h1>
        <div className="">
          <p className="text-lg mb-4 text-left text-black mx-0 px-0">
            Discover the power of our staffing solutions tailored to drive
            your business forward. With our extensive network and
            industry-leading expertise, we provide flexible staffing options
            designed to meet your evolving needs. From short-term staffing for
            project-based requirements to long-term recruitment for permanent
            roles, we offer a range of solutions to support your growth
            journey. Partner with us to unlock your potential and achieve
            success in today's competitive landscape.
          </p>
        </div>
      </div>
    </div>
      </div>
    </section>
  );
};

export default StaffingSolutions;

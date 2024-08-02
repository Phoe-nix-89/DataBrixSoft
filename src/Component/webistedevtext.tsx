import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faEdit, faPalette, faSearch, faServer, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './webdev.scss'

const WebsiteDevelopmentPage = () => {
  const [showMoreCards, setShowMoreCards] = useState(false);

  const handleLearnMoreClick = () => {
    setShowMoreCards(true);
  };

  const handleReadLessClick = () => {
    setShowMoreCards(false);
  };
  return (
    <div className="bg-gray-100 py-8">
  <div className="container mx-auto py-6">
    <h2 className="text-3xl font-semibold text-center mb-8">
      Website Development
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Frontend Development */}
      <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 mx-8">
        <FontAwesomeIcon
          icon={faCode}
          className="text-3xl text-blue-500 mb-4"
        />
        <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
        <p className="text-gray-700 mb-4 text-justify">
          Our frontend development services focus on creating engaging and user-friendly interfaces that captivate your audience. From responsive web design to interactive user experiences, we leverage the latest technologies and design trends to bring your vision to life.
        </p>
      </div>

      {/* Backend Development */}
      <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 mx-8">
        <FontAwesomeIcon
          icon={faServer}
          className="text-3xl text-blue-500 mb-4"
        />
        <h3 className="text-xl font-semibold mb-4">Backend Development</h3>
        <p className="text-gray-700 mb-4 text-justify">
          Our backend development services focus on building robust and scalable server-side logic to power your website's functionality. From database design to API integration, we ensure seamless communication between your frontend and backend systems.
        </p>
      </div>

      {/* CMS Development */}
      <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 mx-8">
        <FontAwesomeIcon
          icon={faEdit}
          className="text-3xl text-blue-500 mb-4"
        />
        <h3 className="text-xl font-semibold mb-4">CMS Development</h3>
        <p className="text-gray-700 mb-4 text-justify">
          Our CMS development services enable you to manage and update your website content with ease. Whether you need a custom CMS or integration with popular platforms like WordPress or Drupal, we provide flexible solutions tailored to your content management needs.
        </p>
      </div>

      {/* Render additional cards when "Learn More" is clicked */}
      {showMoreCards && (
        <>
          {/* E-commerce Development */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 mx-8">
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="text-3xl text-blue-500 mb-4"
            />
            <h3 className="text-xl font-semibold mb-4">E-commerce Development</h3>
            <p className="text-gray-700 mb-4 text-justify">
              Our e-commerce development services empower you to create secure and scalable online stores that drive sales and revenue. From product catalog management to payment gateway integration, we deliver tailor-made solutions to enhance your online presence and grow your business.
            </p>
          </div>

          {/* UI/UX Design */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 mx-8">
            <FontAwesomeIcon
              icon={faPalette}
              className="text-3xl text-blue-500 mb-4"
            />
            <h3 className="text-xl font-semibold mb-4">UI/UX Design</h3>
            <p className="text-gray-700 mb-4 text-justify">
              Our UI/UX design services focus on creating intuitive and visually appealing interfaces that delight users. From wireframing to prototyping, we prioritize user experience and usability to ensure your website engages and retains visitors.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 mx-8">
            <FontAwesomeIcon
              icon={faSearch}
              className="text-3xl text-blue-500 mb-4"
            />
            <h3 className="text-xl font-semibold mb-4">SEO Optimization</h3>
            <p className="text-gray-700 mb-4 text-justify">
              Our SEO optimization services improve your website's visibility and ranking in search engine results. From keyword research to on-page optimization, we implement strategies to attract organic traffic and enhance your online presence.
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

  );
};

export default WebsiteDevelopmentPage;

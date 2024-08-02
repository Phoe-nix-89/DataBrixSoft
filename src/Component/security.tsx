import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faExclamationCircle,
  faUserShield,
  faFileAlt,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import "./cs.scss";
import cloudImg from '../assets/secuirty.png'
import dataSecurityImg from '../assets/security.png'

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
        <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:h-[35rem] container mx-auto">
  <div>
    <div className="pt-[4rem] lg:pt-[7rem] md:py-[10rem] px-7 flex items-center">
      <div>
        <h1 className="text-3xl font-bold text-left mb-8 text-black mx-0 px-0">
          Enhance Your Data Security with Our Solutions
        </h1>
        <div className="">
          <p className="text-lg mb-4 text-left text-black mx-0 px-0">
            Protect your critical data and mitigate security risks with our comprehensive data security solutions. Whether you're safeguarding sensitive information, ensuring compliance with regulations, or defending against cyber threats, our team offers expertise in implementing robust security measures tailored to your business needs. From encryption and access controls to threat detection and incident response, we help you secure your data and maintain trust with your customers.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div className="flex justify-center pt-12">
      <img src={dataSecurityImg} alt="Data Security" className="" />
    </div>
  </div>
</div>

      </div>
      <div className="bg-gray-100">
  <div className="container mx-auto py-6">
    <h2 className="text-3xl font-semibold text-center mb-8">
      Data Security
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Data Encryption */}
      <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 mx-8">
        <FontAwesomeIcon
          icon={faLock}
          className="text-3xl text-blue-500 mb-4"
        />
        <h3 className="text-xl font-semibold mb-4">Data Encryption</h3>
        <p className="text-gray-700 mb-4 text-justify">
          Our data encryption services protect your sensitive information from unauthorized access and ensure confidentiality. By encrypting data at rest and in transit, we help you meet regulatory requirements and maintain the integrity of your data.
        </p>
      </div>

      {/* Threat Detection */}
      <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 mx-8">
        <FontAwesomeIcon
          icon={faExclamationCircle}
          className="text-3xl text-blue-500 mb-4"
        />
        <h3 className="text-xl font-semibold mb-4">Threat Detection</h3>
        <p className="text-gray-700 mb-4 text-justify">
          Our threat detection services monitor your network and systems for suspicious activities and potential security breaches. With advanced threat intelligence and real-time alerts, we help you identify and mitigate security threats before they cause harm to your organization.
        </p>
      </div>

      {/* Access Controls */}
      <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 mx-8">
        <FontAwesomeIcon
          icon={faUserShield}
          className="text-3xl text-blue-500 mb-4"
        />
        <h3 className="text-xl font-semibold mb-4">Access Controls</h3>
        <p className="text-gray-700 mb-4 text-justify">
          Our access control solutions manage user permissions and restrict unauthorized access to sensitive data and resources. By implementing role-based access controls and multi-factor authentication, we help you enforce security policies and prevent data breaches.
        </p>
      </div>

      {/* Render additional cards when "Learn More" is clicked */}
      {showMoreCards && (
        <>
          {/* Compliance Management */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 mx-8">
            <FontAwesomeIcon
              icon={faFileAlt}
              className="text-3xl text-blue-500 mb-4"
            />
            <h3 className="text-xl font-semibold mb-4">Compliance Management</h3>
            <p className="text-gray-700 mb-4 text-justify">
              Our compliance management services help you navigate regulatory requirements and maintain compliance with industry standards. From GDPR to HIPAA, we assist you in implementing policies and procedures to protect customer data and avoid legal penalties.
            </p>
          </div>

          {/* Incident Response */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 mx-8">
            <FontAwesomeIcon
              icon={faUserShield}
              className="text-3xl text-blue-500 mb-4"
            />
            <h3 className="text-xl font-semibold mb-4">Incident Response</h3>
            <p className="text-gray-700 mb-4 text-justify">
              Our incident response services help you effectively respond to security incidents and minimize their impact on your organization. From incident detection and analysis to containment and recovery, we provide rapid and coordinated responses to security breaches.
            </p>
          </div>

          {/* Security Training */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 mx-8">
            <FontAwesomeIcon
              icon={faUsers}
              className="text-3xl text-blue-500 mb-4"
            />
            <h3 className="text-xl font-semibold mb-4">Security Training</h3>
            <p className="text-gray-700 mb-4 text-justify">
              Our security training programs educate your employees about security best practices and raise awareness about potential threats. By promoting a culture of security awareness, we help reduce human errors and strengthen your overall security posture.
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
  <div className="flex justify-center">
    <img src={cloudImg} alt="Data Security" />
  </div>
  <div className="py-[5rem] px-7 flex items-center">
    <div>
      <h1 className="text-3xl font-bold text-left mb-8 text-black mx-0 px-0">
        Ensure Data Security with Our Solutions
      </h1>
      <div className="">
        <p className="text-lg mb-4 text-left text-black mx-0 px-0">
          Protect your valuable data and maintain compliance with our comprehensive data security solutions. Our services include encryption, access controls, threat detection, and incident response to safeguard your sensitive information from unauthorized access and cyber threats. Whether you're a small business or a large enterprise, we provide tailored solutions to address your specific security needs and ensure peace of mind.
        </p>
      </div>
    </div>
  </div>
</div>


    </section>
  );
};

export default StaffingSolutions;

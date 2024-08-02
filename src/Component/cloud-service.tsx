import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudUploadAlt,
  faCogs,
  faLightbulb,
  faShieldAlt,
  faDatabase,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";
import "./cs.scss";
import cloudImg from '../assets/cloud3rd.jpg'
import empolyee from '../assets/cloudbg.png'

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
      Explore Our Cloud Services
    </h1>
    <div className="">
      <p className="text-lg mb-4 text-left text-black mx-0 px-0">
        At DataBrix Soft, we provide cutting-edge cloud services to empower your business in the digital era. Whether you're looking to migrate to the cloud, optimize your cloud infrastructure, or develop cloud-native applications, our team has the expertise to meet your needs. With a focus on security, scalability, and performance, we help you leverage the full potential of cloud technology to drive innovation and growth. Partner with us to unlock the benefits of the cloud and stay ahead of the competition.
      </p>
    </div>
  </div>
</div>

        </div>
        <div>
        <div className="flex justify-center">
            <img src={empolyee} alt="" className="h-[35rem] w-[35rem]" />
        </div>
        </div>
      </div>
      </div>
      <div className="bg-gray-100">
  <div className="container mx-auto py-6">
    <h2 className="text-3xl font-semibold text-center mb-8">
      Cloud Services
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Cloud Migration */}
      <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 mx-8">
        <FontAwesomeIcon
          icon={faCloudUploadAlt}
          className="text-3xl text-blue-500 mb-4"
        />
        <h3 className="text-xl font-semibold mb-4">Cloud Migration</h3>
        <p className="text-gray-700 mb-4 text-justify">
          Our cloud migration services help businesses seamlessly transition
          their IT infrastructure and applications to cloud environments.
          Whether you're moving from on-premises servers or another cloud
          provider, we ensure a smooth migration process with minimal
          disruption to your operations.
        </p>
      </div>

      {/* Cloud Optimization */}
      <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 mx-8">
        <FontAwesomeIcon
          icon={faCogs}
          className="text-3xl text-blue-500 mb-4"
        />
        <h3 className="text-xl font-semibold mb-4">Cloud Optimization</h3>
        <p className="text-gray-700 mb-4 text-justify">
          Our cloud optimization services help you maximize the performance
          and cost-efficiency of your cloud infrastructure. We analyze your
          usage patterns, optimize resource allocation, and implement
          best-practice solutions to ensure your cloud environment delivers
          optimal results for your business.
        </p>
      </div>

      {/* Cloud Consulting */}
      <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 mx-8">
        <FontAwesomeIcon
          icon={faLightbulb}
          className="text-3xl text-blue-500 mb-4"
        />
        <h3 className="text-xl font-semibold mb-4">Cloud Consulting</h3>
        <p className="text-gray-700 mb-4 text-justify">
          Our cloud consulting services provide expert guidance and strategic
          advice to help you leverage cloud technology for business success.
          Whether you're planning a cloud migration, optimizing your existing
          infrastructure, or developing cloud-native applications, our team
          has the knowledge and experience to support your cloud initiatives.
        </p>
      </div>

      {/* Render additional cards when "Learn More" is clicked */}
      {showMoreCards && (
        <>
          {/* Cloud Security */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 mx-8">
            <FontAwesomeIcon
              icon={faShieldAlt}
              className="text-3xl text-blue-500 mb-4"
            />
            <h3 className="text-xl font-semibold mb-4">Cloud Security</h3>
            <p className="text-gray-700 mb-4 text-justify">
              Our cloud security services help you protect your data, applications, and infrastructure from cyber threats and vulnerabilities. From identity and access management to data encryption and threat detection, we implement robust security measures to safeguard your cloud environment and ensure compliance with industry regulations.
            </p>
          </div>

          {/* Cloud Backup and Recovery */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 mx-8">
            <FontAwesomeIcon
              icon={faDatabase}
              className="text-3xl text-blue-500 mb-4"
            />
            <h3 className="text-xl font-semibold mb-4">Cloud Backup and Recovery</h3>
            <p className="text-gray-700 mb-4 text-justify">
              Our cloud backup and recovery services provide reliable and scalable solutions to protect your critical data and ensure business continuity. With automated backups, disaster recovery planning, and continuous monitoring, we help you minimize downtime and recover quickly from unexpected disruptions.
            </p>
          </div>

          {/* Cloud DevOps */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 mx-8">
            <FontAwesomeIcon
              icon={faCodeBranch}
              className="text-3xl text-blue-500 mb-4"
            />
            <h3 className="text-xl font-semibold mb-4">Cloud DevOps</h3>
            <p className="text-gray-700 mb-4 text-justify">
              Our cloud DevOps services enable you to accelerate software development and deployment cycles while ensuring reliability and scalability in cloud environments. From CI/CD automation to infrastructure as code, we help streamline your development processes and improve collaboration between development and operations teams.
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
    <img src={cloudImg} alt="Cloud Services" className="h-[30rem] w-[40rem]" />
  </div>
  <div className="py-[5rem] px-7 flex items-center">
    <div>
      <h1 className="text-3xl font-bold text-left mb-8 text-black mx-0 px-0">
        Empower Your Business with Our Cloud Services
      </h1>
      <div className="">
        <p className="text-lg mb-4 text-left text-black mx-0 px-0">
          Harness the potential of cloud technology to propel your business forward. Our cloud services are designed to optimize performance, enhance scalability, and drive innovation. Whether you're migrating to the cloud, optimizing your existing infrastructure, or developing cloud-native applications, we offer a comprehensive suite of solutions to meet your needs. Partner with us to leverage the full power of the cloud and stay ahead in today's digital landscape.
        </p>
      </div>
    </div>
  </div>
</div>

    </section>
  );
};

export default StaffingSolutions;

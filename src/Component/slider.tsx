import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./slider.css";
import Idea from "../assets/idea.jpg";
import Requirement from "../assets/req.jpg";
import resarch from "../assets/search.jpg";
import design from "../assets/design.jpg";
import osbtm from '../assets/osbtm.png';

const Home = () => {
  const options = {
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    navText:["<button class='nav-btn prev-slide'><</button>","<button class='nav-btn next-slide'>></button>"],
    animateout: "slideOutup",
    nav: true,
    dots: true,
    center: true,
    margin: 0,
    responsive: {
      2000: {
        items: 4,
      },
      1800: {
        items: 3,
      },
      1600: {
        items: 3,
      },
      1500: {
        items: 3,
      },
      1400: {
        items: 3,
      },
      1300: {
        items: 2,
      },
      1200: {
        items: 2,
      },
      1100: {
        items: 2,
      },
      1000: {
        items: 2,
      },
      850: {
        items: 2,
      },
      500: {
        items: 1,
        innerWidth: "100%",
        outerWidth: "100%",
      },

    },
  };

  return (
    <div className="slider-bg flex flex-col ">
      <div className="text-5xl text-white pt-10">Our Services</div>
      <div className="flex justify-center">
        <img src={osbtm} className="btm" alt="" />
      </div>
      <div className="pt-0 pb-8 mt-0 mb-8 flex justify-center">
        <OwlCarousel className="owl-theme mt-10" {...options}>
          <div className="items p-4 flex justify-around">
            <div className="card">
              <img className="imageClass" src={Requirement} alt="" />
              <div className="intro">
                <h1 className="h1Class font-bold">Staffing solutions</h1>
                <p className="PClass text-left px-0 py-3">
                  This process is crucial for businesses to ensure they have the
                  right talent in place to meet their operational needs and
                  achieve their goals.
                </p>
                <ul className="text-left px-9 h-full">
                  <li className="text-left font-bold">
                    Recruitment and Sourcing:
                    <ul className="text-left font-medium">
                      <li className="text-left">
                        Identifying and attracting potential candidates through
                        various channels, such as job boards, social media,
                        networking events, and recruitment agencies.
                      </li>
                    </ul>
                  </li>

                  <li className="text-left font-bold">
                    Screening and Selection:
                    <ul className="text-left font-medium">
                      <li className="text-left">
                        Conducting interviews, assessments, and evaluations to
                        assess the skills, qualifications, and cultural fit of
                        candidates.
                      </li>
                    </ul>
                  </li>
{/* 
                  <li className="text-left">
                    Temporary and Contract Staffing:
                    <ul className="text-left">
                      <li className="text-left">
                        Hiring temporary or contract workers to fill short-term
                        or project-based needs.
                      </li>
                    </ul>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="items p-4 flex justify-center">
            <div className="card">
              <img className="imageClass" src={resarch} alt="" />
              <div className="intro2">
                <h1 className="h1Class font-bold">Cloud services</h1>
                <p className="PClass text-left px-0">
                  Cloud services refer to a wide range of on-demand computing
                  resources and applications delivered over the internet.
                  Instead of owning and maintaining physical hardware and
                  software, businesses and individuals can access and utilize
                  these services on a pay-as-you-go basis. Cloud services are
                  typically provided by third-party providers and are designed
                  to offer scalability, flexibility, and cost-effectiveness.
                  Here are some common types of cloud services
                </p>
              </div>
            </div>
          </div>
          <div className="items p-4 flex justify-center">
            <div className="card">
              <img className="imageClass" src={design} alt="" />
              <div className="intro3">
                <h1 className="h1Class font-bold">Software Development</h1>
                <p className="PClass text-left px-0">
                  Software development is the process of designing, coding,
                  testing, and maintaining software applications and systems. It
                  involves a series of steps that aim to produce high-quality:
                </p>
                <ul className="text-left font-bold px-9">
                  <li>
                    Requirement Analysis:
                    <ul className="text-left font-medium px-3">
                      <li className="text-left">
                        Understanding and defining the objectives and
                        requirements of the software
                      </li>
                    </ul>
                  </li>
                  <li>
                    Planning:
                    <ul className="text-left font-medium px-3">
                      <li>
                        Creating a project plan that includes timelines,
                        resources, and tasks.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Design:
                    <ul className="text-left font-medium px-3">
                      <li>
                        Creating the overall architecture and structure of the
                        software.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="items p-4 flex justify-center">
            <div className="card">
              <img className="imageClass" src={Idea} alt="" />
              <div className="intro">
                <h1 className="h1Class font-bold">Data Security</h1>
                <p className="PClass text-left px-0">
                Protecting your data is our top priority. With stringent encryption, access controls, and robust authentication mechanisms, we ensure your information remains secure both at rest and in transit. Our comprehensive data loss prevention solutions monitor and prevent unauthorized data leakage, safeguarding your sensitive information. Through regular security audits and employee training, we proactively mitigate risks and ensure your data's integrity. Trust us to safeguard your information and maintain your peace of mind in today's digital world.
                </p>
              </div>
            </div>
          </div>
          <div className="items p-4 flex justify-center" >
            <div className="card">
              <img className="imageClass" src={Requirement} alt="" />
              <div className="intro2">
                <h1 className="h1Class font-bold">AI/ML</h1>
                <p className="PClass text-left px-0">
                Securing your AI and ML data is paramount. We employ advanced encryption, access controls, and authentication methods to uphold confidentiality and integrity. Our robust data loss prevention measures thwart unauthorized access and leakage, safeguarding your valuable insights. Regular audits and employee training reinforce our commitment to security. With continuous monitoring and swift incident response, we ensure the reliability and trustworthiness of your AI and ML projects. Trust us for comprehensive data security.
                </p>
              </div>
            </div>
          </div>
          <div className="items p-4 flex justify-center">
            <div className="card">
              <img className="imageClass" src={design} alt="" />
              <div className="intro3">
                <h1 className="h1Class font-bold">Industrial Training</h1>
                <p className="PClass text-left px-0">
                Elevate your development training with our comprehensive approach to security. We prioritize safeguarding your training data through advanced encryption, access controls, and authentication methods. Our vigilant data loss prevention measures ensure protection against unauthorized access and leakage. With regular audits and tailored employee training, we fortify your team's security awareness. Trust our continuous monitoring and responsive incident protocols to uphold the integrity of your development training program.
                </p>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Home;

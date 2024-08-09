import React from "react";
import HomeLottie from "./HomeLottie";
import AnimatedText from "./AnimationText";
import Slider from "./slider";
import Cloud from "../assets/cloud.png";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import home1 from '../assets/home1.png';
import home2 from '../assets/home2.png';
import home3 from '../assets/home3.png';
import home4 from '../assets/home4.png';
import home5 from '../assets/home5.png';
import OurProtfolio from "./OurProtfolio";
import WhyChooseDataBrix from "./WhyChooseDataBrix";
import OurValuableClients from "./OurValuableClients";
import OurTopBlogs from "./OurTopBlogs";


const Home = () => {

  return (
    <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:h-[40rem] home-bg">
        <div className="px-8 py-16 md:px-16"><AnimatedText /></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 py-24">
        <div className="mx-auto my-6 lg:mx-auto">
          <div className="max-w-[250px] p-6 bg-white border border-gray-200 rounded-lg shadow forth-card h-full flex flex-col justify-between">
            <img src={home1} alt="" />
            <div className="font-bold">Planning</div>
            {/* <div>
              <a href="#">
                <h5 className="mb-2 mx-0 px-0 text-2xl font-bold tracking-tight text-gray-900 dark:text-black text-left">
                  Digital Marketing
                </h5>
              </a>
              <p className="mb-3 mx-0 px-0 font-normal text-gray-700 dark:text-black-400 text-left">
                DataBrix Soft deliver custom software solutions, data-driven
                marketing, and cloud-based services .
              </p>
            </div>

            <a
              href=""
              className="flex items-center justify-start px-3 py-2 text-sm font-medium text-center text-white read-more-button rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:read-more-button dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a> */}
          </div>
        </div>
        <div className="mx-auto my-6 lg:mx-auto">
          <div className="max-w-[250px] p-6 bg-white border border-gray-200 rounded-lg shadow forth-card h-full flex flex-col justify-between">
            <img src={home2} alt="" />
            <div className="font-bold">Designing</div>
            {/* <div>
              <a href="#">
                <h5 className="mb-2 mx-0 px-0 text-2xl font-bold tracking-tight text-gray-900 dark:text-black text-left">
                  Digital Marketing
                </h5>
              </a>
              <p className="mb-3 mx-0 px-0 font-normal text-gray-700 dark:text-black-400 text-left">
                DataBrix Soft deliver custom software solutions, data-driven
                marketing, and cloud-based services .
              </p>
            </div>

            <a
              href=""
              className="flex items-center justify-start px-3 py-2 text-sm font-medium text-center text-white read-more-button rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:read-more-button dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a> */}
          </div>
        </div>
        <div className="mx-auto my-6 lg:mx-auto">
          <div className="max-w-[250px] p-6 bg-white border border-gray-200 rounded-lg shadow first-card h-full flex flex-col justify-between">
            <img src={home3} alt="" />
            <div className="font-bold">Development</div>
            {/* <a href="#">
              <h5 className="mb-2 mx-0 px-0 text-2xl font-bold tracking-tight text-gray-900 dark:text-black text-left">
                ISO & Trademark
              </h5>
            </a>
            <p className="mb-3 mx-0 px-0 font-normal text-gray-700 dark:text-black-400 text-left">
              DataBrix Soft specializes in leveraging cutting-edge web
              technology to generate high returns for organizations across
              sectors.
            </p>

            <a
              href="#"
              className="inline-flex items-center justify-start px-3 py-2 text-sm font-medium text-center text-white read-more-button rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:read-more-button dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a> */}
          </div>
        </div>
        <div className="mx-auto my-6 lg:mx-auto">
          <div className="max-w-[250px] p-6 bg-white border border-gray-200 rounded-lg shadow second-card h-full flex flex-col justify-between">
            <img src={home4} alt="" />
            <div className="font-bold">Testing</div>
            {/* <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-dark  text-left">
                Web Development
              </h5>
            </a>
            <p className="mb-3 mx-0 px-0 font-normal text-gray-700 dark:text-black-400 text-left">
              DataBrix Soft is a premium web design, online marketing and IT
              Solution Company based in Navi Mumbai, serving high value clients.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-left px-3 py-2 text-sm font-medium text-center text-white read-more-button rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:read-more-button dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a> */}
          </div>
        </div>
        <div className="mx-auto my-6 lg:mx-auto">
          <div className="max-w-[250px] p-6 bg-white border border-gray-200 rounded-lg shadow third-card h-full flex flex-col justify-between">
            <img src={home5} alt="" />
            <div className="font-bold">Delivery</div>
            {/* <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-dark text-left">
                IT Solutions
              </h5>
            </a>
            <p className="mb-3 mx-0 px-0 font-normal text-gray-700 dark:text-black-400  text-left">
              DataBrix Soft have consistently excelled in delivering high
              quality customized web designs and services.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white read-more-button rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:read-more-button dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a> */}
          </div>
        </div>
        
      </div>
      <Slider/>
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 home-third-bg w-full">        
        <div className="">
          <img src={Cloud} alt="" className="p-0 m-0 h-96 w-96 mx-auto" />
        </div>
        <div>
          <div className="">
            <div className="home-intro py-16 lg:px-16 flex items-center">
              <div>
              <h1
                className="text-black font-bold text-left text-4xl md:text-5xl px-4 md:px-0 mx-0"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Cloud Hosting Services
              </h1>
              <p
                className="text-xl text-left px-4 md:px-0 mx-0"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Boost your effectiveness and expand your business with optimized
                solution.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-3 w-full lg:w-[40rem]">
                <div className="w-full">
                  <p className="text-xl text-left border-gray-200 rounded-lg shadow forth-card md:w-64 text-bold px-3 py-1 font-bold flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-patch-check-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708" />
                    </svg>
                    &nbsp; &nbsp; &nbsp;Cloud Services
                  </p>
                </div>

                <div className="w-full">
                  <p
                    className="text-xl text-left border-gray-200 rounded-lg shadow third-card md:w-64 text-bold px-3 py-1 font-bold flex items-center"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-patch-check-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708" />
                    </svg>
                    &nbsp; &nbsp; &nbsp;Hybrid Cloud
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-3 w-full lg:w-[40rem]">
                <div className="w-full">
                  <p
                    className="text-xl text-left border-gray-200 rounded-lg shadow second-card md:w-64 text-bold px-3 py-1 font-bold flex items-center"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-patch-check-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708" />
                    </svg>
                    &nbsp; &nbsp; &nbsp;Email Servers
                  </p>
                </div>
                <div className="w-full">
                  <p
                    className="text-xl text-left border-gray-200 rounded-lg shadow forth-card md:w-64 text-bold px-3 py-1 font-bold flex items-center"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-patch-check-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708" />
                    </svg>
                    &nbsp; &nbsp; &nbsp;Website Hosting
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-3 w-full lg:w-[40rem]">
                <div className="w-full">
                  <p
                    className="text-xl text-left border-gray-200 rounded-lg shadow third-card md:w-64 text-bold px-3 py-1 font-bold flex items-center"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-patch-check-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708" />
                    </svg>
                    &nbsp; &nbsp; &nbsp;File Storage
                  </p>
                </div>
                <div className="w-full">
                  <p
                    className="text-xl text-left border-gray-200 rounded-lg shadow second-card md:w-64 text-bold px-3 py-1 font-bold flex items-center"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-patch-check-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708" />
                    </svg>
                    &nbsp; &nbsp; &nbsp;Backup Systems
                  </p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <OurProtfolio/>
      <WhyChooseDataBrix />
      <OurValuableClients />
      <OurTopBlogs />
    </div>
  );
};

export default Home;

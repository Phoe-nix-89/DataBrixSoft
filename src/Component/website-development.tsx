import React from "react";
import Globe from "../assets/website.jpg";

import Stages from "./webDevStages";

import WebsiteDevelopmentPage from "./webistedevtext";
const Home = () => {
  return (
    <div className="">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 container mx-auto">
          <div>
            <div className="pt-[4rem] lg:pt-[7rem] md:py-[10rem] px-7 flex items-center">
              <div>
              <h1 className="text-3xl font-bold text-left mb-8 text-black mx-0 px-0 text-3xl">
                Welcome to DataBrix Soft - Your Premier Website Development
                Partner
              </h1>
              <div className="">
                <p className="text-lg mb-4 text-left text-black mx-0 px-0">
                  At DataBrix Soft, we understand the pivotal role a website
                  plays in establishing your online presence and driving
                  business growth. With the digital landscape evolving rapidly,
                  having a professionally crafted website is no longer an option
                  but a necessity. Our team of skilled developers is committed
                  to delivering bespoke website solutions tailored to your
                  unique needs.
                </p>
              </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center pt-7">
              <img src={Globe} alt="" className="h-[30rem]" />
              {/* <AboutUsLottie/> */}
              {/* <WebDevLotiie /> */}
            </div>
          </div>
        </div>
      </div>
      <WebsiteDevelopmentPage />
      <Stages />
    </div>
  );
};

export default Home;

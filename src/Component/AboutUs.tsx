import React from "react";
import Globe from "../assets/img/globe-bg.png";
import AnimatedText from "./AboutUsGlobeText";
import AboutUsLottie from "./AboutUsLottie";
import Stages from "./stages";
import OurEmpolyee from './OurEmpolyee'
import Slider from "./slider";
import OurTeam from "./OurTeam";
const Home = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:h-[40rem]">
          <div className="">
            <AnimatedText />
          </div>
          <div>
            <div className="w-full h-full">
              <AboutUsLottie />
            </div>
          </div>
        </div>
      </div>
      <OurTeam/>
      <OurEmpolyee />
      <Stages />
      {/*<Slider /> */}
    </div>
  );
};

export default Home;

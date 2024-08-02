import React from "react";
import ML from "../assets/ML.jpeg";
import DL from "../assets/weekai.jpg";
import resarch from "../assets/reinforce.jpeg";
import design from "../assets/nlp.jpg";
import development from "../assets/reinforce.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faPalette,
  faSearch,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import "./about-us.scss";
interface StageItem {
  image: string;
  title: string;
  style?: {
    backgroundColor: string;
  };
  icon: string;
}

interface ProjectAssistanceState {
  projectData: {
    stages?: {
      isActive: boolean;
      data: StageItem[];
    };
  };
}

function Stages() {
  return (
    <div
      className="app-pa-stage-layout w-full"
      style={{
        background:
          "linear-gradient(180deg, #94ecffa6, #ffffffa6 100%, #bfe8ffa6 0.01%)",
      }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          <div className="col-span-1 flex justify-center">
            <div className="app-pa-stage-card w-[20rem]">
              <div className="app-pa-stage-index">1</div>
              <div>
                <img
                  src={ML}
                  className="image"
                  alt=""
                  srcSet=""
                  onError={(
                    e: React.SyntheticEvent<HTMLImageElement, Event>
                  ) => {
                    e.currentTarget.onerror = null;
                  }}
                />
              </div>
              <div
                className="app-pa-stage-wrapper"
                style={{
                  background:
                    "linear-gradient(rgba(248, 248, 249, 0.5) 0%, rgba(255, 199, 253, 1) 100%)",
                }}
              >
                <div className="icon">
                  {/* <img src="" alt="" srcSet="" /> */}
                  <FontAwesomeIcon icon={faLightbulb} className="image" />
                </div>
                <div
                  className="title1"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  MACHINE LEARNING
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex justify-center">
            <div className="app-pa-stage-card w-[20rem]">
              <div className="app-pa-stage-index">2</div>
              <div>
                <img
                  src={DL}
                  className="image"
                  alt=""
                  srcSet=""
                  onError={(
                    e: React.SyntheticEvent<HTMLImageElement, Event>
                  ) => {
                    e.currentTarget.onerror = null;
                  }}
                />
              </div>
              <div
                className="app-pa-stage-wrapper"
                style={{
                  background:
                    "linear-gradient(rgba(248, 248, 249, 0.5) 0%, rgba(255, 199, 253, 1) 100%)",
                }}
              >
                <div className="icon">
                  <FontAwesomeIcon icon={faTasks} className="image" />
                </div>
                <div
                  className="title1"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  DEEP LEARNING
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex justify-center">
            <div className="app-pa-stage-card w-[20rem]">
              <div className="app-pa-stage-index">3</div>
              <div>
                <img
                  src={resarch}
                  className="image"
                  alt=""
                  srcSet=""
                  onError={(
                    e: React.SyntheticEvent<HTMLImageElement, Event>
                  ) => {
                    e.currentTarget.onerror = null;
                  }}
                />
              </div>
              <div
                className="app-pa-stage-wrapper"
                style={{
                  background:
                    "linear-gradient(rgba(248, 248, 249, 0.5) 0%, rgba(255, 199, 253, 1) 100%)",
                }}
              >
                <div className="icon">
                  <FontAwesomeIcon icon={faCode} className="image" />
                </div>
                <div
                  className="title1"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  REINFORCE LEARNING
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
          <div className="col-span-1 flex justify-center lg:justify-end lg:mr-24">
            <div className="app-pa-stage-card w-[20rem]">
              <div className="app-pa-stage-index">4</div>
              <div>
                <img
                  src={design}
                  className="image"
                  alt=""
                  srcSet=""
                  onError={(
                    e: React.SyntheticEvent<HTMLImageElement, Event>
                  ) => {
                    e.currentTarget.onerror = null;
                  }}
                />
              </div>
              <div
                className="app-pa-stage-wrapper"
                style={{
                  background:
                    "linear-gradient(rgba(248, 248, 249, 0.5) 0%, rgba(255, 199, 253, 1) 100%)",
                }}
              >
                <div className="icon">
                  <FontAwesomeIcon icon={faPalette} className="image" />
                </div>
                <div
                  className="title1"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  NLP
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex justify-center lg:justify-start lg:ml-24">
            <div className="app-pa-stage-card w-[20rem]">
              <div className="app-pa-stage-index">5</div>
              <div>
                <img
                  src={development}
                  className="image"
                  alt=""
                  srcSet=""
                  onError={(
                    e: React.SyntheticEvent<HTMLImageElement, Event>
                  ) => {
                    e.currentTarget.onerror = null;
                  }}
                />
              </div>
              <div
                className="app-pa-stage-wrapper"
                style={{
                  background:
                    "linear-gradient(rgba(248, 248, 249, 0.5) 0%, rgba(255, 199, 253, 1) 100%)",
                }}
              >
                <div className="icon">
                  <FontAwesomeIcon icon={faCode} className="image" />
                </div>
                <div
                  className="title1"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  GENERAL AI
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stages;

import React from "react";
import reactnative from "../assets/reactnative.png";
import native from "../assets/native.png";
import flutter from "../assets/flutter.png";
import Kotlin from "../assets/Kotlin.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDatabase,
  faDiamond,
  faPalette,
  faParagraph,
  faSearch,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import "./about-us.scss";
import { faAngular, faBootstrap, faCss3, faGolang, faHtml5, faJava, faJs, faNode, faNodeJs, faPhp, faPython, faReact, faTypo3, faVuejs } from "@fortawesome/free-brands-svg-icons";
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
          "#bfe8ffa6",
      }}
    >
      <div className="container mx-auto py-6">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="col-span-1 flex justify-center">
            <div className="app-pa-stage-card w-[20rem]">
              {/*  */}
              <div>
                <img
                  src={reactnative}
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
                  <FontAwesomeIcon icon={faCode} className="image" />
                </div>
                <div
                  className="title1"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  React Native
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex justify-center">
            <div className="app-pa-stage-card w-[20rem]">
              {/*  */}
              <div>
                <img
                  src={native}
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
                  Native Script
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex justify-center">
            <div className="app-pa-stage-card w-[20rem]">
              
              <div>
                <img
                  src={flutter}
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
                  Flutter
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex justify-center">
            <div className="app-pa-stage-card w-[20rem]">
              
              <div>
                <img
                  src={Kotlin}
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
                  Kotlin
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

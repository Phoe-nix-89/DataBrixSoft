import React from "react";
import Idea from "../assets/idea.jpg";
import Requirement from "../assets/req.jpg";
import resarch from "../assets/search.jpg";
import design from "../assets/design.jpg";
import development from "../assets/development.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faPalette,
  faSearch,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import "./about-us.scss";

function Stages() {
  return (
    <div
      className="app-pa-stage-layout w-full"
      style={{
        background:
          "linear-gradient(180deg, #94ecffa6, #ffffffa6 100%, #bfe8ffa6 0.01%)",
      }}
    >
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          <div className="col-span-1 flex justify-center">
            <div className="app-pa-stage-card">
              <div className="app-pa-stage-index">1</div>
              <div>
                <img
                  src={Idea}
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
                  className="title"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  IDEA
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex justify-center">
            <div className="app-pa-stage-card">
              <div className="app-pa-stage-index">2</div>
              <div>
                <img
                  src={Requirement}
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
                  className="title"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  REQUIRENMENT
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex justify-center">
            <div className="app-pa-stage-card">
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
                  <FontAwesomeIcon icon={faSearch} className="image" />
                </div>
                <div
                  className="title"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  RESEARCH
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
          <div className="col-span-1 flex justify-center lg:justify-end lg:mr-24">
            <div className="app-pa-stage-card">
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
                  className="title"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  DESIGN
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex justify-center lg:justify-start lg:ml-24">
            <div className="app-pa-stage-card">
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
                  className="title"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  DEVELOPMENT
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

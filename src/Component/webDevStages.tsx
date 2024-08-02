import React from "react";
import Angular from "../assets/New folder/angular.jpg";
import Reacts from "../assets/New folder/react.png";
import Next from "../assets/New folder/next.png";
import Vue from "../assets/New folder/vue.png";
import HTML from "../assets/New folder/html.jpg";
import CSS from "../assets/New folder/css.png";
import JS from "../assets/New folder/js.png";
import TS from "../assets/New folder/ts.png";
import TAILWIND from "../assets/New folder/tailwind.jpg";
import BOOTSTRAP from "../assets/New folder/bootstrap.png";
import Jquery from "../assets/New folder/jquery.png";
import svelte from "../assets/New folder/svelte.png";
import NODE from "../assets/New folder/nodejs.png";
import EXPRESS from "../assets/New folder/express.jpg";
import GOLANG from "../assets/New folder/golang.png";
import NET from "../assets/New folder/net.png";
import JAVA from "../assets/New folder/java.png";
import RUBY from "../assets/New folder/RUBY.png";
import PHP from "../assets/New folder/PHP.png";
import PYTHON from "../assets/New folder/python1.png";
import DJANGO from "../assets/New folder/django.png";
import SPRING from "../assets/New folder/spring.png";
import POSTGRES from "../assets/New folder/POSTGRES.png";
import MYSQL from "../assets/New folder/MYSQL.png";
import SSMS from "../assets/New folder/ssms.jpg";
import MONGODB from "../assets/New folder/mongoDb.jpg";
import GRAPHQL from "../assets/New folder/graphql.png";
import APOLLO from "../assets/New folder/apollo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDatabase,
  faDiamond,
  faParagraph,
} from "@fortawesome/free-solid-svg-icons";
import "./about-us.scss";
import { faAngular, faBootstrap, faCss3, faGolang, faHtml5, faJava, faJs, faNode, faNodeJs, faPhp, faPython, faReact, faVuejs } from "@fortawesome/free-brands-svg-icons";
function Stages() {
  return (
    <div
      className="app-pa-stage-layout w-full"
      style={{
        background:
          "#bfe8ffa6",
      }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="col-span-1 flex justify-center">
            <div className="app-pa-stage-card w-[20rem]">
              {/*  */}
              <div>
                <img
                  src={Angular}
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
                  <FontAwesomeIcon icon={faAngular} className="image" />
                </div>
                <div
                  className="title1"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  ANGULAR
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex justify-center">
            <div className="app-pa-stage-card w-[20rem]">
              {/*  */}
              <div>
                <img
                  src={Reacts}
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
                  <FontAwesomeIcon icon={faReact} className="image" />
                </div>
                <div
                  className="title1"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  REACT
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex justify-center">
            <div className="app-pa-stage-card w-[20rem]">
              
              <div>
                <img
                  src={Next}
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
                  NEXT
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex justify-center">
            <div className="app-pa-stage-card w-[20rem]">
              
              <div>
                <img
                  src={Vue}
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
                  <FontAwesomeIcon icon={faVuejs} className="image" />
                </div>
                <div
                  className="title1"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  VUE
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="col-span-1 flex justify-center">
            <div className="app-pa-stage-card w-[20rem]">
              
              <div>
                <img
                  src={HTML}
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
                  <FontAwesomeIcon icon={faHtml5} className="image" />
                </div>
                <div
                  className="title1"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  HTML
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex justify-center">
            <div className="app-pa-stage-card w-[20rem]">
              
              <div>
                <img
                  src={CSS}
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
                  <FontAwesomeIcon icon={faCss3} className="image" />
                </div>
                <div
                  className="title1"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  CSS
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex justify-center">
            <div className="app-pa-stage-card w-[20rem]">
              
              <div>
                <img
                  src={JS}
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
                  <FontAwesomeIcon icon={faJs} className="image" />
                </div>
                <div
                  className="title1"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  JAVASCRIPT
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex justify-center">
            <div className="app-pa-stage-card w-[20rem]">
              
              <div>
                <img
                  src={TS}
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
                  TYPESCRIPT
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="col-span-1 flex justify-center">
            <div className="app-pa-stage-card w-[20rem]">
              
              <div>
                <img
                  src={BOOTSTRAP}
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
                  <FontAwesomeIcon icon={faBootstrap} className="image" />
                </div>
                <div
                  className="title1"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  BOOTSTRAP
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex justify-center">
            <div className="app-pa-stage-card w-[20rem]">
              
              <div>
                <img
                  src={TAILWIND}
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
                  <FontAwesomeIcon icon={faCss3} className="image" />
                </div>
                <div
                  className="title1"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  TAILWIND CSS
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex justify-center">
            <div className="app-pa-stage-card w-[20rem]">
              
              <div>
                <img
                  src={Jquery}
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
                  JQUERY
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex justify-center">
            <div className="app-pa-stage-card w-[20rem]">
              
              <div>
                <img
                  src={svelte}
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
                  SVELTE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="col-span-1 flex justify-center">
            <div className="app-pa-stage-card w-[20rem]">
              
              <div>
                <img
                  src={GRAPHQL}
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
                  <FontAwesomeIcon icon={faParagraph} className="image" />
                </div>
                <div
                  className="title1"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  GRAPHQL
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex justify-center">
            <div className="app-pa-stage-card w-[20rem]">
              
              <div>
                <img
                  src={APOLLO}
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
                  APOLLO
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex justify-center">
            <div className="app-pa-stage-card w-[20rem]">
              
              <div>
                <img
                  src={RUBY}
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
                  <FontAwesomeIcon icon={faDiamond} className="image" />
                </div>
                <div
                  className="title1"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  RUBY
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex justify-center">
            <div className="app-pa-stage-card w-[20rem]">
              
              <div>
                <img
                  src={PHP}
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
                  <FontAwesomeIcon icon={faPhp} className="image" />
                </div>
                <div
                  className="title1"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  PHP
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="col-span-1 flex justify-center">
            <div className="app-pa-stage-card w-[20rem]">
              
              <div>
                <img
                  src={NODE}
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
                  <FontAwesomeIcon icon={faNode} className="image" />
                </div>
                <div
                  className="title1"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  NODE.JS
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex justify-center">
            <div className="app-pa-stage-card w-[20rem]">
              
              <div>
                <img
                  src={EXPRESS}
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
                  <FontAwesomeIcon icon={faNodeJs} className="image" />
                </div>
                <div
                  className="title1"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  EXPRESS.JS
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex justify-center">
            <div className="app-pa-stage-card w-[20rem]">
              
              <div>
                <img
                  src={GOLANG}
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
                  <FontAwesomeIcon icon={faGolang} className="image" />
                </div>
                <div
                  className="title1"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  GOLANG
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex justify-center">
            <div className="app-pa-stage-card w-[20rem]">
              
              <div>
                <img
                  src={NET}
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
                  ASP.NET
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="col-span-1 flex justify-center">
            <div className="app-pa-stage-card w-[20rem]">
              
              <div>
                <img
                  src={JAVA}
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
                  <FontAwesomeIcon icon={faJava} className="image" />
                </div>
                <div
                  className="title1"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  JAVA
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex justify-center">
            <div className="app-pa-stage-card w-[20rem]">
              
              <div>
                <img
                  src={PYTHON}
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
                  <FontAwesomeIcon icon={faPython} className="image" />
                </div>
                <div
                  className="title1"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  PYTHON
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex justify-center">
            <div className="app-pa-stage-card w-[20rem]">
              
              <div>
                <img
                  src={SPRING}
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
                  <FontAwesomeIcon icon={faJava} className="image" />
                </div>
                <div
                  className="title1"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  SPRING
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex justify-center">
            <div className="app-pa-stage-card w-[20rem]">
              
              <div>
                <img
                  src={DJANGO}
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
                  <FontAwesomeIcon icon={faPython} className="image" />
                </div>
                <div
                  className="title1"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  DJANGO
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="col-span-1 flex justify-center">
            <div className="app-pa-stage-card w-[20rem]">
              
              <div>
                <img
                  src={MYSQL}
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
                  <FontAwesomeIcon icon={faDatabase} className="image" />
                </div>
                <div
                  className="title1"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  MYSQL
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex justify-center">
            <div className="app-pa-stage-card w-[20rem]">
              
              <div>
                <img
                  src={POSTGRES}
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
                  <FontAwesomeIcon icon={faDatabase} className="image" />
                </div>
                <div
                  className="title1"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  POSTGRESSQL
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex justify-center">
            <div className="app-pa-stage-card w-[20rem]">
              
              <div>
                <img
                  src={SSMS}
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
                  <FontAwesomeIcon icon={faDatabase} className="image" />
                </div>
                <div
                  className="title1"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  SSMS
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex justify-center">
            <div className="app-pa-stage-card w-[20rem]">
              
              <div>
                <img
                  src={MONGODB}
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
                  <FontAwesomeIcon icon={faDatabase} className="image" />
                </div>
                <div
                  className="title1"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  MONGODB
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

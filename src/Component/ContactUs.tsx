import React, { useState } from "react";
import "../font.css";
import SelectDropdown from "./Forms/select";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import InputField from "./Forms/input";
import isoCountries from "i18n-iso-countries";
import ContactUsLotiie from "./contactUsLotiie";
import axios from "axios";
isoCountries.registerLocale(require("i18n-iso-countries/langs/en.json"));

const Home = () => {
  const [selectedCountryCode, setSelectedCountryCode] = useState("");
  const initialValues = {
    name: "",
    email: "",
    countryCode: "",
    phone: "",
    subject: "",
    message: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    subject: Yup.string().required("Subject is required"),
  });

  const handleSubmit = async (e: any) => {
    // e.preventDefault();
    console.log(e)
    try {
      const response = await axios.post("http://localhost:3001/Enquiry", e);
      console.log(response.data); // Handle success response
    } catch (error) {
      console.error("Error:", error); // Handle error
    }
  };

  const countryCodes = Object.keys(isoCountries.getNames("en")).map(
    (countryCode) => ({
      label: `+${isoCountries.alpha2ToNumeric(
        countryCode
      )} | ${isoCountries.getName(countryCode, "en")}`,
      value: `+${isoCountries.alpha2ToNumeric(countryCode)}`,
    })
  );
  const countryCodeStyle = {
    control: (provided: any, state: any) => ({
      ...provided,
      borderStyle: "none",
      borderWidth: "0",
      outline: "none",
      boxShadow: "none",
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      fontSize: "14px",
      color: state.isSelected ? "#fff" : "#333",
      fontWeight: "500",
      backgroundColor: state.isSelected ? "#415EFD" : null,
      textTransform: "uppercase",
      width: "15rem",
    }),
    input: (provided: any, state: any) => ({
      ...provided,
      width: "75px",
    }),
    menu: (provided: any, state: any) => ({
      ...provided,
      maxHeight: "15rem",
      width: "300px",
      fontSize: "12px",
    }),
    valueContainer: (provided: any, state: any) => ({
      ...provided,
      padding: "0 20px 0 0 !important",
      fontSize: "13px",
      fontWeight: "600",
    }),
    menuList: (provided: any, state: any) => ({
      ...provided,
      maxHeight: "15rem",
    }),
    placeholder: (provided: any, state: any) => ({
      ...provided,
      color: "#828282",
      fontWeight: "500",
      fontSize: "14px",
    }),
    singleValue: (provided: any, state: any) => ({
      ...provided,
      fontSize: "16px",
      textAlign: "start !important", // Ensure text alignment left is applied correctly
    }),
  };

  const typeStyle = {
    placeholder: (provided: any, state: any) => ({
      ...provided,
      color: "#828282",
      fontWeight: "500",
      fontSize: "16px",
    }),
    singleValue: (provided: any, state: any) => ({
      ...provided,
      fontSize: "16px",
    }),
    control: (provided: any, state: any) => ({
      ...provided,
      background: "#ffffff !important",
      border: "1px solid #bdbdbd !important",
      boxSizing: "border-box",
      borderRadius: "4px",
      padding: "1rem 2rem 1rem 2rem",
    }),
    menu: (provided: any, state: any) => ({
      ...provided,
      maxHeight: "20rem",
      width: "100%",
      fontSize: "14px",
    }),
    menuList: (provided: any, state: any) => ({
      ...provided,
      maxHeight: "20rem",
    }),
    valueContainer: (provided: any, state: any) => ({
      ...provided,
      padding: "0 20px 0 0 !important",
      fontSize: "16px",
      fontWeight: "600",
    }),
  };

  return (
    <div>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 py-24">
        <div>
          <ContactUsLotiie />
        </div>
        <div className="block mx-5 md:mx-12 p-6 bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
          <h1
            className="text-black font-bold text-2xl"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Contact Us
          </h1>
            <div className="md:px-10 pt-10 pb-4">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ values, errors, touched, handleChange, setFieldValue }) => (
                  <Form>
                    <div className="grid grid-cols-1 gap-4 flex justify-start">
                      <div className="">
                        <p className="text-left font-bold m-0">
                          Name
                        </p>
                        <InputField
                          type="text"
                          name="name"
                          onChange={handleChange}
                          placeholder="Name"
                        />
                        <div className="flex justify-start">
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="text-red-500"
                        />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-left font-bold m-0 mt-2">
                          Email
                        </p>
                        <InputField
                          type="text"
                          name="email"
                          placeholder="Email"
                          onChange={handleChange}
                        />
                       <div className="flex justify-start">
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-red-500"
                        />
                        </div>
                      </div>
                      <div>
                        <div>
                          <p
                            className="text-left font-bold m-0 mt-2"
                          >
                            Phone Number
                          </p>

                          <div style={{ display: "flex", flexFlow: "row" }}>
                            <div
                              className="kof-select-dropdown"
                              style={{ marginRight: 5 }}
                            >
                              <SelectDropdown
                                options={countryCodes}
                                placeholder="+91"
                                value={countryCodes.filter((e)=>e.value===values.countryCode)}
                                style={countryCodeStyle}
                                // mainClass={"contact-us-country-code"}
                                onChange={(e:any)=>{
                                  setFieldValue('countryCode',e?.value)
                                }}
                                name="countryCode"
                                isSearchable={true}
                              />
                            </div>

                            <InputField
                              type="text"
                              name="phone"
                              onChange={handleChange}
                              value={values.phone}
                              placeholder="Phone Number"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-left font-bold m-0 mt-2">
                        Subject
                      </p>
                      <InputField
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        onChange={handleChange}
                      />
                      <div className="flex justify-start">
                        <ErrorMessage
                          name="subject"
                          component="div"
                          className="text-red-500"
                        />
                        </div>
                    </div>
                    <div>
                      <p className="text-left font-bold m-0 mt-2">
                        Message
                      </p>
                      <textarea
                        className="if-textarea"
                        placeholder="Message"
                        value={values.message}
                        onChange={handleChange}
                        name="message"
                        id=""
                        rows={4}
                      />
                      <div>
                        {/* <p className="character-limit-text text-left">
                {"Content limited to 250 characters"}
              </p> */}
                      </div>
                    </div>
                    {/* button{
  background-color: #24379E;
  border-radius: 4px;
  color: black;
  font-size: 20px;
  padding: 12px 42px;
} */}
<div className="flex justify-end pt-3">
<button type="submit" style={{backgroundColor: "#24379E",padding: "10px 30px", borderRadius: '4px', color: "white", fontSize: "20px"}}>Submit</button>

</div>
                  </Form>
                )}
              </Formik>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

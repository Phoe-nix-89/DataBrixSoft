import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select, { components } from "react-select";
import "./select.scss";
import Images from "../../assets/images/selectDropdownIcon.svg";
const DropdownIndicator = (props:any) => {
  return (
    <components.DropdownIndicator {...props}>
      <div className="selected-dropdown-icon">
        <img src={Images} alt="Select Icon" srcSet="" />
      </div>
    </components.DropdownIndicator>
  );
};
const customDateField = {
  valueContainer: (provided:any, state:any) => ({
    ...provided,
    height: "40px",
    padding: 0,
  }),
  control: (provided:any, state:any) => ({
    ...provided,
    padding: "0 0 0 10px",
    border: "1px solid #a5a3a3",
    width: "110px",
    fontSize: "14px",
  }),
  placeholder: (provided:any, state:any) => ({
    ...provided,
    color: "#666262",
  }),
  indicatorsContainer: (provided:any, state:any) => ({
    ...provided,
    padding: "0px",
  }),
  option: (provided:any, state:any) => ({
    ...provided,
    fontSize: "14px",
    color: state.isSelected ? "#fff" : "#333",
    fontWeight: "500",
    backgroundColor: state.isSelected ? "#999999" : null,
    textTransform: "uppercase",
  }),
};
const customStyles = {
  valueContainer: (provided:any, state:any) => ({
    ...provided,
    height: "40px",
    padding: 0,
  }),
  control: (provided:any, state:any) => ({
    ...provided,
    padding: " 0 0 0 10px",
    border: "1px solid #a5a3a3",
  }),
  placeholder: (provided:any, state:any) => ({
    ...provided,
    color: "#666262",
  }),
  option: (provided:any, state:any) => ({
    ...provided,
    fontSize: "14px",
    color: state.isSelected ? "#fff" : "#333",
    fontWeight: "500",
    backgroundColor: state.isSelected ? "#999999" : null,
  }),
};
const SelectDropdown = (props:any) => {
  var valueArr = [props.value];
  return (
    <div className={props.mainClass}>
      <Select
        closeMenuOnSelect={true}
        components={props.isIndicatorHide ? {} : { DropdownIndicator }}
        placeholder={props.placeholder ? props.placeholder : "Select grade *"} // change the default text to Select *
        options={props.options}
        className="select-dropdown-view"
        isMulti={false}
        onChange={props.onChange} // onChange name change
        styles={
          (props.isStyled && customStyles) ||
          (props.isStyledMonth && customDateField) ||
          props.style
        }
        isClearable={props.isClearable ? true : false}
        isSearchable={props.isSearchable ? true : false}
        // value={props.value != "" && convertDropdownOptions(valueArr)}
        value={props.value}
      />
    </div>
  );
};

export default SelectDropdown;

import React from "react";

const CourseLevel = (props) => {
  let color = props.color ? props.color : "#F2994A";
  let path1Color = color;
  let path2Color =
    (props.level == "Medium" && color) || (props.level == "Advanced" && color) || "#D8D8D8";
  let path3Color = (props.level == "Advanced" && color) || "#D8D8D8";
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ alignSelf: "center" }}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M0 15H3V7H0V15Z" fill={path1Color} />
      <path fillRule="evenodd" clipRule="evenodd" d="M6 15H9V4H6V15Z" fill={path2Color} />
      <path fillRule="evenodd" clipRule="evenodd" d="M12 15H15V0H12V15Z" fill={path3Color} />
    </svg>
  );
};

export default CourseLevel;

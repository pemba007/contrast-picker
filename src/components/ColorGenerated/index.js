import React from "react";

const ColorGenerated = (props) => {
  return (
    <div
      style={{
        width: "40%",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        backgroundColor: `rgb(${props.red},${props.blue}, ${props.green})`,
        height: "2rem",
      }}
    ></div>
  );
};

export default ColorGenerated;

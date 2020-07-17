import React from "react";
import withColor from "../../HOC/withColor";
import "./index.css";

const LeftComponent = (props) => {
  console.log("With Color props", props.colors);

  return (
    <div
      className='left-container mob-full-flex'
      style={{
        backgroundColor: props.colors.backColor,
      }}
    >
      This is left Component
    </div>
  );
};

export default withColor(LeftComponent);

import React from "react";
import withColor from "../../HOC/withColor";
import SingleColorSelector from "../SingleColorSelector";
import "./index.css";

const ColorSelector = (props) => {
  const _setFront = (color) => {};
  const _setBack = (color) => {};

  return (
    <div className='mob-flex color-picker'>
      <SingleColorSelector title='Foreground Color' />
      <SingleColorSelector title='Background Color' />
    </div>
  );
};

export default withColor(ColorSelector);

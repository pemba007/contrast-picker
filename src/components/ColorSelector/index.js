import React from "react";
import withColor from "../../HOC/withColor";
import SingleColorSelector from "../SingleColorSelector";
import "./index.css";

const ColorSelector = (props) => {
  const _setFront = (r, g, b) => {
    props.colors.setFront({
      r: r,
      g: g,
      b: b,
    });
  };
  const _setBack = (r, g, b) => {
    props.colors.setBack({
      r: r,
      g: g,
      b: b,
    });
  };

  return (
    <div className='mob-flex color-picker'>
      <SingleColorSelector
        title='Foreground Color'
        default={{ r: 255, g: 255, b: 255 }}
        onChange={(r, g, b) => _setFront(r, g, b)}
      />
      <SingleColorSelector
        title='Background Color'
        default={{ r: 0, g: 0, b: 0 }}
        onChange={(r, g, b) => _setBack(r, g, b)}
      />
    </div>
  );
};

export default withColor(ColorSelector);

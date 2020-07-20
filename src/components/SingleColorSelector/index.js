import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import SingleRGBPicker from "../SingleRGBPicker";
import "./index.css";

import ColorGenerated from "../ColorGenerated";

const SingleColorSelector = (props) => {
  const [red, setRed] = useState(props.default.r);
  const [green, setGreen] = useState(props.default.g);
  const [blue, setBlue] = useState(props.default.b);

  const _redChange = (number) => {
    onChange(number, green, blue);
    setRed(number);
  };

  const _greenChange = (number) => {
    onChange(red, number, blue);
    setGreen(number);
  };

  const _blueChange = (number) => {
    onChange(red, green, number);
    setBlue(number);
  };

  const onChange = (r, g, b) => {
    props.onChange(r, g, b);
  };

  return (
    <div className='color-picker-container full-flex center-text'>
      <Typography variant='h5' component='h2' align='center' gutterBottom>
        {props.title}
      </Typography>
      <SingleRGBPicker value={red} onChange={_redChange} color='#b71c1c' />
      <SingleRGBPicker value={green} onChange={_greenChange} color='#4caf50' />
      <SingleRGBPicker value={blue} onChange={_blueChange} color='#0d47a1' />

      <ColorGenerated red={red} green={green} blue={blue} />
    </div>
  );
};

export default SingleColorSelector;

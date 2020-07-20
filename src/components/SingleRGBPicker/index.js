import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

import TextField from "@material-ui/core/TextField";
import "./index.css";

const PrettoSlider = withStyles({
  root: {
    // color: "#52af77",
    height: 8,
    "& .MuiSlider-rail": {
      backgroundColor: "#fff",
    },
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#fff",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },

    "& .MuiOutlinedInput-root": {
      "& input": {
        backgroundColor: "#fff",

        paddingRight: 0,
        textAlign: "center",
      },
      "& fieldset": {
        borderColor: "#fff",
      },
      "&:hover fieldset": {
        borderColor: "yellow",
      },
      "&.Mui-focused fieldset": {
        borderColor: "green",
      },
    },
  },
})(TextField);

const SingleRGBPicker = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        marginBottom: "1rem",
      }}
    >
      <div className='single-color-left'>
        <PrettoSlider
          valueLabelDisplay='auto'
          aria-label='pretto slider'
          value={props.value}
          onChange={(data, number) => props.onChange(number)}
          min={0}
          max={255}
          style={{
            color: props.color,
          }}
        />
      </div>
      <div className='single-color-right'>
        <CssTextField
          id='outlined-name'
          size='small'
          type='number'
          variant='outlined'
          value={props.value}
          InputProps={{
            readOnly: true,
            // shrink: true,
          }}
          color='secondary'
          onChange={(e) => props.onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SingleRGBPicker;

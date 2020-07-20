import React from "react";
import "./index.css";
import Typography from "@material-ui/core/Typography";
import ColorSelector from "../ColorSelector";
import ResultDisplay from "../ResultDisplay";

const RightComponent = () => {
  return (
    <div className='right-container mob-full-flex white-text'>
      <Typography
        variant='h3'
        component='h1'
        align='center'
        style={{
          fontWeight: 700,
          marginTop: "5rem",
        }}
        gutterBottom
      >
        Contrast Checker
      </Typography>
      <Typography variant='body1' align='center' gutterBottom>
        This is a contrast checker tools
      </Typography>
      <ColorSelector />
      <ResultDisplay />
    </div>
  );
};

export default RightComponent;

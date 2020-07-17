import React from "react";
import Typography from "@material-ui/core/Typography";

const SingleColorSelector = (props) => {
  return (
    <div className='full-flex center-text'>
      <Typography variant='h5' component='h2' align='center' gutterBottom>
        {props.title}
      </Typography>
    </div>
  );
};

export default SingleColorSelector;

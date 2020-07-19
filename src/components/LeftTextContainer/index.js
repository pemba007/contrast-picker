import React from "react";
import Typography from "@material-ui/core/Typography";

const LeftTextContainer = (props) => {
  return (
    <div
      style={{
        color: `rgb(${props.frontColor.r},${props.frontColor.g},${props.frontColor.b})`,
        backgroundColor: `rgb(${props.backColor.r},${props.backColor.g},${props.backColor.b})`,
        marginRight: "5rem",
        marginLeft: "5rem",
        padding: "5rem",
        paddingBottom: 0,
        // marginBottom: "5rem",
      }}
      className='left-text-container'
    >
      <Typography variant='h3' gutterBottom>
        Heading
      </Typography>
      <Typography variant='h4' gutterBottom>
        Heading
      </Typography>
      <Typography variant='h5' gutterBottom>
        Heading
      </Typography>
      <Typography variant='h6' gutterBottom>
        Heading
      </Typography>
      <Typography variant='subtitle1' gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Typography variant='subtitle2' gutterBottom>
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Typography variant='body1' gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant='body2' gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant='button' display='block' gutterBottom>
        button text
      </Typography>
      <Typography variant='caption' display='block' gutterBottom>
        caption text
      </Typography>
    </div>
  );
};

export default LeftTextContainer;

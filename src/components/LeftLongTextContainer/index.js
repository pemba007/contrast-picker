import React from "react";
import Typography from "@material-ui/core/Typography";

const LeftLongTextContainer = (props) => {
  return (
    <div
      style={{
        color: `rgb(${props.frontColor.r},${props.frontColor.g},${props.frontColor.b})`,
        backgroundColor: `rgb(${props.backColor.r},${props.backColor.g},${props.backColor.b})`,
        marginRight: "5rem",
        marginLeft: "5rem",
        padding: "5rem",
        marginBottom: "5rem",
      }}
      className='left-text-container'
    >
      <Typography variant='h3' gutterBottom>
        Heading
      </Typography>
      <Typography variant='body1' gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant='body1' gutterBottom>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga tenetur
        error debitis laborum laboriosam quae, placeat atque repudiandae iste
        aut quos officia, doloribus exercitationem delectus nobis sequi ab?
        Voluptates, iste.
      </Typography>
      <Typography variant='h3' gutterBottom>
        Heading
      </Typography>
      <Typography variant='body1' gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant='body1' gutterBottom>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga tenetur
        error debitis laborum laboriosam quae, placeat atque repudiandae iste
        aut quos officia, doloribus exercitationem delectus nobis sequi ab?
        Voluptates, iste.
      </Typography>
    </div>
  );
};
export default LeftLongTextContainer;

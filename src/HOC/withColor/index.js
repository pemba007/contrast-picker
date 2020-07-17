import React from "react";

import { ColorContext } from "../../providers/ColorProvider";

const withColor = (WrappedComponent) => {
  return () => {
    return (
      <ColorContext.Consumer>
        {(context) => <WrappedComponent colors={context} />}
      </ColorContext.Consumer>
    );
  };
};

export default withColor;

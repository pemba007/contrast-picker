import React from "react";

export const ColorContext = React.createContext("light");

const ColorProvider = (props) => {
  const [frontColor, setFrontColor] = React.useState("#000");

  const [backColor, setBackColor] = React.useState("#fff");

  return (
    <ColorContext.Provider
      value={{
        backColor: backColor,
        frontColor: frontColor,
        setBack: (color) => setBackColor(color),
        setFront: (color) => setFrontColor(color),
      }}
    >
      {props.children}
    </ColorContext.Provider>
  );
};

export default ColorProvider;

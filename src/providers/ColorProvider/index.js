import React from "react";

export const ColorContext = React.createContext("light");

const ColorProvider = (props) => {
  const [frontColor, setFrontColor] = React.useState({
    r: 255,
    g: 255,
    b: 255,
  });

  const [backColor, setBackColor] = React.useState({ r: 0, g: 0, b: 0 });

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

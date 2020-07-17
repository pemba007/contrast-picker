import React from "react";

const ThemeContext = React.createContext("light");

const ThemingProvider = (props) => {
  return (
    <ThemeContext.Provider value='light'>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemingProvider;

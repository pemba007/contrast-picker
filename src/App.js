import React from "react";
import "./App.css";
import LeftComponent from "./components/LeftComponent";
import RightComponent from "./components/RightComponent";

function App() {
  return (
    <div className='App-Container'>
      <div className='App'>
        <LeftComponent />
        <RightComponent />
      </div>
    </div>
  );
}

export default App;

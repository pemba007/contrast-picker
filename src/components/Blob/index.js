import React from "react";

const Blob = (props) => {
  console.log("Blocb props", props);
  return (
    <>
      <svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
        <path
          fill={`rgb(${props.backColor.r},${props.backColor.g},${props.backColor.b})`}
          d='M41.4,-59.9C51.7,-49.5,56.7,-34.8,64.8,-18.9C72.8,-3.1,84,13.9,81.5,28C79,42.1,62.9,53.3,47.1,58.4C31.2,63.5,15.6,62.5,-1.4,64.4C-18.4,66.3,-36.8,71.1,-51.5,65.6C-66.2,60.1,-77.2,44.4,-81.7,27.3C-86.1,10.3,-83.9,-8.1,-74.8,-20.6C-65.6,-33,-49.5,-39.5,-35.9,-48.8C-22.2,-58.1,-11.1,-70.3,2.2,-73.4C15.6,-76.5,31.1,-70.4,41.4,-59.9Z'
          transform='translate(100 100)'
        />
        <text
          x='50%'
          y='50%'
          dominantBaseline='middle'
          textAnchor='middle'
          font-family='Roboto, Poppins, sans-serif'
          fill={`rgb(${props.frontColor.r},${props.frontColor.g},${props.frontColor.b})`}
        >
          Inspiration
        </text>
      </svg>
    </>
  );
};

export default Blob;

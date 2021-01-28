import React from "react";
import getMousePositionInElement from "../helpers/getMousePositionInElement.js";

function Box({ handleScore }) {
  function handleClick(event) {
    handleScore();
    getMousePositionInElement(event);
    const parentRect = event.target.parentNode.getBoundingClientRect();
    const nodeRect = event.target.getBoundingClientRect();
    const availableDimensions = {
      height: parentRect.height - nodeRect.height,
      width: parentRect.width - nodeRect.width,
    };

    const pos = {
      x: Math.floor(Math.random() * availableDimensions.width),
      y: Math.floor(Math.random() * availableDimensions.height),
    };

    event.target.style.left = `${pos.x}px`;
    event.target.style.top = `${pos.y}px`;
  }
  return <div style={boxStyle} onClick={handleClick}></div>;
}

const boxStyle = {
  minHeight: "100px",
  minWidth: "100px",
  maxHeight: "100px",
  maxWidth: "100px",
  backgroundColor: "#61dafb",
  position: "relative",
};

export default Box;

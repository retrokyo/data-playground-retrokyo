import React from "react";
import getMousePositionInElement from "../helpers/getMousePositionInElement.js";

function Board({ children, isPlaying }) {
  function onMouseMove(event) {
    if (isPlaying) {
      getMousePositionInElement(event);
    }
    return;
  }

  return (
    <div className="w-100" style={boardStyle} onMouseMove={onMouseMove}>
      {children}
    </div>
  );
}

const boardStyle = {
  backgroundColor: "#282c34",
  padding: "1px",
  height: "98%",
};

export default Board;

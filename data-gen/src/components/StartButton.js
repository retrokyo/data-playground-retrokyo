import React from "react";

function StartButton({ handleClick, isPlaying }) {
  return (
    <button
      className="btn btn-success mr-1"
      onClick={handleClick}
      disabled={isPlaying}
    >
      Start
    </button>
  );
}

export default StartButton;

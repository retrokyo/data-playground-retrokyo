import React from "react";

function StopButton({ handleClick, isPlaying }) {
  return (
    <button
      className="btn btn-danger"
      onClick={handleClick}
      disabled={!isPlaying}
    >
      Stop
    </button>
  );
}

export default StopButton;

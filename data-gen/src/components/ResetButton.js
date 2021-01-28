import React from "react";

function ResetButton({ handleClick, isResettable }) {
  return (
    <button
      className="btn btn-warning mr-1"
      onClick={handleClick}
      disabled={!isResettable}
    >
      Reset
    </button>
  );
}

export default ResetButton;

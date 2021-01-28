import React, { useEffect, useState } from "react";
import useInterval from "../helpers/useInterval";

function StartCountdown({ isStarting }) {
  const [lag, setLag] = useState(0);

  useEffect(() => {
    if (isStarting) {
      setLag(3);
    }
  }, [isStarting]);

  useInterval(
    () => {
      if (lag) {
        setLag(lag - 1);
      }
    },
    lag ? 1000 : null
  );

  const className = lag
    ? "visible h-100 w-100 d-flex justify-content-center align-items-center"
    : "invisible";
  return (
    <div className={className} style={countdownStyle}>
      <span>{lag}</span>
    </div>
  );
}

const countdownStyle = {
  backgroundColor: "rgba(255, 255, 255, .2)",
  zIndex: "1",
  position: "absolute",
  color: "white",
};

export default StartCountdown;

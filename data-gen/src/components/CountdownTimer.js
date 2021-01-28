import React, { useEffect, useState } from "react";
import getTimeParts from "../helpers/getTimeParts.js";
import useInterval from "../helpers/useInterval.js";

function CountdownTimer({
  initialTime,
  isPlaying,
  timeToUpdate,
  handleTimeLeft,
  isReset,
  resetFunc,
}) {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [timeParts, setTimeParts] = useState(getTimeParts(initialTime));

  useInterval(
    () => {
      if (!timeLeft) {
        handleTimeLeft(false);
        return;
      }
      setTimeParts(getTimeParts(timeLeft - timeToUpdate));
      setTimeLeft(timeLeft - timeToUpdate);
    },
    isPlaying ? timeToUpdate : null
  );

  useEffect(() => {
    if (isReset) {
      setTimeLeft(initialTime);
      setTimeParts(getTimeParts(initialTime));
      resetFunc();
    }
  }, [isReset, initialTime, resetFunc]);

  return (
    <div>
      <span>
        {timeParts.s}:{timeParts.ms}
      </span>
    </div>
  );
}

export default CountdownTimer;

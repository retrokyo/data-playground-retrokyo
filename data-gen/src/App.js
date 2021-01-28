import React, { useState } from "react";
//import "./App.css";
import Board from "./components/Board.js";
import Box from "./components/Box.js";
import CountdownTimer from "./components/CountdownTimer.js";
import StartButton from "./components/StartButton.js";
import ResetButton from "./components/ResetButton.js";
import StopButton from "./components/StopButton.js";
import StartCountdown from "./components/StartCountdown.js";
import Score from "./components/Score.js";

function App() {
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReset, setIsReset] = useState(false);
  const [isStopped, setIsStopped] = useState(false);
  const [isStarting, setIsStarting] = useState(false);

  function handleBoxClick() {
    if (isPlaying) {
      setScore(score + 1);
    }

    return;
  }

  function handleTimeLeft(timeLeft) {
    if (!timeLeft) {
      setIsPlaying(false);
      setScore(0);
      setIsReset(true)
    }

    return;
  }

  function handleStartButtonClick() {
    setIsStarting(true);
    setTimeout(() => {
      setIsStarting(false);
      setIsPlaying(true);
    }, 3010);
  }

  function handleResetButtonClick() {
    setScore(0);
    setIsReset(true);
    setIsStopped(false);
  }

  function resetComplete() {
    setIsReset(false);
  }

  function handleStopButtonClick() {
    setIsPlaying(false);
    setIsStopped(true);
  }

  return (
    <div className="App h-100">
      <div className="container h-100">
        <div className="row" style={statHeaderStyle}>
          <div className="col d-flex flex-row h-100 align-items-center">
            <p className="mr-1 mb-0">Timer:</p>
            <CountdownTimer
              initialTime={5000}
              timeToUpdate={1}
              isPlaying={isPlaying}
              handleTimeLeft={handleTimeLeft}
              isReset={isReset}
              resetFunc={resetComplete}
            />
          </div>
          <div className="col d-flex h-100 py-2 justify-content-center align-items-center">
            <StartButton
              handleClick={handleStartButtonClick}
              isPlaying={isPlaying || isStopped}
            />
            <ResetButton
              handleClick={handleResetButtonClick}
              isResettable={!isPlaying && score}
            />
            <StopButton
              handleClick={handleStopButtonClick}
              isPlaying={isPlaying}
            />
          </div>
          <div className="col d-flex h-100">
            <Score score={score} />
          </div>
        </div>

        <div className="row position-relative" style={gameAreaStyle}>
          <StartCountdown isStarting={isStarting} />
          <Board isPlaying={isPlaying}>
            {isPlaying && <Box handleScore={handleBoxClick} />}
          </Board>
        </div>
      </div>
    </div>
  );
}

const statHeaderStyle = {
  height: "5%",
  minHeight: "calc(40px + 1rem)"
};

const gameAreaStyle = {
  height: "95%",
  maxHeight: "calc(100% - calc(40px + 1rem))"
};

export default App;

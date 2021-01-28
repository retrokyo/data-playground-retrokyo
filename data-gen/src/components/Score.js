import React, { useEffect, useState } from "react";

function Score({ score }) {
  const [topScore, setTopScore] = useState(0);

  useEffect(() => {
    if (score > topScore) {
      setTopScore(score);
    }
  }, [score, topScore]);
  return (
    <div className="d-flex flex-column ml-auto">
      <span>Score: {score}</span>
      <span>TopScore: {topScore}</span>
    </div>
  );
}

export default Score;

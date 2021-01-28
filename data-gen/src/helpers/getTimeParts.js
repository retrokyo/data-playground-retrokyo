export function formatTimeParts(timeParts) {
  if (timeParts.ms === 0) {
    timeParts.ms = "000";
  } else if (timeParts.ms < 100) {
    timeParts.ms = `0${timeParts.ms}`;
  } else if (timeParts.ms < 10) {
    timeParts.ms = `00${timeParts.ms}`;
  }

  if (timeParts.s < 10) {
    timeParts.s = `0${timeParts.s}`;
  } else if (timeParts.s === 0) {
    timeParts.s = "00";
  }

  return timeParts;
}

export default function getTimeParts(time) {
  let timeParts = {
    ms: Math.floor(time % 1000),
    s: Math.floor((time / 1000) % 60),
  };

  formatTimeParts(timeParts);

  return timeParts;
}

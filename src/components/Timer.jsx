import { useState, useEffect } from "react";

const Timer = () => {
  const [timerLabel, setTimerLabel] = useState("Session");
  const [timeLeft, setTimeLeft] = useState(1500); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [breakLength, setBreakLength] = useState(300); // 5 minutes in seconds
  const [sessionLength, setSessionLength] = useState(1500); // 25 minutes in seconds

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (timeLeft === 0) {
      clearInterval(timer);
      handleTimerEnd();
    }

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimerLabel("Session");
    setTimeLeft(sessionLength);
    setBreakLength(300);
    setSessionLength(1500);
    const beep = document.getElementById("beep");
    beep.pause();
    beep.currentTime = 0;
  };

  const handleTimerEnd = () => {
    if (timerLabel === "Session") {
      setTimerLabel("Break");
      setTimeLeft(breakLength);
    } else {
      setTimerLabel("Session");
      setTimeLeft(sessionLength);
    }
    const beep = document.getElementById("beep");
    beep.play();
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div id="timer">
      <h2 id="timer-label">{timerLabel}</h2>
      <div id="time-left">{formatTime(timeLeft)}</div>
      <button id="start_stop" onClick={handleStartStop}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button id="reset" onClick={handleReset}>
        Reset
      </button>
      <audio id="beep" src="./assets/beep.mp3"></audio>
    </div>
  );
};

export default Timer;

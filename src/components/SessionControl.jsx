import { useState } from "react";

const SessionControl = () => {
  const [sessionLength, setSessionLength] = useState(25);

  const decrementSession = () => {
    if (sessionLength > 1) setSessionLength(sessionLength - 1);
  };

  const incrementSession = () => {
    if (sessionLength < 60) setSessionLength(sessionLength + 1);
  };

  return (
    <div id="session-control">
      <h2 id="session-label">Session Length</h2>
      <button id="session-decrement" onClick={decrementSession}>
        -
      </button>
      <span id="session-length">{sessionLength}</span>
      <button id="session-increment" onClick={incrementSession}>
        +
      </button>
    </div>
  );
};

export default SessionControl;

import { useState } from "react";

const BreakControl = () => {
  const [breakLength, setBreakLength] = useState(5);

  const decrementBreak = () => {
    if (breakLength > 1) setBreakLength(breakLength - 1);
  };

  const incrementBreak = () => {
    if (breakLength < 60) setBreakLength(breakLength + 1);
  };

  return (
    <div id="break-control">
      <h2 id="break-label">Break Length</h2>
      <button id="break-decrement" onClick={decrementBreak}>
        -
      </button>
      <span id="break-length">{breakLength}</span>
      <button id="break-increment" onClick={incrementBreak}>
        +
      </button>
    </div>
  );
};

export default BreakControl;

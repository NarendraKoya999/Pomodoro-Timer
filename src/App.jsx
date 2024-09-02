import BreakControl from "./components/BreakControl";
import SessionControl from "./components/SessionControl";
import Timer from "./components/Timer";
import "./index.css";

const App = () => {
  return (
    <div className="app">
      <h1>Pomodoro Timer</h1>
      <div className="controls">
        <BreakControl />
        <SessionControl />
      </div>
      <Timer />
    </div>
  );
};

export default App;

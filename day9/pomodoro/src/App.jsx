import './App.css'
import { useState, useEffect} from 'react';

function App() {
  const [secondsLeft, setSecondsLeft] = useState(10);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [workingTime, setWorkingTime] = useState(120);
  const [breakTime, setBreakTime] = useState(60);
  const [showSettings, setShowSettings] = useState(false);

  let [now, setNow] = useState(new Date());

  useEffect(() =>{
    setTimeout(() =>{
      setNow(new Date());
    }, 1000)
  }, [now]);

  useEffect(() => {
    let intervalId;

    if (isRunning && secondsLeft > 0) {
      intervalId = setInterval(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);
    } else if (isRunning && secondsLeft === 0) {
      clearInterval(intervalId);
      setIsRunning(false);

      if (!isBreak) {
        setIsBreak(true);
        setSecondsLeft(breakTime);
        setIsRunning(true);
      } else {
        setIsBreak(false);
        setSecondsLeft(workingTime);
        setIsRunning(true);
      }
    }

    return () => clearInterval(intervalId);
  }, [isRunning, secondsLeft, isBreak, workingTime, breakTime]);

  function start() {
    setIsRunning(true);
  }

  function stop() {
    setIsRunning(false);
  }

  function reset(){
    setIsBreak(false);
    setIsRunning(false);
    setSecondsLeft(workingTime);
  }

  function formatTime(secondsLeft) {
    let mins = parseInt(secondsLeft / 60);
    let secs = parseInt(secondsLeft % 60);
    if(mins < 10){
      mins='0'+mins;
    }
    if (secs < 10){
      secs='0'+secs;
    }
    return (
      `${mins}:${secs}`
    )
  }

  function handleWorkingTimeChange(event) {
    const newWorkingTime = parseInt(event.target.value) * 60;
    setWorkingTime(newWorkingTime);
    if (!isBreak) {
      setSecondsLeft(newWorkingTime);
    }
  }

  function handleBreakTimeChange(event) {
    const newBreakTime = parseInt(event.target.value) * 60;
    setBreakTime(newBreakTime);
    if (isBreak) {
      setSecondsLeft(newBreakTime);
    }
  }

  function handleSettingsSubmit(event) {
    event.preventDefault();
    setShowSettings(false);
    reset();
  }

  const backgroundMode = `pomodoro ${isBreak? 'break' : 'work'}`;
  const buttonMode = `buttons ${isBreak? 'break1' : 'work1'}`;
  return (
    <>
      <div className={backgroundMode}>
        <h1>Pomodoro Clock</h1>
        <div className='time-now'>
          {now.toLocaleTimeString()}
        </div>
        <div className="message">
          {isBreak ? 'Break time': 'Working time'}
        </div>
        <div className="timer">
            {formatTime(secondsLeft)}
        </div>
        <div className='buttons'>
          {!isRunning ? (
            <button className={buttonMode}  onClick={start}>Start</button>
          ) : (
            <button className={buttonMode} onClick={stop}>Stop</button>
          )}
          <button className={buttonMode} onClick={reset}>Reset</button>
          <button className={buttonMode} onClick={() => {!showSettings? setShowSettings(true): setShowSettings(false)}}>Settings</button>
        </div>
        <div className='settings'>
          {showSettings && (
            <form onSubmit={handleSettingsSubmit}>
              <label>
                Working Time (minutes):
                <input
                  type="number"
                  value={workingTime / 60}
                  onChange={handleWorkingTimeChange}
                />
              </label>
              <br />
              <label>
                Break Time (minutes):
                <input
                  type="number"
                  value={breakTime / 60}
                  onChange={handleBreakTimeChange}
                />
              </label>
              <br />
              <button className={buttonMode} type="submit">Apply</button>
            </form>
          )}
        </div>
      </div>
    </>
  )
}

export default App;
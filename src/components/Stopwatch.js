import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

export default function Stopwatch() {
    // state to store time
    const [time, setTime] = useState(0);
  
    // state to check stopwatch running or not
    const [isRunning, setIsRunning] = useState(false);
  
    useEffect(() => {
      let intervalId;
      if (isRunning) {
        // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
        intervalId = setInterval(() => setTime(time + 1), 10);
      }
      return () => clearInterval(intervalId);
    }, [isRunning, time]);
  
    // Minutes calculation
    const minutes = Math.floor((time % 360000) / 6000);
    // Seconds calculation
    const seconds = Math.floor((time % 6000) / 100);
    // Method to start and stop timer
    const startAndStop = () => {
      setIsRunning(!isRunning);
    };
  
    // Method to reset timer back to 0
    const reset = () => {
      setTime(0);
    };
    return (
      <div className="stopwatch-container">
        <p className="stopwatch-time">
          {minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}
        </p>
        <div>
          <Button
            className='px-2 py-2'
            style={{ width: '50%', maxWidth: '150px' }}
            size='lg' onClick={startAndStop}>
            {isRunning ? (<img src="icons/pause.png" width={40} alt="Pause" />) : (<img src="icons/play.png" width={40} alt="Play" />)}
          </Button>
          <Button 
            className='px-2 py-2'
            style={{ width: '50%', maxWidth: '150px' }}
            size='lg'  onClick={reset}>
            {<img src="icons/stop.png" width={40} alt="Stop" />}
          </Button>
        </div>
      </div>
    );
  }
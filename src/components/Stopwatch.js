// Thanks https://medium.com/how-to-react/simple-way-to-create-a-stopwatch-in-react-js-bcc0e08e041e

import React, { useState, useEffect } from 'react';
import { Col, Row, Container } from 'react-bootstrap';

export default function Stopwatch() {
  // keep startTime state variable and then just update display to Date.now() - startTime
  
  // state to set the starting time
  const [startTime, setStartTime] = useState(0);
  // state to save elapsed time when paused
  const [previousElapsed, setPreviousElapsed] = useState(0);
  // state to set the current total elapsed time
  const [elapsed, setElapsed] = useState(0);
  // state to check stopwatch running or not
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      // update elapsed approx every 10 milliseconds
      intervalId = setInterval(() => setElapsed(Date.now() - startTime), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, startTime]);

  // Method to start and stop timer
  const startAndPause = () => {
    if (isRunning) {
      setPreviousElapsed(elapsed + previousElapsed);
      setElapsed(0);
    } else {
      setStartTime(Date.now());
    }
    setIsRunning(!isRunning);
  };

  // Method to reset timer back to 0 and stop it
  const reset = () => {
    setElapsed(0);
    setPreviousElapsed(0);
    setIsRunning(false);
  };

  // Minutes, seconds, milliseconds calculations
  const hours = Math.floor(((elapsed + previousElapsed)) / 3600000);
  const minutes = Math.floor(((elapsed + previousElapsed) % 3600000) / 60000);
  const seconds = Math.floor(((elapsed + previousElapsed) % 60000) / 1000);
  const milliseconds = (elapsed + previousElapsed) % 1000;

  
  return (
    <div className="stopwatch-container">
      <p className="stopwatch-time">
        { hours > 0 && hours.toString()}
        { minutes.toString().padStart(2, hours > 0 ? "0" : " ")}:
        { seconds.toString().padStart(2, "0")}.
        { Math.floor(milliseconds/10).toString().padStart(2, "0")}
      </p>
      <Container>
        <Row>
          <Col className='d-flex flex-column align-items-center'>
            <img className='zoomable-mid'
              style={{ width: '65%', maxWidth: '100px' }}
              src={isRunning ? "icons/pause.png" : "icons/play.png"} width={40} 
              onClick={startAndPause}
              alt={isRunning ? "Pause" : "Start"}
            />
          </Col>
          <Col className='d-flex flex-column align-items-center'>
            <img className='zoomable-mid'
              style={{ width: '65%', maxWidth: '100px' }}
              onClick={reset}
              src="icons/stop.png" width={40} alt="Reset"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
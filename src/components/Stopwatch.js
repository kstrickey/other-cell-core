// Thanks https://medium.com/how-to-react/simple-way-to-create-a-stopwatch-in-react-js-bcc0e08e041e

import React, { useState, useEffect } from 'react';
import { Col, Row, Container } from 'react-bootstrap';

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
  
    // Minutes, seconds, milliseconds calculations
    const minutes = Math.floor((time % 360000) / 6000);
    const seconds = Math.floor((time % 6000) / 100);
    const milliseconds = time % 100;
    // Method to start and stop timer
    const startAndStop = () => {
      setIsRunning(!isRunning);
    };
  
    // Method to reset timer back to 0 and stop it
    const reset = () => {
      setTime(0);
      setIsRunning(false);
    };
    return (
      <div className="stopwatch-container">
        <p className="stopwatch-time">
          {minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}:
          {milliseconds.toString().padStart(2, "0")}
        </p>
        <Container>
          <Row>
            <Col className='d-flex flex-column align-items-center'>
              <img className='zoomable-mid'
                style={{ width: '65%', maxWidth: '100px' }}
                src={isRunning ? "icons/pause.png" : "icons/play.png"} width={40} 
                onClick={startAndStop}
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
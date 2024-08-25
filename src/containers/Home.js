import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { DEFAULT_EXERCISE_LIST } from '../libs/exercises';
import ExerciseCard from '../components/ExerciseCard';


function getShuffledExerciseList() {
  return DEFAULT_EXERCISE_LIST
      .concat([DEFAULT_EXERCISE_LIST[Math.floor(Math.random() * DEFAULT_EXERCISE_LIST.length)]])   // add an extra exercise (sneaky sneaky!)
      .map(val => ({ val, sort: Math.random() }))  // randomize order
      .sort((a, b) => a.sort - b.sort).map(({ val }) => val)
}


export default function Home() {

  const [exercisesList, setExercisesList] = useState(DEFAULT_EXERCISE_LIST);

  return (
    <Container className='d-flex soothing-background m-0 px-5' fluid style={{ minHeight: '100vh', width: '100vw' }}>
      <Row className='m-auto'>
        <Col className='d-flex flex-column justify-content-center align-items-center' md={5}>
          <img className='mt-3' src='/logo512.png' alt='Other Cell Core logo' width='100px' />
          <div className='mt-2 h4'>Other Cell Core&#8482;</div>
          <Button
            className='mx-auto my-4'
            style={{ width: '100%', maxWidth: '240px' }}
            size='lg'
            onClick={() => setExercisesList(getShuffledExerciseList())}
          >Shuffle</Button>
        </Col>
        <Col md={7}>
          <div className='mx-auto px-4 my-4' style={{ maxWidth: '400px' }}>
            {exercisesList.map(ex => <ExerciseCard style={{ marginBottom: '1px', maxWidth: '400px' }} exerciseKey={ex} />)}
          </div>
        </Col>
      </Row>
    </Container>
  );

}
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { DEFAULT_EXERCISE_LIST } from '../libs/exercises';
import ExerciseCard from '../components/ExerciseCard';


export default function Home() {

  const [exercisesList, setExercisesList] = useState(DEFAULT_EXERCISE_LIST);

  return (
    <Container className='soothing-background m-0 px-5' fluid style={{ height: '100vh', width: '100vw' }}>
      <Row>
        <Col className='d-flex align-items-center' md={5}>
          <Button
            className='mx-auto my-4'
            style={{ width: '240px' }}
            size='lg'
            onClick={() => setExercisesList(lst => lst.map(val => ({ val, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ val }) => val))}
          >Shuffle</Button>
        </Col>
        <Col md={7}>
          <div className='mx-auto px-4' style={{ maxWidth: '400px', height: '90vh', marginTop: '5vh', overflowX: 'auto' }}>
            {exercisesList.map(ex => <ExerciseCard style={{ marginBottom: '1px', maxWidth: '400px' }} exerciseKey={ex} />)}
          </div>
        </Col>
      </Row>
    </Container>
  );

}
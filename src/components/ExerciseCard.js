import React from 'react';
import Card from 'react-bootstrap/Card';
import { EXERCISES } from '../libs/exercises';

export default function ExerciseCard({ exerciseKey, className='', ...props }) {

  if (!EXERCISES[exerciseKey]) return null;

  return (
    <Card className={className + ' px-3 py-1 clickable zoomable-mid'} key={'exercise-card-' + exerciseKey} {...props}>
      <div className='d-flex'>
        {EXERCISES[exerciseKey].iconPath && <img src={EXERCISES[exerciseKey].iconPath} width={60} alt={EXERCISES[exerciseKey].displayName} />}
        <div className='h4 my-auto ms-3 text-start'>
          {EXERCISES[exerciseKey].displayName}
        </div>
      </div>
    </Card>
  );

}
import React, { useState } from 'react';
import { DEFAULT_EXERCISE_LIST } from '../libs/exercises';
import ExerciseCard from '../components/ExerciseCard';


export default function Home() {


  const [exercisesList, setExercisesList] = useState(DEFAULT_EXERCISE_LIST);
  console.log(exercisesList)

  return (
    <div className='d-flex flex-column'>

      {exercisesList.map(ex => <ExerciseCard exerciseKey={ex} />)}

    </div>
  );

}
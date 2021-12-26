import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/features/tasksSlice';


export default function CreateTask() {

  // set an empty temporary state holder for the input value typed by the user
  const [inputVal, setInputVal] = useState("");

  // react-redux dispatch hook
  const dispatch = useDispatch();

  // handle submit function to dispatch an action with the content to the store
  const handleSubmit = (e) => {

    // prevent browser from reloading on submits
    e.preventDefault();

    // dispatch an action to add the new task
    dispatch(addTask(inputVal.trim()));

    // clear the create input
    setInputVal('');
  }

  return (
    <form className='create-form' onSubmit={handleSubmit}>
      <input
        type="text"
        name="taskField"
        id="taskField"
        placeholder='Enter task...'
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button className="create-button" type="submit">Add</button>
    </form>
  )
}

import React from 'react';
import { useDispatch } from 'react-redux';
// action handler functions for the task card's buttons
import { handleStart, handleStop, handleFinish, handleDelete } from './actionHandlers';
// task card's buttons
import { RemoveBtn, StartBtn, StopBtn, FinishBtn } from './taskBtns';


// TASK COMPONENT
export default function Task({ content, taskId, progress }) {

  // dispatch hook for the react-redux dispatch functionality
  const dispatch = useDispatch();

  // task card buttons, each with its respective handler
  let startBtn = <StartBtn startFunc={(e) => handleStart(e, taskId, dispatch)} />;
  let removeBtn = <RemoveBtn removeFunc={(e) => handleDelete(e, taskId, dispatch)} />;
  let finishBtn = <FinishBtn finishFunc={(e) => handleFinish(e, taskId, dispatch)} />;
  let stopBtn = <StopBtn stopFunc={(e) => handleStop(e, taskId, dispatch)} />;

  return (
    <div className='task'>

      {/* display the task's content here */}
      <p className="task-content"> {content}</p>

      <div className="task-btns">
        {/* (top btn of the card): show the start btn, but if task is in-progress show finish btn */}
        {progress ? finishBtn : startBtn}

        {/* (bottom btn of the card): show the remove btn. if task is in-progress show stop btn */}
        {progress ? stopBtn : removeBtn}
      </div>
    </div>
  )
}

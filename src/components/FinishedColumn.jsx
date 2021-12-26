import React from 'react';
import Task from './Task';
import { useSelector } from 'react-redux';


export default function FinishedColumn() {
  // callback function of the filter method in the finishedTasks constant
  const activeTasks = task => {

    // get the finished tasks
    if (!task.inprogress && task.finished) {
      return task;
    }
  };

  // get the finished tasks from the store
  const finishedTasks = useSelector(state => state.tasks.taskList.filter(activeTasks));

  return (
    <div className='column-wrapper'>
      <h1 className='column-title'>Finished</h1>

      {/* conditional message when there are no tasks */}
      {finishedTasks.length === 0 && <p className='column-msg'>It feels lonely here...</p>}

      {// render the tasks to the UI if there any
        finishedTasks && finishedTasks.map(task => <Task content={task.content} key={task.id} taskId={task.id} progress={task.inprogress} />)
      }
    </div>
  )
}

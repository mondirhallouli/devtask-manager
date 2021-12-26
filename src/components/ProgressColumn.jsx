import React from 'react';
import Task from './Task';
import { useSelector } from 'react-redux';

export default function ProgressColumn() {

  // callback function of the filter method in the tasksInProgress constant
  const activeTasks = task => {

    // return just the tasks that are in-progress
    if (task.inprogress && !task.finished) {
      return task;
    }
  };

  // get the tasks in progress from the store
  const tasksInProgress = useSelector(state => state.tasks.taskList.filter(activeTasks));

  return (
    <div className='column-wrapper'>
      <h1 className='column-title'>In progress</h1>

      {/* conditional message when there are no tasks */}
      {tasksInProgress.length === 0 && <p className='column-msg'>You got to be working on something...</p>}

      {// render the the tasks to the UI if there are any
        tasksInProgress && tasksInProgress.map(task => <Task content={task.content} key={task.id} taskId={task.id} progress={task.inprogress} />)
      }
    </div>
  )
}

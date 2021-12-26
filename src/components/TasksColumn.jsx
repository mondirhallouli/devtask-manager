import React from 'react';
import CreateTask from './CreateTask';
import Task from './Task';
import { useSelector } from 'react-redux';

// TASKSCOLUMN COMPONENT
export default function TasksColumn() {

  // callback function of the filter method in the tasks constant
  const newTasks = task => {

    // get only the tasks that haven't started or finished
    if (!task.inprogress && !task.finished) {
      return task;
    }
  };

  // get the available tatsks that haven't been started yet from the store
  const tasks = useSelector(state => state.tasks.taskList.filter(newTasks));

  return (
    <div className='column-wrapper'>
      <h2 className='column-title'>Tasks</h2>
      <CreateTask />

      {/* conditional message when there are no tasks */}
      {tasks.length === 0 && <p className='column-msg'>What do you want to work on?</p>}

      {
        // if there are tasks then render them to the UI using the Task component
        tasks && tasks.map(task => <Task content={task.content} key={task.id} taskId={task.id} progress={task.inprogress} />)
      }
    </div>
  )
}

// actions generated in the tasksSlice
import { startTask, finishTask, deleteTask, stopTask } from '../redux/features/tasksSlice';

// This file is for the click handlers for each button in the task card (start, delete, stop, finish);

// handleRemove function for the delete/remove button
export const handleDelete = (e, idParam, dispatchParam) => {
  e.stopPropagation();
  dispatchParam(deleteTask({ id: idParam }));
};

// handleStart function for the start button in the task
export const handleStart = (e, idParam, dispatchParam) => {
  e.stopPropagation();
  dispatchParam(startTask({ id: idParam, inprogress: true, finished: false }));
};

// handleFinish function for the start button in the task
export const handleFinish = (e, idParam, dispatchParam) => {
  e.stopPropagation();
  dispatchParam(finishTask({ id: idParam, inprogress: false, finished: true }));
};

// handleStop function for the start button in the task
export const handleStop = (e, idParam, dispatchParam) => {
  e.stopPropagation();
  dispatchParam(stopTask({ id: idParam, inprogress: false, finished: false }));
};
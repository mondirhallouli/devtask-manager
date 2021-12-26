import { createSlice } from "@reduxjs/toolkit";

// initial state of the tasks
const initialState = {
  taskList: []
};

// tasks Slice
export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action) {

      // create a new task object with a unique ID, content, and status of progress
      const newTask = {
        id: Date.now(),
        content: action.payload,
        inprogress: false,
        finished: false
      };

      // push the new task to the tasks array
      state.taskList.push(newTask);
    },
    startTask(state, action) {

      // find the index of the target task using the id given to the action's payload object
      const index = state.taskList.findIndex(task => task.id === action.payload.id);

      // change the progress value using the 'inprogress' property given in the action payload's object
      state.taskList[index].inprogress = action.payload.inprogress;

      // change the finished status to false in case the task is finished and needs to be restarted
      state.taskList[index].finished = action.payload.finished;
    },
    stopTask(state, action) {

      // find the index of the target task
      const index = state.taskList.findIndex(task => task.id === action.payload.id);

      // use the index to change the inprogress & finished property to false using the action's payload object
      state.taskList[index].inprogress = action.payload.inprogress;
      state.taskList[index].finished = action.payload.finished;
    },
    finishTask(state, action) {

      // find the index of the target task
      const index = state.taskList.findIndex(task => task.id === action.payload.id);

      // change the inprogress and finishd properties to their respective values (inprogress: false, finished: true)
      state.taskList[index].inprogress = action.payload.inprogress;
      state.taskList[index].finished = action.payload.finished;
    },
    deleteTask(state, action) {

      // find the index of the target task
      const index = state.taskList.findIndex(task => task.id === action.payload.id);

      // remove the task from the tasks list
      state.taskList.splice(index, 1);
    }
  }
});

// actions
export const { addTask, startTask, stopTask, finishTask, deleteTask } = tasksSlice.actions;

// tasksReducer
export default tasksSlice.reducer;
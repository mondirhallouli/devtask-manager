import React from 'react';
import reactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TasksColumn from './components/TasksColumn';
import ProgressColumn from './components/ProgressColumn';
import FinishedColumn from './components/FinishedColumn';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

// persisting the store
let persistor = persistStore(store);

reactDOM.render(
  <Provider store={store}>

    {/* providing the persisted state through the persistgate component */}
    <PersistGate loading={null} persistor={persistor}>

      {/* react router routes through the browserrouter component */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<TasksColumn />} />
            <Route path="tasksColumn" element={<TasksColumn />} />
            <Route path="progressColumn" element={<ProgressColumn />} />
            <Route path="finishedColumn" element={<FinishedColumn />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
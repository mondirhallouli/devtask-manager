// button Icon components from the react-icons package
import { VscDebugStart, VscTrash, VscCheck, VscStopCircle } from "react-icons/vsc";

// this file is for the task card's buttons components

// start btn
export const StartBtn = ({ startFunc }) => {
  return (
    <button className='task-btn' onClick={startFunc}>
      <VscDebugStart />
    </button>
  );
}

// remove btn
export const RemoveBtn = ({ removeFunc }) => {
  return (
    <button className='task-btn' onClick={removeFunc} >
      <VscTrash />
    </button>
  );
}

// finish btn
export const FinishBtn = ({ finishFunc }) => {
  return (
    <button className='task-btn' onClick={finishFunc} >
      <VscCheck />
    </button>
  );
}

// stop btn
export const StopBtn = ({ stopFunc }) => {
  return (
    <button className='task-btn' onClick={stopFunc}>
      <VscStopCircle />
    </button>
  );
}
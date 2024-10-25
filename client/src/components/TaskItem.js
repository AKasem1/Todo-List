import React from 'react'

const TaskItem = ({ taskId, status, taskName, onTaskStatusChange }) => {
  const checkboxState = (status == "complete") ? true : false;
  const taskNameState = (status == "complete") ? "line-through text-gray-500" : "";

  return (
    <div className='group flex items-center p-6 space-x-6'>
      <input type="checkbox" className='mr-6 size-6 rounded-full checked:bg-red-600' defaultChecked={checkboxState} onChange={() => onTaskStatusChange(taskId)}/>
      <img src='https://placeholder.com/300' className='size-16'></img>
      <p className={`text-2xl flex-grow ${taskNameState} text-white`}>{taskName}</p>
      <button className='invisible group-hover:visible bg-black p-2 rounded-full hover:bg-red-600 transition-colors'>
        <img src='/trashcan.svg' />
      </button>
    </div>
  )
}

export default TaskItem
import React from 'react'

const TaskItem = ({state}) => {
  const checkboxState = (state == "complete") ? true : false;
  const taskNameState = (state == "complete") ? "line-through text-gray-500" : "";

  return (
    <div className='group flex items-center p-6'>
        <input type="checkbox" className='mr-6 size-6' checked={checkboxState}/>
        <p className={`text-2xl flex-grow ${taskNameState}`}>Task</p>
        <button className='invisible group-hover:visible bg-white p-2 rounded-full hover:bg-red-600 transition-colors'>
            <img src='/trashcan.svg'/>
        </button>
    </div>
  )
}

export default TaskItem
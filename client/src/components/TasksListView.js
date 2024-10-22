import React from 'react'
import TaskItem from './TaskItem'

const TasksListView = () => {
  const tasks = [1, 2]

  return (
    <div className='bg-white border rounded-lg shadow-xl mx-auto w-[80%]'>

      <div className="flex items-center justify-center w-full mt-4">
        <hr className="border-1 flex-grow border-gray-300 mx-4" />
        <h1 className="text-xl text-center text-red-500 mx-4 underline whitespace-nowrap">Pending Tasks</h1>
        <hr className="border-1 flex-grow border-gray-300 mx-4" />
      </div>

      {tasks.map((task, index) => {
        return (<TaskItem key={index} className="first:rounded-t-lg last:rounded-b-lg not:first:not:last:border-b" />)
      })}

      <div className="flex items-center justify-center w-full mt-4">
        <hr className="border-1 flex-grow border-gray-300 mx-4" />
        <h1 className="text-xl text-center text-green-500 mx-4 underline whitespace-nowrap">Completed Tasks</h1>
        <hr className="border-1 flex-grow border-gray-300 mx-4" />
      </div>
      {tasks.map((task, index) => {
        return (<TaskItem key={index} state="complete" className="first:rounded-t-lg last:rounded-b-lg not:first:not:last:border-b" />)
      })}
    </div>
  )
}

export default TasksListView
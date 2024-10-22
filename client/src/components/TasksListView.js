import React, { useEffect, useState } from 'react'
import TaskItem from './TaskItem'

const TasksListView = () => {
  const [allTasks, setAllTasks] = useState([
    {
      _id: 1,
      name: "Task 1",
      status: "pending"
    },
    {
      _id: 2,
      name: "Task 2",
      status: "complete"
    },
    {
      _id: 3,
      name: "Task 3",
      status: "pending"
    }
  ]);

  const [pendingTasks, setPendingTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    setPendingTasks(allTasks.filter(task => task.status === "pending"));
    setCompletedTasks(allTasks.filter(task => task.status === "complete"));
  }, [allTasks]);

  const onTaskStatusChange = (taskId) => {
    setAllTasks(prevTasks =>
      prevTasks.map(task =>
        task._id === taskId ? { ...task, status: task.status === "pending" ? "complete" : "pending" } : task
      )
    );
  }

  return (
    <div className='bg-white border rounded-lg shadow-xl mx-auto w-[80%] py-6'>

      <div className="flex items-center justify-center w-full">
        <hr className="border-1 flex-grow border-gray-300 mx-4" />
        <h1 className="text-xl text-center text-red-500 mx-4 underline whitespace-nowrap">Pending Tasks</h1>
        <hr className="border-1 flex-grow border-gray-300 mx-4" />
      </div>

      {pendingTasks.map((task) => {
        return (<TaskItem key={task._id} id={task._id} status={task.status} taskName={task.name} onTaskStatusChange={() => onTaskStatusChange(task._id)} />)
      })}

      <div className="flex items-center justify-center w-full">
        <hr className="border-1 flex-grow border-gray-300 mx-4" />
        <h1 className="text-xl text-center text-green-500 mx-4 underline whitespace-nowrap">Completed Tasks</h1>
        <hr className="border-1 flex-grow border-gray-300 mx-4" />
      </div>

      {completedTasks.map((task) => {
        return (<TaskItem key={task._id} id={task._id} status={task.status} taskName={task.name} onTaskStatusChange={() => onTaskStatusChange(task._id)} />)
      })}
    </div>
  )
}

export default TasksListView
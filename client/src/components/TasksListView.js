import React, { useEffect, useState } from 'react'
import TaskItem from './TaskItem'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { taskActions } from '@/store/tasksSlice'

const TasksListView = () => {
  const allTasks = useSelector(state => state.tasks.tasks);
  const allTasksDispatch = useDispatch();
  const [pendingTasks, setPendingTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    setPendingTasks(allTasks.filter(task => task.status === "pending"));
    setCompletedTasks(allTasks.filter(task => task.status === "complete"));
  }, [allTasks]);

/*************  ✨ Codeium Command ⭐  *************/
  /**
   * Toggles the status of a task
   * @param {number} taskId - id of the task to toggle
   */
/******  650cd9b9-4be3-4e2d-822e-de75c14a3b16  *******/
  const onTaskStatusChange = (taskId) => {
    allTasksDispatch(taskActions.toggleTask(taskId));
  }

  return (
    <div className='text-slate-400 mx-auto w-1/2 mt-16'>

      {/* Date Header */}
      <div className='flex justify-center text-4xl text-center space-x-6 my-16'>
        <button>{"<"}</button>
        <div>
          <h1 className='text-white font-semibold'>
            {new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date())}
          </h1>
          <p className='text-[20px]'>{new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          }).format(new Date())}</p>
        </div>
        <button>{">"}</button>
      </div>

      {completedTasks.length > 0 && <p className='bg-black px-4 py-2 w-fit rounded-xl text-white'>Completed Tasks:
        <span className='bg-white text-black rounded-full ml-4 px-1'>{completedTasks.length}</span>
      </p>}

      {/* Completed Tasks */}
      {
        completedTasks.map(task => (
          <TaskItem key={task._id} taskId={task._id} status={task.status} taskName={task.name} onTaskStatusChange={onTaskStatusChange} />
        ))
      }

      
      {pendingTasks.length > 0 && <p className='bg-black px-4 py-2 w-fit rounded-xl text-white'>Pending Tasks:
        <span className='bg-white text-black rounded-full ml-4 px-1'>{pendingTasks.length}</span>
      </p>}

      {/* Pending Tasks */}
      {
        pendingTasks.map(task => (
          <TaskItem key={task._id} taskId={task._id} status={task.status} taskName={task.name} onTaskStatusChange={onTaskStatusChange} />
        ))
      }
    </div>
  )
}

export default TasksListView
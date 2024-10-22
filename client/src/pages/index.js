import IconButton from "@/components/UI/IconButton";
import TasksListView from "@/components/TasksListView";
import { useState } from "react";
import AddTaskModal from "@/components/AddTaskModal";


export default function Home() {
  const [isModalOpen , setIsModalOpen] = useState(false);

  const onAddTaskHandler = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <div className="min-h-screen bg-gradient-to-tr from-sky-800 to-sky-200 px-24 py-16">
      <h1 className="uppercase text-3xl text-center font-thin mb-6">Todo list</h1>
      <div>
        <IconButton onClick={onAddTaskHandler}/>
        <TasksListView/>
        {isModalOpen && <AddTaskModal onAddTaskHandler={onAddTaskHandler}/>}
      </div>
    </div>
  );
}

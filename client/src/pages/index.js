import IconButton from "@/components/UI/IconButton";
import TasksListView from "@/components/TasksListView";
import { useState } from "react";
import AddTaskModal from "@/components/AddTaskModal";
import { Provider } from "react-redux";
import store from "../store/index"
import Navbar from "@/components/Navbar";
import Head from "next/head";


export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onAddTaskHandler = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <>
      <Head>
        <title>Todo-ist | Todo</title>
        <meta name="description" content="a Simple Todo App | Plan Your Day!"></meta>
      </Head>
      <Provider store={store}>
        <div className="min-h-screen bg-[#3C424A]">
          <Navbar />
          <IconButton onClick={onAddTaskHandler} />
          <TasksListView />
          {isModalOpen && <AddTaskModal onAddTaskHandler={onAddTaskHandler} />}
        </div>
      </Provider>
    </>
  );
}

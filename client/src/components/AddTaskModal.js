import React from 'react'

const AddTaskModal = ({ onAddTaskHandler }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg p-6 w-1/3">
                <h2 className="text-xl mb-6">Add a Task</h2>

                <label>Task name:</label>
                <input type='text' placeholder='واحد فول و اتنين طعمية' className="w-full p-2 border border-gray-300 rounded-lg mb-6"/>

                <div className='space-x-4'>
                    <button onClick={onAddTaskHandler} className="px-4 py-2 bg-green-500 text-white rounded-lg">
                        Add Task
                    </button>
                    <button onClick={onAddTaskHandler} className="px-4 py-2 bg-red-500 text-white rounded-lg">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddTaskModal
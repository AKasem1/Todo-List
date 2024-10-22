import React from 'react'

const AddTaskModal = ({ onAddTaskHandler }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg p-6 w-1/3">
                <h2 className="text-xl font-bold mb-4">This is a Modal</h2>
                <p className="mb-4">You can add any content you want here.</p>
                <button onClick={onAddTaskHandler} className="px-4 py-2 bg-red-500 text-white rounded-lg">
                    Close Modal
                </button>
            </div>
        </div>
    )
}

export default AddTaskModal
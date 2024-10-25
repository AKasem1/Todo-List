import { createSlice } from "@reduxjs/toolkit";

const initialTaskState = {
    tasks: [
        {
            _id: 0,
            name: "Get some milk!",
            status: "pending",
        },
        {
            _id: 1,
            name: "Get some Eggs!",
            status: "complete",
        },
        {
            _id: 2,
            name: "Get some Bread!",
            status: "pending",
        },
    ],
    changed: false,
}

const tasksSlice = createSlice({
    name: "tasks",
    initialState: initialTaskState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({
                _id: action.payload._id,
                name: action.payload.name,
                status: action.payload.status || "pending",
            })
            state.changed = true;
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task._id !== action.payload._id);
            state.changed = true;
        },
        toggleTask: (state, action) => {
            console.log(action.payload);
            state.tasks = state.tasks.map(
                task => task._id === action.payload ?
                    { ...task, status: task.status === "pending" ? "complete" : "pending" }
                    : task);
            state.changed = true;
        }
    }
});

export const taskActions = tasksSlice.actions;
export default tasksSlice.reducer;

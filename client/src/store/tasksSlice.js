import { createSlice } from "@reduxjs/toolkit";

const initialTaskState = {
    tasks: [],
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
        }
    }
});

export const taskActions = tasksSlice.actions;
export default tasksSlice.reducer;

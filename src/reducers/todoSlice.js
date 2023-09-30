import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

export const todoSlice = createSlice(
    {
        name: "todo",
        initialState: initialState,
        reducers: {
            add: (state, action) => {
                state.todos.push(action.payload);
            },

            remove: (state, action) => {
                state.todos.filter(item => item.id !== action.payload);
            }
        }
    }
);

export const { add, remove } = todoSlice.actions;
export default todoSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 0,
      name: "Learn Redux Toolkit",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      state.todos.push({
        id: state.todos[state.todos.length - 1].id + 1,
        name: action.payload,
      });
    },

    remove: (state, action) => {
      state.todos.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = todoSlice.actions;
export default todoSlice.reducer;

/* eslint-disable no-unused-expressions */
import { createSlice } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const { id, text } = action.payload;
      state.push({
        id,
        text,
        done: false,
      });
    },
    toggleDone: (state, action) => {
      const todo = state.find((item) => item.id === action.payload.id);
      todo.done ? (todo.done = false) : (todo.done = true);
    },
    clearDones: (state) => state.filter((todo) => todo.done === false),
  },
});

export const { addTodo, toggleDone, clearDones } = todosSlice.actions;

export const selectTodos = (state) => state.todos;

export default todosSlice.reducer;

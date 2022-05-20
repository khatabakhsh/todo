/* eslint-disable no-unused-expressions */
import { createSlice } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: action.payload.id,
        text: action.payload.text,
        done: false,
      });
    },
    toggleDone: (state, action) => {
      state[action.payload].done
        ? (state[action.payload].done = false)
        : (state[action.payload].done = true);
    },
    clearDones: (state) => state.filter((todo) => todo.done === false),
  },
});

export const { addTodo, toggleDone, clearDones } = todosSlice.actions;

export const selectTodos = (state) => state.todos;

export default todosSlice.reducer;

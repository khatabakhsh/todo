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
  },
});

export const { addTodo } = todosSlice.actions;

export const selectTodos = (state) => state.todos;

export default todosSlice.reducer;

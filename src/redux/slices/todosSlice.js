import { createSlice } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: [{}],
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

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.todos.value)`
export const selectTodos = (state) => state.todos;

export default todosSlice.reducer;

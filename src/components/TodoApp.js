import { useRef, useEffect, useId } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Paper, InputBase, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { addTodo, selectTodos } from '../redux/slices/todosSlice';

export default function TodoApp() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  const id = useId();

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = inputRef.current.value;
    dispatch(addTodo({ id, text }));
  };

  return (
    <Container maxWidth="md">
      <Paper
        component="form"
        onSubmit={handleSubmit}
        elevation={2}
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <IconButton
          sx={{ p: '10px' }}
          type="submit"
          value="Submit"
          aria-label="AddCircleOutline"
        >
          <AddCircleOutlineIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Add Task"
          inputProps={{ 'aria-label': 'add task' }}
          name="add-task"
          id="addTask"
          autoFocus
          type="text"
          inputRef={inputRef}
        />
      </Paper>
    </Container>
  );
}

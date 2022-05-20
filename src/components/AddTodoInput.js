import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Paper, InputBase, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { addTodo } from '../redux/slices/todosSlice';

export default function AddTodoInput() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = inputRef.current.value;
    if (text !== '') {
      dispatch(addTodo({ id: Date.now(), text }));
    }
    inputRef.current.value = '';
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      elevation={4}
      sx={{
        m: '28px 7px',
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
        type="text"
        placeholder="Add Task"
        name="add-task"
        id="addTask"
        autoFocus
        inputProps={{ autocomplete: 'off' }}
        inputRef={inputRef}
        sx={{ ml: '7px', flex: 1 }}
      />
    </Paper>
  );
}

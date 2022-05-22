import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { Paper, IconButton, Stack } from '@mui/material';
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import { toggleDone } from '../redux/slices/todosSlice';

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const textDecoration = todo.done ? 'line-through' : 'none';

  return (
    <Paper
      component="div"
      variant="outlined"
      sx={{
        m: '7px',
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      <IconButton
        sx={{ p: '10px' }}
        aria-label="RadioButtonUncheckedRoundedIcon"
        type="button"
        onClick={() => {
          dispatch(toggleDone(todo));
        }}
      >
        {todo.done ? (
          <TaskAltRoundedIcon />
        ) : (
          <RadioButtonUncheckedRoundedIcon />
        )}
      </IconButton>
      <Stack component="span" sx={{ ml: '7px', pb: '0.5px', textDecoration }}>
        {todo.text}
      </Stack>
    </Paper>
  );
}

export default memo(TodoItem);

import { useSelector } from 'react-redux';
import { Paper, IconButton, Stack } from '@mui/material';
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import { selectTodos } from '../redux/slices/todosSlice';

export default function TodoList() {
  const todos = useSelector(selectTodos);

  return (
    todos.length !== 0 &&
    todos.map((todo) => (
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
        key={todo.id}
      >
        <IconButton
          sx={{ p: '10px' }}
          aria-label="RadioButtonUncheckedRoundedIcon"
        >
          <RadioButtonUncheckedRoundedIcon />
        </IconButton>
        <Stack component="span" sx={{ ml: '7px', pb: '0.5px' }}>
          {todo.text}
        </Stack>
      </Paper>
    ))
  );
}

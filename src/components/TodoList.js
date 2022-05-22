import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToggleButton, Button } from '@mui/material/';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import DeleteSweepRoundedIcon from '@mui/icons-material/DeleteSweepRounded';
import TodoItem from './todoItem';
import { selectTodos, clearDones } from '../redux/slices/todosSlice';

export default function TodoList() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  const donedTodos = todos.filter((todo) => todo.done === true);
  const unDonedTodos = todos.filter((todo) => todo.done === false);
  const [showCompleted, setShowCompleted] = useState(true);
  return (
    <>
      {unDonedTodos.length !== 0 &&
        unDonedTodos.map((todo) => <TodoItem todo={todo} key={todo.id} />)}
      {donedTodos.length !== 0 && (
        <ToggleButton
          value="check"
          selected={showCompleted}
          onChange={() => {
            setShowCompleted(!showCompleted);
          }}
          color="primary"
          size="small"
          sx={{ m: '7px 7px 0px 7px' }}
        >
          Completed
          {showCompleted ? (
            <KeyboardArrowDownRoundedIcon />
          ) : (
            <ChevronRightRoundedIcon />
          )}
        </ToggleButton>
      )}
      {showCompleted &&
        donedTodos.map((todo) => <TodoItem todo={todo} key={todo.id} />)}
      {donedTodos.length !== 0 && showCompleted && (
        <Button
          variant="outlined"
          startIcon={<DeleteSweepRoundedIcon />}
          type="button"
          onClick={() => {
            dispatch(clearDones());
          }}
          sx={{ display: 'flex', mx: 'auto', pt: '7px' }}
        >
          Clear
        </Button>
      )}
    </>
  );
}

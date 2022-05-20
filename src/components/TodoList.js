import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ToggleButton } from '@mui/material/';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import TodoItem from './todoItem';
import { selectTodos } from '../redux/slices/todosSlice';

export default function TodoList() {
  const todos = useSelector(selectTodos);
  const donedTodos = todos.filter((todo) => todo.done === true);
  const unDonedTodos = todos.filter((todo) => todo.done === false);
  const [showCompleted, setShowCompleted] = useState(true);
  return (
    <>
      {unDonedTodos.length !== 0 &&
        unDonedTodos.map((todo) => (
          <TodoItem todos={todos} todo={todo} key={todo.id} />
        ))}
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
        donedTodos.map((todo) => (
          <TodoItem todos={todos} todo={todo} key={todo.id} />
        ))}
    </>
  );
}

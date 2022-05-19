import { Container } from '@mui/material';
import AddTodoInput from './AddTodoInput';
import TodoList from './TodoList';

export default function TodoApp() {
  return (
    <Container maxWidth="md">
      <AddTodoInput />
      <TodoList />
    </Container>
  );
}

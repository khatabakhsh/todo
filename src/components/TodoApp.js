import { Container, Paper, InputBase, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function TodoApp() {
  return (
    <Container maxWidth="md">
      <Paper
        component="form"
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
          aria-label="AddCircleOutline"
        >
          <AddCircleOutlineIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Add Task"
          inputProps={{ 'aria-label': 'add task' }}
        />
      </Paper>
    </Container>
  );
}

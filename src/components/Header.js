import { AppBar, Box, Toolbar, Typography } from '@mui/material';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography
            variant="h6"
            component="h1"
            align="center"
            sx={{ flexGrow: 1 }}
          >
            ToDo List
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Stack from '@mui/material/Stack';
import AssignmentIcon from '@mui/icons-material/Assignment';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

function App() {
  // TODO remove, this demo shouldn't need to reset the theme.
  const defaultTheme = createTheme();

  // Variável cards
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // Função Copyright
  function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'© '}
        <Link color="inherit" href="https://mui.com/">
          OrderSync
        </Link>{' '}
        {new Date().getFullYear()}
      </Typography>
    );
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <AppBar position="relative">
        <Toolbar>
          <AssignmentIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            OrderSync
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Bem-vindo ao OrderSync
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              O lugar perfeito para gerenciar seus pedidos de forma eficiente e intuitiva.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" href='signin'>Acessar</Button>
              <Button variant="outlined" href='signup'>Registre-se</Button>
            </Stack>
          </Container>
        </Box>
      </main>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Entre em contato
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Tire suas dúvidas ou sugira melhorias. Estamos aqui para ajudar!
        </Typography>
        <Copyright />
      </Box>
    </ThemeProvider>
  );
}

export default App;

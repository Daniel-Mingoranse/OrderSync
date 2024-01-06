import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        OrderSync
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();
export default function LogoutConfirmation() {

  const navigate = useNavigate();
  const [countdown, setCountdown] = React.useState(5);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleCancel = () => {
   
    navigate('/dashboard');
  };

  React.useEffect(() => {
    if (countdown === 0) {
      // Redirecione para a tela inicial após o countdown
      navigate('/');
    }
  }, [countdown, navigate]);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <CssBaseline />
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
          <Typography variant="h2" component="h1" gutterBottom>
            Desconexão Concluída
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Você será redirecionado para a tela inicial em{' '} <span style={{ fontSize: '1.5em', fontWeight: 'bold', color: '#1565c0' }}>{countdown}</span> segundos.
          </Typography>
          <Button variant="contained" color="error" onClick={handleCancel}>
            Cancelar
          </Button>
        </Container>
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1">
              Se precisar de ajuda, entre em contato com o suporte técnico.
            </Typography>
            <Copyright />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
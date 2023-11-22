import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';

const theme = createTheme();

const LoadingScreen = () => {
    const navigate = useNavigate();
  
    useEffect(() => {
        const timer = setTimeout(() => {
            // Redirecione para a rota inicial após 3 segundos
            navigate('/');
        }, 3000);

        // Limpe o temporizador ao desmontar o componente
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <ThemeProvider theme={theme}>
            <Container
                component="main"
                maxWidth="xs"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                }}
            >
                <Box>
                    <CircularProgress />
                </Box>
                <Typography component="h1" varaiant="h5" sx={{ mt: 2 }}>
                    Carregando...
                </Typography>
            </Container>
        </ThemeProvider>
    );
}

export default LoadingScreen;

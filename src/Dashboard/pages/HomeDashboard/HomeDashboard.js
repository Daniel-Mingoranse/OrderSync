// Dashboard.jsx
import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import DataSummary from './Components/DataSummary';
import DetailedView from './Components/DetailedView';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

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
        <Typography component="h1" variant="h5" sx={{ mt: 2 }}>
          Carregando...
        </Typography>
      </Container>
    </ThemeProvider>
  );
};

const Dashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleComponentClick = (componentName) => {
    setLoading(true);

    // Simulando um tempo de carregamento (você pode substituir isso por lógica real)
    setTimeout(() => {
      setSelectedComponent(componentName);
      setLoading(false);
    }, 1000);
  };

  const handleCloseButtonClick = () => {
    setSelectedComponent(null);
  };

  return (
    <div className="dashboard">
      <div className="summary-container">
        <DataSummary
          title="Pedidos em Concluídos"
          data={300}
          onClick={() => handleComponentClick('pedidosConcluidos')}
        />
        <DataSummary
          title="Pedidos em Andamento"
          data={20}
          onClick={() => handleComponentClick('pedidosAndamento')}
        />
        <DataSummary
          title="Pedidos Pendentes"
          data={10}
          onClick={() => handleComponentClick('pedidosPendentes')}
        />
        <DataSummary
          title="Pedidos Cancelados"
          data={50}
          onClick={() => handleComponentClick('pedidosCancelados')}
        />
      </div>
      {loading && <LoadingScreen />} {/* Renderizar a tela de carregamento quando necessário */}
      <div className={`detailed-view-container ${selectedComponent ? 'visible' : ''}`}>
        {selectedComponent ? (
          // Corrigir a passagem do nome do componente
          <DetailedView componentName={selectedComponent} data={10} />
        ) : (
          <div className="no-data-message">
            <p>Nenhum dado selecionado. Clique em um resumo para ver os detalhes.</p>
          </div>
        )}
        {selectedComponent && (
          <div className="additional-details-container">
            <span className="close-button" onClick={handleCloseButtonClick}>
              Fechar
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

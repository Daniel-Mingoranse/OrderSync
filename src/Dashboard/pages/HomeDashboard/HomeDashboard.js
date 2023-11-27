import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/system';


const theme = createTheme();

const CustomCard = styled(Card)({
  width: '80%',
  margin: 'auto',
  marginBottom: '20px',
  borderRadius: '15px',
  color: 'white',
  background: 'linear-gradient(to left, #1976D2, #20557f)',
  transition: 'transform 0.3s, box-shadow 0.3s',
  position: 'relative',
  marginTop: '20px',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.7)',
  },
  '@media (max-width: 600px)': {
    width: '90%',
    marginTop: '10px',
    color: 'white',
  },
});

const CustomTitle = styled(Typography)({
  color: 'white',
  fontSize: '1.5rem',
  marginBottom: '8px',
  fontWeight: 'bold',
  transition: 'font-size 0.3s, font-weight 0.3s',
  '@media (max-width: 600px)': {
    fontSize: '1.3rem',
  },
});

const CustomContent = styled(CardContent)({
  '&:hover': {
    '& h5': {
      fontSize: '1.8rem',
      fontWeight: 'bolder',
    },
  },
});

const ClientDashboard = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
        {/* Seus Cards existentes */}
        <Grid item xs={12} sm={6} md={4}>
          <CustomCard>
            <CustomContent>
              <CustomTitle gutterBottom variant="h5" component="div">
                Pedido A
              </CustomTitle>
              <Typography variant="body1" style={{ color: 'white' }}>
                Valor: R$ 500,00
              </Typography>
            </CustomContent>
          </CustomCard>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <CustomCard>
            <CustomContent>
              <CustomTitle gutterBottom variant="h5" component="div">
                Pedido B
              </CustomTitle>
              <Typography variant="body1" style={{ color: 'white' }}>
                Valor: R$ 700,00
              </Typography>
            </CustomContent>
          </CustomCard>
        </Grid>

        {/* Novos Cards */}
        <Grid item xs={12} sm={6} md={4}>
          <CustomCard>
            <CustomContent>
              <CustomTitle gutterBottom variant="h5" component="div">
                Pedidos Pendentes
              </CustomTitle>
              <Typography variant="body1" style={{ color: 'white' }}>
                20
              </Typography>
            </CustomContent>
          </CustomCard>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <CustomCard>
            <CustomContent>
              <CustomTitle gutterBottom variant="h5" component="div">
                Pedidos em Processo
              </CustomTitle>
              <Typography variant="body1" style={{ color: 'white' }}>
                15
              </Typography>
            </CustomContent>
          </CustomCard>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <CustomCard>
            <CustomContent>
              <CustomTitle gutterBottom variant="h5" component="div">
                Pedidos Concluídos
              </CustomTitle>
              <Typography variant="body1" style={{ color: 'white' }}>
                50
              </Typography>
            </CustomContent>
          </CustomCard>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default ClientDashboard;

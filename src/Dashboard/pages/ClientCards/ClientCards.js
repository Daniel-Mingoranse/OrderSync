// ClientDashboard.jsx

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/system';
import orcamento from '../../../assets/orcamento.jpg';
import pedido from '../../../assets/pedido.jpg';
import './ClientCards.css';

const theme = createTheme();

const HoverCard = styled(Card)({
  width: '80%',
  margin: 'auto',
  marginBottom: '20px',
  borderRadius: '15px',
  color:'white',
  background: 'linear-gradient(to left, #1976D2, #20557f)',
  transition: 'transform 0.3s, box-shadow 0.3s',
  position: 'relative',
  marginTop: '20px',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.7)',
    '& .hover-message': {
      opacity: 1,
    },
    '& img': {
      filter: 'brightness(50%)',
    },
  },
  '@media (max-width: 600px)': {
    width: '90%',
    marginTop: '10px',
    color: 'white'
  },
});

const HoverMessage = styled(Typography)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  opacity: 0,
  transition: 'opacity 0.3s',
  color: 'white',
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  '@media (max-width: 600px)': {
    fontSize: '1.2rem',
  },
});

const HoverTitle = styled(Typography)({
  color: 'white',
  fontSize: '1.5rem',
  marginBottom: '8px',
  fontWeight: 'bold',
  transition: 'font-size 0.3s, font-weight 0.3s',
  '@media (max-width: 600px)': {
    fontSize: '1.3rem',
  },
});

const HoverContent = styled(CardContent)({
  '&:hover': {
    '& h5': {
      fontSize: '1.8rem',
      fontWeight: 'bolder',
    },
  },
});

const ClientDashboard = () => {
  const imageUrlOrçamento = orcamento;
  const imageUrlNovoPedido = pedido;

  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
        <Grid item xs={12} sm={6} md={4}>
          <HoverCard>
            <CardActionArea>
              <img
                src={imageUrlOrçamento}
                alt="Orçamento"
                className="hover-image"
              />
              <HoverMessage className="hover-message" variant="body2">
                Solicitar Orçamento
              </HoverMessage>
            </CardActionArea>
            <HoverContent>
              <HoverTitle gutterBottom variant="h5" component="div">
                Criar Orçamento
              </HoverTitle>
              <Typography variant="body1" style={{ color: 'white' }} className="hover-text">
                Gere um novo orçamento para os produtos ou serviços desejados. Adicione detalhes específicos e revise antes de enviar.
              </Typography>
            </HoverContent>
          </HoverCard>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <HoverCard>
            <CardActionArea>
              <img
                src={imageUrlNovoPedido}
                alt="Novo Pedido"
                className="hover-image"
              />
              <HoverMessage className="hover-message" variant="body2">
                Criar Novo Pedido
              </HoverMessage>
            </CardActionArea>
            <HoverContent>
              <HoverTitle gutterBottom variant="h5" component="div">
                Fazer Novo Pedido
              </HoverTitle>
              <Typography variant="body1" style={{ color: 'white' }} className="hover-text">
                Faça um novo pedido com facilidade e rapidez. Escolha os produtos desejados, especifique as quantidades e conclua o processo em alguns passos simples.
              </Typography>
            </HoverContent>
          </HoverCard>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default ClientDashboard;

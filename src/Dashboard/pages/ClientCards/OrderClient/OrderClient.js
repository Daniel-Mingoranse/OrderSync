import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import BackButton from '../Components/BackButton';
import './OrderClient.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
const defaultTheme = createTheme();


export default function SupplierOrderForm() {
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
        firstName: data.get('firstName'),
        lastName: data.get('lastName'),
        email: data.get('email'),
        phone: data.get('phone'),
        enterprise: data.get('enterprise'),
        address: data.get('address'),
        product: data.get('product'),
        productType: data.get('productType'),
        quantity: data.get('quantity'),
        orderDescription: data.get('orderDescription'),
        paymentMethod: data.get('paymentMethod'),
      });
      // Adicione lógica para enviar o pedido ao fornecedor aqui
    };
  
    const handleBackClick = () => {
      // Adicione aqui a lógica para lidar com o clique no botão de voltar
      console.log('Botão de Voltar clicado!');
    };

    
    return (
     <>
     <div className='backButton'>
     <BackButton onClick={handleBackClick} />
     </div>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <ShoppingCartIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Pedido ao Fornecedor
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                {/* Informações Pessoais */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="Nome"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Sobrenome"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Endereço de Email"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="phone"
                    label="Telefone"
                    name="phone"
                    type="tel"
                  />
                </Grid>
  
                {/* Informações do Pedido */}
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="enterprise"
                    label="Nome da Empresa"
                    name="enterprise"
                    autoComplete="enterprise"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="address"
                    label="Endereço de Entrega"
                    name="address"
                    autoComplete="shipping address"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="product"
                    label="Produto Desejado"
                    name="product"
                    autoComplete="product"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="productType"
                    label="Tipo de Produto"
                    name="productType"
                    autoComplete="product-type"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="quantity"
                    label="Quantidade"
                    name="quantity"
                    type="number"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    multiline
                    rows={4}
                    id="orderDescription"
                    label="Descrição do Pedido"
                    name="orderDescription"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="paymentMethod"
                    label="Método de Pagamento"
                    name="paymentMethod"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Enviar Pedido
              </Button>
            </Box>
          </Box>
        </Container>
        </>
    );
  }
  
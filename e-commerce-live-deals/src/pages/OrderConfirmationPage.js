import React from 'react';
import { Container, Paper, Typography, Box, Button } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { currency } from '../utils/format';

export default function OrderConfirmationPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { order } = location.state || {};

  return (
    <>
      <Header />
      <Container maxWidth="md" sx={{ my: 6 }}>
        <Paper sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom color="success.main">
            🎉 Order Placed Successfully!
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Thank you for shopping with us! Your order will be processed soon.
          </Typography>

          {order ? (
            <Box sx={{ textAlign: 'left', mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Order Summary
              </Typography>
              {order.items.map((item) => (
                <Box
                  key={item.productId}
                  sx={{ display: 'flex', justifyContent: 'space-between', my: 1 }}
                >
                  <Typography>{item.name} × {item.qty}</Typography>
                  <Typography>{currency(item.price * item.qty)}</Typography>
                </Box>
              ))}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2, fontWeight: 'bold' }}>
                <Typography>Total</Typography>
                <Typography>{currency(order.total)}</Typography>
              </Box>
            </Box>
          ) : (
            <Typography>No order details found.</Typography>
          )}

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Button variant="contained" onClick={() => navigate('/')}>
              Continue Shopping
            </Button>
            <Button variant="outlined" onClick={() => navigate('/orders')}>
              View Orders
            </Button>
          </Box>
        </Paper>
      </Container>
      <Footer />
    </>
  );
}

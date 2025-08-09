import React from 'react';
import { Container, Paper, Typography, Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

export default function MockPaymentPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const { order } = location.state || {};

  if (!order) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h6">No order data found. Please go back and place your order.</Typography>
      </Container>
    );
  }

  const handlePaymentSuccess = () => {
    // Simulate successful payment
    navigate('/order-confirmation', {
      state: { order: { ...order, paymentMethod: 'Online Payment', paymentStatus: 'Paid' } },
    });
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Paper sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Mock Payment Gateway
        </Typography>
        <Typography sx={{ mb: 4 }}>
          Total Amount: {order.total.toFixed(2)}
        </Typography>
        <Button variant="contained" onClick={handlePaymentSuccess}>
          Pay Now
        </Button>
      </Paper>
    </Container>
  );
}

import React from 'react';
import { Container, Paper, Typography, Box, Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { currency } from '../utils/format';

export default function OrderConfirmationPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const { order } = location.state || {};

  if (!order) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h6">No order found. Please place an order first.</Typography>
      </Container>
    );
  }

  // Generate a mock order ID and estimated delivery date
  const orderId = 'ORD' + Math.floor(100000 + Math.random() * 900000);
  const estimatedDelivery = new Date();
  estimatedDelivery.setDate(estimatedDelivery.getDate() + (order.deliveryMethod === 'express' ? 2 : 5));

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Thank you for your order!
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Order ID: {orderId}
        </Typography>

        <Box sx={{ my: 2 }}>
          <Typography variant="h6">Order Details</Typography>
          {order.items.map((item) => (
            <Box
              key={item.productId}
              sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}
            >
              <Typography>
                {item.name} × {item.qty}
              </Typography>
              <Typography>{currency(item.price * item.qty)}</Typography>
            </Box>
          ))}

          <Typography variant="h6" sx={{ mt: 2 }}>
            Total: {currency(order.total)}
          </Typography>
          <Typography>
            Payment Method: {order.paymentMethod || 'N/A'}
          </Typography>
          <Typography>
            Payment Status: {order.paymentStatus || 'N/A'}
          </Typography>
          <Typography>
            Estimated Delivery: {estimatedDelivery.toDateString()}
          </Typography>
        </Box>

        <Button variant="contained" fullWidth onClick={() => navigate('/')}>
          Back to Home
        </Button>
      </Paper>
    </Container>
  );
}

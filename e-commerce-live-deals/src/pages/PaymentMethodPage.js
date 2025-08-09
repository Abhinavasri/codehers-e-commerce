import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Box,
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

export default function PaymentMethodPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // We expect order data passed from Checkout page
  const { order } = location.state || {};

  const [paymentMethod, setPaymentMethod] = useState('cod');

  if (!order) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h6">No order data found. Please go back and place your order.</Typography>
      </Container>
    );
  }

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleContinue = () => {
    if (paymentMethod === 'online') {
      // Navigate to mock payment gateway
      navigate('/mock-payment', { state: { order } });
    } else {
      // COD selected, proceed directly to confirmation
      navigate('/order-confirmation', {
        state: { order: { ...order, paymentMethod: 'Cash on Delivery', paymentStatus: 'Pending' } },
      });
    }
  };

  return (
    <>
      <Container maxWidth="sm" sx={{ mt: 6 }}>
        <Paper sx={{ p: 4 }}>
          <Typography variant="h5" gutterBottom>
            Select Payment Method
          </Typography>
          <RadioGroup value={paymentMethod} onChange={handlePaymentMethodChange}>
            <FormControlLabel value="cod" control={<Radio />} label="Cash on Delivery (COD)" />
            <FormControlLabel value="online" control={<Radio />} label="Online Payment" />
          </RadioGroup>

          <Box sx={{ mt: 3 }}>
            <Button variant="contained" fullWidth onClick={handleContinue}>
              Continue
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
}
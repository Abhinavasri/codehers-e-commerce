import React, { useState } from 'react';
import { Container, Grid, Paper, Typography, TextField, Box, Button, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import { currency } from '../utils/format';

export default function CheckoutPage() {
  const cart = useCart();
  const navigate = useNavigate();

  const total = cart.items.reduce((sum, item) => sum + item.price * item.qty, 0);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const [deliveryMethod, setDeliveryMethod] = useState('standard'); // default delivery method

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleDeliveryChange = (e) => {
    setDeliveryMethod(e.target.value);
  };

  const handlePlaceOrder = () => {
  if (!formData.name || !formData.email || !formData.phone || !formData.address) {
    alert('Please fill in all details before placing the order.');
    return;
  }

  const orderData = {
    items: cart.items,
    total,
    customer: formData,
    deliveryMethod,
  };

  // Navigate to payment method selection page instead of confirmation
  navigate('/payment-method', { state: { order: orderData } });
};

  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Checkout
        </Typography>
        <Grid container spacing={2}>
          {/* Left side - Shipping details + Delivery Method */}
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Shipping Details
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
                <TextField
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  fullWidth
                />
                <TextField
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                />
                <TextField
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  fullWidth
                />
                <TextField
                  label="Shipping Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  fullWidth
                  multiline
                  rows={3}
                />
              </Box>
            </Paper>

            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Delivery Method
              </Typography>
              <RadioGroup value={deliveryMethod} onChange={handleDeliveryChange}>
                <FormControlLabel value="standard" control={<Radio />} label="Standard Delivery (3-5 days)" />
                <FormControlLabel value="express" control={<Radio />} label="Express Delivery (1-2 days)" />
                <FormControlLabel value="pickup" control={<Radio />} label="Pickup from store" />
              </RadioGroup>
            </Paper>
          </Grid>

          {/* Right side - Order summary */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Order Summary
              </Typography>
              {cart.items.map((item) => (
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
                <Typography>{currency(total)}</Typography>
              </Box>
              <Button
                variant="contained"
                fullWidth
                sx={{ mt: 3 }}
                onClick={handlePlaceOrder}
              >
                Place Order
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

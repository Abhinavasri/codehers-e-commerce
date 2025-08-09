import React from 'react'
import { Container, Grid, Paper, Typography, IconButton, Box, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useCart, useCartDispatch } from '../context/CartContext'
import { currency } from '../utils/format'
import { Add, Remove, Delete } from '@mui/icons-material'

export default function CartPage() {
  const cart = useCart()
  const dispatch = useCartDispatch()
  const navigate = useNavigate();

  const total = cart.items.reduce((s, i) => s + i.price * i.qty, 0)

  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>My Cart</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            {cart.items.length === 0 ? (
              <Paper sx={{ p: 4 }}><Typography>Your cart is empty</Typography></Paper>
            ) : (
              cart.items.map(item => (
                <Paper key={item.productId} sx={{ p: 2, mb: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                  <img src={item.image} alt={item.name} style={{ width: 90, height: 90, objectFit: 'cover', borderRadius: 6 }} />
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="subtitle1">{item.name}</Typography>
                    <Typography variant="body2" color="text.secondary">{currency(item.price)}</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                      <IconButton size="small" onClick={() => dispatch({ type: 'UPDATE', payload: { productId: item.productId, qty: item.qty - 1 } })}><Remove /></IconButton>
                      <Typography>{item.qty}</Typography>
                      <IconButton size="small" onClick={() => dispatch({ type: 'UPDATE', payload: { productId: item.productId, qty: item.qty + 1 } })}><Add /></IconButton>
                    </Box>
                  </Box>
                  <Box>
                    <Typography>{currency(item.price * item.qty)}</Typography>
                    <IconButton onClick={() => dispatch({ type: 'REMOVE', payload: { productId: item.productId } })}><Delete /></IconButton>
                  </Box>
                </Paper>
              ))
            )}
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6">Order summary</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Typography>Subtotal</Typography>
                <Typography>{currency(total)}</Typography>
              </Box>
              {/* <Button variant="contained" fullWidth sx={{ mt:2 }}>Checkout</Button> */}

              <Button
                variant="contained"
                fullWidth
                sx={{ mt: 2 }}
                onClick={() => navigate("/checkout")}
              >
                Checkout
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  )
}

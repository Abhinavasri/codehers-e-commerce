import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Paper,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { fetchProductById } from '../services/api'
import { MOCK_PRODUCTS } from '../data/mockProducts'
import { currency } from '../utils/format'
import { useCartDispatch } from '../context/CartContext'

export default function ProductPage() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const dispatch = useCartDispatch()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  useEffect(() => {
    let active = true
    async function load() {
      try {
        const p = await fetchProductById(id)
        if (active) setProduct(p)
      } catch (e) {
        const fallback = MOCK_PRODUCTS.find(m => m._id === id) || MOCK_PRODUCTS[0]
        setProduct(fallback)
      }
    }
    load()
    return () => (active = false)
  }, [id])

  if (!product) return null

  const onAdd = () => dispatch({ type: 'ADD', payload: { product, qty: 1 } })

  return (
    <>
      <Header />
      <Container maxWidth="md" sx={{ py: 4, minHeight: '70vh' }}>
        <Grid container spacing={4}>
          {/* Image Section */}
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Paper
              elevation={3}
              sx={{
                width: '100%',
                maxWidth: 500,
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: theme.shadows[5],
              }}
            >
              <Box
                component="img"
                src={product.images?.[0]}
                alt={product.name}
                sx={{
                  width: '100%',
                  height: isMobile ? 300 : 400,
                  objectFit: 'contain',
                  backgroundColor: '#f9f9f9',
                }}
              />
            </Paper>
          </Grid>

          {/* Product Details Section */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
            }}
          >
            <Box>
              <Typography
                variant={isMobile ? 'h5' : 'h4'}
                component="h1"
                gutterBottom
                sx={{ fontWeight: 'bold' }}
              >
                {product.name}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                {product.category}
              </Typography>

              <Box sx={{ my: 3 }}>
                {product.deal?.isActive ? (
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
                    <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold' }}>
                      {currency(product.deal.dealPrice)}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ textDecoration: 'line-through', color: 'text.secondary' }}
                    >
                      {currency(product.originalPrice || product.price)}
                    </Typography>
                  </Box>
                ) : (
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    {currency(product.price)}
                  </Typography>
                )}
              </Box>

              <Typography sx={{ mb: 4, color: '#444' }}>{product.description}</Typography>
            </Box>

            {/* Add to Cart Button */}
            <Box
              sx={{
                position: isMobile ? 'sticky' : 'static',
                bottom: isMobile ? 0 : 'auto',
                left: 0,
                right: 0,
                bgcolor: isMobile ? 'background.paper' : 'transparent',
                py: isMobile ? 2 : 0,
                boxShadow: isMobile ? theme.shadows[4] : 'none',
                mt: isMobile ? 'auto' : 0,
                zIndex: 10,
              }}
            >
              <Button
                variant="contained"
                onClick={onAdd}
                size="large"
                fullWidth={isMobile}
                sx={{ maxWidth: isMobile ? '100%' : 200, mx: isMobile ? 0 : 'auto' }}
              >
                Add to cart
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  )
}
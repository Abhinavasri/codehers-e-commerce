import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Grid, Typography, Box, Button, Paper } from '@mui/material'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { fetchProductById } from '../services/api'
import { MOCK_PRODUCTS } from '../data/mockProducts'
import { currency } from '../utils/format'
import { useCartDispatch } from '../context/CartContext'

export default function ProductPage(){
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const dispatch = useCartDispatch()

  useEffect(()=>{
    let active = true
    async function load(){
      try{
        const p = await fetchProductById(id)
        if(active) setProduct(p)
      }catch(e){
        const fallback = MOCK_PRODUCTS.find(m=>m._id===id) || MOCK_PRODUCTS[0]
        setProduct(fallback)
      }
    }
    load()
    return ()=> active=false
  }, [id])

  if(!product) return null

  const onAdd = ()=> dispatch({ type:'ADD', payload:{ product, qty:1 } })

  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ my:4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p:2 }}>
              <img src={product.images?.[0]} alt={product.name} style={{ width:'100%', borderRadius:8, objectFit:'cover' }} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4">{product.name}</Typography>
            <Typography variant="subtitle1" color="text.secondary">{product.category}</Typography>
            <Box sx={{ my:2 }}>
              {product.deal?.isActive ? (
                <Box sx={{ display:'flex', gap:2, alignItems:'center' }}>
                  <Typography variant="h5" color="primary">{currency(product.deal.dealPrice)}</Typography>
                  <Typography variant="body1" sx={{ textDecoration:'line-through' }}>{currency(product.originalPrice||product.price)}</Typography>
                </Box>
              ) : (
                <Typography variant="h5">{currency(product.price)}</Typography>
              )}
            </Box>

            <Typography sx={{ mb:2 }}>{product.description}</Typography>
            <Button variant="contained" onClick={onAdd}>Add to cart</Button>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  )
}
import React, { useEffect, useState } from 'react'
import { Container, Grid, Typography, Box } from '@mui/material'
import Header from '../components/Header'
import Footer from '../components/Footer'
import DealCard from '../components/DealCard'
import ProductCard from '../components/ProductCard'
import { fetchDeals, fetchProducts } from '../services/api'
import { MOCK_PRODUCTS } from '../data/mockProducts'

export default function HomePage(){
  const [deals, setDeals] = useState([])
  const [featured, setFeatured] = useState([])

  useEffect(()=>{
    async function load(){
      try{
        const d = await fetchDeals()
        setDeals(d)
      }catch(e){
        // fallback
        setDeals(MOCK_PRODUCTS.filter(p=>p.deal?.isActive))
      }

      try{
        const p = await fetchProducts({ limit:6 })
        setFeatured(p.data || p)
      }catch(e){
        setFeatured(MOCK_PRODUCTS)
      }
    }
    load()
  }, [])

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Box sx={{ my:3 }}>
          <Typography variant="h4" gutterBottom>Deals of the day</Typography>
          <Grid container spacing={2}>
            {deals.map(d=> (
              <Grid item xs={12} md={6} key={d._id}>
                <DealCard product={d} />
              </Grid>
            ))}
            {deals.length===0 && <Typography color="text.secondary">No active deals right now.</Typography>}
          </Grid>
        </Box>

        <Box sx={{ my:3 }}>
          <Typography variant="h5" gutterBottom>Featured products</Typography>
          <Grid container spacing={2}>
            {featured.map(p=> (
              <Grid item xs={12} sm={6} md={4} key={p._id}>
                <ProductCard product={p} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <Footer />
    </>
  )
}
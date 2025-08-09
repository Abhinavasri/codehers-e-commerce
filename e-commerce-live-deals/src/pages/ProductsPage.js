import React, { useEffect, useState } from 'react'
import { Container, Grid, Box, Typography, CircularProgress } from '@mui/material'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import FilterPanel from '../components/FilterPanel'
import { fetchProducts } from '../services/api'
import { MOCK_PRODUCTS } from '../data/mockProducts'
import { useSearchParams } from 'react-router-dom'

export default function ProductsPage(){
  const [filters, setFilters] = useState({})
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchParams] = useSearchParams()

  useEffect(()=>{
    const q = searchParams.get('search')
    if(q) setFilters(prev=>({ ...prev, search:q }))
  }, [searchParams])

  useEffect(()=>{
    let active = true
    setLoading(true)
    async function load(){
      try{
        const res = await fetchProducts({ search: filters.search, category: filters.category })
        setProducts(res.data || res)
      }catch(e){
        setProducts(MOCK_PRODUCTS)
      }finally{
        if(active) setLoading(false)
      }
    }
    load()
    return ()=> active = false
  }, [filters])

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Box sx={{ my:3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <FilterPanel filters={filters} setFilters={setFilters} />
            </Grid>
            <Grid item xs={12} md={9}>
              <Typography variant="h5" sx={{ mb:2 }}>Products</Typography>
              {loading ? (
                <CircularProgress />
              ) : (
                <Grid container spacing={2}>
                  {products.map(p => (
                    <Grid item xs={12} sm={6} md={4} key={p._id}>
                      <ProductCard product={p} />
                    </Grid>
                  ))}
                </Grid>
              )}
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer />
    </>
  )
}
import React, { useEffect, useState } from 'react'
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Box, Chip } from '@mui/material'
import { timeLeft, currency } from '../utils/format'
import { useNavigate } from 'react-router-dom'

export default function DealCard({ product }){
  const nav = useNavigate()
  const [left, setLeft] = useState(timeLeft(product.deal.expiresAt))

  useEffect(()=>{
    const id = setInterval(()=> setLeft(timeLeft(product.deal.expiresAt)), 1000)
    return ()=>clearInterval(id)
  }, [product.deal.expiresAt])

  return (
    <Card sx={{ display:'flex', gap:2, alignItems:'center', p:1 }}>
      <CardMedia component="img" image={product.images?.[0]} alt={product.name} sx={{ width:160, height:120, objectFit:'cover', borderRadius:1 }} />
      <Box sx={{ flex:1 }}>
        <CardContent sx={{ pb:0 }}>
          <Typography variant="h6">{product.name}</Typography>
          <Typography variant="body2" color="text.secondary" noWrap>{product.description}</Typography>
          <Box sx={{ mt:1, display:'flex', gap:2, alignItems:'center' }}>
            <Typography variant="h6" color="primary">{currency(product.deal.dealPrice)}</Typography>
            <Typography variant="body2" sx={{ textDecoration:'line-through' }}>{currency(product.originalPrice || product.price)}</Typography>
            <Chip label={left} size="small" color="secondary" />
          </Box>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={()=>nav(`/products/${product._id}`)}>See deal</Button>
        </CardActions>
      </Box>
    </Card>
  )
}
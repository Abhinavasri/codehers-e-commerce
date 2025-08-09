// FILE: src/components/ProductCard.jsx
import React from 'react'
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Box, Chip } from '@mui/material'
import { currency } from '../utils/format'
import { useNavigate } from 'react-router-dom'
import { useCartDispatch } from '../context/CartContext'

export default function ProductCard({ product }){
  const nav = useNavigate()
  const dispatch = useCartDispatch()

  const onAdd = ()=>{
    dispatch({ type:'ADD', payload: { product, qty:1 } })
  }

  return (
    <Card className="product-card-root" sx={{ display:'flex', flexDirection:'column' }}>
      <Box sx={{ position:'relative' }}>
        <CardMedia component="img" height="160" image={product.images?.[0]} alt={product.name} sx={{ objectFit:'cover' }} />
        {product.deal?.isActive && (
          <Chip label={product.deal.dealBadgeText||'Deal'} color="secondary" sx={{ position:'absolute', left:12, top:12 }} />
        )}
      </Box>
      <CardContent sx={{ flex:1 }}>
        <Typography variant="subtitle1" gutterBottom noWrap>{product.name}</Typography>
        <Typography variant="body2" color="text.secondary" noWrap>{product.description}</Typography>
      </CardContent>
      <CardActions sx={{ justifyContent:'space-between', px:2, pb:2 }}>
        <Box>
          {product.deal?.isActive ? (
            <Box>
              <Typography variant="subtitle1">{currency(product.deal.dealPrice)}</Typography>
              <Typography variant="caption" sx={{ textDecoration:'line-through', color:'text.secondary' }}>{currency(product.originalPrice||product.price)}</Typography>
            </Box>
          ) : (
            <Typography variant="subtitle1">{currency(product.price)}</Typography>
          )}
        </Box>
        <Box>
          <Button size="small" onClick={()=>nav(`/products/${product._id}`)}>View</Button>
          <Button variant="contained" size="small" onClick={onAdd}>Add</Button>
        </Box>
      </CardActions>
    </Card>
  )
}


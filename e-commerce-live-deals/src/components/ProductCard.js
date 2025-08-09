// // FILE: src/components/ProductCard.jsx
// import React from 'react'
// import { Card, CardMedia, CardContent, Typography, CardActions, Button, Box, Chip } from '@mui/material'
// import { currency } from '../utils/format'
// import { useNavigate } from 'react-router-dom'
// import { useCartDispatch } from '../context/CartContext'

// export default function ProductCard({ product }){
//   const nav = useNavigate()
//   const dispatch = useCartDispatch()

//   const onAdd = ()=>{
//     dispatch({ type:'ADD', payload: { product, qty:1 } })
//   }

//   return (
//     <Card className="product-card-root" sx={{ display:'flex', flexDirection:'column' }}>
//       <Box sx={{ position:'relative' }}>
//         <CardMedia component="img" height="160" image={product.images?.[0]} alt={product.name} sx={{ objectFit:'cover' }} />
//         {product.deal?.isActive && (
//           <Chip label={product.deal.dealBadgeText||'Deal'} color="secondary" sx={{ position:'absolute', left:12, top:12 }} />
//         )}
//       </Box>
//       <CardContent sx={{ flex:1 }}>
//         <Typography variant="subtitle1" gutterBottom noWrap>{product.name}</Typography>
//         <Typography variant="body2" color="text.secondary" noWrap>{product.description}</Typography>
//       </CardContent>
//       <CardActions sx={{ justifyContent:'space-between', px:2, pb:2 }}>
//         <Box>
//           {product.deal?.isActive ? (
//             <Box>
//               <Typography variant="subtitle1">{currency(product.deal.dealPrice)}</Typography>
//               <Typography variant="caption" sx={{ textDecoration:'line-through', color:'text.secondary' }}>{currency(product.originalPrice||product.price)}</Typography>
//             </Box>
//           ) : (
//             <Typography variant="subtitle1">{currency(product.price)}</Typography>
//           )}
//         </Box>
//         <Box>
//           <Button size="small" onClick={()=>nav(`/products/${product._id}`)}>View</Button>
//           <Button variant="contained" size="small" onClick={onAdd}>Add</Button>
//         </Box>
//       </CardActions>
//     </Card>
//   )
// }



// src/components/ProductCard.js
import React from "react";
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Rating,
  Box,
  CardActions,
  Button
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCartDispatch } from '../context/CartContext';



const ProductCard = ({ product, onAddToCart }) => {
  const nav = useNavigate();
  const dispatch = useCartDispatch()
  const onAdd = () => {
    dispatch({ type: 'ADD', payload: { product, qty: 1 } })
  }

  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: 3,
        transition: "0.3s",
        "&:hover": { transform: "scale(1.03)", boxShadow: 6 }
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="200"
          // image={product.image}
          image={product?.images?.[0] || "/placeholder.jpg"} 
          alt={product.name}
          sx={{ objectFit: "cover" }}
        />
        {product.isDeal && (
          <Chip
            label="Deal of the Day"
            color="error"
            size="small"
            sx={{ position: "absolute", top: 10, left: 10 }}
          />
        )}
        {product.isNew && (
          <Chip
            label="New"
            color="success"
            size="small"
            sx={{ position: "absolute", top: 10, right: 10 }}
          />
        )}
      </Box>

      <CardContent>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ textTransform: "uppercase" }}
        >
          {product.brand}
        </Typography>
        <Typography variant="subtitle1" fontWeight="bold" noWrap>
          {product.name}
        </Typography>

        <Rating
          value={product.rating}
          precision={0.1}
          size="small"
          readOnly
          sx={{ mt: 0.5 }}
        />

        <Box sx={{ display: "flex", gap: 1, alignItems: "center", mt: 1 }}>
          <Typography variant="h6" color="primary">
            ₹{product.price}
          </Typography>
          {product.originalPrice && (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textDecoration: "line-through" }}
            >
              ₹{product.originalPrice}
            </Typography>
          )}
        </Box>
      </CardContent>

      <CardActions>
        <Button
          fullWidth
          variant="contained"
          startIcon={<ShoppingCartIcon />}
          onClick={onAdd}
        >
          Add to Cart
        </Button>
        <Box>
          <Button size="small" onClick={() => nav(`/products/${product._id}`)}>View</Button>
          {/* <Button variant="contained" size="small" onClick={onAdd}>Add</Button> */}
        </Box>
      </CardActions>
    </Card>
  );
};

export default ProductCard;

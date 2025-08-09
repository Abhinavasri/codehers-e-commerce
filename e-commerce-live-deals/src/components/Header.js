import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, IconButton, Badge, InputBase, Box, Drawer, List, ListItem, ListItemButton, ListItemText, Button } from '@mui/material'
import { ShoppingCart, Menu as MenuIcon, Search as SearchIcon } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Header(){
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const cartState = useCart()
  const totalQty = cartState.items.reduce((s,i)=>s+i.qty,0)

  return (
    <AppBar position="sticky" color="inherit" elevation={1} sx={{ mb:3 }}>
      <Toolbar sx={{ display:'flex', gap:2 }}>
        <IconButton edge="start" onClick={()=>setOpen(true)} aria-label="menu">
          <MenuIcon />
        </IconButton>

        <Box sx={{ cursor:'pointer' }} onClick={()=>navigate('/') }>
          <Typography variant="h6" color="primary">TradeBazaar</Typography>
          <Typography variant="caption" color="text.secondary">Live deals • Fast checkout</Typography>
        </Box>

        <Box sx={{ flex:1 }}>
          <Box sx={{ display:'flex', alignItems:'center', bgcolor:'background.paper', borderRadius:2, p:'6px 10px', width:'100%', maxWidth:640, ml:2 }}>
            <SearchIcon sx={{ mr:1 }} />
            <InputBase placeholder="Search products, categories..." fullWidth onKeyDown={(e)=>{ if(e.key==='Enter'){ navigate(`/products?search=${e.target.value}`) }}}/>
            <Button variant="contained" color="primary" sx={{ ml:1 }} onClick={()=>{ /* Could open advanced search */ }}>Search</Button>
          </Box>
        </Box>

        <Box sx={{ display:'flex', alignItems:'center', gap:1 }}>
          <IconButton size="large" onClick={()=>navigate('/cart')} aria-label="cart">
            <Badge badgeContent={totalQty} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <Button variant="outlined" onClick={()=>navigate('/admin')} sx={{ display:{ xs:'none', sm:'inline-flex' } }}>Admin</Button>
        </Box>
      </Toolbar>

      <Drawer open={open} onClose={()=>setOpen(false)}>
        <Box sx={{ width:260 }} role="presentation" onClick={()=>setOpen(false)}>
          <List>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/">
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/products">
                <ListItemText primary="Products" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/cart">
                <ListItemText primary="Cart" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  )
}
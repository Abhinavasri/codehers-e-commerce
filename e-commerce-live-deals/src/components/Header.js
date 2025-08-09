import React from "react";
import { AppBar, Toolbar, Box, Typography, Button, IconButton, InputBase, Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import "../index.css"; // for external CSS
import { useCart } from "../context/CartContext";

export default function Header() {
  const navigate = useNavigate();
    const cart = useCart();
  const totalQty = cart.items.reduce((sum, item) => sum + item.qty, 0);

  return (
    <AppBar position="sticky" color="inherit" elevation={1} sx={{ mb: 3 }}>
      <Toolbar sx={{ display: "flex", alignItems: "center", gap: 2, width: "100%" }}>
        
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={() => navigate("/")}>
          <img src="/e-commerce/categories/logo.png" alt="TradeBazaar" style={{ height: 100, marginRight: 8 }} />
          <Typography variant="h6" color="primary">TradeBazaar</Typography>
        </Box>

        {/* Spacer to push menu to the right */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Navigation Links */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button color="inherit" onClick={() => navigate("/ ")}>Home</Button>
          <Button color="inherit" onClick={() => navigate("/products")}>Products</Button>
          <IconButton onClick={() => navigate("/cart")} aria-label="cart">
            <Badge badgeContent={totalQty} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <Button color="warning" onClick={() => navigate("/products")}>Live Deals</Button>
        </Box>

        {/* Search Box */}
        <Box className="search-box" sx={{ ml: 2 }}>
          <SearchIcon className="search-icon" />
          <InputBase
            placeholder="Search products..."
            fullWidth
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                navigate(`/products?search=${e.target.value}`);
              }
            }}
          />
        </Box>

        {/* Login Button */}
        <Button color="inherit" sx={{ ml: 2 }} onClick={() => navigate("/login")}>Login</Button>
      </Toolbar>
    </AppBar>
  );
}

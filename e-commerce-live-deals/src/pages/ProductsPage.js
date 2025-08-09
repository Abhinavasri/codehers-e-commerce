import React, { useState, useMemo } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Grid,
  Container,
  Box,
  TextField,
  Paper,
  InputAdornment,
  IconButton,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { MOCK_PRODUCTS } from "../data/mockProducts";
import ProductCard from "../components/ProductCard";
import FilterPanel from "../components/FilterPanel";
import { useCartDispatch } from "../context/CartContext"; 

const ProductsPage = () => {
  const [filters, setFilters] = useState({
    search: "",
    category: [],
    priceRange: [500, 5000],
  });
  const dispatch = useCartDispatch();

  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter((p) => {
      const matchSearch = p.name
        .toLowerCase()
        .includes(filters.search.toLowerCase());
      const matchCategory =
        filters.category.length === 0 || filters.category.includes(p.category);
      const matchPrice =
        p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1];

      return matchSearch && matchCategory && matchPrice;
    });
  }, [filters]);

const handleAddToCart = (product) => {
  console.log("Added to cart:", product);
  dispatch({
    type: "ADD",
    payload: { product, qty: 1 }
  });
};

  return (
    <>
      <Header />
      <Box sx={{ bgcolor: "#f6f8fa", minHeight: "100vh", py: 4 }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {/* Left: Filters */}
            <Grid item xs={12} md={3}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  position: "sticky",
                  top: 100,
                  bgcolor: "#fff",
                }}
              >
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Filters
                </Typography>
                <FilterPanel filters={filters} setFilters={setFilters} />
              </Paper>
            </Grid>

            {/* Right: Search + Products */}
            <Grid item xs={12} md={9}>
              {/* Search Bar */}
              <Paper
                elevation={2}
                sx={{
                  p: 2,
                  borderRadius: 2,
                  bgcolor: "#fff",
                  mb: 3,
                }}
              >
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Search products..."
                  value={filters.search}
                  onChange={(e) =>
                    setFilters((prev) => ({ ...prev, search: e.target.value }))
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton>
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Paper>

              {/* Products Grid */}
              <Grid container spacing={3}>
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((item) => (
                    <Grid item xs={12} sm={6} md={4} key={item._id}>
                      <ProductCard
                        product={item}
                        onAddToCart={handleAddToCart}
                      />
                    </Grid>
                  ))
                ) : (
                  <Grid item xs={12}>
                    <Paper
                      sx={{
                        p: 5,
                        textAlign: "center",
                        borderRadius: 2,
                        bgcolor: "#fff",
                      }}
                    >
                      <Typography variant="h6" sx={{ mb: 1 }}>
                        No products found
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Try adjusting your filters or search keywords.
                      </Typography>
                    </Paper>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default ProductsPage;
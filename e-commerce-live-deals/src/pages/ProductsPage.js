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
      <Box sx={{ bgcolor: "#f6f8fa", minHeight: "100vh", py: 4 }} className="search-section">
        <Container maxWidth="lg" className="search-container">
          <Paper
            elevation={0}
            sx={{ p: 0, borderRadius: 0 }}
            className="search-box"
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
                    <IconButton className="search-icon">
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Paper>

          <div className="main-container">
            <div className="filter-section">
              <Typography variant="h6" className="filter-section h6">
                Filters
              </Typography>
              <FilterPanel filters={filters} setFilters={setFilters} />
            </div>
            <div className="products-section">
              <Grid container spacing={3} className="products-grid">
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
                      sx={{ p: 5, borderRadius: 8, bgcolor: "#fff" }}
                      className="shadow-md text-center"
                    >
                      <Typography variant="h6" sx={{ mb: 1 }} className="text-gray-700">
                        No products found
                      </Typography>
                      <Typography variant="body2" color="text.secondary" className="text-gray-500">
                        Try adjusting your filters or search keywords.
                      </Typography>
                    </Paper>
                  </Grid>
                )}
              </Grid>
            </div>
          </div>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default ProductsPage;
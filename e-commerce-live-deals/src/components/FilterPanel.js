import React from "react";
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Slider,
  Button
} from "@mui/material";

const categories = ["Dresses", "Sarees", "Shirts", "Watches", "Mobiles", "Toys"];

export default function FilterPanel({ filters, setFilters }) {
  const handleCategoryChange = (cat) => {
    setFilters((prev) => {
      const isSelected = prev.category.includes(cat);
      return {
        ...prev,
        category: isSelected
          ? prev.category.filter((c) => c !== cat)
          : [...prev.category, cat]
      };
    });
  };

  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 1 }}>
        Categories
      </Typography>
      <FormGroup>
        {categories.map((cat) => (
          <FormControlLabel
            key={cat}
            control={
              <Checkbox
                checked={filters.category.includes(cat)}
                onChange={() => handleCategoryChange(cat)}
              />
            }
            label={cat}
          />
        ))}
      </FormGroup>

      <Typography variant="h6" sx={{ mt: 3 }}>
        Price Range
      </Typography>
      <Slider
        value={filters.priceRange}
        onChange={(e, newValue) =>
          setFilters((prev) => ({ ...prev, priceRange: newValue }))
        }
        valueLabelDisplay="auto"
        min={500}
        max={5000}
        step={100}
      />

      <Button
        variant="outlined"
        fullWidth
        sx={{ mt: 2 }}
        onClick={() =>
          setFilters({ search: "", category: [], priceRange: [500, 5000] })
        }
      >
        Clear Filters
      </Button>
    </Box>
  );
}

// import React from 'react'
// import { Paper, Typography, FormControl, InputLabel, Select, MenuItem, Slider, Button } from '@mui/material'

// export default function FilterPanel({ categories=['All','Electronics','Wearables','Home & Kitchen'], filters, setFilters }){
//   return (
//     <Paper sx={{ p:2, position:'sticky', top:88 }}>
//       <Typography variant="h6" sx={{ mb:1 }}>Filters</Typography>

//       <FormControl fullWidth sx={{ mb:2 }}>
//         <InputLabel>Category</InputLabel>
//         <Select value={filters.category || 'All'} label="Category" onChange={(e)=>setFilters(prev=>({ ...prev, category: e.target.value === 'All' ? '' : e.target.value }))}>
//           {categories.map(c=> <MenuItem key={c} value={c}>{c}</MenuItem>)}
//         </Select>
//       </FormControl>

//       <Typography variant="body2" sx={{ mb:1 }}>Price range</Typography>
//       <Slider value={filters.priceRange || [0,15000]} onChange={(e, v)=>setFilters(prev=>({ ...prev, priceRange:v }))} min={0} max={30000} sx={{ mb:2 }}/>

//       <Button variant="contained" fullWidth onClick={()=>setFilters({})}>Reset</Button>
//     </Paper>
//   )
// }

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

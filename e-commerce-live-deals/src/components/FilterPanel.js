import React from 'react'
import { Paper, Typography, FormControl, InputLabel, Select, MenuItem, Slider, Button } from '@mui/material'

export default function FilterPanel({ categories=['All','Electronics','Wearables','Home & Kitchen'], filters, setFilters }){
  return (
    <Paper sx={{ p:2, position:'sticky', top:88 }}>
      <Typography variant="h6" sx={{ mb:1 }}>Filters</Typography>

      <FormControl fullWidth sx={{ mb:2 }}>
        <InputLabel>Category</InputLabel>
        <Select value={filters.category || 'All'} label="Category" onChange={(e)=>setFilters(prev=>({ ...prev, category: e.target.value === 'All' ? '' : e.target.value }))}>
          {categories.map(c=> <MenuItem key={c} value={c}>{c}</MenuItem>)}
        </Select>
      </FormControl>

      <Typography variant="body2" sx={{ mb:1 }}>Price range</Typography>
      <Slider value={filters.priceRange || [0,15000]} onChange={(e, v)=>setFilters(prev=>({ ...prev, priceRange:v }))} min={0} max={30000} sx={{ mb:2 }}/>

      <Button variant="contained" fullWidth onClick={()=>setFilters({})}>Reset</Button>
    </Paper>
  )
}
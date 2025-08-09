import React from 'react'
import { Box, Typography, Container } from '@mui/material'

export default function Footer(){
  return (
    <Box component="footer" sx={{ bgcolor:'background.paper', py:4, mt:6 }}>
      <Container maxWidth="lg">
        <Typography variant="subtitle1">TradeBazaar — E‑Commerce with Live Deals</Typography>
        <Typography variant="body2" color="text.secondary">Built with React + MUI • Hackathon demo</Typography>
      </Container>
    </Box>
  )
}
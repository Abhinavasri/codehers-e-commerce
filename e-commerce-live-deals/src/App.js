import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />

      {/* fallback */}
      <Route path="*" element={<HomePage />} />
    </Routes>
  )
}
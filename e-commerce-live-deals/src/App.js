import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import OrderConfirmationPage from './pages/OrderConfirmationPage'
import MockPaymentPage from './pages/MockPaymentPage'
import PaymentMethodPage from './pages/PaymentMethodPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/payment-method" element={<PaymentMethodPage />} />
      <Route path="/mock-payment" element={<MockPaymentPage />} />
      <Route path="/order-confirmation" element={<OrderConfirmationPage />} />


      {/* fallback */}
      <Route path="*" element={<HomePage />} />
    </Routes>
  )
}
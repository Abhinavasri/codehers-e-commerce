// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import HomePage from './pages/HomePage';
// import DealsPage from './pages/DealsPage';
// import CartPage from './pages/CartPage';

// function App() {
//   return (
//     <>
//       <Header />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/deals" element={<DealsPage />} />
//         <Route path="/cart" element={<CartPage />} />
//       </Routes>
//     </>
//   );
// }

// export default App;


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
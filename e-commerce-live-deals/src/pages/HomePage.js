// import React, { useEffect, useState } from 'react'
// import { Container, Grid, Typography, Box } from '@mui/material'
// import Header from '../components/Header'
// import Footer from '../components/Footer'
// import DealCard from '../components/DealCard'
// import ProductCard from '../components/ProductCard'
// import { fetchDeals, fetchProducts } from '../services/api'
// import { MOCK_PRODUCTS } from '../data/mockProducts'

// export default function HomePage(){
//   const [deals, setDeals] = useState([])
//   const [featured, setFeatured] = useState([])

//   useEffect(()=>{
//     async function load(){
//       try{
//         const d = await fetchDeals()
//         setDeals(d)
//       }catch(e){
//         // fallback
//         setDeals(MOCK_PRODUCTS.filter(p=>p.deal?.isActive))
//       }

//       try{
//         const p = await fetchProducts({ limit:6 })
//         setFeatured(p.data || p)
//       }catch(e){
//         setFeatured(MOCK_PRODUCTS)
//       }
//     }
//     load()
//   }, [])

//   return (
//     <>
//       <Header />
//       <Container maxWidth="lg">
//         <Box sx={{ my:3 }}>
//           <Typography variant="h4" gutterBottom>Deals of the day</Typography>
//           <Grid container spacing={2}>
//             {deals.map(d=> (
//               <Grid item xs={12} md={6} key={d._id}>
//                 <DealCard product={d} />
//               </Grid>
//             ))}
//             {deals.length===0 && <Typography color="text.secondary">No active deals right now.</Typography>}
//           </Grid>
//         </Box>

//         <Box sx={{ my:3 }}>
//           <Typography variant="h5" gutterBottom>Featured products</Typography>
//           <Grid container spacing={2}>
//             {featured.map(p=> (
//               <Grid item xs={12} sm={6} md={4} key={p._id}>
//                 <ProductCard product={p} />
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//       </Container>
//       <Footer />
//     </>
//   )
// }




// import React, { useState } from 'react';
// import Header from '../components/Header';
// import Hero from '../components/hero';
// import CategoriesSection from '../components/productCategories';
// import FeaturedProducts from '../components/featuredProduct';

// const backgroundColor = "#f5f5f5";
// export default function Home() {
//   const [activeCategoryId, setActiveCategoryId] = useState(null);
//   const [search, setSearch] = useState("");

//   return (
//     <div style={{ backgroundColor }} className="min-h-screen">
//       <Header onSearch={setSearch} />
//       <Hero />
//       <CategoriesSection onSelectCategory={(id) => setActiveCategoryId(id === activeCategoryId ? null : id)} selectedId={activeCategoryId} />
//       <FeaturedProducts activeCategoryId={activeCategoryId} search={search} />
//     </div>
//   );
// }

// FILE: src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/hero";
import CategoriesSection from "../components/productCategories";
import DealCard from "../components/DealCard";

import { fetchDeals } from "../services/api";
import { MOCK_PRODUCTS } from "../data/mockProducts";

const backgroundColor = "#f5f5f5";

export default function Home() {
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [search, setSearch] = useState("");
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    async function loadDeals() {
      try {
        const d = await fetchDeals();
        setDeals(d);
      } catch {
        setDeals(MOCK_PRODUCTS.filter((p) => p.deal?.isActive));
      }
    }
    loadDeals();
  }, []);

  return (
    <div style={{ backgroundColor }} className="min-h-screen">
      <Header onSearch={setSearch} />
      <Hero />
      <CategoriesSection
        onSelectCategory={(id) =>
          setActiveCategoryId(id === activeCategoryId ? null : id)
        }
        selectedId={activeCategoryId}
      />

      {/* Deals Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Deals of the Day</h2>
          {deals.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {deals.map((deal) => (
                <DealCard key={deal._id} product={deal} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No active deals right now.</p>
          )}
        </div>
      </section>
    </div>
  );
}

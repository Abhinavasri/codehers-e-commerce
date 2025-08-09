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
  const [ setSearch] = useState("");
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

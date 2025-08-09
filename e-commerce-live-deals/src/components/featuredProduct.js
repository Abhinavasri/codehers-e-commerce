import React, { useMemo } from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';
export default function FeaturedProducts({ activeCategoryId, search }) {
  const filtered = useMemo(() => {
    let list = products;
    if (activeCategoryId) list = list.filter(p => p.categoryId === activeCategoryId);
    if (search) {
      const q = search.toLowerCase();
      list = list.filter(p => p.name.toLowerCase().includes(q));
    }
    return list;
  }, [activeCategoryId, search]);

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  );
}
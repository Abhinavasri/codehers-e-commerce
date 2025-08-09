import React from "react";
import { categories } from "../data/categories";
import { useNavigate } from "react-router-dom";
import "../index.css";

export default function CategoriesSection({ onSelectCategory, selectedId }) {
  const navigate = useNavigate();

  return (
    <section className="categories-section">
      <div className="categories-container">
        <h2 className="categories-title">Shop by Category</h2>
        <div className="categories-list">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                onSelectCategory(category.id);
                navigate(`/products?category=${category.slug}`);
              }}
              className={`category-card ${
                selectedId === category.id ? "active" : ""
              }`}
            >
              <img src={category.image} alt={category.name} />
              <div>{category.name}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

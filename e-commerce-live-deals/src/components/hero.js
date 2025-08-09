import React from "react";
import "../index.css";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Find your style — shop the latest collections
          </h1>
          <p className="hero-subtitle">
            Curated picks across all categories. Free shipping on orders over $50.
          </p>
        </div>
        <div className="hero-image">
          <img
            src="../categories/shopping.png"
            alt="Fashion Collection"
          />
        </div>
      </div>
    </section>
  );
}

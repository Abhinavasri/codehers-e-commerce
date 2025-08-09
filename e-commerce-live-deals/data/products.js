export const products = [
  // Dresses
  { id: 101, name: "Floral Summer Dress", price: 29.99, categoryId: 1, description: "Lightweight floral dress perfect for summer outings.", image: "https://via.placeholder.com/300x300?text=Dress+1", stock: 25, rating: 4.5 },
  { id: 102, name: "Evening Gown", price: 89.99, categoryId: 1, description: "Elegant long gown for special occasions.", image: "https://via.placeholder.com/300x300?text=Dress+2", stock: 10, rating: 4.8 },
  { id: 103, name: "Casual Cotton Dress", price: 24.50, categoryId: 1, description: "Comfortable cotton dress for daily wear.", image: "https://via.placeholder.com/300x300?text=Dress+3", stock: 40, rating: 4.2 },
  { id: 104, name: "Party Mini Dress", price: 39.99, categoryId: 1, description: "Trendy mini dress for parties.", image: "https://via.placeholder.com/300x300?text=Dress+4", stock: 18, rating: 4.3 },
  { id: 105, name: "Maxi Beach Dress", price: 34.75, categoryId: 1, description: "Flowy maxi dress for beach vacations.", image: "https://via.placeholder.com/300x300?text=Dress+5", stock: 15, rating: 4.6 },

  // Sarees
  { id: 201, name: "Silk Saree", price: 120.00, categoryId: 2, description: "Pure silk saree with golden border.", image: "https://via.placeholder.com/300x300?text=Saree+1", stock: 12, rating: 4.9 },
  { id: 202, name: "Cotton Saree", price: 45.00, categoryId: 2, description: "Soft cotton saree for daily wear.", image: "https://via.placeholder.com/300x300?text=Saree+2", stock: 30, rating: 4.4 },
  { id: 203, name: "Designer Saree", price: 150.00, categoryId: 2, description: "Heavy embroidery designer saree.", image: "https://via.placeholder.com/300x300?text=Saree+3", stock: 8, rating: 4.7 },
  { id: 204, name: "Georgette Saree", price: 75.50, categoryId: 2, description: "Lightweight georgette saree for festive occasions.", image: "https://via.placeholder.com/300x300?text=Saree+4", stock: 20, rating: 4.5 },
  { id: 205, name: "Banarasi Saree", price: 210.00, categoryId: 2, description: "Traditional Banarasi silk saree.", image: "https://via.placeholder.com/300x300?text=Saree+5", stock: 5, rating: 4.9 },

  // Shirts
  { id: 301, name: "Formal White Shirt", price: 25.99, categoryId: 3, description: "Crisp white formal shirt.", image: "https://via.placeholder.com/300x300?text=Shirt+1", stock: 50, rating: 4.3 },
  { id: 302, name: "Casual Plaid Shirt", price: 19.99, categoryId: 3, description: "Comfortable plaid shirt for everyday use.", image: "https://via.placeholder.com/300x300?text=Shirt+2", stock: 35, rating: 4.4 },
  { id: 303, name: "Denim Shirt", price: 29.99, categoryId: 3, description: "Stylish denim shirt.", image: "https://via.placeholder.com/300x300?text=Shirt+3", stock: 22, rating: 4.5 },
  { id: 304, name: "Linen Shirt", price: 34.50, categoryId: 3, description: "Breathable linen shirt for summer.", image: "https://via.placeholder.com/300x300?text=Shirt+4", stock: 28, rating: 4.6 },
  { id: 305, name: "Graphic T-Shirt", price: 14.99, categoryId: 3, description: "Trendy printed graphic tee.", image: "https://via.placeholder.com/300x300?text=Shirt+5", stock: 60, rating: 4.2 },

  // Watches
  { id: 401, name: "Analog Leather Watch", price: 49.99, categoryId: 4, description: "Classic analog watch with leather strap.", image: "https://via.placeholder.com/300x300?text=Watch+1", stock: 18, rating: 4.5 },
  { id: 402, name: "Digital Sports Watch", price: 29.99, categoryId: 4, description: "Water-resistant sports watch with stopwatch.", image: "https://via.placeholder.com/300x300?text=Watch+2", stock: 25, rating: 4.4 },
  { id: 403, name: "Smartwatch Pro", price: 199.99, categoryId: 4, description: "Advanced smartwatch with fitness tracking.", image: "https://via.placeholder.com/300x300?text=Watch+3", stock: 15, rating: 4.7 },
  { id: 404, name: "Luxury Gold Watch", price: 299.99, categoryId: 4, description: "Luxury wristwatch with gold finish.", image: "https://via.placeholder.com/300x300?text=Watch+4", stock: 5, rating: 4.9 },
  { id: 405, name: "Casual Everyday Watch", price: 19.99, categoryId: 4, description: "Simple watch for everyday wear.", image: "https://via.placeholder.com/300x300?text=Watch+5", stock: 30, rating: 4.1 },

  // Mobiles
  { id: 501, name: "Smartphone A1", price: 299.99, categoryId: 5, description: "Affordable smartphone with great performance.", image: "https://via.placeholder.com/300x300?text=Mobile+1", stock: 40, rating: 4.4 },
  { id: 502, name: "Smartphone B2 Pro", price: 599.99, categoryId: 5, description: "High-end phone with excellent camera.", image: "https://via.placeholder.com/300x300?text=Mobile+2", stock: 20, rating: 4.8 },
  { id: 503, name: "Foldable Smartphone", price: 1299.99, categoryId: 5, description: "Latest foldable screen smartphone.", image: "https://via.placeholder.com/300x300?text=Mobile+3", stock: 8, rating: 4.9 },
  { id: 504, name: "Smartphone C3 Lite", price: 199.99, categoryId: 5, description: "Budget-friendly smartphone for everyday use.", image: "https://via.placeholder.com/300x300?text=Mobile+4", stock: 60, rating: 4.2 },
  { id: 505, name: "Gaming Smartphone X", price: 899.99, categoryId: 5, description: "Powerful smartphone for gaming.", image: "https://via.placeholder.com/300x300?text=Mobile+5", stock: 12, rating: 4.7 },

  // Toys
  { id: 601, name: "Building Blocks Set", price: 29.99, categoryId: 6, description: "Creative building block set for kids.", image: "https://via.placeholder.com/300x300?text=Toy+1", stock: 50, rating: 4.8 },
  { id: 602, name: "Remote Control Car", price: 39.99, categoryId: 6, description: "Fast RC car for kids and adults.", image: "https://via.placeholder.com/300x300?text=Toy+2", stock: 30, rating: 4.5 },
  { id: 603, name: "Stuffed Teddy Bear", price: 19.99, categoryId: 6, description: "Soft and cuddly teddy bear.", image: "https://via.placeholder.com/300x300?text=Toy+3", stock: 40, rating: 4.6 },
  { id: 604, name: "Puzzle Game", price: 14.99, categoryId: 6, description: "Challenging puzzle for kids 8+.", image: "https://via.placeholder.com/300x300?text=Toy+4", stock: 35, rating: 4.3 },
  { id: 605, name: "Action Figure", price: 24.99, categoryId: 6, description: "Collectible superhero action figure.", image: "https://via.placeholder.com/300x300?text=Toy+5", stock: 25, rating: 4.4 }
];

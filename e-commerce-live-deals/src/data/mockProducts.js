export const MOCK_PRODUCTS = [
  {
    _id: 'p1',
    name: 'Wireless Headphones Pro',
    slug: 'wireless-headphones-pro',
    description: 'Comfortable over-ear headphones with active noise canceling.',
    images: ['https://images.unsplash.com/photo-1518444021800-9571be8d3a3b?w=800&q=60'],
    category: 'Electronics',
    price: 4999,
    originalPrice: 6999,
    stock: 25,
    rating: 4.5,
    reviews: 120,
    deal: { isActive: true, dealPrice: 3499, expiresAt: new Date(Date.now()+1000*60*60*6).toISOString(), dealBadgeText: 'Deal of the Day' }
  },
  {
    _id: 'p2',
    name: 'Smart Watch S3',
    slug: 'smart-watch-s3',
    description: 'Health tracking, notifications, long battery life.',
    images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=60'],
    category: 'Wearables',
    price: 8999,
    originalPrice: 9999,
    stock: 10,
    rating: 4.2,
    reviews: 89,
    deal: { isActive: true, dealPrice: 6999, expiresAt: new Date(Date.now()+1000*60*60*24).toISOString(), dealBadgeText: 'Flash Deal' }
  },
  {
    _id: 'p3',
    name: 'Eco Water Bottle',
    slug: 'eco-water-bottle',
    description: 'Stainless steel, vacuum insulated.',
    images: ['https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=60'],
    category: 'Home & Kitchen',
    price: 999,
    originalPrice: 1499,
    stock: 100,
    rating: 4.7,
    reviews: 210
  }
]
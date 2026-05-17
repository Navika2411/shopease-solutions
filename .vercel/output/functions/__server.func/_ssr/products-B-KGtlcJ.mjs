const products = [
  { id: "1", name: "Aero Runner Sneakers", price: 7499, category: "Footwear", description: "Lightweight knit runners with responsive foam midsole.", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80" },
  { id: "2", name: "Studio Wireless Headphones", price: 12499, category: "Audio", description: "Over-ear noise-cancelling cans with 40h battery life.", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80" },
  { id: "3", name: "Heritage Leather Watch", price: 18299, category: "Accessories", description: "Swiss movement, full-grain leather strap, sapphire crystal.", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80" },
  { id: "4", name: "Canvas Weekender Bag", price: 6199, category: "Bags", description: "Waxed canvas duffel built for short getaways.", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80" },
  { id: "5", name: "Linen Overshirt", price: 5399, category: "Apparel", description: "Breathable European linen with a relaxed cut.", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80" },
  { id: "6", name: "Ceramic Pour-Over Kit", price: 3999, category: "Home", description: "Hand-thrown dripper with double-wall server.", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80" },
  { id: "7", name: "Polarized Sunglasses", price: 7999, category: "Accessories", description: "Acetate frames with UV400 polarized lenses.", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80" },
  { id: "8", name: "Merino Wool Beanie", price: 2349, category: "Apparel", description: "Soft merino knit, ribbed cuff, made in Portugal.", image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=800&q=80" }
];
const formatINR = (n) => `₹${n.toLocaleString("en-IN")}`;
export {
  formatINR as f,
  products as p
};

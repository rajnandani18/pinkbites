import { useState } from "react";
import { Star, Heart, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const menuCategories = ["All", "Burgers", "Fries", "Drinks", "Combos"];

const menuItems = [
  {
    id: 1,
    name: "Pink Princess Burger",
    description: "Juicy beef patty, pink sauce, pickles, and love",
    price: 299,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop",
    badge: "Best Seller",
    badgeColor: "bg-[#FF69B4]",
    accentColor: "#FF69B4",
    borderColor: "border-[#FFB6C1]",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Barbie Dream Burger",
    description: "Double patty, bacon, cheese & special glitter sauce",
    price: 399,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=400&fit=crop",
    badge: "New",
    badgeColor: "bg-[#E0218A]",
    accentColor: "#E0218A",
    borderColor: "border-[#FF77FF]",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Sweet Heart Burger",
    description: "Chicken patty, honey mustard & heart-shaped bun",
    price: 279,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=400&fit=crop",
    accentColor: "#FF6B6B",
    borderColor: "border-[#FFB3B3]",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Rose Gold Fries",
    description: "Crispy seasoned fries with pink himalayan salt",
    price: 129,
    category: "Fries",
    image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=400&h=400&fit=crop",
    badge: "Fan Favorite",
    badgeColor: "bg-[#B76E79]",
    accentColor: "#B76E79",
    borderColor: "border-[#E8C4C4]",
    rating: 4.9,
  },
  {
    id: 5,
    name: "Glitter Cheese Fries",
    description: "Loaded with melted cheese & sparkle seasoning",
    price: 179,
    category: "Fries",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=400&fit=crop",
    accentColor: "#FFD700",
    borderColor: "border-[#FFE5B4]",
    rating: 4.8,
  },
  {
    id: 6,
    name: "Sweet Potato Blush",
    description: "Sweet potato fries with cinnamon sugar dust",
    price: 149,
    category: "Fries",
    image: "https://images.unsplash.com/photo-1604152135912-04a022e23696?w=400&h=400&fit=crop",
    accentColor: "#E97451",
    borderColor: "border-[#FFCBA4]",
    rating: 4.6,
  },
  {
    id: 7,
    name: "Pink Lemonade",
    description: "Fresh squeezed with a hint of strawberry",
    price: 99,
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=400&fit=crop",
    badge: "Refreshing",
    badgeColor: "bg-[#FFB7C5]",
    accentColor: "#FFB7C5",
    borderColor: "border-[#FFDAE0]",
    rating: 4.8,
  },
  {
    id: 8,
    name: "Berry Bliss Shake",
    description: "Strawberry milkshake with whipped cream & hearts",
    price: 149,
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=400&h=400&fit=crop",
    accentColor: "#8B4789",
    borderColor: "border-[#DDA0DD]",
    rating: 4.9,
  },
  {
    id: 9,
    name: "Cotton Candy Float",
    description: "Vanilla ice cream with cotton candy soda",
    price: 169,
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=400&fit=crop",
    accentColor: "#87CEEB",
    borderColor: "border-[#B0E0E6]",
    rating: 4.7,
  },
  {
    id: 10,
    name: "Princess Combo",
    description: "Pink Princess Burger + Rose Gold Fries + Pink Lemonade",
    price: 449,
    category: "Combos",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=400&fit=crop",
    badge: "Best Value",
    badgeColor: "bg-[#FF1493]",
    accentColor: "#FF1493",
    borderColor: "border-[#FFB6C1]",
    rating: 5.0,
  },
  {
    id: 11,
    name: "Barbie Box",
    description: "Barbie Dream Burger + Glitter Fries + Berry Shake",
    price: 599,
    category: "Combos",
    image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=400&h=400&fit=crop",
    badge: "Premium",
    badgeColor: "bg-[#E0218A]",
    accentColor: "#E0218A",
    borderColor: "border-[#FF77FF]",
    rating: 4.9,
  },
  {
    id: 12,
    name: "Sweet Treat Duo",
    description: "Sweet Heart Burger + Sweet Potato Blush + Any Drink",
    price: 499,
    category: "Combos",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=400&fit=crop",
    accentColor: "#FF6B6B",
    borderColor: "border-[#FFB3B3]",
    rating: 4.8,
  },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-cream relative overflow-hidden">
      {/* Doodle decorations */}
      <svg className="absolute top-10 right-10 w-24 h-24 text-pink-soft opacity-30" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="50" cy="50" r="40" strokeDasharray="8 4"/>
        <circle cx="50" cy="50" r="25" strokeDasharray="4 4"/>
      </svg>
      <svg className="absolute bottom-20 left-10 w-20 h-20 text-primary opacity-20" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10 40 Q40 10 70 40 Q40 70 10 40" strokeLinejoin="round"/>
      </svg>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <span className="inline-block font-cute text-primary font-semibold text-sm uppercase tracking-wider mb-2">
            Our Delicious Offerings
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            The Pink Menu
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Every dish is crafted with love, served with a smile, and guaranteed
            to make your taste buds dance with joy!
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`font-cute font-semibold px-6 py-2.5 rounded-full transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-pink"
                  : "bg-card text-foreground hover:bg-pink-soft border border-border"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="relative group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Doodle Border SVG */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 300 280"
                preserveAspectRatio="none"
                fill="none"
                style={{ zIndex: 1 }}
              >
                {/* Hand-drawn wobbly rectangle border */}
                <path
                  d="M20 15 
                     Q 25 8, 50 10 
                     L 120 8 
                     Q 150 5, 180 9 
                     L 250 12 
                     Q 280 10, 285 20 
                     Q 290 50, 288 100 
                     L 290 180 
                     Q 292 220, 288 250 
                     Q 285 268, 270 270 
                     L 180 273 
                     Q 150 276, 100 272 
                     L 40 270 
                     Q 15 268, 12 250 
                     Q 8 200, 10 150 
                     L 8 80 
                     Q 6 40, 12 25 
                     Q 15 12, 20 15 Z"
                  stroke={item.accentColor}
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  strokeDasharray="0"
                  className="transition-all duration-300 group-hover:stroke-[4]"
                  style={{ 
                    filter: `drop-shadow(0 2px 4px ${item.accentColor}40)`,
                  }}
                />
                {/* Decorative corner doodles */}
                <circle cx="20" cy="15" r="4" fill={item.accentColor} opacity="0.6" />
                <circle cx="280" cy="15" r="3" fill={item.accentColor} opacity="0.5" />
                <circle cx="15" cy="265" r="3" fill={item.accentColor} opacity="0.5" />
                <circle cx="285" cy="268" r="4" fill={item.accentColor} opacity="0.6" />
                
                {/* Small decorative stars */}
                <path 
                  d="M275 30 L277 26 L279 30 L283 28 L279 32 L281 36 L277 34 L273 36 L275 32 L271 28 Z" 
                  fill={item.accentColor} 
                  opacity="0.4"
                  className="group-hover:opacity-70 transition-opacity"
                />
                <path 
                  d="M25 250 L27 246 L29 250 L33 248 L29 252 L31 256 L27 254 L23 256 L25 252 L21 248 Z" 
                  fill={item.accentColor} 
                  opacity="0.4"
                  className="group-hover:opacity-70 transition-opacity"
                />
              </svg>

              {/* Card Content */}
              <div 
                className="relative bg-card rounded-3xl p-6 mx-3 my-2 transition-all hover:-translate-y-2 group-hover:shadow-xl"
                style={{ 
                  zIndex: 2,
                  boxShadow: `0 8px 30px ${item.accentColor}15`,
                }}
              >
                {/* Badge */}
                {item.badge && (
                  <Badge
                    className={`${item.badgeColor} text-white font-cute mb-3`}
                  >
                    {item.badge === "Best Seller" && <Flame className="w-3 h-3 mr-1" />}
                    {item.badge}
                  </Badge>
                )}

                {/* Image & Name */}
                <div className="flex items-start gap-4 mb-4">
                  <div 
                    className="relative w-20 h-20 shrink-0 group-hover:scale-105 transition-transform"
                  >
                    {/* Doodle border for image */}
                    <svg className="absolute -inset-1 w-[calc(100%+8px)] h-[calc(100%+8px)]" viewBox="0 0 90 90" fill="none">
                      <path
                        d="M15 10 Q45 5, 75 10 Q85 15, 82 45 Q85 75, 75 80 Q45 85, 15 80 Q5 75, 8 45 Q5 15, 15 10 Z"
                        stroke={item.accentColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        fill="none"
                        opacity="0.7"
                      />
                    </svg>
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover rounded-2xl relative z-10"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 
                      className="font-display text-xl mb-1"
                      style={{ color: item.accentColor }}
                    >
                      {item.name}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Doodle divider line */}
                <svg className="w-full h-3 mb-3" viewBox="0 0 200 10" preserveAspectRatio="none">
                  <path
                    d="M0 5 Q20 2, 40 6 Q60 9, 80 4 Q100 1, 120 7 Q140 10, 160 5 Q180 2, 200 6"
                    stroke={item.accentColor}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.4"
                  />
                </svg>

                {/* Rating & Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star 
                      className="w-4 h-4 fill-current" 
                      style={{ color: item.accentColor }}
                    />
                    <span className="font-cute text-sm font-semibold text-foreground">
                      {item.rating}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span 
                      className="font-display text-2xl"
                      style={{ color: item.accentColor }}
                    >
                      ₹{item.price}
                    </span>
                    <Button
                      size="sm"
                      className="rounded-full text-white border-2 border-dashed"
                      style={{ 
                        backgroundColor: item.accentColor,
                        borderColor: `${item.accentColor}80`,
                      }}
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="gradient-button text-primary-foreground font-semibold rounded-full px-10 py-6 text-lg shadow-pink-lg hover:scale-105 transition-all"
          >
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;

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
      {/* Doodle decorations - hidden on mobile */}
      <svg className="absolute top-10 right-4 sm:right-10 w-16 sm:w-24 h-16 sm:h-24 text-pink-soft opacity-30 hidden sm:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="50" cy="50" r="40" strokeDasharray="8 4"/>
        <circle cx="50" cy="50" r="25" strokeDasharray="4 4"/>
      </svg>
      <svg className="absolute bottom-20 left-4 sm:left-10 w-14 sm:w-20 h-14 sm:h-20 text-primary opacity-20 hidden sm:block" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10 40 Q40 10 70 40 Q40 70 10 40" strokeLinejoin="round"/>
      </svg>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <span className="inline-block font-cute text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2">
            Our Delicious Offerings
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-3 sm:mb-4">
            The Pink Menu
          </h2>
          <p className="font-body text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Every dish is crafted with love, served with a smile, and guaranteed
            to make your taste buds dance with joy!
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2">
          {menuCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`font-cute font-semibold px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base rounded-full transition-all ${
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`bg-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-pink hover:shadow-pink-lg transition-all hover:-translate-y-2 border-2 ${item.borderColor} group animate-scale-in`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                boxShadow: `0 8px 30px ${item.accentColor}25`,
              }}
            >
              {/* Badge */}
              {item.badge && (
                <Badge
                  className={`${item.badgeColor} text-white font-cute mb-2 sm:mb-3 text-xs`}
                >
                  {item.badge === "Best Seller" && <Flame className="w-3 h-3 mr-1" />}
                  {item.badge}
                </Badge>
              )}

              {/* Image & Name */}
              <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div 
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl overflow-hidden shrink-0 group-hover:scale-105 transition-transform border-2 ${item.borderColor}`}
                  style={{ boxShadow: `0 4px 15px ${item.accentColor}30` }}
                >
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 
                    className="font-display text-lg sm:text-xl mb-1 truncate"
                    style={{ color: item.accentColor }}
                  >
                    {item.name}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-muted-foreground line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Rating & Price */}
              <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-border">
                <div className="flex items-center gap-1">
                  <Star 
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" 
                    style={{ color: item.accentColor }}
                  />
                  <span className="font-cute text-xs sm:text-sm font-semibold text-foreground">
                    {item.rating}
                  </span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <span 
                    className="font-display text-xl sm:text-2xl"
                    style={{ color: item.accentColor }}
                  >
                    ₹{item.price}
                  </span>
                  <Button
                    size="sm"
                    className="rounded-full text-white h-8 w-8 sm:h-9 sm:w-9 p-0"
                    style={{ backgroundColor: item.accentColor }}
                  >
                    <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center mt-8 sm:mt-12">
          <Button
            size="lg"
            className="gradient-button text-primary-foreground font-semibold rounded-full px-8 sm:px-10 py-5 sm:py-6 text-base sm:text-lg shadow-pink-lg hover:scale-105 transition-all"
          >
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;

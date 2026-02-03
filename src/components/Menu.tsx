import { useState } from "react";
import { Star, Heart, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const menuCategories = ["All", "Cakes", "Pastries", "Desserts", "Smoothies", "Juices", "Combos"];

const menuItems = [
  {
    id: 1,
    name: "Pink Velvet Cake",
    description: "Soft pink velvet layers with cream cheese frosting",
    price: 349,
    category: "Cakes",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop",
    badge: "Best Seller",
    badgeColor: "bg-[#FF69B4]",
    accentColor: "#FF69B4",
    borderColor: "border-[#FFB6C1]",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Rose Petal Cheesecake",
    description: "Creamy cheesecake with edible rose petals & berry swirl",
    price: 399,
    category: "Cakes",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=400&fit=crop",
    badge: "New",
    badgeColor: "bg-[#E0218A]",
    accentColor: "#E0218A",
    borderColor: "border-[#FF77FF]",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Strawberry Dream Cake",
    description: "Fresh strawberries with vanilla sponge & pink glaze",
    price: 329,
    category: "Cakes",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=400&fit=crop",
    accentColor: "#FF6B6B",
    borderColor: "border-[#FFB3B3]",
    rating: 4.7,
  },
  {
    id: 4,
    name: "French Macarons",
    description: "Assorted rose, raspberry & vanilla macarons",
    price: 199,
    category: "Pastries",
    image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=400&h=400&fit=crop",
    badge: "Fan Favorite",
    badgeColor: "bg-[#B76E79]",
    accentColor: "#B76E79",
    borderColor: "border-[#E8C4C4]",
    rating: 4.9,
  },
  {
    id: 5,
    name: "Raspberry Croissant",
    description: "Buttery croissant filled with raspberry cream",
    price: 149,
    category: "Pastries",
    image: "https://images.unsplash.com/photo-1623334044303-241021148842?w=400&h=400&fit=crop",
    accentColor: "#C41E3A",
    borderColor: "border-[#FFB6C1]",
    rating: 4.8,
  },
  {
    id: 6,
    name: "Pink Glazed Donuts",
    description: "Fluffy donuts with strawberry glaze & sprinkles",
    price: 129,
    category: "Pastries",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=400&fit=crop",
    accentColor: "#FF85A2",
    borderColor: "border-[#FFCBA4]",
    rating: 4.6,
  },
  {
    id: 7,
    name: "Berry Panna Cotta",
    description: "Silky vanilla panna cotta with mixed berry compote",
    price: 179,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=400&fit=crop",
    badge: "Refreshing",
    badgeColor: "bg-[#FFB7C5]",
    accentColor: "#FFB7C5",
    borderColor: "border-[#FFDAE0]",
    rating: 4.8,
  },
  {
    id: 8,
    name: "Rose Milk Pudding",
    description: "Delicate rose-infused milk pudding with pistachios",
    price: 159,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=400&h=400&fit=crop",
    accentColor: "#DB7093",
    borderColor: "border-[#DDA0DD]",
    rating: 4.9,
  },
  {
    id: 9,
    name: "Cotton Candy Mousse",
    description: "Light airy mousse with cotton candy flavor & sparkles",
    price: 189,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1541599188778-cdc73298e8fd?w=400&h=400&fit=crop",
    accentColor: "#87CEEB",
    borderColor: "border-[#B0E0E6]",
    rating: 4.7,
  },
  {
    id: 10,
    name: "Berry Bliss Smoothie",
    description: "Mixed berries, banana & Greek yogurt blend",
    price: 179,
    category: "Smoothies",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=400&fit=crop",
    badge: "Healthy",
    badgeColor: "bg-[#C71585]",
    accentColor: "#C71585",
    borderColor: "border-[#FFB6C1]",
    rating: 4.9,
  },
  {
    id: 11,
    name: "Strawberry Dream Smoothie",
    description: "Fresh strawberries, vanilla & honey smoothie",
    price: 169,
    category: "Smoothies",
    image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&h=400&fit=crop",
    accentColor: "#FF6B6B",
    borderColor: "border-[#FFB3B3]",
    rating: 4.8,
  },
  {
    id: 12,
    name: "Mango Passion Smoothie",
    description: "Tropical mango, passion fruit & coconut milk",
    price: 189,
    category: "Smoothies",
    image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=400&h=400&fit=crop",
    accentColor: "#FFA500",
    borderColor: "border-[#FFE4B5]",
    rating: 4.7,
  },
  {
    id: 13,
    name: "Fresh Orange Juice",
    description: "Freshly squeezed pure orange juice",
    price: 129,
    category: "Juices",
    image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=400&fit=crop",
    badge: "Fresh",
    badgeColor: "bg-[#FF8C00]",
    accentColor: "#FF8C00",
    borderColor: "border-[#FFDAB9]",
    rating: 4.9,
  },
  {
    id: 14,
    name: "Pink Lemonade",
    description: "Refreshing lemonade with a hint of raspberry",
    price: 119,
    category: "Juices",
    image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=400&fit=crop",
    accentColor: "#FFB7C5",
    borderColor: "border-[#FFDAE0]",
    rating: 4.8,
  },
  {
    id: 15,
    name: "Watermelon Mint Juice",
    description: "Fresh watermelon juice with a hint of mint",
    price: 139,
    category: "Juices",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400&h=400&fit=crop",
    accentColor: "#FF6B6B",
    borderColor: "border-[#FFB3B3]",
    rating: 4.7,
  },
  {
    id: 16,
    name: "Princess Tea Set",
    description: "Pink Velvet Slice + 3 Macarons + Rose Tea",
    price: 499,
    category: "Combos",
    image: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=400&h=400&fit=crop",
    badge: "Best Value",
    badgeColor: "bg-[#FF1493]",
    accentColor: "#FF1493",
    borderColor: "border-[#FFB6C1]",
    rating: 5.0,
  },
  {
    id: 17,
    name: "Dessert Paradise Box",
    description: "Cheesecake + Croissant + Panna Cotta + Fresh Juice",
    price: 649,
    category: "Combos",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=400&fit=crop",
    badge: "Premium",
    badgeColor: "bg-[#E0218A]",
    accentColor: "#E0218A",
    borderColor: "border-[#FF77FF]",
    rating: 4.9,
  },
  {
    id: 18,
    name: "Sweet Celebration",
    description: "Full Cake + Smoothie + Rose Milk Pudding",
    price: 899,
    category: "Combos",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=400&fit=crop",
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

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
    price: 12.99,
    category: "Burgers",
    emoji: "🍔",
    badge: "Best Seller",
    badgeColor: "bg-primary",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Barbie Dream Burger",
    description: "Double patty, bacon, cheese & special glitter sauce",
    price: 15.99,
    category: "Burgers",
    emoji: "🍔",
    badge: "New",
    badgeColor: "bg-coral",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Sweet Heart Burger",
    description: "Chicken patty, honey mustard & heart-shaped bun",
    price: 11.99,
    category: "Burgers",
    emoji: "🍔",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Rose Gold Fries",
    description: "Crispy seasoned fries with pink himalayan salt",
    price: 4.99,
    category: "Fries",
    emoji: "🍟",
    badge: "Fan Favorite",
    badgeColor: "bg-accent",
    rating: 4.9,
  },
  {
    id: 5,
    name: "Glitter Cheese Fries",
    description: "Loaded with melted cheese & sparkle seasoning",
    price: 6.99,
    category: "Fries",
    emoji: "🍟",
    rating: 4.8,
  },
  {
    id: 6,
    name: "Sweet Potato Blush",
    description: "Sweet potato fries with cinnamon sugar dust",
    price: 5.99,
    category: "Fries",
    emoji: "🍠",
    rating: 4.6,
  },
  {
    id: 7,
    name: "Pink Lemonade",
    description: "Fresh squeezed with a hint of strawberry",
    price: 3.99,
    category: "Drinks",
    emoji: "🍋",
    badge: "Refreshing",
    badgeColor: "bg-pink-medium",
    rating: 4.8,
  },
  {
    id: 8,
    name: "Berry Bliss Shake",
    description: "Strawberry milkshake with whipped cream & hearts",
    price: 5.99,
    category: "Drinks",
    emoji: "🥤",
    rating: 4.9,
  },
  {
    id: 9,
    name: "Cotton Candy Float",
    description: "Vanilla ice cream with cotton candy soda",
    price: 6.49,
    category: "Drinks",
    emoji: "🍦",
    rating: 4.7,
  },
  {
    id: 10,
    name: "Princess Combo",
    description: "Pink Princess Burger + Rose Gold Fries + Pink Lemonade",
    price: 18.99,
    category: "Combos",
    emoji: "👑",
    badge: "Best Value",
    badgeColor: "bg-primary",
    rating: 5.0,
  },
  {
    id: 11,
    name: "Barbie Box",
    description: "Barbie Dream Burger + Glitter Fries + Berry Shake",
    price: 24.99,
    category: "Combos",
    emoji: "💝",
    badge: "Premium",
    badgeColor: "bg-accent",
    rating: 4.9,
  },
  {
    id: 12,
    name: "Sweet Treat Duo",
    description: "Sweet Heart Burger + Sweet Potato Blush + Any Drink",
    price: 19.99,
    category: "Combos",
    emoji: "🎀",
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
    <section id="menu" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <span className="inline-block font-cute text-primary font-semibold text-sm uppercase tracking-wider mb-2">
            Our Delicious Offerings
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            The Pink Menu 🌸
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-card rounded-3xl p-6 shadow-pink hover:shadow-pink-lg transition-all hover:-translate-y-2 border border-border group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Badge */}
              {item.badge && (
                <Badge
                  className={`${item.badgeColor} text-primary-foreground font-cute mb-3`}
                >
                  {item.badge === "Best Seller" && <Flame className="w-3 h-3 mr-1" />}
                  {item.badge}
                </Badge>
              )}

              {/* Emoji & Name */}
              <div className="flex items-start gap-4 mb-4">
                <div className="text-5xl group-hover:scale-110 transition-transform">
                  {item.emoji}
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl text-foreground mb-1">
                    {item.name}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Rating & Price */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-accent fill-current" />
                  <span className="font-cute text-sm font-semibold text-foreground">
                    {item.rating}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-display text-2xl text-primary">
                    ${item.price}
                  </span>
                  <Button
                    size="sm"
                    className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
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
            View Full Menu ✨
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;

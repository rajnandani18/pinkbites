import { Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen gradient-hero overflow-hidden pt-20">
      {/* Doodle SVG Decorations - Hidden on mobile for cleaner look */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        {/* Doodle swirl top left */}
        <svg className="absolute top-24 left-8 w-12 md:w-16 h-12 md:h-16 text-primary opacity-40 float" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M50 10 Q 90 50 50 90 Q 10 50 50 10" strokeLinecap="round"/>
          <circle cx="50" cy="10" r="4" fill="currentColor"/>
        </svg>
        
        {/* Doodle star */}
        <svg className="absolute top-40 right-10 md:right-20 w-8 md:w-12 h-8 md:h-12 text-pink-medium opacity-50 sparkle" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M25 5 L28 20 L45 25 L28 30 L25 45 L22 30 L5 25 L22 20 Z" strokeLinejoin="round"/>
        </svg>
        
        {/* Doodle heart */}
        <svg className="absolute bottom-40 left-10 md:left-20 w-10 md:w-14 h-10 md:h-14 text-primary opacity-40 float" style={{ animationDelay: "1s" }} viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M25 45 L10 30 Q0 20 10 10 Q20 0 25 10 Q30 0 40 10 Q50 20 40 30 Z" strokeLinejoin="round"/>
        </svg>
        
        {/* Doodle circle */}
        <svg className="absolute top-1/3 right-4 md:right-10 w-8 md:w-10 h-8 md:h-10 text-pink-soft opacity-50 sparkle" style={{ animationDelay: "0.5s" }} viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="25" cy="25" r="20" strokeDasharray="5 3"/>
        </svg>
        
        {/* Doodle burger sketch */}
        <svg className="absolute bottom-1/4 right-1/4 w-14 md:w-20 h-14 md:h-20 text-primary opacity-30 float" style={{ animationDelay: "1.5s" }} viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="40" cy="20" rx="30" ry="10"/>
          <path d="M10 30 Q40 40 70 30"/>
          <path d="M10 45 Q40 35 70 45"/>
          <ellipse cx="40" cy="55" rx="30" ry="10"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 border border-border shadow-sm">
              <Star className="w-4 h-4 text-primary" />
              <span className="font-cute text-sm font-medium text-foreground">
                Pretty Food for Pretty People
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight">
              <span className="text-primary text-shadow-soft">Deliciously</span>
              <br />
              <span className="text-foreground">Pink & Perfect</span>
            </h1>

            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Indulge in our dreamy burgers & crispy fries, crafted with love and
              a sprinkle of magic. Every bite is a pink-tastic experience!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="gradient-button text-primary-foreground font-semibold rounded-full px-8 py-6 text-lg shadow-pink-lg hover:scale-105 transition-all"
              >
                View Our Menu
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-6 text-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all font-semibold"
              >
                Find Us
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-8 pt-6">
              <div className="text-center">
                <p className="font-display text-2xl sm:text-3xl md:text-4xl text-primary">50K+</p>
                <p className="font-cute text-xs sm:text-sm text-muted-foreground">Happy Customers</p>
              </div>
              <div className="text-center">
                <p className="font-display text-2xl sm:text-3xl md:text-4xl text-primary">4.9</p>
                <p className="font-cute text-xs sm:text-sm text-muted-foreground">Average Rating</p>
              </div>
              <div className="text-center">
                <p className="font-display text-2xl sm:text-3xl md:text-4xl text-primary">25+</p>
                <p className="font-cute text-xs sm:text-sm text-muted-foreground">Menu Items</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 relative animate-slide-up mt-8 lg:mt-0" style={{ animationDelay: "0.3s" }}>
            <div className="relative w-full max-w-xs sm:max-w-md lg:max-w-lg mx-auto">
              {/* Background Blob */}
              <div className="absolute inset-0 bg-pink-soft rounded-full blur-3xl opacity-60 scale-110" />
              
              {/* Main Burger Image */}
              <div className="relative z-10 p-4 sm:p-8">
                <div className="aspect-square rounded-full bg-gradient-to-br from-card to-pink-light shadow-pink-lg overflow-hidden border-4 border-pink-soft/50">
                <img 
                    src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=600&fit=crop"
                    alt="Delicious pink cake"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Food Images - Smaller on mobile */}
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-card rounded-xl sm:rounded-2xl p-1.5 sm:p-2 shadow-pink float border border-border overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=100&h=100&fit=crop"
                  alt="Crispy fries"
                  className="w-10 h-10 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl object-cover"
                />
              </div>
              <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-card rounded-xl sm:rounded-2xl p-1.5 sm:p-2 shadow-pink float border border-border overflow-hidden" style={{ animationDelay: "0.7s" }}>
                <img 
                  src="https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=100&h=100&fit=crop"
                  alt="Milkshake"
                  className="w-10 h-10 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl object-cover"
                />
              </div>
              <div className="absolute top-1/2 -right-4 sm:-right-8 bg-primary rounded-full p-2 sm:p-3 shadow-pink sparkle">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground fill-current" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--cream))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

import { Sparkles, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen gradient-hero overflow-hidden pt-20">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-pink-soft opacity-60 float">
          <Heart className="w-8 h-8 fill-current" />
        </div>
        <div className="absolute top-40 right-20 text-accent opacity-50 sparkle">
          <Star className="w-6 h-6 fill-current" />
        </div>
        <div className="absolute bottom-40 left-20 text-pink-medium opacity-40 float" style={{ animationDelay: "1s" }}>
          <Sparkles className="w-10 h-10" />
        </div>
        <div className="absolute top-1/3 right-10 text-coral opacity-50 sparkle" style={{ animationDelay: "0.5s" }}>
          <Heart className="w-5 h-5 fill-current" />
        </div>
        <div className="absolute bottom-1/4 right-1/4 text-pink-soft opacity-60 float" style={{ animationDelay: "1.5s" }}>
          <Star className="w-7 h-7 fill-current" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 border border-border shadow-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="font-cute text-sm font-medium text-foreground">
                Pretty Food for Pretty People ✨
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight">
              <span className="text-primary text-shadow-soft">Deliciously</span>
              <br />
              <span className="text-foreground">Pink & Perfect</span>
            </h1>

            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Indulge in our dreamy burgers & crispy fries, crafted with love and
              a sprinkle of magic. Every bite is a pink-tastic experience! 🍔💖
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="gradient-button text-primary-foreground font-semibold rounded-full px-8 py-6 text-lg shadow-pink-lg hover:scale-105 transition-all"
              >
                View Our Menu 🍟
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-6 text-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all font-semibold"
              >
                Find Us 📍
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-6">
              <div className="text-center">
                <p className="font-display text-3xl md:text-4xl text-primary">50K+</p>
                <p className="font-cute text-sm text-muted-foreground">Happy Customers</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl md:text-4xl text-primary">4.9★</p>
                <p className="font-cute text-sm text-muted-foreground">Average Rating</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl md:text-4xl text-primary">25+</p>
                <p className="font-cute text-sm text-muted-foreground">Menu Items</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 relative animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative w-full max-w-lg mx-auto">
              {/* Background Blob */}
              <div className="absolute inset-0 bg-pink-soft rounded-full blur-3xl opacity-60 scale-110" />
              
              {/* Main Burger Illustration */}
              <div className="relative z-10 p-8">
                <div className="aspect-square rounded-full bg-gradient-to-br from-card to-pink-light shadow-pink-lg flex items-center justify-center overflow-hidden border-4 border-pink-soft/50">
                  <div className="text-center p-8">
                    <p className="text-8xl md:text-9xl bounce-gentle">🍔</p>
                    <p className="font-display text-2xl text-primary mt-4">Signature Burger</p>
                    <p className="font-cute text-muted-foreground">Our best seller!</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-card rounded-2xl p-4 shadow-pink float border border-border">
                <p className="text-4xl">🍟</p>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl p-4 shadow-pink float border border-border" style={{ animationDelay: "0.7s" }}>
                <p className="text-4xl">🥤</p>
              </div>
              <div className="absolute top-1/2 -right-8 bg-primary rounded-full p-3 shadow-pink sparkle">
                <Heart className="w-5 h-5 text-primary-foreground fill-current" />
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

import { Clock, Gift, Sparkles, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";

const offers = [
  {
    id: 1,
    title: "Pink Monday Magic",
    description: "Get 20% off on all burgers every Monday!",
    discount: "20% OFF",
    code: "PINKMON20",
    icon: Sparkles,
    bgClass: "from-pink-soft to-pink-medium",
    validUntil: "Every Monday",
  },
  {
    id: 2,
    title: "Bestie Duo Deal",
    description: "Buy 2 combos, get the 3rd at half price",
    discount: "50% OFF",
    code: "BESTIES50",
    icon: Gift,
    bgClass: "from-pink-medium to-primary",
    validUntil: "Limited Time",
  },
  {
    id: 3,
    title: "Happy Hour Special",
    description: "All drinks half price from 3-5 PM daily",
    discount: "50% OFF",
    code: "HAPPYPINK",
    icon: Clock,
    bgClass: "from-primary to-pink-soft",
    validUntil: "3-5 PM Daily",
  },
];

const SpecialOffers = () => {
  return (
    <section id="deals" className="py-20 gradient-hero relative overflow-hidden">
      {/* Doodle Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-10 left-1/4 w-32 h-32 text-primary opacity-20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 50 Q50 20 80 50 Q50 80 20 50" strokeDasharray="4 3"/>
          <circle cx="50" cy="50" r="10" strokeDasharray="2 2"/>
        </svg>
        <svg className="absolute bottom-20 right-1/4 w-40 h-40 text-pink-soft opacity-30" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="50" cy="50" r="45" strokeDasharray="10 5"/>
          <circle cx="50" cy="50" r="30" strokeDasharray="5 5"/>
          <circle cx="50" cy="50" r="15" strokeDasharray="3 3"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <span className="inline-flex items-center gap-2 font-cute text-primary font-semibold text-sm uppercase tracking-wider mb-2">
            <Percent className="w-4 h-4" />
            Sweet Savings
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Special Offers
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Because you deserve extra sweetness! Check out our fabulous deals
            and save while you savor.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {offers.map((offer, index) => (
            <div
              key={offer.id}
              className="relative group animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Card */}
              <div className="bg-card rounded-3xl overflow-hidden shadow-pink-lg border border-border h-full flex flex-col group-hover:-translate-y-2 transition-all">
                {/* Gradient Header */}
                <div
                  className={`bg-gradient-to-r ${offer.bgClass} p-6 text-primary-foreground`}
                >
                  <offer.icon className="w-10 h-10 mb-3 opacity-90" />
                  <p className="font-display text-3xl mb-1">{offer.discount}</p>
                  <p className="font-cute text-sm opacity-90">{offer.validUntil}</p>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display text-xl text-foreground mb-2">
                    {offer.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm flex-1">
                    {offer.description}
                  </p>

                  {/* Promo Code */}
                  <div className="mt-4 p-3 bg-muted rounded-xl flex items-center justify-between">
                    <span className="font-cute text-sm text-muted-foreground">
                      Use code:
                    </span>
                    <span className="font-body font-bold text-primary tracking-wider">
                      {offer.code}
                    </span>
                  </div>

                  {/* CTA */}
                  <Button className="w-full mt-4 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                    Claim Offer
                  </Button>
                </div>
              </div>

              {/* Decorative Ribbon */}
              <div className="absolute -top-2 -right-2 bg-pink-medium text-primary-foreground text-xs font-cute font-bold px-3 py-1 rounded-full shadow-lg rotate-12">
                HOT!
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 max-w-2xl mx-auto text-center animate-fade-in">
          <div className="bg-card rounded-3xl p-8 shadow-pink-lg border border-border">
            <h3 className="font-display text-2xl text-foreground mb-2">
              Get Exclusive Deals!
            </h3>
            <p className="font-body text-muted-foreground mb-6">
              Subscribe to our newsletter and get special offers delivered to your
              inbox, plus a sweet 15% off your first order!
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email..."
                className="flex-1 px-5 py-3 rounded-full border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="gradient-button text-primary-foreground font-semibold rounded-full px-8 shadow-pink hover:scale-105 transition-all">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;

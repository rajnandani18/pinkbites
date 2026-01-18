import { Heart, Sparkles, Star, Award } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every burger is handcrafted with passion and care, just like grandma used to make (but pinker!).",
  },
  {
    icon: Sparkles,
    title: "Fresh & Fabulous",
    description: "We source only the freshest ingredients daily. No frozen patties here—only fresh, delicious goodness!",
  },
  {
    icon: Star,
    title: "Quality First",
    description: "Premium beef, organic veggies, and our secret pink sauce that makes everything magical.",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Voted 'Best Themed Restaurant' 3 years running. Our customers are our biggest fans!",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story Content */}
          <div className="animate-fade-in">
            <span className="inline-block font-cute text-primary font-semibold text-sm uppercase tracking-wider mb-2">
              Our Story
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              About PinkBites 💖
            </h2>
            <div className="space-y-4 font-body text-muted-foreground">
              <p>
                Once upon a time, in a world that needed more color and joy, two
                best friends dreamed of creating a magical place where delicious
                burgers meet fabulous vibes.
              </p>
              <p>
                <span className="text-primary font-semibold">PinkBites</span> was
                born from a simple idea: food should make you smile, inside and
                out! We believe that life's too short for boring burgers and
                dull dining experiences.
              </p>
              <p>
                Every item on our menu is crafted with love, sprinkled with
                happiness, and served with the warmest smiles. Our team (we call
                them the Pink Squad!) works tirelessly to make sure every visit
                is a memorable one.
              </p>
              <p className="text-foreground font-semibold italic">
                "Because every girl deserves to feel like a princess while
                enjoying her favorite burger!" 👑
              </p>
            </div>

            {/* Fun Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="bg-card rounded-2xl p-4 text-center shadow-sm border border-border">
                <p className="font-display text-3xl text-primary">2019</p>
                <p className="font-cute text-xs text-muted-foreground">Founded</p>
              </div>
              <div className="bg-card rounded-2xl p-4 text-center shadow-sm border border-border">
                <p className="font-display text-3xl text-primary">50K+</p>
                <p className="font-cute text-xs text-muted-foreground">Happy Girls</p>
              </div>
              <div className="bg-card rounded-2xl p-4 text-center shadow-sm border border-border">
                <p className="font-display text-3xl text-primary">100%</p>
                <p className="font-cute text-xs text-muted-foreground">Love</p>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative animate-slide-up">
            <div className="relative">
              {/* Main Image Placeholder */}
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-pink-light via-pink-soft to-cream overflow-hidden shadow-pink-lg border-4 border-pink-soft/50">
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
                  <p className="text-9xl mb-4">👩‍🍳</p>
                  <p className="font-display text-2xl text-foreground">The Pink Squad</p>
                  <p className="font-cute text-muted-foreground">Cooking up happiness daily!</p>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 bg-card rounded-2xl p-4 shadow-pink float border border-border">
                <p className="text-4xl">🎀</p>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary rounded-2xl p-4 shadow-pink float border border-border" style={{ animationDelay: "0.5s" }}>
                <p className="text-4xl">💝</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl text-foreground">
              Our Pink Promise 🌸
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-card rounded-3xl p-6 text-center shadow-sm hover:shadow-pink transition-all hover:-translate-y-2 border border-border animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-pink-light flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-display text-lg text-foreground mb-2">
                  {value.title}
                </h4>
                <p className="font-body text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { Heart, Sparkles, Star, Award } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every dessert is handcrafted with passion and care, just like grandma used to make (but pinker!).",
  },
  {
    icon: Sparkles,
    title: "Fresh & Fabulous",
    description: "We source only the freshest ingredients daily. No preservatives—only fresh, delicious goodness!",
  },
  {
    icon: Star,
    title: "Quality First",
    description: "Premium ingredients, organic fruits, and our secret pink glaze that makes everything magical.",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Voted 'Best Dessert Café' 3 years running. Our customers are our biggest fans!",
  },
];

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-20 bg-cream relative overflow-hidden">
      {/* Doodle decorations - hidden on mobile */}
      <svg className="absolute top-20 right-10 sm:right-20 w-16 sm:w-24 h-16 sm:h-24 text-pink-soft opacity-30 hidden sm:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M50 10 C70 30 70 70 50 90 C30 70 30 30 50 10" strokeLinejoin="round"/>
      </svg>
      <svg className="absolute bottom-40 left-4 sm:left-10 w-12 sm:w-16 h-12 sm:h-16 text-primary opacity-20 hidden sm:block" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="30" cy="30" r="25" strokeDasharray="5 3"/>
        <circle cx="30" cy="30" r="15" strokeDasharray="3 3"/>
      </svg>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story Content */}
          <div className="animate-fade-in">
            <span className="inline-block font-cute text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2">
              Our Story
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-4 sm:mb-6">
              About PinkBites
            </h2>
            <div className="space-y-3 sm:space-y-4 font-body text-sm sm:text-base text-muted-foreground">
              <p>
                Once upon a time, in a world that needed more color and joy, two
                best friends dreamed of creating a magical place where delicious
                desserts meet fabulous vibes.
              </p>
              <p>
                <span className="text-primary font-semibold">PinkBites</span> was
                born from a simple idea: food should make you smile, inside and
                out! We believe that life's too short for boring desserts and
                dull dining experiences.
              </p>
              <p className="hidden sm:block">
                Every item on our menu is crafted with love, sprinkled with
                happiness, and served with the warmest smiles. Our team (we call
                them the Pink Squad!) works tirelessly to make sure every visit
                is a memorable one.
              </p>
              <p className="text-foreground font-semibold italic text-sm sm:text-base">
                "Because every girl deserves to feel like a princess while
                enjoying her favorite dessert!"
              </p>
            </div>

            {/* Fun Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-6 sm:mt-8">
              <div className="bg-card rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center shadow-sm border border-border">
                <p className="font-display text-xl sm:text-3xl text-primary">2019</p>
                <p className="font-cute text-[10px] sm:text-xs text-muted-foreground">Founded</p>
              </div>
              <div className="bg-card rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center shadow-sm border border-border">
                <p className="font-display text-xl sm:text-3xl text-primary">50K+</p>
                <p className="font-cute text-[10px] sm:text-xs text-muted-foreground">Happy Girls</p>
              </div>
              <div className="bg-card rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center shadow-sm border border-border">
                <p className="font-display text-xl sm:text-3xl text-primary">100%</p>
                <p className="font-cute text-[10px] sm:text-xs text-muted-foreground">Love</p>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative animate-slide-up mt-8 lg:mt-0">
            <div className="relative max-w-sm sm:max-w-md mx-auto lg:max-w-none">
              {/* Main Image */}
              <div className="aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-pink-lg border-4 border-pink-soft/50">
                <img 
                  src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&h=600&fit=crop"
                  alt="Our cute pink café"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Heart Element */}
              <div className="absolute -bottom-3 sm:-bottom-6 -right-3 sm:-right-6 bg-primary rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-pink float" style={{ animationDelay: "0.5s" }}>
                <Heart className="w-5 h-5 sm:w-8 sm:h-8 text-primary-foreground fill-current" />
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mt-12 sm:mt-20">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="font-display text-2xl sm:text-3xl text-foreground">
              Our Pink Promise
            </h3>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-center shadow-sm hover:shadow-pink transition-all hover:-translate-y-2 border border-border animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 sm:w-14 sm:h-14 mx-auto mb-2 sm:mb-4 rounded-full bg-pink-light flex items-center justify-center">
                  <value.icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h4 className="font-display text-sm sm:text-lg text-foreground mb-1 sm:mb-2">
                  {value.title}
                </h4>
                <p className="font-body text-xs sm:text-sm text-muted-foreground">
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

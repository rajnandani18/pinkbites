import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const hours = [
  { day: "Monday - Thursday", time: "10:00 AM - 9:00 PM" },
  { day: "Friday - Saturday", time: "10:00 AM - 11:00 PM" },
  { day: "Sunday", time: "11:00 AM - 8:00 PM" },
];

const Location = () => {
  return (
    <section id="contact" className="py-12 sm:py-20 gradient-hero relative overflow-hidden">
      {/* Doodle decorations - hidden on mobile */}
      <svg className="absolute top-20 left-10 sm:left-20 w-14 sm:w-20 h-14 sm:h-20 text-primary opacity-20 hidden sm:block" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M40 10 L45 30 L65 35 L45 40 L40 60 L35 40 L15 35 L35 30 Z" strokeLinejoin="round" strokeDasharray="4 2"/>
      </svg>
      <svg className="absolute bottom-40 right-10 sm:right-20 w-16 sm:w-24 h-16 sm:h-24 text-pink-soft opacity-30 hidden sm:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="50" cy="50" r="40" strokeDasharray="8 4"/>
        <path d="M30 50 Q50 30 70 50 Q50 70 30 50"/>
      </svg>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <span className="inline-block font-cute text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2">
            Visit Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-3 sm:mb-4">
            Find PinkBites
          </h2>
          <p className="font-body text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            We can't wait to serve you! Drop by our pink paradise or get in touch
            with us anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Map & Address */}
          <div className="space-y-4 sm:space-y-6 animate-fade-in">
            {/* Map Image */}
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-pink-lg border-4 border-pink-soft/50 aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=450&fit=crop"
                alt="Location map"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Address Card */}
            <div className="bg-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-pink border border-border">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-pink-light flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-base sm:text-lg text-foreground mb-1">
                    Our Location
                  </h3>
                  <p className="font-body text-sm sm:text-base text-muted-foreground">
                    123 Pink Avenue, Suite 101
                    <br />
                    Connaught Place
                    <br />
                    New Delhi, 110001
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info & Hours */}
          <div className="space-y-4 sm:space-y-6 animate-slide-up">
            {/* Contact Cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-card rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-sm border border-border hover:shadow-pink transition-all">
                <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-pink-light flex items-center justify-center">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <span className="font-cute font-semibold text-sm sm:text-base text-foreground">
                    Call Us
                  </span>
                </div>
                <p className="font-body text-xs sm:text-base text-muted-foreground ml-10 sm:ml-13">
                  +91 98765 43210
                </p>
              </div>

              <div className="bg-card rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-sm border border-border hover:shadow-pink transition-all">
                <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-pink-light flex items-center justify-center">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <span className="font-cute font-semibold text-sm sm:text-base text-foreground">
                    Email Us
                  </span>
                </div>
                <p className="font-body text-xs sm:text-base text-muted-foreground ml-10 sm:ml-13 truncate">
                  hello@pinkbites.in
                </p>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-pink border border-border">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-pink-light flex items-center justify-center">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="font-display text-base sm:text-lg text-foreground">
                  Opening Hours
                </h3>
              </div>
              <div className="space-y-2 sm:space-y-3">
                {hours.map((item) => (
                  <div
                    key={item.day}
                    className="flex justify-between items-center py-1.5 sm:py-2 border-b border-border last:border-0"
                  >
                    <span className="font-cute text-xs sm:text-sm text-foreground">
                      {item.day}
                    </span>
                    <span className="font-body text-xs sm:text-sm font-semibold text-primary">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-pink border border-border">
              <h3 className="font-display text-base sm:text-lg text-foreground mb-3 sm:mb-4 text-center">
                Follow the Pink Life!
              </h3>
              <div className="flex justify-center gap-3 sm:gap-4">
                <a
                  href="#"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-pink-light flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all group"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:text-primary-foreground" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-pink-light flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all group"
                >
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:text-primary-foreground" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-pink-light flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all group"
                >
                  <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:text-primary-foreground" />
                </a>
              </div>
            </div>

            {/* CTA */}
            <Button className="w-full gradient-button text-primary-foreground font-semibold rounded-full py-5 sm:py-6 text-base sm:text-lg shadow-pink-lg hover:scale-105 transition-all">
              Get Directions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;

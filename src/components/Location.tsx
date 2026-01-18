import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const hours = [
  { day: "Monday - Thursday", time: "10:00 AM - 9:00 PM" },
  { day: "Friday - Saturday", time: "10:00 AM - 11:00 PM" },
  { day: "Sunday", time: "11:00 AM - 8:00 PM" },
];

const Location = () => {
  return (
    <section id="contact" className="py-20 gradient-hero">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <span className="inline-block font-cute text-primary font-semibold text-sm uppercase tracking-wider mb-2">
            Visit Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Find PinkBites 📍
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            We can't wait to serve you! Drop by our pink paradise or get in touch
            with us anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Map & Address */}
          <div className="space-y-6 animate-fade-in">
            {/* Map Placeholder */}
            <div className="rounded-3xl overflow-hidden shadow-pink-lg border-4 border-pink-soft/50 aspect-video bg-gradient-to-br from-pink-light to-cream">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-6">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="font-display text-xl text-foreground">
                    Interactive Map
                  </p>
                  <p className="font-cute text-sm text-muted-foreground">
                    123 Pink Avenue, Sweet City
                  </p>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-card rounded-3xl p-6 shadow-pink border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-pink-light flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground mb-1">
                    Our Location
                  </h3>
                  <p className="font-body text-muted-foreground">
                    123 Pink Avenue, Suite 101
                    <br />
                    Sweet City, SC 12345
                    <br />
                    United States
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info & Hours */}
          <div className="space-y-6 animate-slide-up">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-card rounded-2xl p-5 shadow-sm border border-border hover:shadow-pink transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-pink-light flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-cute font-semibold text-foreground">
                    Call Us
                  </span>
                </div>
                <p className="font-body text-muted-foreground ml-13">
                  (555) 123-PINK
                </p>
              </div>

              <div className="bg-card rounded-2xl p-5 shadow-sm border border-border hover:shadow-pink transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-pink-light flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-cute font-semibold text-foreground">
                    Email Us
                  </span>
                </div>
                <p className="font-body text-muted-foreground ml-13">
                  hello@pinkbites.com
                </p>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-card rounded-3xl p-6 shadow-pink border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-pink-light flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg text-foreground">
                  Opening Hours
                </h3>
              </div>
              <div className="space-y-3">
                {hours.map((item) => (
                  <div
                    key={item.day}
                    className="flex justify-between items-center py-2 border-b border-border last:border-0"
                  >
                    <span className="font-cute text-sm text-foreground">
                      {item.day}
                    </span>
                    <span className="font-body text-sm font-semibold text-primary">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-card rounded-3xl p-6 shadow-pink border border-border">
              <h3 className="font-display text-lg text-foreground mb-4 text-center">
                Follow the Pink Life! 💕
              </h3>
              <div className="flex justify-center gap-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-pink-light flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all group"
                >
                  <Instagram className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-pink-light flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all group"
                >
                  <Facebook className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-pink-light flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all group"
                >
                  <Twitter className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                </a>
              </div>
            </div>

            {/* CTA */}
            <Button className="w-full gradient-button text-primary-foreground font-semibold rounded-full py-6 text-lg shadow-pink-lg hover:scale-105 transition-all">
              Get Directions 🗺️
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;

import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    menu: [
      { name: "Burgers", href: "#menu" },
      { name: "Fries", href: "#menu" },
      { name: "Drinks", href: "#menu" },
      { name: "Combos", href: "#menu" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Blog", href: "#" },
    ],
    support: [
      { name: "Contact", href: "#contact" },
      { name: "FAQ", href: "#" },
      { name: "Delivery", href: "#" },
      { name: "Catering", href: "#" },
    ],
  };

  return (
    <footer className="bg-foreground text-background py-10 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground fill-current" />
              </div>
              <span className="font-display text-xl sm:text-2xl text-primary">
                PinkBites
              </span>
            </a>
            <p className="font-body text-sm sm:text-base text-background/70 mb-3 sm:mb-4 max-w-sm">
              Serving up dreamy burgers and fabulous vibes since 2019. Because
              every girl deserves a little pink in her life!
            </p>
            <p className="font-cute text-xs sm:text-sm text-background/50">
              123 Pink Avenue, Connaught Place, New Delhi 110001
            </p>
          </div>

          {/* Menu Links */}
          <div>
            <h4 className="font-display text-base sm:text-lg text-primary mb-3 sm:mb-4">Menu</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {footerLinks.menu.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-sm sm:text-base text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display text-base sm:text-lg text-primary mb-3 sm:mb-4">Company</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-sm sm:text-base text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-display text-base sm:text-lg text-primary mb-3 sm:mb-4">Support</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-sm sm:text-base text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="font-cute text-xs sm:text-sm text-background/50 text-center sm:text-left">
              {currentYear} PinkBites. All rights reserved. Made with love.
            </p>
            <div className="flex gap-4 sm:gap-6">
              <a
                href="#"
                className="font-cute text-xs sm:text-sm text-background/50 hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="font-cute text-xs sm:text-sm text-background/50 hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

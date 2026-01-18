import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import SpecialOffers from "@/components/SpecialOffers";
import About from "@/components/About";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import MagicCursor from "@/components/MagicCursor";

const Index = () => {
  useEffect(() => {
    // Add magic cursor class to body
    document.body.classList.add("magic-cursor-active");
    return () => {
      document.body.classList.remove("magic-cursor-active");
    };
  }, []);

  return (
    <div className="min-h-screen">
      <MagicCursor />
      <Navbar />
      <Hero />
      <Menu />
      <SpecialOffers />
      <About />
      <Location />
      <Footer />
    </div>
  );
};

export default Index;

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import SpecialOffers from "@/components/SpecialOffers";
import About from "@/components/About";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
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

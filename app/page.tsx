import LogosSection from "@/components/LogosSection";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/Cta";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Expertise from "@/components/Expertise";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <LogosSection />
      <Expertise />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
}

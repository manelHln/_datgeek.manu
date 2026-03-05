import LogosSection from "@/components/LogosSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FeaturesBanner from "@/components/FeaturesBanner";
import TransitionSection from "@/components/TransitionSection";
import DemoBanner from "@/components/DemoBanner";
import TeamSection from "@/components/TeamSection";
import SecuritySection from "@/components/SecuritySection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <LogosSection />
      <TestimonialsSection />
      <FeaturesBanner />
      <TransitionSection />
      <DemoBanner />
      <TeamSection />
      <SecuritySection />
      <Footer />
    </div>
  );
}

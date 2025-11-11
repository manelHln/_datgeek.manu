import HeroSection from '@/components/HeroSection';
import MyStats from '@/components/MyStats';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <MyStats />
    </div>
  );
}

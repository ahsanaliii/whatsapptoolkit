import HeroSection from "@/components/Home/HeroSection";
import Reviews from "@/components/Home/Reviews";
import CTASection from "@/components/Home/CTASection";
import PremiumFeatures from "@/components/Home/PremiumFeatures";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PremiumFeatures />
      <Reviews />
      <CTASection />
    </main>
  );
}

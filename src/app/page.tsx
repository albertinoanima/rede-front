import Footer from "@/components/Footer";
import { TopBar } from "@/components/TopBar";
import { HeroSection } from "./home/HeroSection";
import { JoinSection } from "./home/JoinSection";
import { NewsSection } from "./home/NewsSection";
import { OpportunitiesSection } from "./home/OpportunitiesSection";
import { WorkShopsSection } from "./home/WorkShopsSection";
import { PartnersSection } from "./home/PartnersSection";

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <main className="bg-black">
      <TopBar/>
      <HeroSection />
      <JoinSection/>
      <NewsSection />
      <OpportunitiesSection/>
      <WorkShopsSection/>
      <PartnersSection/>
      <Footer />
    </main>
  );
}
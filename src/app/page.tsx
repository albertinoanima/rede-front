import Footer from "@/components/Footer";
import { TopBar } from "@/components/TopBar";
import { Hero } from "../components/home/Hero";
import { Join } from "../components/home/Join";
import { News } from "../components/home/News";
import { Partners } from "../components/home/Partners";
import { Opportunities } from "../components/home/Opportunities";
import { Newsletter } from "@/components/home/Newsletter";

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <main className="bg-rede-bg">
      <TopBar/>
      <Hero />
      <Join/>
      <News />
      {/* <WorkShops/> */}
      <Opportunities/>
      <Newsletter/>
      <Partners/>
      <Footer/>
    </main>
  );
}
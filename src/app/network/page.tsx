import { Footer } from "@/components/Footer";
import PalopMapSection from "@/components/network/MapSection";
import { TopBar } from "@/components/TopBar";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function Network() {
  return (
    <main>
      <TopBar />
      <PalopMapSection/>

      <Footer />
    </main>
  )
}
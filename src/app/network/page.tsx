import { Footer } from "@/components/Footer";
import { AdvancedSearch } from "@/components/network/AdvancedSearch";
import PalopMapSection from "@/components/network/MapSection";
import { TopBar } from "@/components/TopBar";

export default function NetworkPage() {
  return (
    <main className="bg-rede-bg">
      <TopBar />
      <PalopMapSection/>
      <AdvancedSearch />
      <Footer />
    </main>
  )
}
import { Footer } from "@/components/Footer";
import { TopBar } from "@/components/TopBar";
import { AdvancedSearch } from "@/components/network/AdvancedSearch";
import PalopMapSection from "@/components/network/MapSection";

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
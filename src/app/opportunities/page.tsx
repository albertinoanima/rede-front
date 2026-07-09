

import { Footer } from "@/components/Footer";
import { Hero } from "@/components/opportunities/Hero";
import { Opportunities } from "@/components/opportunities/Opportunities";
import { TopBar } from "@/components/TopBar";


export default function OpportunitiesPage() {
  return (
    <main className="bg-rede-bg">
      <TopBar />
      <Hero/>
      <Opportunities/>
      <Footer />
    </main>
  )
}
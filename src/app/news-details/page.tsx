import { Hero } from "@/components/news/Hero";

import { Footer } from "@/components/Footer";
import { TopBar } from "@/components/TopBar";
import { News } from "@/components/home/News";
import { SectionViewNews } from "@/components/news/SectionViewNews";

export default function NewsDetalsPage() {
  return (
    <main className="bg-rede-bg">
      <TopBar />
      <Hero />
      <SectionViewNews/>
      <News />
      <Footer/>
    </main>
  )
}
import { Hero } from "@/components/news/Hero";

import { Footer } from "@/components/Footer";
import { TopBar } from "@/components/TopBar";
import { NewsFilter } from "@/components/news/NewsFilter";

export default function NewsPage() {
  return (
    <main className="bg-rede-bg">
      <TopBar />
      <Hero title="Notícias" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"/>
      <NewsFilter/>
      <Footer/>
    </main>
  )
}
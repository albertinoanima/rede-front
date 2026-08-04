import { Hero } from "@/components/news/Hero";

import { Footer } from "@/components/Footer";
import { TopBar } from "@/components/TopBar";
import { NewsFilter } from "@/components/news/NewsFilter";


export default function NewsPage() {
  return (
    <main className="bg-rede-bg">
      <TopBar />
      <Hero title="Notícias" description="Encontre aqui as Notícias da Rede cinema Audiovisual Palop-TL"/>
      <NewsFilter/>
      <Footer/>
    </main>
  )
}
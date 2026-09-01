import { Hero } from "@/components/Hero";

import { Footer } from "@/components/Footer";
import { TopBar } from "@/components/TopBar";
import { NewsFilter } from "@/components/news/NewsFilter";


export default function NewsPage() {
  return (
    <main className="bg-rede-bg">
      <TopBar />
      <Hero
        imageUrl="/assets/news/hero.jpg"
        title="Notícias"
        description={`Encontra aqui as últimas notícias sobre as atividades da REDE de Cinema e Audiovisual 
        PALOP+TL e sobre os profissionais, empresas e organizações do setor audiovisual nestes seis países.`} />
      <NewsFilter />
      <Footer />
    </main>
  )
}
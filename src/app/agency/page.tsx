import { Hero } from "@/components/Hero";
import { FilmsSection } from "@/components/agency/Films";
import { Packages } from "@/components/agency/Packages";
import { Licensing } from "@/components/agency/Licensing";

import { Footer } from "@/components/Footer";
import { TopBar } from "@/components/TopBar";

export default function AgencyPage() {
  return (
    <main className="bg-rede-bg">
      <TopBar />
      <Hero
        imageUrl="/assets/agency/hero.png"
        title="Agência"
        description={`A Agência de Curta-metragem PALOP+TL apoia a nova geração do audiovisual, promovendo filmes, criadores e 
          oportunidades que reforçam a colaboração, a mobilidade cultural e a presença internacional das nossas cinematografias.`}
      />
      <FilmsSection />
      <Packages />
      <Licensing />
      <Footer variant="red" />
    </main>
  )
}
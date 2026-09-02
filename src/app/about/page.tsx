
import { Footer } from "@/components/Footer";
import { TopBar } from "@/components/TopBar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/about/About";
import { TeamSection } from "@/components/about/TeamSection";
import { ProjectSection } from "@/components/about/ProjectSection";
import { ObjectivesSection } from "@/components/about/ObjectivesSection";
import { GovernanceFrameworkSection } from "@/components/about/GovernanceFrameworkSection";
import { CommunicationAndVisibilityStrategy } from "@/components/about/CommunicationAndVisibilityStrategy";


export default function AboutPage() {
  return (
    <main className="bg-rede-bg">
      <TopBar />
      <Hero
        imageUrl="/assets/agency/hero.png"
        title="Sobre nós"
        description={`A REDE de Cinema e Audiovisual PALOP+TL é uma iniciativa criada em 2018 por 
          jovens realizadores, produtores e diretores de festivais dos Países Africanos de Língua Oficial Portuguesa. Procuramos formas de contribuir para a melhoria do ecossistema do setor audiovisual destes países, através de ações complementares, com vários focos de atuação.`}
      />
      <About />
      <TeamSection />
      <ProjectSection />
      <ObjectivesSection />
      <GovernanceFrameworkSection />
      <CommunicationAndVisibilityStrategy />
      <Footer />
    </main>
  )
}
import { Hero } from "@/components/about/Hero";
import { TeamSection } from "@/components/about/TeamSection";

import { Footer } from "@/components/Footer";
import { TopBar } from "@/components/TopBar";
import { About } from "@/components/about/About";
import { GovernanceFrameworkSection } from "@/components/about/GovernanceFrameworkSection";
import { CommunicationAndVisibilityStrategy } from "@/components/about/CommunicationAndVisibilityStrategy";
import { ProjectSection } from "@/components/about/ProjectSection";
import { ObjectivesSection } from "@/components/about/ObjectivesSection";

export default function AboutPage() {
  return (
    <main className="bg-rede-bg">
      <TopBar />
      <Hero />
      <About />
      <TeamSection />
      <ProjectSection/>
      <ObjectivesSection/>
      <GovernanceFrameworkSection/>
      <CommunicationAndVisibilityStrategy/>
      <Footer/>
    </main>
  )
}
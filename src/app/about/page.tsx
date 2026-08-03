import { Hero } from "@/components/about/Hero";
import { TeamSection } from "@/components/about/TeamSection";

import { Footer } from "@/components/Footer";
import { TopBar } from "@/components/TopBar";
import { About } from "@/components/about/About";
import { ProjectsSection } from "@/components/about/ProjectsSection";
import { MisionVisionObjetivesSection } from "@/components/about/MisionVisionObjetivesSection";

export default function AboutPage() {
  return (
    <main className="bg-rede-bg">
      <TopBar />
      <Hero />
      <About />
      <TeamSection />
      <ProjectsSection/>
      <MisionVisionObjetivesSection/>
      <Footer variant="red"/>
    </main>
  )
}
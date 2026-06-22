import { AgenciaHero } from "@/components/agency/AgenciaHero";
import { BrandFooter } from "@/components/agency/BrandFooter";
import { CondicoesLicenciamento } from "@/components/agency/CondicoesLicenciamento";
import { FilmsSection } from "@/components/agency/FilmsSection";
import { Footer } from "@/components/agency/Footer";
import { PacotesCurtas } from "@/components/agency/PacotesCurtas";


export default function AgencyPage() {
  return (
    <main className="min-h-screen">
      <AgenciaHero />
      <FilmsSection />
      <PacotesCurtas />
      <CondicoesLicenciamento />
      <Footer />
      <BrandFooter />
    </main>
  )
}
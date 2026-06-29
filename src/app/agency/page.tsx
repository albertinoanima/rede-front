import { AgencyHero } from "@/components/agency/AgencyHero";
import { FilmsSection } from "@/components/agency/FilmsSection";
// import { BrandFooter } from "@/components/agency/BrandFooter";
import { LicensingSection } from "@/components/agency/LicensingSection";

import { Footer } from "@/components/Footer";
import { PackagesSection } from "@/components/agency/PackagesSection";
import { TopBar } from "@/components/TopBar";


export default function Agency() {
  return (
    <main>
      <TopBar />
      <AgencyHero />
      <FilmsSection />
      <PackagesSection />
      <LicensingSection />
      <Footer />
    </main>
  )
}
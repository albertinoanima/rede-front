import { AgencyHero } from "@/components/agency/AgencyHero";
import { FilmsSection } from "@/components/agency/FilmsSection";
// import { BrandFooter } from "@/components/agency/BrandFooter";
import { LicensingSection } from "@/components/agency/LicensingSection";

import { Footer } from "@/components/agency/Footer";
import { PackagesSection } from "@/components/agency/PackagesSection";
import { TopBar } from "@/components/TopBar";


export default function Agency() {
  return (
    <main className="min-h-screen bg-black">
      <TopBar />
      <div style={{ marginBottom: 100 }}>
        <AgencyHero />
      </div>
      <div style={{ marginBottom: 200 }}>
        <FilmsSection />
      </div>
      <div style={{ marginBottom: 200 }}>
        <PackagesSection />
      </div>
      <LicensingSection/>
      <Footer/>
    </main>
  )
}
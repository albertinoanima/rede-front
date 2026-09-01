import { Hero } from "@/components/Hero";
import { WhatItComprises } from "@/components/film-commission/WhatItComprises";
import { ScreenCommission } from "@/components/film-commission/ScreenCommission";
import { LegislativeInternship } from "@/components/film-commission/LegislativeInternship";
import { RecommendationTypologies } from "@/components/film-commission/RecommendationTypologies";
import { PartiallyOverlappingPhases } from "@/components/film-commission/PartiallyOverlappingPhases";
import Footer from "@/components/Footer";
import { TopBar } from "@/components/TopBar";

export default function FilmCommissionPage() {
    return (
        <main className="bg-rede-bg">
            <TopBar />
            <Hero
                imageUrl="/assets/agency/hero.png"
                title="Film Commission"
                description={`
                        A Rede está a desenvolver um trabalho para a elaboração de recomendações 
                        para a implementação do modelo de Film Commissions nos PALOP e Timor-Leste.
                    `}
            />
            <LegislativeInternship />
            <WhatItComprises />
            <RecommendationTypologies />
            <ScreenCommission />
            <PartiallyOverlappingPhases />
            <Footer variant="yellow" />
        </main>
    )
}
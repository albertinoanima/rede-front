import { Hero } from "@/components/film-commission/Hero";
import { LegislativeInternship } from "@/components/film-commission/LegislativeInternship";
import { PartiallyOverlappingPhases } from "@/components/film-commission/PartiallyOverlappingPhases";
import { RecommendationTypologies } from "@/components/film-commission/RecommendationTypologies";
import { ScreenCommission } from "@/components/film-commission/ScreenCommission";
import { WhatItComprises } from "@/components/film-commission/WhatItComprises";
import Footer from "@/components/Footer";
import { TopBar } from "@/components/TopBar";


export default function FilmCommissionPage() {
    return (
        <main className="bg-rede-bg">
            <TopBar />
            <Hero />
            <LegislativeInternship/>
            <WhatItComprises/>
            <RecommendationTypologies/>
            <ScreenCommission/>
            <PartiallyOverlappingPhases/>
            <Footer variant="yellow"/>
        </main>
    )
}
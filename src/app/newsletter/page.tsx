import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { SectionNewsletters } from "@/components/newsletter/SectionNewsletters";
import { TopBar } from "@/components/TopBar";


export default function NewsletterPage() {
    return (
        <main className="bg-rede-bg">
            <TopBar />
            <Hero
                imageUrl="/assets/news/hero.jpg"
                title="Newsletters"
                description="Acesse as edições anteriores da nossa newsletter mensal." />
            <SectionNewsletters />
            <Footer />
        </main>
    )
}
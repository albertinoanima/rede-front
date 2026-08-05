import Footer from "@/components/Footer";
import { Hero } from "@/components/news/Hero";
import { SectionNewsletters } from "@/components/newsletter/SectionNewsletters";
import { TopBar } from "@/components/TopBar";


export default function NewsletterPage() {
    return (
        <main className="bg-rede-bg">
            <TopBar />
            <Hero title="Newsletters" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Acesse as edições anteriores da nossa newsletter mensal." />
            <SectionNewsletters/>
            <Footer />
        </main>
    )
}
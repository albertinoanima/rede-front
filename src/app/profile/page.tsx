import { TopBar } from "@/components/TopBar";
import { Bio } from "@/components/profile/Bio";
import { Hero } from "@/components/profile/Hero";
import { Skills } from "@/components/profile/Skills";
import { Achievements } from "@/components/profile/Achievements";
import { Filmography } from "@/components/profile/Filmography";
import { OutsideAgency } from "@/components/profile/OutsideAgency";
import Footer from "@/components/Footer";
import { AssociatedNews } from "@/components/profile/AssociatedNews";


export default function ProfilePage() {
    return (
        <main className="bg-rede-bg">
            <TopBar/>
            <Hero/>
            <Bio/>
            <Skills/>
            <Achievements/>
            <Filmography/>
            <OutsideAgency/>
            <AssociatedNews/>
            <Footer/>
        </main>
    )
}
"use client"

import { TopBar } from "@/components/TopBar";
import { Hero } from "@/components/profile/Hero";
// import { Skills } from "@/components/profile/Skills";
import { Achievements } from "@/components/profile/Achievements";
import { Filmography } from "@/components/profile/Filmography";
import { OutsideAgency } from "@/components/profile/OutsideAgency";
import Footer from "@/components/Footer";
import { AssociatedNews } from "@/components/profile/AssociatedNews";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import { Bio } from "@/components/profile/Bio";


export default function ProfilePage() {
    const { user, isAuthenticated } = useAuth();
    const [updatedProfile, setUpdatedProfile] = useState<any>({});

    return (
        <main className="bg-rede-surface">
            <TopBar />
            <Hero isAuthenticated={true} />
            <Bio isAuthenticated={true}/>
            {/* <Skills /> */}
            <Achievements isAuthenticated={true}/>
            <Filmography isAuthenticated={true} />
            <OutsideAgency isAuthenticated={true} />
            <AssociatedNews />
            <Footer />
        </main>
    )
}
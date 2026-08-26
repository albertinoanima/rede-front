"use client"

import { TopBar } from "@/components/TopBar";
import { Hero } from "@/components/profile/Hero";
import { User } from "@/types/User";

const profile = {
    name: "Ana Vaz",
    email: "ana@exemplo.com",
    loginType: "normal",
    userType: "normal",
    profileData: {
        accountType: "individual",
        country: "Angola",
        city: "Luanda",
        professionalPhone: "+244 923 000 111",
        professionalEmail: "ana@exemplo.com",
        socialLinks: { website: "https://anavaz.com" },
        birthDate: "",
        artisticName: "Ana Vaz",
        commercialName: "",
        creationDate: "",
        isRegistered: false,
        services: [],
        otherService: "",
        username: "anavaz",
        coreSkills: ["Realizadorxs e assistentes", "Produtorxs"],
        skills: [],
    },
} as unknown as User;

export default function PreviewHeroPage() {
    return (
        <main className="bg-rede-surface">
            <TopBar />
            <Hero isAuthenticated profile={profile} profileData={profile.profileData} onSaveProfileData={async () => true} />
        </main>
    );
}

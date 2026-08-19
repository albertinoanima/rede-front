"use client"

import { updateLoggedUser } from "@/actions/users";
import Footer from "@/components/Footer";
import { TopBar } from "@/components/TopBar";
import { Achievements } from "@/components/profile/Achievements";
import { Bio } from "@/components/profile/Bio";
import { Filmography } from "@/components/profile/Filmography";
import { Hero } from "@/components/profile/Hero";
import { OutsideAgency } from "@/components/profile/OutsideAgency";
import { AssociatedNews } from "@/components/profile/AssociatedNews";
import { useAuth } from "@/hooks/useAuth";
import { User } from "@/types/User";
import { useState } from "react";

type ProfileData = User["profileData"];

const defaultProfileData: ProfileData = {
    accountType: "individual",
    country: "",
    city: "",
    professionalPhone: "",
    professionalEmail: "",
    birthDate: "",
    artisticName: "",
    commercialName: "",
    creationDate: "",
    isRegistered: false,
    services: [],
    otherService: "",
    coverImageUrl: "",
    imageUrl: "",
};

export default function ProfilePage() {
    const { user, isAuthenticated, updateLoggedUserData } = useAuth();
    const [message, setMessage] = useState("");
    const [isSaving, setIsSaving] = useState(false);

    const profile = user as User | null;
    const [profileData, setProfileData] = useState<ProfileData>(() => ({
        ...defaultProfileData,
        ...profile?.profileData,
    }));

    const saveProfileData = async (patch: Partial<ProfileData>) => {
        setMessage("");
        setIsSaving(true);

        const nextProfileData = {
            ...profileData,
            ...patch,
        };

        const response = await updateLoggedUser({
            profileData: nextProfileData,
        });

        setIsSaving(false);

        if (response.error) {
            setMessage(response.message || "Nao foi possivel atualizar o perfil.");
            return false;
        }

        const updatedUser = response.data?.user ?? profile;

        setProfileData(nextProfileData);

        if (updatedUser) {
            updateLoggedUserData({
                ...updatedUser,
                profileData: {
                    ...defaultProfileData,
                    ...updatedUser.profileData,
                    ...nextProfileData,
                },
            });
        }

        return true;
    };

    return (
        <main className="bg-rede-surface">
            <TopBar />
            {message && (
                <div className="fixed right-6 top-20 z-20 max-w-sm rounded-lg border border-rede-red bg-rede-surface px-4 py-3 text-sm text-rede-red">
                    {message}
                </div>
            )}
            <Hero
                isAuthenticated={isAuthenticated}
                profile={profile ?? undefined}
                profileData={profileData}
                isSaving={isSaving}
                onSaveProfileData={saveProfileData}
                onImageUploadError={setMessage}
            />
            <Bio
                isAuthenticated={isAuthenticated}
                profile={profile ?? undefined}
                profileData={profileData}
                isSaving={isSaving}
                onSaveProfileData={saveProfileData}
            />
            <Achievements
                isAuthenticated={isAuthenticated}
                achievements={profileData.achievements}
                isSaving={isSaving}
                onSaveAchievements={(achievements) => saveProfileData({ achievements })}
            />
            <Filmography
                isAuthenticated={isAuthenticated}
                films={profileData.filmography}
                isSaving={isSaving}
                onSaveFilms={(filmography) => saveProfileData({ filmography })}
            />
            <OutsideAgency
                isAuthenticated={isAuthenticated}
                films={profileData.outsideAgency}
                isSaving={isSaving}
                onSaveFilms={(outsideAgency) => saveProfileData({ outsideAgency })}
            />
            <AssociatedNews />
            <Footer />
        </main>
    )
}
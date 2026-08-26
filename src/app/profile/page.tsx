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

const isBrowserBlobUrl = (value?: string | null) => Boolean(value?.startsWith("blob:"));

const hydrateProfileData = (profile?: User | null): ProfileData => ({
    ...defaultProfileData,
    ...profile?.profileData,
});

const sanitizeProfileDataForSave = (profileData: ProfileData): ProfileData => ({
    ...profileData,
    coverImageUrl: isBrowserBlobUrl(profileData.coverImageUrl) ? "" : profileData.coverImageUrl,
    imageUrl: isBrowserBlobUrl(profileData.imageUrl) ? "" : profileData.imageUrl,
    filmography: profileData.filmography?.filter((film) => !isBrowserBlobUrl(film.cover)),
    outsideAgency: profileData.outsideAgency?.filter((film) => !isBrowserBlobUrl(film.cover)),
});

type ProfileContentProps = {
    isAuthenticated: boolean;
    profile: User | null;
    updateLoggedUserData: (data: User) => void;
};

const ProfileContent: React.FC<ProfileContentProps> = ({
    isAuthenticated,
    profile,
    updateLoggedUserData,
}) => {
    const [message, setMessage] = useState("");
    const [isSaving, setIsSaving] = useState(false);
    const [profileData, setProfileData] = useState<ProfileData>(() => hydrateProfileData(profile));

    const saveProfileData = async (patch: Partial<ProfileData>, userPatch: Partial<Pick<User, "name">> = {}) => {
        setMessage("");
        setIsSaving(true);

        const nextProfileData = sanitizeProfileDataForSave({
            ...profileData,
            ...patch,
        });

        const response = await updateLoggedUser({
            ...userPatch,
            profileData: nextProfileData,
        });

        setIsSaving(false);

        if (response.error) {
            setMessage(response.message || "Não foi possível atualizar o perfil.");
            return false;
        }

        const updatedUser = response.data?.user ?? profile;

        setProfileData(nextProfileData);

        if (updatedUser) {
            updateLoggedUserData({
                ...updatedUser,
                ...userPatch,
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
        <>
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
            {/* <OutsideAgency
                isAuthenticated={isAuthenticated}
                films={profileData.outsideAgency}
                isSaving={isSaving}
                onSaveFilms={(outsideAgency) => saveProfileData({ outsideAgency })}
            /> */}
        </>
    );
};

export default function ProfilePage() {
    const { user, isAuthenticated, updateLoggedUserData } = useAuth();
    const profile = user as User | null;
    const profileKey = profile?.email ?? "guest";

    return (
        <main className="bg-rede-surface">
            <TopBar />
            <ProfileContent
                key={profileKey}
                isAuthenticated={isAuthenticated}
                profile={profile}
                updateLoggedUserData={updateLoggedUserData}
            />
            <AssociatedNews />
            <Footer />
        </main>
    )
}
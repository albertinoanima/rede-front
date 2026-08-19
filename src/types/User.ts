import { SocialLinks } from "./Profile";

export type LoginType = 'normal' | 'google';
export type AccountType = 'individual' | 'company';

export type ProfileAchievement = {
    id: string;
    type: string;
    title: string;
    link?: string;
};

export type ProfileFilm = {
    id: string;
    title: string;
    director: string;
    type: string[];
    year: number;
    countries: string[];
    cover: string;
};

export interface User {
    name: string;
    email: string;

    loginType: LoginType; //"normal" | "google"
    userType: "normal";

    imageUrl?: string;
    password?: string; // Opcional, pois login via Google nao tem senha local

    profileData: {
        accountType: AccountType; //"individual" | "company"

        country: string;
        city: string;
        professionalPhone: string;
        professionalEmail: string;
        socialLinks?: SocialLinks; //{ facebook?: string | undefined }
        imageUrl?: string;
        coverImageUrl?: string;

        // Individual
        birthDate: string;
        artisticName: string;
        associatedWithCompany?: { status: boolean, companyName: string };

        // Collective
        commercialName: string;
        creationDate: string;
        isRegistered: boolean;
        services: string[];
        otherService: string;
        rentsEquipment?: { status: boolean, equipmentName: string }

        profession?: string;
        bio?: string;
        skills?: string[];
        achievements?: ProfileAchievement[];
        filmography?: ProfileFilm[];
        outsideAgency?: ProfileFilm[];
        username?: string;
    }

    createdAt?: Date;
    updatedAt?: Date;
}


export interface LoggedUser {
    id: string;

    name: string;
    email: string;

    loginType: LoginType; //"normal" | "google"
    userType: "normal";

    imageUrl?: string;
    isActive?: string; // Opcional, pois login via Google nao tem senha local
    isEmailConfirmed: boolean;

    profileData: User["profileData"];

    createdAt?: Date;
    updatedAt?: Date;
}
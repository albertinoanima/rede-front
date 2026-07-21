import { SocialLinks } from "./Profile";

export type LoginType = 'normal' | 'google';
export type AccountType = 'individual' | 'company';

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
    }

    createdAt?: Date;
    updatedAt?: Date;
}

import { AccountType, User } from "./User";

export type SocialNetwork =
    | 'facebook'
    | 'instagram'
    | 'youtube'
    | 'linkedin'
    | 'tiktok'
    | 'website';

export type SocialLinks = Partial<Record<SocialNetwork, string>>;

export interface BaseProfile extends Pick<User, 'name' | 'email' | 'profileImageUrl'> {
    accountType: AccountType;
    country: string;
    city: string;
    professionalEmail: string;
    professionalPhone: string;
    socialLinks: SocialLinks;
}

export interface IndividualProfile extends BaseProfile {
    accountType: 'individual';
    artisticName: string;
    birthDate: string;
    associatedWithCompany: boolean;
    associatedCompanyName?: string;
}

export interface CompanyProfile extends BaseProfile {
    accountType: 'company';
    creationDate: string;
    isRegistered: boolean;
    services: string[];
    otherService?: string;
    rentsEquipment: boolean;
    equipmentRentalDetails?: string;
}

export type Profile = IndividualProfile | CompanyProfile;

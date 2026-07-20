export type LoginType = 'normal' | 'google';
export type UserType = 'normal' | 'admin';
export type AccountType = 'individual' | 'company';

export interface User {
    id: string; // Sempre inclua um identificador unico
    name: string;
    email: string;
    loginType: LoginType;
    userType: UserType;
    accountType?: AccountType;
    profileImageUrl?: string;
    password?: string; // Opcional, pois login via Google nao tem senha local
    createdAt: Date;
    updatedAt: Date;
}

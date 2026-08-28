import { AccountType, User } from "./User";

export type SocialNetwork =
    | 'facebook'
    | 'instagram'
    | 'youtube'
    | 'linkedin'
    | 'tiktok'
    | 'imdb'
    | 'website';

export type SocialLinks = Partial<Record<SocialNetwork, string>>;
"use client"

import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { getUsers, NetworkUser } from '@/actions/users';
import { customBlur } from '@/app/fonts';
import { ProfileCard, ProfileType } from '../ProfileCard';
import { Heading } from '../ui/heading';
import { defaultNetworkFilters, FilterSidebar, getNetworkFiltersFromParams } from './FilterSidebar';
import { filterProfiles } from './actions';
import { Text } from '../ui/text';
import {
    angolaCitiesByProvince,
    caboVerdeMunicipalitiesByIsland,
    guineaBissauSectorsByRegion,
    mozambiqueDistrictsByProvince,
    saoTomePrincipeCitiesByRegion,
    timorLesteAdministrativePostsByMunicipality,
} from './filters';


const fallbackProfileImage = '/assets/profile/profile.png';

const countryValuesByApiName: Record<string, string> = {
    angola: 'angola',
    'cabo-verde': 'cabo-verde',
    'cabo verde': 'cabo-verde',
    'guine-bissau': 'guine-bissau',
    'guine bissau': 'guine-bissau',
    mocambique: 'mocambique',
    mozambique: 'mocambique',
    'sao-tome-e-principe': 'sao-tome-e-principe',
    'sao-tome-principe': 'sao-tome-e-principe',
    'sao tome e principe': 'sao-tome-e-principe',
    'sao tome principe': 'sao-tome-e-principe',
    'timor-leste': 'timor-leste',
    'timor leste': 'timor-leste',
};

const citiesByCountry = {
    angola: angolaCitiesByProvince,
    'cabo-verde': caboVerdeMunicipalitiesByIsland,
    'guine-bissau': guineaBissauSectorsByRegion,
    mocambique: mozambiqueDistrictsByProvince,
    'sao-tome-e-principe': saoTomePrincipeCitiesByRegion,
    'timor-leste': timorLesteAdministrativePostsByMunicipality,
};

const slugify = (value?: string) =>
    value
        ?.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '') || '';

const normalizeCountry = (country?: string) => {
    const slug = slugify(country);

    return countryValuesByApiName[slug] ?? countryValuesByApiName[country?.toLowerCase().trim() ?? ''] ?? slug;
};

const findProvinceByCity = (country: string, city: string) => {
    const countryCities = citiesByCountry[country as keyof typeof citiesByCountry];

    if (!countryCities || !city) return '';

    return Object.entries(countryCities).find(([, cities]) =>
        cities.some((item) => item.value === city || slugify(item.label) === city)
    )?.[0] ?? '';
};

const buildTags = (user: NetworkUser) => {
    const profileData = user.profileData;
    const tags = [
        profileData?.country,
        profileData?.city,
        profileData?.profession,
        ...(profileData?.services ?? []),
        ...(profileData?.skills ?? []),
    ].filter(Boolean) as string[];

    return Array.from(new Set(tags));
};

const getProfileTitle = (user: NetworkUser) => {
    const profileData = user.profileData;

    return profileData?.commercialName || profileData?.artisticName || user.name || profileData?.username || 'Perfil';
};

const toProfileCardData = (user: NetworkUser, index: number): ProfileType => {
    const profileData = user.profileData;
    const country = normalizeCountry(profileData?.country);
    const city = slugify(profileData?.city);
    const isCompany = profileData?.accountType === 'company';
    const category = slugify(isCompany ? profileData?.services?.[0] : profileData?.profession);

    return {
        id: user.id ?? user._id ?? user.email ?? `user-${index}`,
        title: getProfileTitle(user),
        tags: buildTags(user),
        cover: profileData?.imageUrl || user.imageUrl || fallbackProfileImage,
        country,
        province: findProvinceByCity(country, city),
        city,
        type: isCompany ? 'empresa' : 'profissionais',
        category,
    };
};

const AdvancedSearchContent: React.FC<{ initialFilters: ReturnType<typeof getNetworkFiltersFromParams> }> = ({ initialFilters }) => {
    const [filters, setFilters] = useState(() => initialFilters);
    const [profiles, setProfiles] = useState<ProfileType[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        let isActive = true;

        const loadUsers = async () => {
            setIsLoading(true);
            setErrorMessage('');

            const response = await getUsers();

            if (!isActive) return;

            if (response.error) {
                setProfiles([]);
                setErrorMessage(response.message || 'N\u00e3o foi poss\u00edvel carregar os perfis.');
                setIsLoading(false);
                return;
            }

            setProfiles((response.data?.users ?? []).map(toProfileCardData));
            setIsLoading(false);
        };

        loadUsers();

        return () => {
            isActive = false;
        };
    }, []);

    const results = useMemo(
        () => filterProfiles(profiles, filters),
        [filters, profiles],
    );

    const handleClear = () => setFilters({ ...defaultNetworkFilters });

    return (
        <section className="w-full h-auto">

            <div className="w-full max-w-360 h-auto ml-auto mr-auto">
                <div className='flex items-center justify-between mt-5'>
                    <Heading level={"h2"} className={`${customBlur.className} ml-3 text-[48px] leading-11.5 font-medium mb-5 text-rede-yellow`}>
                        Pesquisa <br /> Avan&ccedil;ada
                    </Heading>

                    <div className="flex justify-end gap-3 px-6 py-4">
                        <Text className="text-[14px] leading-4" >
                            {results.length} {results.length === 1 ? 'resultado' : 'resultados'}
                        </Text>
                    </div>
                </div>

                <div className="flex mt-10">
                    <FilterSidebar
                        filters={filters}
                        onFiltersChange={setFilters}
                        onClear={handleClear}
                    />
                    <div className="flex-1 flex flex-col">
                        {isLoading && (
                            <Text className="px-6 pb-6 text-[14px] leading-5">A carregar perfis...</Text>
                        )}

                        {!isLoading && errorMessage && (
                            <Text className="px-6 pb-6 text-[14px] leading-5">{errorMessage}</Text>
                        )}

                        {!isLoading && !errorMessage && results.length === 0 && (
                            <Text className="px-6 pb-6 text-[14px] leading-5">Nenhum resultado encontrado.</Text>
                        )}

                        {!isLoading && !errorMessage && results.length > 0 && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-6 pb-6">
                                {results.map((profile) => (
                                    <ProfileCard profileData={profile} key={profile.id} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </section>
    )
}

export const AdvancedSearch: React.FC = () => {
    const searchParams = useSearchParams();
    const tag = searchParams.get('tag') ?? '';
    const country = searchParams.get('country') ?? '';
    const province = searchParams.get('province') ?? '';
    const city = searchParams.get('city') ?? '';
    const type = searchParams.get('type') ?? '';
    const category = searchParams.get('category') ?? '';
    const subCategory = searchParams.get('subCategory') ?? '';
    const initialFilters = getNetworkFiltersFromParams({ tag, country, province, city, type, category, subCategory });
    const paramsKey = [tag, country, province, city, type, category, subCategory].join(':');

    return <AdvancedSearchContent key={paramsKey} initialFilters={initialFilters} />;
}
